import { journey } from '../data/portfolioData'

export default function Journey() {
  return (
    <section id="journey" className="section container">
      <h3>My Journey</h3>
      <div className="timeline">
        {journey.map((item) => (
          <article key={item.title} className="card timeline-item">
            <span className="badge">{item.period}</span>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
