import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import profilePhoto from '../assets/img/1.jpg'
import portfolioImage from '../assets/img/Portafolio.png'
import securePassImage from '../assets/img/SecurePass.png'
import bakeryImage from '../assets/img/Casita-Bakery.png'

const navItems = [
  ['Inicio', '#inicio'],
  ['Sobre mí', '#sobre-mi'],
  ['Proyectos', '#proyectos'],
  ['Habilidades', '#habilidades'],
  ['Contacto', '#contacto'],
]

const skills = ['React', 'JavaScript', 'HTML', 'CSS', 'Python', 'Java', 'SQL', 'Git', 'Oracle', 'Linux']

const projects = [
  {
    title: 'Mi Portafolio',
    description: 'Portafolio profesional desarrollado con React para presentar mi experiencia, habilidades y proyectos.',
    image: portfolioImage,
    stack: ['React', 'Vite', 'CSS'],
    repo: 'https://github.com/Mendo0729/MiPortafolio',
  },
  {
    title: 'SecurePass',
    description: 'Aplicación en Python para generar y evaluar contraseñas mediante entropía y verificar filtraciones conocidas.',
    image: securePassImage,
    stack: ['Python', 'Security', 'HIBP'],
    repo: 'https://github.com/Mendo0729/SecurePass',
  },
  {
    title: 'Casita Bakery',
    description: 'Sistema de gestión creado para apoyar la administración de un emprendimiento de repostería.',
    image: bakeryImage,
    stack: ['JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/Mendo0729/Casita_Bakery',
    demo: 'https://mendo0729.github.io/Casita_Bakery/',
  },
]

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">AM<span>.</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <span className="eyebrow">Hola, soy</span>
            <h1>Abdiel<br /><em>Mendoza</em></h1>
            <h2>Analista de sistemas & desarrollador</h2>
            <p>Creo soluciones digitales funcionales, seguras y orientadas a resolver problemas reales mediante tecnología.</p>
            <div className="hero-actions">
              <a className="button primary" href="#proyectos">Ver proyectos <ArrowDown size={18} /></a>
              <a className="button secondary" href="/assets/CV%20Abdiel%20Mendoza.pdf" download>Descargar CV <Download size={18} /></a>
            </div>
            <div className="social-row">
              <a href="https://github.com/Mendo0729" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a>
              <a href="https://www.linkedin.com/in/abdiel-mendoza-8b476b320/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness /></a>
              <a href="mailto:abdielmendoza2906@gmail.com" aria-label="Correo"><Mail /></a>
            </div>
          </motion.div>

          <motion.div className="portrait-wrap" initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }}>
            <div className="portrait-glow" />
            <img src={profilePhoto} alt="Abdiel Mendoza" />
            <div className="status-card"><span /> Disponible para nuevos proyectos</div>
          </motion.div>
        </section>

        <section className="section about" id="sobre-mi">
          <SectionTitle eyebrow="Sobre mí" title="Tecnología con propósito" description="Combino desarrollo, infraestructura y análisis para construir soluciones confiables y fáciles de mantener." />
          <div className="about-grid">
            <article className="glass-card about-copy">
              <Code2 />
              <p>Estudiante de la Licenciatura en Desarrollo de Software en la Universidad Tecnológica de Panamá, con experiencia en desarrollo de aplicaciones, bases de datos, soporte e infraestructura tecnológica.</p>
              <p>Me interesa transformar necesidades de negocio en soluciones claras, automatizadas y escalables.</p>
            </article>
            <article className="glass-card timeline-card">
              <div><GraduationCap /><p><strong>Licenciatura en Desarrollo de Software</strong><span>Universidad Tecnológica de Panamá · 2022 — actualidad</span></p></div>
              <div><BriefcaseBusiness /><p><strong>Experiencia profesional y freelance</strong><span>Desarrollo, soporte, bases de datos y análisis de sistemas</span></p></div>
              <div><MapPin /><p><strong>Colón, Panamá</strong><span>Disponible para oportunidades remotas y presenciales</span></p></div>
            </article>
          </div>
        </section>

        <section className="section" id="proyectos">
          <SectionTitle eyebrow="Proyectos" title="Trabajo seleccionado" description="Una muestra de proyectos personales y soluciones desarrolladas para necesidades reales." />
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }}>
                <div className="project-image"><img src={project.image} alt={project.title} /></div>
                <div className="project-content">
                  <div className="project-number">0{index + 1}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <a href={project.repo} target="_blank" rel="noreferrer"><Code2 size={18} /> Código</a>
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo <ArrowUpRight size={18} /></a>}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="habilidades">
          <SectionTitle eyebrow="Habilidades" title="Tecnologías que utilizo" />
          <div className="skills-cloud">{skills.map(skill => <span key={skill}>{skill}</span>)}</div>
        </section>

        <section className="section contact" id="contacto">
          <div>
            <span className="eyebrow">Contacto</span>
            <h2>Construyamos algo<br /><em>útil juntos.</em></h2>
          </div>
          <div className="contact-panel">
            <p>¿Tienes una idea, proyecto o una oportunidad profesional? Puedes escribirme directamente.</p>
            <a className="button primary" href="mailto:abdielmendoza2906@gmail.com">Enviar mensaje <Mail size={18} /></a>
            <div className="contact-links">
              <a href="https://github.com/Mendo0729" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/abdiel-mendoza-8b476b320/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://wa.me/50768883551" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© 2026 Abdiel Mendoza</span><span>Diseñado y desarrollado con React.</span></footer>
    </div>
  )
}
