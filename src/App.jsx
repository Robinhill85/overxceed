import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Portfolio />
      <HowItWorks />
      <About />
      <Contact />

      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-navy border-t border-white/10 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <img src="/white-logo.png" alt="OverXceed" className="h-6 w-auto mb-6 opacity-60 hidden md:block" />
          <p className="text-white/60 font-sans text-sm">
            &copy; {new Date().getFullYear()} OverXceed. Better marketing. Not more of it.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
