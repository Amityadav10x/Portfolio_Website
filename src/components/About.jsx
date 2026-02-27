import { profile, skills } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" className="section container">
      <h3>About Me</h3>
      <div className="about-grid">
        <img src={profile.aboutImage} alt={`${profile.name} profile`} className="about-image" />
        <div>
          <p><strong>Location:</strong> {profile.location}</p>
          <p><strong>Experience:</strong> 20+ projects and professional analytics/automation roles.</p>
          <p><strong>Focus:</strong> End-to-end analytics, dashboarding, and AI-assisted process automation.</p>

          <div className="tags">
            {skills.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
