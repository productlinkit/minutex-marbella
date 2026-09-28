import Logo from './Logo'
import { APP_URL, MARKETING_URL } from '../config/offer'

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-5" style={{ width: 'min(100% - 1.5rem, 72rem)' }}>
        <a href={MARKETING_URL} aria-label="MinuteX home">
          <Logo />
        </a>
        <a href={`${APP_URL}/login`} className="rounded-full px-4 py-2 text-sm font-semibold text-ink transition-colors hover:text-brand">
          Log in
        </a>
      </div>
    </header>
  )
}
