export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-sky-600 rounded-[48px] p-8 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-none mb-8">Your Perfect Pool Starts Here.</h2>
              <p className="text-sky-50 text-xl mb-6 max-w-md leading-relaxed">Fill out the form and we'll call you within 2 hours to schedule your free on-site assessment.</p>
              <p className="text-sky-100 text-base mb-12 max-w-md">Or if you prefer to talk now:</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">📞</div>
                  <a href="tel:+13059681265" className="text-xl font-bold">(305) 968-1265</a>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">✉</div>
                  <a href="mailto:luciano@lucianopools.com" className="text-xl font-bold">luciano@lucianopools.com</a>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">📍</div>
                  <span className="text-xl font-bold">Miami-Dade &amp; Broward County</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                    <input type="text" placeholder="John Doe" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                    <input type="tel" placeholder="(305) 000-0000" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email (optional)</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Service Address</label>
                  <input type="text" placeholder="123 Ocean Drive, Miami, FL 33139" className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Pool Type</label>
                    <select className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500">
                      <option>Inground — Chlorine</option>
                      <option>Inground — Saltwater</option>
                      <option>Above Ground</option>
                      <option>Commercial / HOA</option>
                      <option>Not Sure</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Plan Interest</label>
                    <select className="w-full px-5 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500">
                      <option>Essential ($120/mo)</option>
                      <option>Premium ($185/mo)</option>
                      <option>Elite ($265/mo)</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full py-5 bg-zinc-900 text-white rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all shadow-xl cursor-pointer">Get My Free Assessment →</button>
                <p className="text-center text-zinc-400 text-xs">We'll call within 2 hours. No spam, no obligation.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
