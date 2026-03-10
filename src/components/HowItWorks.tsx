export default function HowItWorks() {
  const steps = [
    { num: '01', icon: 'phone', title: 'Book Your Free Assessment', desc: "Call us or fill out the form. We'll visit your pool within 48 hours for a free on-site evaluation — no pressure, no obligation." },
    { num: '02', icon: 'check', title: 'Get Your Custom Plan', desc: "We build a maintenance plan specific to your pool's size, equipment, and chemistry profile. You approve the plan and pick your preferred day." },
    { num: '03', icon: 'sparkle', title: 'Enjoy a Perfect Pool', desc: 'Your dedicated tech arrives the same day, same time, every week. You get a digital report after every visit. All you do is swim.' },
  ]
  return (
    <section id="how-it-works" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase text-sky-600 mb-4">It's This Simple</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">From Green to Gleaming in 3 Steps.</h2>
        <p className="text-zinc-500 text-lg mb-16 max-w-xl mx-auto">No contracts. No fine print. Just a better pool — starting this week.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative bg-white rounded-3xl p-10 border border-zinc-100 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all">
              <span className="text-6xl font-black text-sky-100 absolute top-6 right-8">{step.num}</span>
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6">
                <StepIcon type={step.icon} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{step.title}</h3>
              <p className="text-zinc-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-lg">
            Schedule My Free Assessment
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function StepIcon({ type }: { type: string }) {
  if (type === 'phone') return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
  if (type === 'check') return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  )
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  )
}
