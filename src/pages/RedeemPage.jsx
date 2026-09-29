import { Check, Sparkles } from 'lucide-react'
import Header from '../components/Header'
import ClaimForm from '../components/ClaimForm'
import Footer from '../components/Footer'
import { benefits, offer, planLimits } from '../config/offer'

export default function RedeemPage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-sky-hero">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/bg-footer.webp')" }} />
      <div className="absolute inset-0 bg-white/25" />

      <Header />

      <section className="container relative z-10 grid flex-1 content-center items-center gap-10 pb-16 pt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Exclusive member invitation
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[4rem]">
            You&apos;re invited to
            <br />
            MinuteX {offer.plan}
            <br />
            <span className="text-brand">for {offer.duration}.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[15px] font-medium leading-relaxed text-ink/75 lg:mx-0">
            Sign up with your activation code and enjoy every {offer.plan} benefit for a full {offer.duration} from activation.
          </p>

          <div className="mx-auto mt-8 max-w-sm text-left lg:mx-0">
            <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-100 bg-white/80 backdrop-blur">
              {planLimits.map((l) => (
                <div key={l.label} className="flex items-center justify-between px-4 py-2.5">
                  <span className="text-[13px] text-ink-soft">{l.label}</span>
                  <span className="text-[13px] font-bold text-ink">{l.value}</span>
                </div>
              ))}
            </div>

            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[14px] text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex animate-fade-up justify-center [animation-delay:150ms] lg:justify-end">
          <ClaimForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
