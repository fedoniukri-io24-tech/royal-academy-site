const EDIO_INVITE_URL =
  process.env.EDIO_INVITE_URL ?? 'https://invitestudenttocourse-s4mogebb3q-lm.a.run.app'

export type EdioInviteResult =
  | { ok: true }
  | { ok: false; error: string; status?: number }

function normalizeSchoolId(value: string): string {
  return value.startsWith('schoolId-') ? value : `schoolId-${value}`
}

function normalizeProductId(value: string): string {
  return value.startsWith('prodId-') ? value : `prodId-${value}`
}

function getEdioConfig() {
  const token = process.env.EDIO_API_TOKEN
  const schoolIdRaw = process.env.EDIO_SCHOOL_ID
  const productIdRaw = process.env.EDIO_PRODUCT_ID

  if (!token || !schoolIdRaw || !productIdRaw) {
    throw new Error('Edio is not configured')
  }

  return {
    token,
    schoolId: normalizeSchoolId(schoolIdRaw),
    productId: normalizeProductId(productIdRaw),
  }
}

export async function inviteStudentToCourse(email: string): Promise<EdioInviteResult> {
  const { token, schoolId, productId } = getEdioConfig()

  const res = await fetch(EDIO_INVITE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      schoolId,
      productId,
      email,
    }),
  })

  const data = (await res.json().catch(() => ({}))) as {
    success?: boolean
    error?: string
    brokenEmails?: string[]
    required?: number
    available?: number
  }

  if (res.ok && data.success) {
    return { ok: true }
  }

  const balanceHint =
    typeof data.required === 'number' && typeof data.available === 'number'
      ? ` (потрібно ${data.required}, доступно ${data.available})`
      : ''

  return {
    ok: false,
    status: res.status,
    error: `${data.error || `Edio API error (${res.status})`}${balanceHint}`,
  }
}
