import { Link } from 'react-router-dom'

const links = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', to: '/terms' },
  { label: 'Help Center', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/60">
      <div className="container flex flex-col items-center justify-between gap-3 py-6 text-[13px] text-ink-soft sm:flex-row">
        <p>© 2026 Minutex. All rights reserved.</p>
        <div className="flex gap-5">
          {links.map((l) =>
            l.to ? (
              <Link key={l.label} to={l.to} className="transition-colors hover:text-brand">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} className="transition-colors hover:text-brand">
                {l.label}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  )
}
