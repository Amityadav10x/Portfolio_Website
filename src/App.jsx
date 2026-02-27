import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Header
        darkMode={darkMode}
        menuOpen={menuOpen}
        onThemeToggle={() => setDarkMode((prev) => !prev)}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
      />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
