import { navItems } from '../data/portfolioData'

export default function Header({ darkMode, onThemeToggle, menuOpen, onMenuToggle }) {
  return (
    <header className="header">
      <nav className="container nav">
        <a className="brand" href="#home">Amit Portfolio</a>

        <button className="menu-toggle" onClick={onMenuToggle} aria-label="Toggle menu">
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={onMenuToggle}>{item.label}</a>
            </li>
          ))}
          <li>
            <button className="theme-toggle" onClick={onThemeToggle}>
              {darkMode ? 'Light' : 'Dark'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
