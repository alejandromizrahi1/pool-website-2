export default function ServiceAreas() {
  const miamidade = ['Coral Gables','Brickell','Coconut Grove','Key Biscayne','South Beach','Kendall','Doral','Hialeah','Aventura','Pinecrest']
  const broward = ['Fort Lauderdale','Hollywood','Pembroke Pines','Weston','Miramar','Davie','Plantation','Coral Springs']
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-600 mb-4">Where We Serve</p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">Every Neighborhood.<br />Same Great Service.</h2>
        <p className="text-zinc-500 text-lg mb-12 max-w-2xl mx-auto">From Brickell high-rises to Weston estates — we're your local pool pros.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-8">
          <div>
            <h3 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-widest">Miami-Dade County</h3>
            <div className="flex flex-wrap gap-2">
              {miamidade.map((a) => <span key={a} className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-zinc-700 text-sm font-medium hover:border-sky-400 hover:text-sky-700 transition-colors">{a}</span>)}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-zinc-900 mb-4 text-sm uppercase tracking-widest">Broward County</h3>
            <div className="flex flex-wrap gap-2">
              {broward.map((a) => <span key={a} className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-zinc-700 text-sm font-medium hover:border-sky-400 hover:text-sky-700 transition-colors">{a}</span>)}
            </div>
          </div>
        </div>
        <p className="text-zinc-400 text-sm">Don't see your area? <a href="tel:+13059681265" className="text-sky-600 font-bold hover:underline">Call us</a> — we likely cover it.</p>
      </div>
    </section>
  )
}
