import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CalendarClock, Loader2 } from 'lucide-react'
import { formatDate, offer } from '../config/offer'
import { isValidActivationCode, isActivationCodeExpired, redeemInvite } from '../lib/invite'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid work email.'
  if (!values.company.trim()) errors.company = 'Please enter your company name.'
  if (!values.code.trim()) errors.code = 'Please enter your activation code.'
  else if (!isValidActivationCode(values.code)) errors.code = 'This activation code is not valid.'
  else if (isActivationCodeExpired()) errors.code = `This activation code expired on ${formatDate(offer.codeExpiresAt)}.`
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
  const [values, setValues] = useState({ name: '', email: '', company: '', code: '', agree: false })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading
  const [serverError, setServerError] = useState('')
  const navigate = useNavigate()

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
      const email = values.email.trim()
      await redeemInvite({
        name: values.name.trim(),
        email,
        company: values.company.trim(),
        code: values.code,
      })
      navigate('/welcome', { state: { email } })
    } catch (err) {
      setServerError(err.message)
      setStatus('idle')
    }
  }

  return (
    <div id="claim" className="w-full max-w-md rounded-3xl border border-white/70 bg-white/90 p-7 shadow-card backdrop-blur-md sm:p-8">
      <form onSubmit={onSubmit} noValidate>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink">Claim your membership</h2>
        <p className="mt-1.5 text-[13px] text-ink-muted">
          Create your account to unlock MinuteX {offer.plan}, then install the early-access app.
        </p>

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
          <Field label="Activation code" error={errors.code}>
            <input
              className="field font-mono uppercase tracking-wider placeholder:font-sans placeholder:normal-case placeholder:tracking-normal"
              value={values.code}
              onChange={set('code')}
              placeholder="Enter your activation code"
              autoComplete="off"
              spellCheck={false}
            />
          </Field>

          <label className="flex items-start gap-3 pt-1">
            <input type="checkbox" checked={values.agree} onChange={set('agree')} className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-brand" />
            <span className="text-[13px] leading-relaxed text-ink-muted">
              I agree to the{' '}
              <Link to="/terms" target="_blank" className="font-semibold text-brand hover:underline">
                offer Terms &amp; Conditions
              </Link>{' '}
              and the MinuteX Privacy Policy.
            </span>
          </label>
          {errors.agree && <p className="-mt-2 text-[12px] font-medium text-rose-600">{errors.agree}</p>}
        </div>

        {serverError && <p className="mt-5 rounded-xl bg-rose-50 px-4 py-3 text-[13px] font-medium text-rose-600">{serverError}</p>}

        <button type="submit" disabled={status === 'loading'} className="btn btn-primary mt-6 w-full">
          {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
          {status === 'loading' ? 'Claiming…' : 'Claim & get access'}
        </button>
        <p className="mt-4 flex items-start justify-center gap-1.5 text-[12px] leading-relaxed text-ink-soft">
          <CalendarClock className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          Free for {offer.duration} from activation · Redeem by {formatDate(offer.codeExpiresAt)} · Priority iOS &amp; Android access
        </p>
      </form>
    </div>
  )
}
