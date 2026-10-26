const ink = [28, 38, 36]
const muted = [82, 94, 87]
const accent = [105, 139, 51]

export async function downloadResume() {
  const { jsPDF } = await import('jspdf')
  const pdf = new jsPDF({ unit: 'pt', format: 'a4' })
  const pageWidth = pdf.internal.pageSize.getWidth()
  const margin = 44
  const contentWidth = pageWidth - margin * 2
  let y = 47

  const sectionHeading = (label) => {
    y += 12
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(8.5)
    pdf.setTextColor(...accent)
    pdf.text(label.toUpperCase(), margin, y)
    y += 8
    pdf.setDrawColor(218, 225, 214)
    pdf.line(margin, y, pageWidth - margin, y)
    y += 14
  }

  const paragraph = (text, { x = margin, width = contentWidth, size = 8.5, color = muted } = {}) => {
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(size)
    pdf.setTextColor(...color)
    const lines = pdf.splitTextToSize(text, width)
    pdf.text(lines, x, y)
    y += lines.length * (size + 3) + 3
  }

  const entryHeading = (title, date) => {
    pdf.setFont('helvetica', 'bold')
    pdf.setFontSize(9)
    pdf.setTextColor(...ink)
    pdf.text(title, margin, y)
    if (date) {
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(8.3)
      pdf.setTextColor(...muted)
      pdf.text(date, pageWidth - margin, y, { align: 'right' })
    }
    y += 13
  }

  const bullet = (text) => paragraph(`- ${text}`, { x: margin + 7, width: contentWidth - 7, size: 8.2 })

  pdf.setFillColor(...ink)
  pdf.rect(0, 0, pageWidth, 143, 'F')
  pdf.setFont('helvetica', 'bold')
  pdf.setFontSize(22)
  pdf.setTextColor(248, 248, 240)
  pdf.text('ADEPOJU OLUWADARA OYINDAMOLA', margin, y + 15)
  y += 37
  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(10)
  pdf.setTextColor(204, 222, 163)
  pdf.text('SOFTWARE ENGINEER  |  FULL-STACK & FRONTEND', margin, y)
  y += 21
  pdf.setFontSize(8.2)
  pdf.setTextColor(229, 233, 226)
  pdf.text('adepojuoluwadara7@gmail.com  |  08161896470', margin, y)
  y += 12
  pdf.text('linkedin.com/in/oluwadara-adepoju-3280542b0  |  github.com/Auren-xo', margin, y)
  y = 157

  sectionHeading('Profile')
  paragraph('Software engineer with hands-on freelance and internship experience building responsive websites and React interfaces. Experienced in frontend development, API integration, backend services, and database-backed applications. Focused on clear user experiences, maintainable implementation, and contributing effectively within a collaborative engineering team.')

  sectionHeading('Technical skills')
  paragraph('Languages: JavaScript, Python, SQL', { size: 8.2 })
  paragraph('Frontend: HTML, CSS, Bootstrap, Tailwind CSS, React, Next.js', { size: 8.2 })
  paragraph('Backend & data: Node.js, Express.js, FastAPI, MongoDB, MySQL, PostgreSQL', { size: 8.2 })
  paragraph('Tools & practices: Git, GitHub, Postman, Docker, REST APIs, unit testing, Agile development', { size: 8.2 })

  sectionHeading('Experience')
  entryHeading('Freelance Web Developer', 'Jan 2022 – Present')
  bullet('Designed and developed responsive small-business websites with HTML, CSS, and JavaScript, shaping clear layouts around client needs.')
  bullet('Integrated APIs and third-party libraries; refined performance and on-page SEO to improve usability and discoverability.')
  y += 3
  entryHeading('Front-End Intern · Alusoft', '2023 – 2024')
  bullet('Built responsive React and Tailwind CSS interfaces from Figma designs in collaboration with a team.')
  bullet('Tested and debugged pages to improve cross-browser consistency.')
  y += 3
  entryHeading('Front-End Intern · HNG Tech', '2025 – 2026')
  bullet('Developed and refined user-facing web interfaces, translating design requirements into responsive pages.')
  bullet('Debugged UI issues and tested behavior across browsers and screen sizes.')

  sectionHeading('Education')
  entryHeading('Bachelor’s in Software Engineering', 'Expected 2029')
  paragraph('Westland University · Iwo, Osun State', { size: 8.2 })
  paragraph('Relevant coursework: Web Development, Database Systems, Software Engineering, Data Structures', { size: 8.2 })

  sectionHeading('Selected projects')
  const projects = [
    {
      title: 'Movie Trailer Hub',
      stack: 'React, JavaScript, Axios, TMDB API, React Router, movie-trailer, ReactPlayer',
      detail: 'Movie and TV discovery with search, live TMDB results, and YouTube trailer playback.',
      url: 'https://movietrailer-app.netlify.app/'
    },
    {
      title: 'Aurennis Learn',
      stack: 'Next.js App Router, React, TypeScript, Tailwind CSS, PDF.js, Zod',
      detail: 'Extracts text from course PDFs and creates study guides, flashcards, quizzes, and assessments using local rule-based logic.',
      url: 'https://aurennis-learn.netlify.app/'
    },
    {
      title: 'Danpa Invoice Manager',
      stack: 'HTML, CSS, JavaScript, Node.js, Python, FastAPI, PostgreSQL, SQLAlchemy, Pydantic',
      detail: 'Invoice management with calculations, status tracking, PDF export, search, and a REST API.',
      url: 'https://danpa-invoice.netlify.app/'
    },
    {
      title: 'Oluwadara Adepoju Portfolio',
      stack: 'React, Vite, Tailwind CSS, Framer Motion, jsPDF',
      detail: 'Responsive developer portfolio with motion-led interactions, project showcases, and a generated downloadable résumé.',
      url: 'https://github.com/Auren-xo'
    }
  ]

  projects.forEach((project) => {
    entryHeading(project.title, '')
    paragraph(project.detail, { size: 8.1 })
    paragraph(`Stack: ${project.stack}`, { size: 7.8 })
    pdf.setFont('helvetica', 'normal')
    pdf.setFontSize(7.8)
    pdf.setTextColor(...accent)
    pdf.text(project.url, margin, y, { link: project.url })
    y += 11
  })

  pdf.setFont('helvetica', 'normal')
  pdf.setFontSize(7.5)
  pdf.setTextColor(...muted)
  pdf.text('Portfolio: github.com/Auren-xo', margin, 818)
  pdf.save('Adepoju-Oluwadara-Oyindamola-Resume.pdf')
}