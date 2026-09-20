import { Link } from 'react-router-dom'

export default function Logo({ inverted = false }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="ROHAMA Ventures home">
      <span className={`relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border ${inverted ? 'border-white/20 bg-white/5' : 'border-navy-900/10 bg-navy-900'} shadow-sm`}>
        <span className="font-display text-lg font-bold tracking-[-.06em] text-gold-400">RV</span>
        <span className="absolute -bottom-3 -right-3 h-7 w-7 rounded-full border border-gold-400/40"/>
      </span>
      <span className="inline-flex flex-col leading-none">
        <span className={`font-display text-[19px] font-semibold tracking-[-0.02em] ${inverted ? 'text-white' : 'text-navy-900'}`}>ROHAMA VENTURES</span>
        <span className={`mt-1 text-[7.5px] font-medium uppercase tracking-[0.25em] ${inverted ? 'text-white/55' : 'text-gold-500'}`}>Business & Financial Advisory</span>
      </span>
    </Link>
  )
}
