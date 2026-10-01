// Single source of truth for the exclusive-member offer.
// Benefits mirror the Business plan on minutex.linkit360.ai/pricing.

export const APP_URL = import.meta.env.VITE_APP_URL || 'https://apps.minutex.linkit360.ai'
export const MARKETING_URL = 'https://minutex.linkit360.ai'
export const WEBSITE_URL = 'https://minutex.ai'

// Early-access app downloads shown after a successful redeem
export const DOWNLOADS = {
  ios: import.meta.env.VITE_IOS_TESTFLIGHT_URL || 'https://testflight.apple.com/join/v5wVDW82',
  android:
    import.meta.env.VITE_ANDROID_APK_URL ||
    'https://drive.google.com/drive/folders/1T_Wkh5r8dA25eENQTPpnEa_A1RxYHOQv?usp=sharing',
}
export const SUPPORT_URL = import.meta.env.VITE_SUPPORT_URL || 'mailto:support@linkit360.ai'

// Activation codes users can type in to claim the offer.
export const ACTIVATION_CODES = [
  'WTMARBELLA',
  'WTM8PJW',
  'WTMV62V',
  'WTMWBFY',
  'WTM68BN',
  'WTMBVDQ',
  'WTMMVWE',
  'WTM6TDZ',
  'WTMHKDT',
  'WTM34HX',
  'WTMZWWE',
]

export const offer = {
  plan: 'Business',
  planType: 'company',
  duration: '1 year',
  // Last day the activation code can be redeemed
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
  'First access before public launch',
]
