import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import AquaShield from './components/AquaShield'
import WhyChooseUs from './components/WhyChooseUs'
import BeforeAfter from './components/BeforeAfter'
import Credentials from './components/Credentials'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import ServiceAreas from './components/ServiceAreas'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppWidget from './components/WhatsAppWidget'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans">
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Services />
      <AquaShield />
      <WhyChooseUs />
      <BeforeAfter />
      <Credentials />
      <Reviews />
      <Pricing />
      <ServiceAreas />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </div>
  )
}

export default App
