import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { createMonoInvoice } from '@/lib/mono'
import { buildPaymentDestination, encodePaymentMeta } from '@/lib/paymentMeta'
import { splitContact } from '@/lib/parseContact'
import { isValidEmail } from '@/lib/validateEmail'
import {
  getMarathonTariff,
  MARATHON_DEFAULT_TARIFF_ID,
  SITE_NAME,
  SITE_URL,
} from '@/app/site'

export async function POST(req: NextRequest) {
  try {
    const monoToken = process.env.MONO_TOKEN
    if (!monoToken) {
      return NextResponse.json(
        { error: 'Оплата тимчасово недоступна. Зв\'яжіться з нами.' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const contact = typeof body.contact === 'string' ? body.contact.trim() : ''
    const tariffId =
      typeof body.tariffId === 'string' ? body.tariffId.trim() : MARATHON_DEFAULT_TARIFF_ID
    const tariff = getMarathonTariff(tariffId) ?? getMarathonTariff(MARATHON_DEFAULT_TARIFF_ID)
    const { phone, telegram } = splitContact(contact)

    if (!name) {
      return NextResponse.json({ error: 'Вкажіть ім\'я' }, { status: 400 })
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Вкажіть коректний email' }, { status: 400 })
    }

    if (!contact) {
      return NextResponse.json({ error: 'Вкажіть телефон або Telegram' }, { status: 400 })
    }

    if (!tariff) {
      return NextResponse.json({ error: 'Невірний тариф' }, { status: 400 })
    }

    const reference = crypto.randomUUID()
    const amountMinor = tariff.price * 100
    const siteUrl = SITE_URL
    const customer = { name, email, phone, telegram }
    const meta = encodePaymentMeta(customer)
    const destination = buildPaymentDestination(`Марафон англійської | ${SITE_NAME}`, customer)

    const invoice = await createMonoInvoice(monoToken, {
      amount: amountMinor,
      ccy: 980,
      merchantPaymInfo: {
        reference,
        destination,
        comment: meta,
        basketOrder: [
          {
            name: `Тариф «${tariff.name}» | 10-тижневий марафон англійської`,
            qty: 1,
            sum: amountMinor,
            total: amountMinor,
            unit: 'доступ',
            code: meta,
          },
        ],
      },
      redirectUrl: `${siteUrl}/success?ref=${reference}`,
      webHookUrl: `${siteUrl}/api/mono-webhook`,
      validity: 3600,
      paymentType: 'debit',
    })

    return NextResponse.json({
      success: true,
      reference,
      invoiceUrl: invoice.pageUrl,
    })
  } catch (error) {
    console.error('[payment/create]', error)
    const message = error instanceof Error ? error.message : 'Помилка створення оплати'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
