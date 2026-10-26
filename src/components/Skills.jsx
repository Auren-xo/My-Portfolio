import { motion } from 'framer-motion'

const skillGroups = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'Python', 'SQL', 'HTML', 'CSS']
  },
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion']
  },
  {
    label: 'Backend & data',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'MongoDB', 'MySQL', 'PostgreSQL']
  },
  {
    label: 'Tools & practices',
    skills: ['Git', 'GitHub', 'Postman', 'Docker', 'Unit Testing', 'Agile Development']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="content-section skills-section">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75 }}
      >
        <div className="section-label"><span>02</span> The toolkit</div>
        <div className="skills-layout">
          <h2 className="section-title">Tools I use to bring ideas <em>to life.</em></h2>
          <p className="skills-note">A practical toolkit for building interfaces, connecting services, and making products feel good to use.</p>
        </div>
        <motion.div className="skill-groups" variants={{ show: { transition: { staggerChildren: 0.09 } } }} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              className="skill-group"
              variants={{ hidden: { opacity: 0, x: groupIndex % 2 ? 24 : -24 }, show: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3>{group.label}</h3>
              <div className="skill-list">
                {group.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="skill-chip"
                    variants={{ hidden: { opacity: 0, y: 14, rotate: index % 2 ? 2 : -2 }, show: { opacity: 1, y: 0, rotate: 0 } }}
                    transition={{ type: 'spring', stiffness: 150, damping: 16 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                  >
                    <span className="skill-spark" aria-hidden="true">✳</span>{skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
