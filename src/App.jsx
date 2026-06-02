import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Clients from './components/Clients'
import WorkExperience from './components/WorkExperience'
import Statistics from './components/Statistics'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Clients />
        <WorkExperience />
        <Statistics />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
