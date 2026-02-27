import { certifications } from '../data/portfolioData'

export default function Certifications() {
  return (
    <section id="certifications" className="section container">
      <h3>Certifications</h3>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article key={cert.title} className="card">
            <h4>{cert.title}</h4>
            <p>{cert.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
