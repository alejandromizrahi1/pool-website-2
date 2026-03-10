export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=2000" alt="Luxury Miami pool" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">Trusted by 150+ Miami Homeowners · 4.9★ on Google</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[0.95] mb-5">Never Worry About<br />Your Pool<span className="text-sky-400 italic font-light"> Again.</span></h1>
        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">We show up the same day, same time, every week — so your pool stays swim-ready 365 days a year. Licensed, insured, CPO-certified. No contracts, cancel anytime.</p>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
          <input type="text" placeholder="Your Name" className="flex-1 px-4 py-3.5 rounded-xl bg-white text-zinc-900 placeholder-zinc-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <input type="tel" placeholder="Phone Number" className="flex-1 px-4 py-3.5 rounded-xl bg-white text-zinc-900 placeholder-zinc-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <input type="text" placeholder="Zip Code" className="w-full md:w-28 px-4 py-3.5 rounded-xl bg-white text-zinc-900 placeholder-zinc-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sky-500" />
          <button type="button" className="px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-bold text-sm whitespace-nowrap transition-all cursor-pointer shadow-lg">Get My Free Quote →</button>
        </div>
        <p className="text-white/50 text-xs mt-3">We'll call you within 2 hours. No spam, ever.</p>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
