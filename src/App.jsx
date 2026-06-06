import { createElement, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Moon, Sun } from "lucide-react";

const Motion = motion;

const resumeUrl =
  "https://drive.google.com/file/d/1EV7j6v1AqeVic54YIpfWG94guPpH6B84/view?usp=sharing";
const transcriptUrl =
  "https://drive.google.com/file/d/1uSwKV8XJ4xjsUTqb2Gu5kiAunX_YQH0U/view?usp=sharing";

const projects = [
  {
    title: "Resumatica",
    description:
      "AI-powered resume builder for tailored applications, ATS checks, keyword optimization, and clean PDF exports.",
    year: "2026",
    type: "Web",
    link: "https://resumatica.com",
    repo: null,
    image: "/images/resumatica.png",
  },
  {
    title: "AI Mushroom Classifier",
    description:
      "Real-time species recognition app using a custom deep learning model and transfer learning.",
    year: "2025",
    type: "ML",
    link: "https://ai-mushroom-classifier-r2ed.vercel.app/",
    repo: "https://github.com/devanshkp/ai-mushroom-classifier",
    image: "/images/mushroom-classifier.png",
  },
  {
    title: "Synapse",
    description:
      "Mobile quiz app with secure auth, social features, contextual hints, and 4,000+ questions.",
    year: "2024",
    type: "Mobile",
    link: "https://github.com/devanshkp/synapse-quiz-app",
    repo: "https://github.com/devanshkp/synapse-quiz-app",
    image: "/images/synapse.png",
  },
  {
    title: "Forge",
    description:
      "Offline-first workout tracker with progress insights, routine planning, and local-first logging.",
    year: "2025",
    type: "WIP",
    link: "https://github.com/devanshkp/workout-tracker",
    repo: "https://github.com/devanshkp/workout-tracker",
    image: "/images/forge.png",
  },
];

const experience = [
  {
    company: "Westpac",
    role: "Software Engineer",
    period: "Nov 2025 - Current",
    description:
      "Leading AI initiatives and system architecture within the UNITE space.",
  },
  {
    company: "aka studio",
    role: "Software Engineer Intern",
    period: "Mar 2024 - Jun 2024",
    description:
      "Developed interactive UI components, product features, and core workflows.",
  },
];

const education = {
  institution: "Griffith University",
  degree: "Bachelor of Computer Science, Software Development major",
  period: "Mar 2022 - Jul 2025",
  gpa: "GPA: 6.54/7",
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/devanshkp/",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/devansh-kapoor/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:devansh.kp@outlook.com",
    icon: Mail,
  },
];

function AsciiBackdrop() {
  const rows = [
    "::::::+===---::::::::::::::......::::::---===++++:::::::.......:::::::---====+++:::::::......::::::---===++++:::::::",
    "----:::::::::::::::----::::......::::::++++++:::::::::::.......:::::::+++++++::::---::::......::::::++++++::::::::::",
    "::::::......+++++++::::::::::::::......::::::::::::::++++++::::......::::::::::::::++++++::::......::::::::::::::+++",
    "==---:::::::......::::::::---====++++:::::::......::::::::::::::---===++++:::::::......::::::::---====++++:::::::...",
    "::::::+++++++:::::::......::::::::::::::++++++::::......::::::::::::::++++++::::......::::::::::::::++++++::::.....",
    "::::::---===++++:::::::......::::::::---====+++:::::::......::::::::---====+++:::::::......::::::::---====+++::::::",
    "::::::::::::......::::::+++++++::::::::::::......::::::+++++++::::::::::::......::::::+++++++::::::::::::......::::",
    "----:::::::++++++:::::::......::::::::::::::++++++::::......::::::::::::::++++++::::......::::::::::::::++++++::::",
  ];
  const tile = rows
    .map((row) => `${row}....${row}....${row}....${row}....${row}`)
    .join("\n");
  const repeated = `${tile}\n${tile}\n${tile}\n${tile}\n${tile}`;

  return (
    <pre className="ascii-backdrop" aria-hidden="true">
      {repeated}
    </pre>
  );
}

