// Single source of truth for the exclusive-member offer.
// Benefits mirror the Business plan on minutex.linkit360.ai/pricing.

export const APP_URL = import.meta.env.VITE_APP_URL || 'https://apps.minutex.linkit360.ai'
export const MARKETING_URL = 'https://minutex.linkit360.ai'

export const VOUCHER_CODE = 'WTMARBELLA'

export const offer = {
  plan: 'Business',
  planType: 'company',
}

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
