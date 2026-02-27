import { profile } from '../data/portfolioData'

export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">Hello, I am</p>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p>{profile.summary}</p>
        <div className="actions">
          <a className="btn btn-primary" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
      <img className="hero-image" src={profile.heroImage} alt={profile.name} />
    </section>
  )
}
