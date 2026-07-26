import { motion } from 'framer-motion'
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  BookOpen,
  Code2,
  Download,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Send,
  Users,
  X,
} from 'lucide-react'
import { useState } from 'react'
import profilePhoto from '../assets/img/1.jpg'
import portfolioImage from '../assets/img/Portafolio.png'
import securePassImage from '../assets/img/SecurePass.png'
import bakeryImage from '../assets/img/Casita-Bakery.png'
import htmlIcon from '../assets/icon/html5.png'
import cssIcon from '../assets/icon/css3.png'
import jsIcon from '../assets/icon/js.png'
import pythonIcon from '../assets/icon/python.png'
import javaIcon from '../assets/icon/java.png'
import sqlIcon from '../assets/icon/sql.png'
import githubIcon from '../assets/icon/github.png'
import linkedinIcon from '../assets/icon/linkedin.png'
import instagramIcon from '../assets/icon/instagram.png'
import emailIcon from '../assets/icon/correo.png'

const navItems = [
  ['Inicio', '#inicio'],
  ['Sobre mí', '#sobre-mi'],
  ['Proyectos', '#proyectos'],
  ['Experiencia', '#experiencia'],
  ['Habilidades', '#habilidades'],
  ['Contacto', '#contacto'],
]

const values = [
  { icon: Code2, title: 'Enfoque', text: 'Soluciones estables, seguras y orientadas a las necesidades del negocio.' },
  { icon: Rocket, title: 'Experiencia', text: 'Administración de plataformas empresariales on-premise y cloud.' },
  { icon: Lightbulb, title: 'Aprendizaje', text: 'Actualización constante en infraestructura, bases de datos y desarrollo.' },
]

const programmingLanguages = [
  { name: 'HTML', image: htmlIcon },
  { name: 'CSS', image: cssIcon },
  { name: 'JavaScript', image: jsIcon },
  { name: 'Python', image: pythonIcon },
  { name: 'Java', image: javaIcon },
  { name: 'SQL', image: sqlIcon },
]

const technologies = [
  { name: 'React', label: '⚛' },
  { name: 'Node.js', label: 'JS' },
  { name: 'AWS', label: 'AWS' },
  { name: 'Oracle Cloud', label: 'OCI' },
  { name: 'Linux', label: '⌘' },
  { name: 'Oracle Database', label: 'DB' },
  { name: 'Git', label: 'Git' },
  { name: 'Docker', label: 'DK' },
  { name: 'VMware', label: 'VM' },
  { name: 'Render', label: 'R' },
]

const projects = [
  {
    title: 'Mi Portafolio',
    description: 'Portafolio profesional para presentar mi experiencia, habilidades y proyectos.',
    image: portfolioImage,
    stack: ['React', 'Vite', 'CSS'],
    repo: 'https://github.com/Mendo0729/MiPortafolio',
  },
  {
    title: 'SecurePass',
    description: 'Aplicación para generar y evaluar contraseñas y consultar filtraciones conocidas.',
    image: securePassImage,
    stack: ['Python', 'Seguridad', 'HIBP'],
    repo: 'https://github.com/Mendo0729/SecurePass',
  },
  {
    title: 'Casita Bakery',
    description: 'Sistema de gestión para apoyar la administración de un emprendimiento de repostería.',
    image: bakeryImage,
    stack: ['JavaScript', 'HTML', 'CSS'],
    repo: 'https://github.com/Mendo0729/Casita_Bakery',
    demo: 'https://mendo0729.github.io/Casita_Bakery/',
  },
]

function Label({ children }) {
  return <div className="section-label"><span />{children}</div>
}

