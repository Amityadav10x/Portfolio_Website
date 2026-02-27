import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

const THEME_KEY = 'portfolio-theme'

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem(THEME_KEY)
    if (storedTheme) return storedTheme === 'dark'
    return true
  })
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(THEME_KEY, darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [])

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Header
        darkMode={darkMode}
        menuOpen={menuOpen}
        onThemeToggle={() => setDarkMode((prev) => !prev)}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
        onMenuClose={() => setMenuOpen(false)}
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
