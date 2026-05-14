import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import About from './components/About'
import MarketInPublic from './components/MarketInPublic'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Portfolio />
        <About />
        <MarketInPublic />
        <Contact />
      </main>

      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-navy border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-sans font-bold text-white text-lg">OverXceed</span>
            <p className="text-white/40 font-sans text-sm">
              &copy; {new Date().getFullYear()} OverXceed. Better marketing. Not more of it.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#services" className="text-white/40 hover:text-white/70 text-sm font-sans transition-colors">Services</a>
            <a href="#work" className="text-white/40 hover:text-white/70 text-sm font-sans transition-colors">Work</a>
            <a href="#about" className="text-white/40 hover:text-white/70 text-sm font-sans transition-colors">About</a>
            <a href="#contact" className="text-white/40 hover:text-white/70 text-sm font-sans transition-colors">Contact</a>
            <a href="https://www.linkedin.com/in/robinmarketing/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 text-sm font-sans transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}

export default App