function SkillGrid({ items }) {
  return (
    <div className="skills-grid">
      {items.map(skill => (
        <div className="skill-card" key={skill.name}>
          {skill.image ? <img src={skill.image} alt={skill.name} /> : <span className="skill-symbol">{skill.label}</span>}
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#inicio" className="logo" aria-label="Inicio"><Code2 /></a>
        <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="cv-button desktop-cv" href="/assets/CV%20Abdiel%20Mendoza.pdf" download>
          Descargar CV <Download size={15} />
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <motion.div className="hero-content" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            <span className="hello">¡Hola! Soy</span>
            <h1>Abdiel Mendoza</h1>
            <h2>Analista de Sistemas</h2>
            <p>Administro, soporte y monitoreo plataformas tecnológicas empresariales en entornos on-premise y cloud, con enfoque en continuidad, seguridad y disponibilidad.</p>
            <div className="hero-buttons">
              <a href="#proyectos" className="primary-button">Ver proyectos <ArrowRight size={17} /></a>
              <a href="#contacto" className="outline-button">Contáctame <Mail size={17} /></a>
            </div>
            <div className="social-icons">
              <a href="https://github.com/Mendo0729" target="_blank" rel="noreferrer"><img src={githubIcon} alt="GitHub" /></a>
              <a href="https://www.linkedin.com/in/abdiel-mendoza-8b476b320/" target="_blank" rel="noreferrer"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/abdiel2922/" target="_blank" rel="noreferrer"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="mailto:abdielmendoza2906@gmail.com"><img src={emailIcon} alt="Correo" /></a>
            </div>
          </motion.div>

          <motion.div className="hero-visual" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .75, delay: .12 }}>
            <div className="purple-orb" />
            <div className="dot-pattern" />
            <img src={profilePhoto} alt="Abdiel Mendoza" />
          </motion.div>
        </section>

        <section className="about section-block" id="sobre-mi">
          <div className="about-copy">
            <Label>Sobre mí</Label>
            <h2>Conoce un poco más</h2>
            <p>Analista de Sistemas con experiencia en la administración, soporte y monitoreo de plataformas tecnológicas en entornos on-premise y cloud.</p>
            <p>Trabajo con Oracle Linux, Oracle Database, Oracle WebLogic Server, Oracle Forms & Reports, Oracle Cloud Infrastructure y Amazon Web Services. He colaborado en proyectos de migración, implementación, actualización y soporte de ambientes empresariales, incluyendo Oracle ASM, Data Guard, middleware Oracle y soluciones de alta disponibilidad.</p>
          </div>
          <div className="value-grid">
            {values.map(({ icon: Icon, title, text }) => (
              <article className="value-card" key={title}>
                <div className="icon-box"><Icon size={23} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-block" id="habilidades">
          <Label>Habilidades</Label>
          <h2>Conocimientos técnicos</h2>

          <div className="skill-group">
            <div className="skill-group-heading">
              <Code2 size={19} />
              <div>
                <h3>Lenguajes que manejo</h3>
                <p>Lenguajes de programación y tecnologías base utilizadas en mis proyectos.</p>
              </div>
            </div>
            <SkillGrid items={programmingLanguages} />
          </div>

          <div className="skill-group">
            <div className="skill-group-heading">
              <BookOpen size={19} />
              <div>
                <h3>Tecnologías y plataformas</h3>
                <p>Herramientas, plataformas cloud, sistemas operativos e infraestructura con los que he trabajado.</p>
              </div>
            </div>
            <SkillGrid items={technologies} />
          </div>
        </section>

        <section className="projects section-block" id="proyectos">
          <Label>Proyectos</Label>
          <h2>Algunos de mis trabajos</h2>
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}>
                <img className="project-cover" src={project.image} alt={project.title} />
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-actions">
                    <a href={project.repo} target="_blank" rel="noreferrer">Código <ArrowUpRight size={16} /></a>
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo <ArrowUpRight size={16} /></a>}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="experience section-block" id="experiencia">
          <Label>Experiencia</Label>
          <h2>Mi trayectoria</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <h3>Analista de Sistemas</h3>
                <p><strong>Solusoft · Jornada completa</strong></p>
                <p>Administración, soporte y monitoreo de plataformas tecnológicas empresariales en entornos on-premise y cloud. Gestión de Oracle Linux, Oracle Database, Oracle WebLogic Server, Oracle Forms & Reports, OCI y AWS.</p>
                <p>Participación en migraciones, implementaciones, actualizaciones, aplicación de parches, resolución de incidencias y soporte de soluciones de alta disponibilidad, Oracle ASM, Data Guard y middleware Oracle.</p>
              </div>
              <time>Sept. 2025 — actualidad</time>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <h3>Desarrollador Freelancer</h3>
                <p><strong>Trabajo independiente</strong></p>
                <p>Desarrollo de aplicaciones web, automatizaciones y soluciones digitales para proyectos personales, pequeños negocios y clientes independientes. También realizo mantenimiento, soporte técnico y mejoras evolutivas sobre sistemas existentes.</p>
              </div>
              <time>2022 — actualidad</time>
            </div>
            <div className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <h3>Extractor de Datos</h3>
                <p><strong>Multipuntos Tecnologías S.A. · Jornada completa</strong></p>
                <p>Extracción y validación de datos geográficos utilizando software especializado, asegurando la integridad, precisión y calidad de la información recopilada.</p>
              </div>
              <time>Sept. 2024 — dic. 2024</time>
            </div>
          </div>
        </section>

        <section className="contact section-block" id="contacto">
          <div className="contact-info">
            <Label>Contacto</Label>
            <h2>Hablemos</h2>
            <p>¿Tienes un proyecto en mente o quieres colaborar? Estoy disponible para nuevas oportunidades.</p>
            <a href="mailto:abdielmendoza2906@gmail.com"><Mail size={17} /> abdielmendoza2906@gmail.com</a>
            <span><MapPin size={17} /> Colón, Panamá</span>
            <span><Users size={17} /> Disponible para colaborar</span>
          </div>
          <form className="contact-form" action="mailto:abdielmendoza2906@gmail.com" method="post" encType="text/plain">
            <div className="form-row"><input name="nombre" placeholder="Nombre" required /><input type="email" name="email" placeholder="Email" required /></div>
            <input name="asunto" placeholder="Asunto" required />
            <textarea name="mensaje" placeholder="Mensaje" rows="5" required />
            <button type="submit">Enviar mensaje <Send size={16} /></button>
          </form>
        </section>
      </main>

      <footer>
        <span>© 2026 Abdiel Mendoza. Todos los derechos reservados.</span>
      </footer>
      <a className="back-top" href="#inicio" aria-label="Volver arriba"><ArrowUp size={17} /></a>
    </div>
  )
}