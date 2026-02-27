import { profile } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <h3>Contact</h3>
      <div className="contact-grid card">
        <p><strong>Address:</strong> {profile.location}</p>
        <p><strong>Phone:</strong> <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a></p>
        <p><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <p>
          <strong>Resume:</strong>{' '}
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">Download CV</a>
        </p>
      </div>
    </section>
  )
}
