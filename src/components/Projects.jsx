import { motion } from 'framer-motion'
import movieImage from '../assets/image.png'
import studyImage from '../assets/Aurennis learn image.png'
import invoiceImage from '../assets/vanta invoice snip.png'

const projects = [
  {
    number: '01',
    title: 'Movie Trailer Hub',
    description: 'Search and explore movies with live TMDB data, browse movie and TV sections, and play YouTube trailers in the app.',
    tags: ['React', 'Axios', 'TMDB API', 'React Router', 'ReactPlayer'],
    demo: 'https://movietrailer-app.netlify.app/',
    github: 'https://github.com/Auren-xo/my-moviesite',
    image: movieImage,
    color: 'mint'
  },
  {
    number: '02',
    title: 'Aurennis Learn',
    description: 'Upload text-based PDFs, extract their content, and create structured study guides, flashcards, quizzes, and assessments with local rule-based logic.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PDF.js', 'Zod'],
    demo: 'https://aurennis-learn.netlify.app/',
    github: 'https://github.com/Auren-xo/Aurennis-LearnV0.1',
    image: studyImage,
    color: 'coral'
  },
  {
    number: '03',
    title: 'Danpa Invoice',
    description: 'Create and manage invoices with live totals, status tracking, search, PDF export, and a responsive dashboard backed by a REST API.',
    tags: ['HTML/CSS/JS', 'Node.js', 'FastAPI', 'PostgreSQL', 'SQLAlchemy'],
    demo: 'https://danpa-invoice.netlify.app/',
    github: 'https://github.com/Auren-xo/Danpa-Invoice',
    image: invoiceImage,
    color: 'blue'
  },
  {
    number: '04',
    title: 'Oluwadara Adepoju Portfolio',
    description: 'A motion-led developer portfolio built to present my experience and projects with responsive layouts, accessible interactions, and a downloadable résumé.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'jsPDF'],
    demo: '#top',
    github: 'https://github.com/Auren-xo',
    isPortfolio: true,
    color: 'lime'
  }
]

export default function Projects() {
  return (
    <section id="work" className="content-section work-section">
      <motion.div
        initial={{ opacity: 0, y: 42 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-label"><span>03</span> Selected work</div>
        <div className="work-heading">
          <h2 className="section-title">A few things I’ve <em>made.</em></h2>
          <p>Real projects, real links. More in progress.</p>
        </div>
      </motion.div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className={`project-card project-${project.color}`}
            initial={{ opacity: 0, y: 60, rotate: index === 1 ? 1.5 : -1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, delay: index * 0.13, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -9, rotate: 0, transition: { duration: 0.28 } }}
          >
            <div className={`project-image-wrap${project.isPortfolio ? ' portfolio-project-preview' : ''}`}>
              {project.isPortfolio ? (
                <div className="portfolio-preview" aria-label="Preview of the Oluwadara Adepoju portfolio">
                  <div className="portfolio-preview-nav"><span>DO<span className="preview-dot">.</span></span><span>ABOUT&nbsp;&nbsp; SKILLS&nbsp;&nbsp; WORK</span></div>
                  <div className="portfolio-preview-main">
                    <span>SOFTWARE ENGINEER&nbsp; / &nbsp;OPEN TO OPPORTUNITIES</span>
                    <strong>Oluwadara<br />Adepoju<span className="preview-dot">.</span></strong>
                    <i>Building useful experiences across the stack.</i>
                  </div>
                  <div className="portfolio-preview-mark" aria-hidden="true">D</div>
                </div>
              ) : (
                <img src={project.image} alt={`${project.title} project preview`} className="project-image" loading="lazy" />
              )}
              <span className="project-number">{project.number}</span>
              <span className="project-image-arrow" aria-hidden="true">↗</span>
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="project-links">
                {project.isPortfolio ? (
                  <a href={project.demo}>View this portfolio <span aria-hidden="true">↑</span></a>
                ) : (
                  <a href={project.demo} target="_blank" rel="noreferrer">Live project <span aria-hidden="true">↗</span></a>
                )}
                <a href={project.github} target="_blank" rel="noreferrer">{project.isPortfolio ? 'GitHub profile' : 'Source code'} <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
