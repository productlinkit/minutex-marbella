// Single source of truth for the exclusive-member offer.
// Benefits mirror the Business plan on minutex.linkit360.ai/pricing.

export const APP_URL = import.meta.env.VITE_APP_URL || 'https://apps.minutex.linkit360.ai'
export const MARKETING_URL = 'https://minutex.linkit360.ai'

// The voucher users must type in to claim the offer.
export const VOUCHER_CODE = 'WTMARBELLA'

export const offer = {
  plan: 'Business',
  planType: 'company',
  duration: '1 year',
  // Last day the voucher code can be redeemed
  codeExpiresAt: '2026-12-31',
}

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

export const planLimits = [
  { label: 'Recording', value: 'Unlimited' },
  { label: 'AI summaries', value: 'Unlimited' },
  { label: 'Storage', value: '1,000 GB' },
]

export const benefits = [
  'Unlimited recording hours',
  'Unlimited AI summaries',
  '1TB cloud storage',
  '24/7 dedicated support',
  'Custom integrations',
  'Advanced analytics',
]
