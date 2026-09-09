import { Link } from 'react-router-dom'

export default function Logo({ inverted = false }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="ROHAMA Ventures home">
      <span
        className={`inline-flex items-center justify-center rounded-2xl p-1.5 shadow-sm transition ${
          inverted ? 'bg-white/10 ring-1 ring-white/10' : 'bg-white ring-1 ring-navy-900/10'
        }`}
      >
        <img src="/images/logo.png" alt="ROHAMA Ventures logo" className="h-11 w-11 object-contain" />
      </span>
      <span className="inline-flex flex-col leading-none">
        <span
          className={`font-display text-[19px] font-semibold tracking-[-0.02em] ${
            inverted ? 'text-white' : 'text-navy-900'
          }`}
        >
          ROHAMA VENTURES
        </span>
        <span
          className={`mt-1 text-[7.5px] font-medium uppercase tracking-[0.25em] ${
            inverted ? 'text-white/55' : 'text-gold-500'
          }`}
        >
          The Right Place to Grow Your Business

        </span>
      </span>
    </Link>
  )
}
