import { Link } from 'react-router-dom'

export default function Logo({ inverted = false }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="ROHAMA Ventures home">
      <span className={`relative grid h-11 w-11 place-items-center overflow-hidden rounded-xl border ${inverted ? 'border-white/20 bg-white/5' : 'border-navy-900/10 bg-white'} shadow-sm`}>
        <img src="/images/logo.png" alt="ROHAMA Ventures logo" className="h-full w-full object-contain p-1" />
      </span>
      <span className="inline-flex flex-col leading-none">
        <span className={`font-display text-[19px] font-semibold tracking-[-0.02em] ${inverted ? 'text-white' : 'text-navy-900'}`}>ROHAMA VENTURES</span>
        <span className={`mt-1 text-[7.5px] font-medium uppercase tracking-[0.25em] ${inverted ? 'text-white/55' : 'text-gold-500'}`}>Business & Financial Advisory</span>
      </span>
    </Link>
  )
}
