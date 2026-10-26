import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      className="content-section about-section"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-label"><span>01</span> A little about me</div>
      <div className="about-layout">
        <h2 className="section-title">Good interfaces make the complicated feel <em>simple.</em></h2>
        <div className="about-copy">
          <p>
            I’m Oluwadara Adepoju Oyindamola, a software engineer focused on building responsive, useful web experiences across the stack. I enjoy connecting thoughtful interface work with practical APIs, backend services, and data.
          </p>
          <p>
            My featured work includes a movie discovery app, a PDF-based study companion, and an invoice manager. I’m currently seeking junior and internship opportunities where I can contribute across frontend and backend development while growing with a collaborative team.
          </p>
          <a className="text-link" href="https://github.com/Auren-xo" target="_blank" rel="noreferrer">
            More on GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="about-details">
        <div className="about-detail">
          <p className="about-detail-label">Freelance experience</p>
          <div className="about-role">
            <div><h3>Freelance Web Developer</h3><span>Jan 2022 – Present</span></div>
            <p>Designed and developed responsive small-business websites with HTML, CSS, and JavaScript, shaping clear layouts around client needs.</p>
            <p>Integrated APIs and third-party libraries, then refined performance and on-page SEO to improve usability and discoverability.</p>
          </div>
        </div>
        <div className="about-detail">
          <p className="about-detail-label">Frontend internships</p>
          <div className="about-role">
            <div><h3>Alusoft · Front-End Intern</h3><span>2023 – 2024</span></div>
            <p>Built responsive React and Tailwind interfaces from Figma designs, collaborating with a team and testing across browsers.</p>
          </div>
          <div className="about-role">
            <div><h3>HNG Tech · Front-End Intern</h3><span>2025 – 2026</span></div>
            <p>Developed and refined user-facing web interfaces, translating design requirements into responsive pages and debugging UI issues.</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
