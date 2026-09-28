export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/60">
      <div className="container flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-ink-soft sm:flex-row">
        <p>© 2026 Minutex. All rights reserved.</p>
        <div className="flex gap-5">
          {['Privacy', 'Terms', 'Help Center'].map((l) => (
            <a key={l} href="#" className="transition-colors hover:text-brand">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
