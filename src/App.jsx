import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  ChevronUp,
  Code,
  Clock3,
  Construction,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Sparkles,
  Sun,
} from "lucide-react";

const SectionHeader = ({ label, title, action }) => (
  <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
    <div>
      <p className="section-eyebrow">{label}</p>
      <h2 className="section-heading mt-2">{title}</h2>
    </div>
    {action}
  </div>
);

const TimelineItem = ({ title, subtitle, period, children }) => (
  <div className="grid gap-2 border-b border-border/70 pb-6 last:border-b-0 md:grid-cols-[1fr_auto] md:gap-8">
    <div>
      <h3 className="font-display text-xl text-text-primary">{title}</h3>
      <p className="mt-1 text-sm text-text-muted">{subtitle}</p>
      <div className="mt-3 text-text-secondary">{children}</div>
    </div>
    <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted md:pt-1 md:text-right">
      {period}
    </p>
  </div>
);

const SocialButton = ({ href, label, Icon, isEmail = false }) => (
  <motion.a
    href={href}
    target={isEmail ? undefined : "_blank"}
    rel={isEmail ? undefined : "noopener noreferrer"}
    aria-label={label}
    whileHover={{ y: -3 }}
    whileTap={{ scale: 0.98 }}
    className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-secondary bg-bg-tertiary text-text-secondary transition-colors duration-300 hover:border-accent-solid hover:text-text-primary"
  >
    <Icon className="h-4 w-4 transition-transform duration-300 group-hover:rotate-6" />
  </motion.a>
);

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return !window.matchMedia("(prefers-color-scheme: light)").matches;
  });

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
    }
  }, [isDarkMode]);

  const skills = [
    "Product-Minded Software Engineer",
    "Web + Mobile Systems Builder",
    "Automation and AI Prototyper",
  ];

  const navItems = ["About", "Education", "Work", "Projects"];

  const aboutTools = [
    "React",
    "TypeScript",
    "Flutter",
    "Flask",
    "Firebase",
    "PostgreSQL",
    "TensorFlow",
    "AWS",
  ];

  useEffect(() => {
    const clockTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const skillTimer = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3200);

    setTimeout(() => setIsLoaded(true), 80);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      const progressBar = document.getElementById("scroll-progress");

      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }

      setShowScrollTop(scrollTop > 360);
      setShowScrollDown(scrollTop < 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(clockTimer);
      clearInterval(skillTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const appleStatusBar = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    );

    if (isDarkMode) {
      metaThemeColor?.setAttribute("content", "#070b14");
      appleStatusBar?.setAttribute("content", "black-translucent");
    } else {
      metaThemeColor?.setAttribute("content", "#f3f7ff");
      appleStatusBar?.setAttribute("content", "default");
    }
  }, [isDarkMode]);

  const formatTime = (date) => {
    const timePart = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "Australia/Brisbane",
    });
    return `${timePart} AEST`;
  };

  const scrollToTop = () => {
    setIsScrolling(true);
    const onScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolling(false);
        document.activeElement.blur();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const easing = [0.22, 1, 0.36, 1];

  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.08,
        delayChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 26 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0.2 : 0.62, ease: easing },
    },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.55, ease: easing } },
  };

  const projects = [
    {
      title: "AI Mushroom Classifier",
      description:
        "Real-time species recognition platform using a custom transfer-learning model, packaged into a clean browser workflow.",
      link: "https://ai-mushroom-classifier-r2ed.vercel.app/",
      git: "https://github.com/devanshkp/ai-mushroom-classifier",
      live: true,
      inDevelopment: false,
      image: "/images/mushroom-classifier.png",
      techLogos: [
        { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
        { name: "React", logo: "/logos/react.svg" },
        {
          name: "Flask",
          logo: isDarkMode ? "/logos/flask.svg" : "/logos/flask-black.svg",
        },
        { name: "AWS", logo: "/logos/aws.svg" },
      ],
    },
    {
      title: "Synapse",
      description:
        "Mobile quiz ecosystem with secure auth, social mechanics, and 4,000+ questions powered by intelligent hinting.",
      link: "https://github.com/devanshkp/synapse-quiz-app",
      git: "https://github.com/devanshkp/synapse-quiz-app",
      live: false,
      inDevelopment: false,
      image: "/images/synapse.png",
      techLogos: [
        { name: "Flutter", logo: "/logos/flutter.svg" },
        { name: "Python", logo: "/logos/python.svg" },
        { name: "Firebase", logo: "/logos/firebase.svg" },
        { name: "Gemini API", logo: "/logos/gemini.svg" },
      ],
    },
    {
      title: "Forge",
      description:
        "Offline-first workout tracker with progress analytics, custom routines, and a production-ready mobile architecture.",
      link: "https://github.com/devanshkp/workout-tracker",
      git: "https://github.com/devanshkp/workout-tracker",
      live: false,
      inDevelopment: true,
      image: "/images/forge.png",
      techLogos: [
        { name: "React Native", logo: "/logos/react.svg" },
        { name: "Expo", logo: "/logos/expo.svg" },
        { name: "TypeScript", logo: "/logos/typescript.svg" },
        {
          name: "SQLite",
          logo: isDarkMode ? "/logos/sqlite-lighter.svg" : "/logos/sqlite.svg",
        },
      ],
    },
  ];

  const education = [
    {
      institution: "Griffith University",
      degree: "Bachelor of Computer Science, Software Development major",
      period: "Mar 2022 — Jul 2025",
      gpa: "GPA: 6.54/7",
      misc: [
        "Groups: Griffith ICT Club, Griffith Coding Club",
        "Coursework: Advanced Algorithms and Data Structures, Machine Learning & Intelligent Systems, Web Development, DevSecOps, Object-Oriented Programming with C++",
      ],
    },
  ];

  const workExperience = [
    {
      company: "Westpac",
      role: "Software Engineer",
      period: "Nov 2025 — Current",
      description:
        "Contributing to banking platform development, collaborating across teams, and shipping reliable features with strong engineering standards.",
    },
    {
      company: "aka studio",
      role: "Software Engineer Intern",
      period: "Mar 2024 — Jun 2024",
      description:
        "Redesigned and shipped interactive UI components, integrated personalization features, and supported validation workflows for stable releases.",
    },
  ];

  return (
    <div className="app-shell relative min-h-screen overflow-x-hidden font-sans text-text-primary transition-colors duration-500">
      <div className="mesh-bg pointer-events-none absolute inset-0" />
      <div className="grid-fade pointer-events-none absolute inset-0" />
      <div className="noise-texture pointer-events-none absolute inset-0" />

      <div className="relative z-10">
        <motion.nav
          variants={fade}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-5"
        >
          <div className="mx-auto max-w-6xl">
            <div className="glass-panel relative overflow-hidden rounded-2xl border border-border-secondary/90">
              <div
                id="scroll-progress"
                className="absolute bottom-0 left-0 h-[2px]"
                style={{
                  width: "0%",
                  background: "var(--accent-gradient)",
                  transition: "width 0.12s ease-out",
                }}
              />

              <div className="relative flex items-center justify-between gap-4 px-4 py-3 md:px-6 md:py-4">
                <a
                  href="#hero"
                  className="group inline-flex items-center gap-3 rounded-xl transition-opacity hover:opacity-100"
                >
                  <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-border-secondary bg-bg-tertiary">
                    <img
                      src={isDarkMode ? "/logos/cat.svg" : "/logos/cat-black.svg"}
                      alt="Cat logo"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="hidden md:block">
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-text-muted">
                      Devansh Kapoor
                    </p>
                    <p className="font-display text-sm text-text-secondary">
                      Software Engineer
                    </p>
                  </div>
                </a>

                <div className="hidden items-center gap-1 rounded-full border border-border-secondary bg-bg-tertiary/70 p-1 md:flex">
                  {navItems.map((item) => (
                    <a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted transition-colors duration-300 hover:bg-bg-quaternary hover:text-text-primary"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <div className="hidden items-center gap-2 rounded-full border border-border-secondary bg-bg-tertiary/75 px-3 py-1.5 sm:flex">
                    <Clock3 className="h-3.5 w-3.5 text-accent-secondary-solid" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-text-muted">
                      {formatTime(currentTime)}
                    </span>
                  </div>

                  <button
                    onClick={() => setIsDarkMode((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-secondary bg-bg-tertiary text-text-secondary transition-colors duration-300 hover:border-border-strong hover:text-text-primary"
                    aria-label="Toggle theme"
                  >
                    {isDarkMode ? (
                      <Moon className="h-4 w-4" />
                    ) : (
                      <Sun className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.nav>
        <section id="hero" className="relative pb-16 pt-32 md:pb-24 md:pt-40">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="grid items-end gap-10 lg:grid-cols-[1.28fr_0.72fr]"
            >
              <div>
                <motion.div
                  variants={fadeUp}
                  className="hero-chip inline-flex items-center gap-2"
                >
                  <Sparkles className="h-3.5 w-3.5 text-accent-solid" />
                  <span>Designing useful software with personality</span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-6 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-text-primary sm:text-6xl lg:text-7xl"
                >
                  Devansh{" "}
                  <span className="text-gradient-accent inline-block">Kapoor</span>
                </motion.h1>

                <motion.div variants={fadeUp} className="mt-5 min-h-[2.1rem]">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={skills[currentSkill]}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
                      transition={{ duration: reduceMotion ? 0.2 : 0.35 }}
                      className="font-mono text-xs uppercase tracking-[0.22em] text-text-muted"
                    >
                      {skills[currentSkill]}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-text-secondary"
                >
                  CS grad from Griffith building interfaces and systems that feel
                  intentional, fast, and genuinely helpful. I focus on end-to-end
                  product execution from UX details to production reliability.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-10 flex flex-wrap items-center gap-3"
                >
                  <a
                    href="https://drive.google.com/file/d/1EV7j6v1AqeVic54YIpfWG94guPpH6B84/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[#051018] transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    View Resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-xl border border-border-secondary bg-bg-secondary px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary transition-colors duration-300 hover:border-border-strong hover:text-text-primary"
                  >
                    Explore Projects
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-9 flex items-center gap-3">
                  <SocialButton
                    href="https://github.com/devanshkp/"
                    label="GitHub"
                    Icon={Github}
                  />
                  <SocialButton
                    href="https://www.linkedin.com/in/devansh-kapoor/"
                    label="LinkedIn"
                    Icon={Linkedin}
                  />
                  <SocialButton
                    href="mailto:devansh.kp@outlook.com"
                    label="Email"
                    Icon={Mail}
                    isEmail
                  />
                </motion.div>
              </div>

              <motion.aside
                variants={fadeUp}
                className="glass-panel rounded-3xl border border-border-secondary p-6 md:p-7"
              >
                <p className="section-eyebrow">Snapshot</p>
                <div className="mt-5 grid gap-3">
                  <div className="stat-tile">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                      Location
                    </p>
                    <p className="mt-1 text-text-secondary">
                      Gold Coast, Queensland
                    </p>
                  </div>
                  <div className="stat-tile">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                      Focus
                    </p>
                    <p className="mt-1 text-text-secondary">
                      Product engineering, mobile systems, machine learning
                    </p>
                  </div>
                  <div className="stat-tile">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
                      Availability
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-accent-secondary-solid" />
                      <p className="text-sm text-text-secondary">
                        Open to new opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </motion.aside>
            </motion.div>

            <motion.button
              variants={fadeUp}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className={`mx-auto mt-12 flex items-center gap-2 rounded-full border border-border-secondary bg-bg-secondary px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted transition-all duration-300 ${
                showScrollDown
                  ? "opacity-100 translate-y-0"
                  : "pointer-events-none opacity-0 translate-y-2"
              }`}
            >
              Scroll
              <ArrowDown className="h-3.5 w-3.5 text-accent-solid" />
            </motion.button>
          </div>
        </section>
        <motion.main
          variants={fadeUp}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="mx-auto max-w-6xl space-y-8 px-4 pb-24 sm:px-6 md:space-y-10"
        >
          <section id="about" className="section-shell rounded-3xl p-6 md:p-10">
            <SectionHeader label="Profile" title="About" />
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
              <div className="space-y-5 leading-relaxed text-text-secondary">
                <p>
                  I build full-stack products with a strong focus on UX clarity,
                  system design, and performance. My work spans web, mobile, and
                  machine-learning assisted tools.
                </p>
                <p>
                  I care about product feel just as much as architecture: good
                  interfaces, thoughtful motion, and dependable engineering under
                  real-world constraints.
                </p>
                <p>
                  Outside coding, I am usually exploring new developer tooling,
                  lifting at the gym, or iterating on side ideas that blend
                  practical utility with polished design.
                </p>
              </div>
              <div className="rounded-2xl border border-border-secondary bg-bg-tertiary/70 p-5">
                <p className="section-eyebrow">Primary Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {aboutTools.map((tool) => (
                    <span
                      key={tool}
                      className="inline-flex items-center rounded-lg border border-border-secondary bg-bg-secondary px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-text-secondary"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="education" className="section-shell rounded-3xl p-6 md:p-10">
            <SectionHeader
              label="Academic"
              title="Education"
              action={
                <a
                  href="https://drive.google.com/file/d/1uSwKV8XJ4xjsUTqb2Gu5kiAunX_YQH0U/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-border-secondary bg-bg-secondary px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary transition-colors duration-300 hover:text-text-primary"
                >
                  Transcript
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              }
            />

            <div className="space-y-6">
              {education.map((edu) => (
                <TimelineItem
                  key={edu.institution}
                  title={edu.institution}
                  subtitle={`${edu.degree} • ${edu.gpa}`}
                  period={edu.period}
                >
                  {edu.misc && (
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary">
                      {edu.misc.map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  )}
                </TimelineItem>
              ))}
            </div>
          </section>

          <section id="work" className="section-shell rounded-3xl p-6 md:p-10">
            <SectionHeader label="Career" title="Experience" />
            <div className="space-y-6">
              {workExperience.map((job) => (
                <TimelineItem
                  key={job.company}
                  title={job.company}
                  subtitle={job.role}
                  period={job.period}
                >
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {job.description}
                  </p>
                </TimelineItem>
              ))}
            </div>
          </section>

          <section id="projects" className="section-shell rounded-3xl p-6 md:p-10">
            <SectionHeader
              label="Builds"
              title="Projects"
              action={
                <a
                  href="https://github.com/devanshkp?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-lg border border-border-secondary bg-bg-secondary px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary transition-colors duration-300 hover:text-text-primary"
                >
                  All Repos
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              }
            />

            <div className="grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  variants={fadeUp}
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  transition={{ delay: reduceMotion ? 0 : 0.05 * index }}
                  className={`project-card group relative overflow-hidden rounded-2xl border border-border-secondary bg-bg-secondary ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`grid ${
                      index === 0 ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
                    }`}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div className="hidden h-full w-full items-center justify-center bg-bg-tertiary">
                          <div className="text-center text-text-muted">
                            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl border border-border-secondary bg-bg-secondary">
                              <Code className="h-6 w-6" />
                            </div>
                            <p className="font-display text-base">{project.title}</p>
                          </div>
                        </div>
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                        <div className="absolute right-3 top-3">
                          {project.live ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-accent-secondary-solid px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#04120f]">
                              Live
                            </span>
                          ) : project.inDevelopment ? (
                            <span className="inline-flex items-center gap-1 rounded-full bg-accent-solid px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#120805]">
                              WIP
                              <Construction className="h-3 w-3" />
                            </span>
                          ) : null}
                        </div>
                      </div>
                    </a>

                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-2xl tracking-[-0.02em] text-text-primary">
                          {project.title}
                        </h3>
                        <a
                          href={project.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-secondary bg-bg-tertiary text-text-secondary transition-colors duration-300 hover:text-text-primary"
                          aria-label={`${project.title} source code`}
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>

                      <p className="mt-3 leading-relaxed text-text-secondary">
                        {project.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.techLogos.map((tech) => (
                          <span
                            key={tech.name}
                            className="inline-flex items-center gap-2 rounded-lg border border-border-secondary bg-bg-tertiary px-2.5 py-1.5 text-xs text-text-secondary"
                          >
                            <img
                              src={tech.logo}
                              alt={tech.name}
                              className="h-3.5 w-3.5 object-contain"
                              onError={(e) => {
                                e.target.style.display = "none";
                              }}
                            />
                            {tech.name}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-gradient-accent px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#051018]"
                        >
                          Open
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                        <a
                          href={project.git}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-border-secondary bg-bg-tertiary px-3 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-text-secondary transition-colors duration-300 hover:text-text-primary"
                        >
                          Code
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        </motion.main>
        <footer className="border-t border-border-secondary bg-bg-secondary/70 py-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
                © 2026 Devansh Kapoor
              </p>
              <address className="mt-2 flex items-center gap-2 not-italic text-sm text-text-muted">
                <MapPin className="h-3.5 w-3.5" />
                Gold Coast, QLD, Australia
              </address>
            </div>
            <nav aria-label="Footer">
              <ul className="flex items-center gap-6 text-sm text-text-secondary">
                <li>
                  <a
                    href="https://github.com/devanshkp/"
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="transition-colors hover:text-text-primary"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/devansh-kapoor/"
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="transition-colors hover:text-text-primary"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:devansh.kp@outlook.com"
                    className="transition-colors hover:text-text-primary"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>

        <div className="pointer-events-none mx-auto max-w-6xl px-4 sm:px-6">
          <button
            onClick={scrollToTop}
            className={`pointer-events-auto fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-xl border border-border-secondary bg-bg-tertiary px-3 py-2 text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-text-primary ${
              showScrollTop
                ? "opacity-100 translate-y-0"
                : "pointer-events-none opacity-0 translate-y-3"
            }`}
            aria-label="Scroll to top"
            style={{
              right: `max(1.5rem, calc((100vw - min(72rem, 100vw - 3rem)) / 2))`,
            }}
          >
            <div className="relative h-5 w-5">
              <ChevronUp
                className={`absolute h-5 w-5 transition-opacity ${
                  showScrollDown || isScrolling ? "opacity-0" : "opacity-100"
                }`}
              />
              <ArrowUp
                className={`absolute h-5 w-5 transition-opacity ${
                  showScrollDown || isScrolling ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] sm:block">
              Top
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
