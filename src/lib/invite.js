import { APP_URL, VOUCHER_CODE, offer } from '../config/offer'

export function normalizeCode(code = '') {
  return code.trim().toUpperCase()
}

export function isValidVoucher(code) {
  return normalizeCode(code) === VOUCHER_CODE
}

// The code stays redeemable through the end of codeExpiresAt, Jakarta time (GMT+7).
export function isVoucherExpired(now = new Date()) {
  return now > new Date(`${offer.codeExpiresAt}T23:59:59+07:00`)
}

export function buildRegisterUrl({ code, email, name, company }) {
  const params = new URLSearchParams({
    type: offer.planType,
    plan: offer.plan,
    promo: normalizeCode(code),
    email,
    name,
    company,
  })
  return `${APP_URL}/register?${params.toString()}`
}

// Reserves the voucher on the backend when VITE_REDEEM_API_URL is set;
// otherwise the offer is applied by the app from the register URL params.
export async function redeemInvite(payload) {
  const endpoint = import.meta.env.VITE_REDEEM_API_URL
  if (!endpoint) {
    return { redirectUrl: buildRegisterUrl(payload) }
  }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, code: normalizeCode(payload.code), plan: offer.plan }),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data.message || 'We could not redeem this voucher. Please try again.')
  }
  return { redirectUrl: data.redirectUrl || buildRegisterUrl(payload) }
}
