import { navItems } from '../data/portfolioData'

export default function Header({ darkMode, onThemeToggle, menuOpen, onMenuToggle, onMenuClose }) {
  return (
    <header className="header">
      <nav className="container nav">
        <a className="brand" href="#home" onClick={onMenuClose}>Amit Portfolio</a>

        <button
          className="menu-toggle"
          onClick={onMenuToggle}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          ☰
        </button>

        <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={onMenuClose}>{item.label}</a>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={onThemeToggle} aria-label="Toggle color mode">
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
