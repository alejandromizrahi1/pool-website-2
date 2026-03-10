export default function AquaShield() {
  const stats = [
    { num: '12', label: 'Water Chemistry Tests', detail: 'pH, chlorine, alkalinity, CYA, TDS, calcium & more' },
    { num: '8', label: 'Equipment Checks', detail: 'Pump PSI, motor amp draw, seal integrity, timer settings' },
    { num: '15', label: 'Surface & Cleaning Steps', detail: 'Skim, vacuum, brush, tile line, waterline, basket empty' },
    { num: '12', label: 'Documentation Items', detail: 'Before/after photos, readings log, issue flagging' },
  ]
  return (
    <section className="py-24 px-6 bg-sky-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sky-100 text-xs font-bold tracking-[0.2em] uppercase mb-6">Our Proprietary Standard</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">The AquaShield™<br />Protocol.</h2>
            <p className="text-sky-50 text-lg leading-relaxed mb-10">Every Luciano Pools technician follows our <strong className="text-white">47-point AquaShield™ inspection</strong> on every single visit. It's the reason our clients' pools stay crystal clear year-round — even through hurricane season, 95°F heatwaves, and Florida's relentless algae pressure.</p>
            <p className="text-sky-100 text-base leading-relaxed mb-10">This isn't a checklist we downloaded. We developed AquaShield™ over 12 years of servicing Miami pools. It covers water chemistry, equipment health, surface condition, and safety compliance — documented with photos and delivered to your phone after every visit.</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sky-700 rounded-full font-bold hover:bg-sky-50 transition-all shadow-lg">See the Full AquaShield™ Checklist →</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-6">
                <p className="text-3xl font-extrabold text-white mb-1">{s.num}</p>
                <p className="text-sm font-bold text-sky-100 mb-2">{s.label}</p>
                <p className="text-xs text-sky-200/80">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
