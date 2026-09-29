import { Link } from 'react-router-dom'
import { ArrowLeft, CalendarCheck, Hourglass } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { APP_URL, benefits, formatDate, offer } from '../config/offer'

const expiry = formatDate(offer.codeExpiresAt)

const sections = [
  {
    title: 'The offer',
    items: [
      `This exclusive member offer (the "Offer") gives eligible users access to MinuteX ${offer.plan} benefits for ${offer.duration} when they sign up with a valid activation code on this page.`,
      'The Offer is provided by MinuteX and is subject to these Terms & Conditions as well as the MinuteX Terms of Service and Privacy Policy.',
    ],
  },
  {
    title: 'Eligibility',
    items: [
      'The Offer is available to new MinuteX accounts only. Existing accounts with an active paid subscription are not eligible.',
      'Each person or company may redeem the Offer once. MinuteX may decline or revoke a redemption that appears to be duplicate, fraudulent or in breach of these terms.',
    ],
  },
  {
    title: 'Activation code',
    items: [
      `The activation code can be redeemed until ${expiry}, 23:59 (GMT+7). Codes entered after this date will no longer be accepted.`,
      'The activation code must be entered manually in the sign-up form. It is non-transferable, cannot be exchanged for cash and cannot be combined with other promotions.',
    ],
  },
  {
    title: 'Benefit period',
    items: [
      `Your ${offer.plan} benefits last for ${offer.duration} starting from the date your account is activated — not from the date you submit the form.`,
      `Activation happens when you finish creating your account and verify your email in the MinuteX app. Redeeming before ${expiry} still gives you the full ${offer.duration} from activation.`,
      'The benefit period cannot be paused, extended or transferred to another account.',
    ],
  },
  {
    title: 'Included benefits',
    items: [`During the benefit period your account includes: ${benefits.join(', ')}.`],
  },
  {
    title: 'When the benefit period ends',
    items: [
      `At the end of the ${offer.duration} period your account automatically moves to the MinuteX Free plan unless you choose to subscribe to a paid plan.`,
      'Your recordings, transcripts and minutes stay in your account. Features and limits will follow the plan you are on after the period ends.',
      'MinuteX will notify you by email before your benefit period ends.',
    ],
  },
  {
    title: 'Changes and termination',
    items: [
      'MinuteX may modify, suspend or end the Offer at any time. Changes will not reduce the benefit period of accounts that are already activated, except in cases of misuse.',
      'MinuteX may end the benefits early if the account violates the MinuteX Terms of Service.',
    ],
  },
]

export default function TermsPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-sky-hero">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-footer.webp')" }} />
      <div className="absolute inset-0 bg-white/35" />

      <Header />

      <section className="container relative z-10 flex-1 pb-16 pt-28">
        <div className="mx-auto max-w-3xl animate-fade-up">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors hover:text-brand">
            <ArrowLeft className="h-4 w-4" /> Back to offer
          </Link>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-4 max-w-xl text-[15px] font-medium leading-relaxed text-ink/75">
            MinuteX {offer.plan} exclusive member offer. Please read these terms before claiming your membership.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl bg-white/85 p-5 shadow-soft backdrop-blur">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                <Hourglass className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[15px] font-bold text-ink">{offer.duration[0].toUpperCase() + offer.duration.slice(1)} of {offer.plan}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-ink-muted">Counted from the day your account is activated.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white/85 p-5 shadow-soft backdrop-blur">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[15px] font-bold text-ink">Redeem by {expiry}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-ink-muted">The activation code expires after this date.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/70 bg-white/90 p-7 shadow-card backdrop-blur-md sm:p-10">
            <ol className="space-y-8">
              {sections.map((s, i) => (
                <li key={s.title}>
                  <h2 className="flex items-center gap-3 text-lg font-bold text-ink">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[13px] font-bold text-brand">{i + 1}</span>
                    {s.title}
                  </h2>
                  <ul className="mt-3 space-y-2.5 pl-10">
                    {s.items.map((t) => (
                      <li key={t} className="list-disc text-[14px] leading-relaxed text-ink-muted marker:text-brand-200">
                        {t}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-slate-100 pt-6 text-[13px] text-ink-soft">
              Last updated {formatDate('2026-09-29')}. Questions? Contact us through the{' '}
              <a href={APP_URL} className="font-semibold text-brand hover:underline">
                MinuteX Help Center
              </a>
              .
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/" className="btn btn-primary">
              Claim my membership
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
