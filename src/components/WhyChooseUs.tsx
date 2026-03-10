export default function WhyChooseUs() {
  const features = [
    { icon: 'clock', title: 'Same Tech, Same Day, Every Week', desc: 'Your dedicated CPO-certified technician arrives the same day, same window — every single week.' },
    { icon: 'phone', title: 'Digital Report Within 1 Hour', desc: 'After every visit, you receive a photo report with all chemical readings, equipment notes, and any issues we flagged.' },
    { icon: 'file', title: 'No Contracts. Zero Cancellation Fees.', desc: "We keep you because we earn it — not because you're locked in. Month-to-month. Cancel with a single text." },
    { icon: 'shield', title: '100% Satisfaction — or We Come Back Free', desc: 'Not thrilled after a service? Call us within 48 hours. We\'ll send your tech back at no charge.' },
  ]
  return (
    <section id="about" className="bg-zinc-900 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-400 mb-6">Why 150+ Families Chose Luciano</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">Your Pool Guy<br />Should Feel Like<br /><span className="text-sky-400 italic font-light">Family.</span></h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-10">Most pool companies send a different tech every week. You never know who's showing up, what chemicals they used, or whether they even came. We do the opposite.</p>
            <div className="space-y-8">
              {features.map((f) => (
                <div key={f.title} className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                    <FeatureIcon type={f.icon} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative aspect-square rounded-[40px] overflow-hidden">
          <img src="/images/pool-technician.png" alt="Luciano Pools pool technician" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute bottom-8 left-8 right-8 p-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-400">
                <img src="https://i.pravatar.cc/150?u=miami" alt="Ricardo M." />
              </div>
              <div>
                <p className="text-white font-bold">Ricardo M.</p>
                <p className="text-zinc-400 text-sm">Coral Gables · Client since 2022</p>
              </div>
            </div>
            <blockquote>
              <p className="text-white text-lg italic leading-relaxed">"3 years with Luciano Pools. Same tech, Carlos, every single Thursday. The pool has never once gone green — even after Hurricane Ian."</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    clock: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    phone: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>,
    file: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>,
    shield: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>,
  }
  return icons[type] || null
}
