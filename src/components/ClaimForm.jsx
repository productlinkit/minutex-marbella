import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2, Lock } from 'lucide-react'
import { VOUCHER_CODE, offer } from '../config/offer'
import { redeemInvite } from '../lib/invite'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid work email.'
  if (!values.company.trim()) errors.company = 'Please enter your company name.'
  if (!values.agree) errors.agree = 'Please accept the terms to continue.'
  return errors
}

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] font-semibold text-ink">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-[12px] font-medium text-rose-600">{error}</span>}
    </label>
  )
}

export default function ClaimForm() {
  const [values, setValues] = useState({ name: '', email: '', company: '', agree: false })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success
  const [serverError, setServerError] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')

  const set = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setValues((v) => ({ ...v, [key]: value }))
    if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    setStatus('loading')
    setServerError('')
    try {
      const { redirectUrl } = await redeemInvite({
        name: values.name.trim(),
        email: values.email.trim(),
        company: values.company.trim(),
      })
      setRedirectUrl(redirectUrl)
      setStatus('success')
    } catch (err) {
      setServerError(err.message)
      setStatus('idle')
    }
  }

  return (
    <div id="claim" className="w-full max-w-md rounded-3xl border border-white/70 bg-white/90 p-7 shadow-card backdrop-blur-md sm:p-8">
      {status === 'success' ? (
        <div className="flex flex-col items-center py-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </span>
          <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-ink">You&apos;re in!</h2>
          <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-ink-muted">
            MinuteX {offer.plan} is reserved for <span className="font-semibold text-ink">{values.email}</span>. Finish creating your account to
            activate it.
          </p>
          <a href={redirectUrl} className="btn btn-primary mt-7">
            Continue to MinuteX <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink">Claim your membership</h2>
          <p className="mt-1.5 text-[13px] text-ink-muted">Create your account to unlock MinuteX {offer.plan}.</p>

          <div className="mt-6 space-y-4">
            <Field label="Full name" error={errors.name}>
              <input className="field" value={values.name} onChange={set('name')} placeholder="Jane Cooper" autoComplete="name" />
            </Field>
            <Field label="Work email" error={errors.email}>
              <input className="field" type="email" value={values.email} onChange={set('email')} placeholder="jane@company.com" autoComplete="email" />
            </Field>
            <Field label="Company name" error={errors.company}>
              <input className="field" value={values.company} onChange={set('company')} placeholder="Acme Inc." autoComplete="organization" />
            </Field>
            <div>
              <span className="mb-1.5 block text-[13px] font-semibold text-ink">Voucher code</span>
              <div className="flex h-12 items-center justify-between rounded-xl border border-dashed border-brand/40 bg-brand-50/60 px-4">
                <span className="font-mono text-sm font-bold tracking-wider text-brand">{VOUCHER_CODE}</span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-ink-soft">
                  <Lock className="h-3.5 w-3.5" /> Applied
                </span>
              </div>
            </div>

            <label className="flex items-start gap-3 pt-1">
              <input type="checkbox" checked={values.agree} onChange={set('agree')} className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-brand" />
              <span className="text-[13px] leading-relaxed text-ink-muted">I agree to the MinuteX Terms of Service and Privacy Policy.</span>
            </label>
            {errors.agree && <p className="-mt-2 text-[12px] font-medium text-rose-600">{errors.agree}</p>}
          </div>

          {serverError && <p className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-[13px] font-medium text-rose-600">{serverError}</p>}

          <button type="submit" disabled={status === 'loading'} className="btn btn-primary mt-6 w-full">
            {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
            {status === 'loading' ? 'Claiming…' : 'Claim membership'}
          </button>
        </form>
      )}
    </div>
  )
}
