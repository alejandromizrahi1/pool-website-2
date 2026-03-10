export default function TrustBar() {
  return (
    <div className="bg-white border-b border-zinc-100 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-3xl font-extrabold text-zinc-900">20+</span>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Years in South Florida</span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-1 justify-center md:justify-start">
              <span className="text-3xl font-extrabold text-zinc-900">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">154 Google Reviews</span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-3xl font-extrabold text-zinc-900">2,400+</span>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Pools Serviced This Year</span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-sky-600 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" />
              </svg>
              <span className="text-lg font-bold text-zinc-900">Licensed & Insured</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">FL State Certified · CPC9876543</span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-sky-600 justify-center md:justify-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
              <span className="text-lg font-bold text-zinc-900">CPO Certified</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Pentair & Hayward Authorized</span>
          </div>
        </div>
      </div>
    </div>
  )
}
