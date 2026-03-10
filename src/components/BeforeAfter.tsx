import { useRef, useCallback, useEffect, useState } from 'react'

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const isDragging = useRef(false)

  const updatePos = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  useEffect(() => {
    const handleUp = () => { isDragging.current = false }
    window.addEventListener('pointerup', handleUp)
    return () => window.removeEventListener('pointerup', handleUp)
  }, [])

  return (
    <section className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-600 mb-4">Real Results</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">One Visit. That's All It Takes.</h2>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto">Drag the slider to see what a single Luciano Pools service visit does. No Photoshop — real pools, real results.</p>
        </div>
        <div
          ref={containerRef}
          className="ba-slider relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl"
          onPointerDown={(e) => { isDragging.current = true; (e.target as HTMLElement).setPointerCapture(e.pointerId); updatePos(e.clientX) }}
          onPointerMove={(e) => { if (isDragging.current) updatePos(e.clientX) }}
        >
          <img src="/images/pool-before-dirty.png" alt="Neglected green pool before" className="absolute inset-0 w-full h-full object-cover" />
          <span className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest z-20">Before</span>
          <div className="absolute inset-0 overflow-hidden z-10" style={{ width: `${position}%` }}>
            <img src="/images/pool-after-clean.png" alt="Crystal clear pool after" className="absolute top-0 left-0 h-full object-cover" style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }} />
            <span className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">After</span>
          </div>
          <div className="absolute top-0 bottom-0 z-30 flex items-center" style={{ left: `${position}%`, transform: 'translateX(-50%)' }}>
            <div className="w-1 h-full bg-white shadow-lg"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
              <span className="text-zinc-400 text-sm font-bold">⇔</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-lg">Get Your Pool Looking Like This →</a>
        </div>
      </div>
    </section>
  )
}
