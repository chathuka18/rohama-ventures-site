import { Link } from 'react-router-dom'

export default function Logo({ inverted = false }) {
  return (
    <Link to="/" className="group inline-flex flex-col leading-none">
      <span className={`font-display text-[20px] font-semibold tracking-[-0.02em] ${inverted ? 'text-white' : 'text-navy-900'}`}>ROHAMA VENTURES</span>
      <span className={`mt-1 text-[8px] font-medium uppercase tracking-[0.27em] ${inverted ? 'text-white/55' : 'text-gold-500'}`}>Business & Financial Advisory</span>
    </Link>
  )
}
