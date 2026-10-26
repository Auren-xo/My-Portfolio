import { motion } from 'framer-motion'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' }
]

export default function Navbar() {
  return (
    <motion.header
      className="site-header sticky top-0 z-30"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="wordmark" aria-label="Oluwadara Adepoju, back to top">
          <span className="wordmark-mark">D</span>
          <span>DARA<span className="wordmark-dot">.</span></span>
        </a>
        <nav aria-label="Main navigation" className="flex items-center gap-1 sm:gap-3">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a href="mailto:adepojuoluwadara7@gmail.com" className="nav-contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
        </div>
    </motion.header>
  )
}