function Section({ eyebrow, children, className = "", id }) {
  const prefersReduced = useReducedMotion();

  return (
    <Motion.section
      id={id}
      className={`section ${className}`}
      initial={{ opacity: 0, y: prefersReduced ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="section-heading">
        <h2>{eyebrow}</h2>
      </div>
      {children}
    </Motion.section>
  );
}

function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const activeProject = projects[hoveredIndex] ?? projects[0];

  return (
    <div className="project-showcase">
      <div className="featured-project">
        <Motion.img
          key={activeProject.title}
          src={activeProject.image}
          alt={`${activeProject.title} preview`}
          initial={{ opacity: 0, scale: 1.025 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            className="project-row"
            onMouseEnter={() => setHoveredIndex(index)}
            onTouchStart={() => setHoveredIndex(index)}
            onFocus={() => setHoveredIndex(index)}
          >
            <span className="project-year">{project.year}</span>
            <span className="project-copy">
              <strong>
                {project.title}
                <ArrowUpRight aria-hidden="true" />
              </strong>
              <span>{project.description}</span>
            </span>
            <span className="project-type">{project.type}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [isLight, setIsLight] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    document.documentElement.classList.toggle("light-theme", isLight);
    const color = isLight ? "#f3f3f0" : "#0a0a0a";
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", color);
    document.documentElement.style.backgroundColor = color; // add this
  }, [isLight]);

  useEffect(() => {
    document.documentElement.classList.toggle("light-theme", isLight);
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", isLight ? "#f3f3f0" : "#0a0a0a");
    });
  }, [isLight]);

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="site-shell">
      <Motion.main
        id="top"
        className="page"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <Motion.section className="intro" variants={itemVariants}>
          <AsciiBackdrop />

          <div className="profile-lockup">
            <div>
              <h1>Devansh Kapoor</h1>
              <p>Software Engineer @ Westpac</p>
            </div>
          </div>

          <div className="intro-copy">
            <p>
              Building functional, scalable web experiences with a{" "}
              <em>designer's eye.</em>
            </p>
            <p>
              I focus on polished interfaces, thoughtful interactions, and
              reliable engineering across modern web, mobile, and AI products.
            </p>
            <p>
              Previously, I have crafted product interfaces, machine learning
              tools, and mobile experiences. View my{" "}
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <span>resume</span>
                <ArrowUpRight aria-hidden="true" />
              </a>{" "}
              to learn more about my experience, or jump to my{" "}
              <a href="#work">
                <span>selected work</span>
              </a>
              .
            </p>
          </div>
        </Motion.section>

        <Section eyebrow="projects" className="wide" id="work">
          <ProjectShowcase />
        </Section>

        <Section eyebrow="work">
          <div className="timeline">
            {experience.map((job) => (
              <article key={job.company} className="timeline-item">
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <span>{job.period}</span>
                <p>{job.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section eyebrow="education">
          <article className="education-card">
            <div>
              <h3>{education.institution}</h3>
              <p>{education.degree}</p>
              <span>{education.gpa}</span>
            </div>
            <span>{education.period}</span>
            <a href={transcriptUrl} target="_blank" rel="noopener noreferrer">
              <span>Academic transcript</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </article>
        </Section>

        <Section eyebrow="about" id="about">
          <div className="about-copy">
            <p>
              I’m based on the Gold Coast and like building things that are
              useful, polished, and well put together. Lately I’ve been working
              across full-stack tools, mobile apps, machine learning
              experiments, and automation.
            </p>
            <p>
              Outside of coding, I’m usually at the gym or winding down with
              games and shows. Always happy to chat about product ideas,
              collaboration, or a good technical rabbit hole.
            </p>
          </div>
        </Section>

        <Section eyebrow="connect" className="contact-section" id="contact">
          <div className="social-grid">
            {socials.map(({ label, href, icon }) => (
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  href.startsWith("mailto:") ? undefined : "noopener noreferrer"
                }
                key={label}
              >
                <span>{label}</span>
                {createElement(icon, { "aria-hidden": true })}
              </a>
            ))}
          </div>
        </Section>
      </Motion.main>

      <footer className="footer">
        <span>2026 / Devansh Kapoor</span>
        <a href="mailto:devansh.kp@outlook.com">devansh.kp@outlook.com</a>
      </footer>

      <nav className="dock-nav" aria-label="Floating navigation">
        <a href="#top" aria-label="Profile">
          <span>Profile</span>
        </a>
        <a href="#work">
          <span>Projects</span>
        </a>
        <a href="#about">
          <span>About</span>
        </a>
        <a href="#contact">
          <span>Contact</span>
        </a>
        <button
          type="button"
          aria-label="Toggle theme"
          onClick={() => setIsLight((value) => !value)}
        >
          {isLight ? <Sun /> : <Moon />}
        </button>
      </nav>
    </div>
  );
}

export default App;
