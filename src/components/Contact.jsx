import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 55, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-label"><span>04</span> Make a connection</div>
      <h2>Have a good one<br /><em>in mind?</em></h2>
      <p>I’m looking for a team where thoughtful design and well-made interfaces matter. Let’s talk about what you’re building.</p>
      <a className="contact-email" href="mailto:adepojuoluwadara7@gmail.com?subject=Let%E2%80%99s%20talk">
        adepojuoluwadara7@gmail.com <span aria-hidden="true">↗</span>
      </a>
      <div className="contact-socials">
        <a href="https://github.com/Auren-xo" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/oluwadara-adepoju-3280542b0" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </div>
      <footer className="site-footer"><span>Oluwadara Adepoju · 2026</span><a href="#top">Back to top ↑</a></footer>
    </motion.section>
  )
}
