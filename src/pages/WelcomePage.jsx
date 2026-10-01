import { Navigate, useLocation } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Check, Mail } from 'lucide-react'
import { siAndroid, siApple } from 'simple-icons'
import BrandIcon from '../components/BrandIcon'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { DOWNLOADS, SUPPORT_URL, offer } from '../config/offer'

export default function WelcomePage() {
  const { state } = useLocation()
  const email = state?.email

  // Only reachable right after a successful redeem
  if (!email) return <Navigate to="/" replace />

  const steps = [
    'Install the app above, then sign in with your email and the password from that email.',
    'Start recording meetings right away with unlimited hours, AI summaries and 1TB storage.',
    `When the App Store & Google Play versions go live, switch over anytime — same account, same remaining free period.`,
  ]

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-sky-hero">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-footer.webp')" }} />
      <div className="absolute inset-0 bg-white/30" />

      <Header />

      <section className="container relative z-10 flex flex-1 flex-col items-center pb-16 pt-28 text-center">
        <span className="flex h-20 w-20 animate-fade-up items-center justify-center rounded-full bg-brand text-white shadow-brand">
          <Check className="h-10 w-10" strokeWidth={3} />
        </span>

        <span className="mt-7 inline-flex animate-fade-up items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-bold text-brand-700 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-brand" />
          {offer.plan} membership active
        </span>

        <h1 className="mt-5 max-w-3xl animate-fade-up text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          You&apos;re in. Welcome to
          <br />
          <span className="text-brand">MinuteX {offer.plan}</span> 🎉
        </h1>

        <p className="mt-5 max-w-lg animate-fade-up text-[16px] font-medium leading-relaxed text-ink/75">
          Your code is redeemed and every {offer.plan} feature is unlocked <strong className="text-ink">free for {offer.duration}</strong>.
          Install the early-access app to start recording.
        </p>

        <div className="mt-8 grid w-full max-w-xl animate-fade-up gap-4 sm:grid-cols-2">
          <a
            href={DOWNLOADS.ios}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3.5 rounded-2xl bg-ink px-5 py-4 text-left text-white transition-transform hover:-translate-y-0.5"
          >
            <BrandIcon icon={siApple} className="h-7 w-7 shrink-0" />
            <span className="flex-1 leading-tight">
              <span className="block text-[16px] font-bold">Download for iOS</span>
              <span className="mt-0.5 block text-[12px] text-white/70">via TestFlight</span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-white/80" />
          </a>
          <a
            href={DOWNLOADS.android}
            className="flex items-center gap-3.5 rounded-2xl bg-brand px-5 py-4 text-left text-white shadow-brand transition-all hover:-translate-y-0.5 hover:bg-brand-600"
          >
            <BrandIcon icon={siAndroid} className="h-7 w-7 shrink-0" />
            <span className="flex-1 leading-tight">
              <span className="block text-[16px] font-bold">Download for Android</span>
              <span className="mt-0.5 block text-[12px] text-white/80">APK · direct download</span>
            </span>
            <ArrowDown className="h-4 w-4 shrink-0 text-white/80" />
          </a>
        </div>
        <p className="mt-3 text-[12px] text-ink-soft">Android: you may need to allow installs from unknown sources to open the APK.</p>

        <div className="mt-8 w-full max-w-xl animate-fade-up rounded-3xl border border-white/70 bg-white/85 p-6 text-left shadow-soft backdrop-blur-md sm:p-7">
          <div className="flex items-start gap-3 rounded-2xl border border-brand/20 bg-brand-50/70 p-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
              <Mail className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[14px] font-bold text-ink">Your password is in your email</p>
              <p className="mt-0.5 text-[13px] leading-relaxed text-ink-muted">
                Sent to <span className="font-semibold text-ink">{email}</span>. Can&apos;t find it? Check your spam or promotions folder.
              </p>
            </div>
          </div>

          <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.08em] text-ink">What happens next</p>
          <ol className="mt-4 space-y-3.5">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-[14px] leading-relaxed text-ink-muted">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[12px] font-bold text-brand">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <p className="mt-7 max-w-md text-[13px] leading-relaxed text-ink-muted">
          A confirmation email with your password and install links is on its way to{' '}
          <span className="font-semibold text-ink">{email}</span>.
          <br />
          Need help?{' '}
          <a href={SUPPORT_URL} className="font-semibold text-brand hover:underline">
            Contact support
          </a>
        </p>
      </section>

      <Footer />
    </main>
  )
}
