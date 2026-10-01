// Renders a brand logo from simple-icons (24×24 single-path SVGs).
export default function BrandIcon({ icon, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" role="img" aria-label={icon.title} className={className}>
      <path d={icon.path} />
    </svg>
  )
}
