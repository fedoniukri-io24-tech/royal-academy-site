export type PaymentCustomerData = {
  name: string
  email: string
  phone: string
  telegram: string
}

const META_PREFIX = '__RA__'

type CompactMeta = {
  n: string
  e: string
  p: string
  t: string
}

export function encodePaymentMeta(data: PaymentCustomerData): string {
  const compact: CompactMeta = {
    n: data.name,
    e: data.email,
    p: data.phone,
    t: data.telegram,
  }
  const encoded = Buffer.from(JSON.stringify(compact), 'utf8').toString('base64url')
  return `${META_PREFIX}${encoded}`
}

export function decodePaymentMeta(source?: string | null): PaymentCustomerData | null {
  if (!source) return null

  const index = source.indexOf(META_PREFIX)
  if (index === -1) return null

  const payload = source.slice(index + META_PREFIX.length)

  try {
    if (payload.startsWith('{')) {
      const parsed = JSON.parse(payload) as Partial<PaymentCustomerData>
      if (!parsed.name || typeof parsed.name !== 'string') return null
      return {
        name: parsed.name,
        email: typeof parsed.email === 'string' ? parsed.email : '',
        phone: typeof parsed.phone === 'string' ? parsed.phone : '',
        telegram: typeof parsed.telegram === 'string' ? parsed.telegram : '',
      }
    }

    const json = Buffer.from(payload, 'base64url').toString('utf8')
    const parsed = JSON.parse(json) as Partial<CompactMeta>
    if (!parsed.n || typeof parsed.n !== 'string') return null

    return {
      name: parsed.n,
      email: typeof parsed.e === 'string' ? parsed.e : '',
      phone: typeof parsed.p === 'string' ? parsed.p : '',
      telegram: typeof parsed.t === 'string' ? parsed.t : '',
    }
  } catch {
    return null
  }
}

export function buildPaymentDestination(siteLabel: string, data: PaymentCustomerData): string {
  return `${siteLabel} | ${encodePaymentMeta(data)}`
}
