export type PaymentPayload = {
  name: string
  contact: string
  tariffId?: string
}

export async function startPayment(payload: PaymentPayload): Promise<void> {
  const res = await fetch('/api/payment/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json()

  if (!res.ok || !data.invoiceUrl) {
    throw new Error(data.error || 'Не вдалося створити оплату')
  }

  window.location.href = data.invoiceUrl
}
