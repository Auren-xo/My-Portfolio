import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import avatar from '../assets/auren-avatar.png'
import { downloadResume } from '../utils/downloadResume.js'

export default function Hero() {
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [7, -7]), { stiffness: 160, damping: 18 })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), { stiffness: 160, damping: 18 })

  const handlePortraitMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const resetPortrait = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <section id="top" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="status-dot" /> Software Engineer <span className="eyebrow-divider">/</span> Open to opportunities
        </motion.p>
        <h1 className="hero-title" aria-label="Oluwadara Adepoju Oyindamola">
          <motion.span
            className="hero-name-line"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1, delay: 0.25, ease: [0.77, 0, 0.18, 1] }}
          >
            Oluwadara
          </motion.span>
          <motion.span
            className="hero-name-line hero-name-accent"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1, delay: 0.48, ease: [0.77, 0, 0.18, 1] }}
          >
            Adepoju
          </motion.span>
          <motion.span
            className="hero-name-line hero-name-accent"
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={{ clipPath: 'inset(0 0% 0 0)' }}
            transition={{ duration: 1, delay: 0.7, ease: [0.77, 0, 0.18, 1] }}
          >
            Oyindamola<span className="hero-period">.</span>
          </motion.span>
        </h1>
        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.78 }}
        >
          <p className="hero-intro">
            Software engineer building responsive web applications across the stack, from thoughtful interfaces to practical backend features.
          </p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a href="mailto:adepojuoluwadara7@gmail.com?subject=Portfolio%20enquiry" className="button button-quiet">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
            <button type="button" onClick={downloadResume} className="button button-quiet">
              Download résumé <span aria-hidden="true">↓</span>
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-portrait-wrap"
        initial={{ opacity: 0, scale: 0.88, rotate: 4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handlePortraitMove}
        onMouseLeave={resetPortrait}
      >
        <div className="portrait-frame">
          <img src={avatar} alt="Illustrated portrait representing Oluwadara Adepoju Oyindamola" className="hero-portrait" />
          <span className="portrait-orbit portrait-orbit-one" />
          <span className="portrait-orbit portrait-orbit-two" />
          <span className="portrait-caption">DARA / FRONTEND</span>
        </div>
        <span className="portrait-index">01 — 04</span>
      </motion.div>
      <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
    </section>
  )
}
