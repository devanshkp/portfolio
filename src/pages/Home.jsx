import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ArrowUpRight,
  ChevronUp,
  Code,
  Cpu,
  Palette,
} from "lucide-react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);

  const skills = [
    "Software Engineer",
    "UI/UX Designer",
    "ML Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Fade in animation
    setTimeout(() => setIsLoaded(true), 100);

    // Scroll to top
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    // Rotate skills
    const skillTimer = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
      clearInterval(skillTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      title: "AI Mushroom Classifier",
      description:
        "React-based application for real-time species recognition using a deep learning model.",
      tech: ["React", "Tailwind CSS", "Flask", "TensorFlow", "AWS"],
      link: "https://ai-mushroom-classifier-r2ed.vercel.app/",
    },
    {
      title: "Synapse",
      description:
        "Mobile Quiz Application, built in Flutter with a secure Firebase backend, featuring web-scraped questions and intelligent AI-generated hints.",
      tech: [
        "Flutter",
        "Firebase",
        "Google Cloud Platform",
        "Selenium",
        "BeautifulSoup",
        "Gemini API",
      ],
      link: "https://github.com/devanshkp/synapse-quiz-app",
    },
  ];

  const education = [
    {
      institution: "Griffith University",
      degree: "Bachelor of Computer Science, majoring in Software Development",
      period: "2022 - Current",
      gpa: "GPA: 6.5/7",
      misc: [
        "Groups: Griffith ICT Club, Griffith Coding Club",
        "Relevant Coursework: Advanced Algorithms and Data Structures, Machine Learning & Intelligent Systems, Web Development, DevSecOps, Object-Oriented Programming with C++",
      ],
    },
  ];

  const workExperience = [
    {
      company: "aka studio",
      role: "Software Engineer Intern",
      period: "Mar 2024 - Jun 2024",
      description:
        "As a Software Engineer Intern, I significantly improved UI/mobile usability, boosted data accuracy, and enhanced user engagement by integrating personalized features and optimizing core functionalities.",
    },
  ];

  return (
    <div className="min-h-screen font-mono text-sm bg-background-primary text-text-primary">
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background-nav border-b border-border-primary">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="font-bold">Portfolio.</div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a
                href="#about"
                className="transition-colors text-text-primary hover:text-text-secondary"
              >
                About
              </a>
              <a
                href="#education"
                className="transition-colors text-text-primary hover:text-text-secondary"
              >
                Education
              </a>
              <a
                href="#work"
                className="transition-colors text-text-primary hover:text-text-secondary"
              >
                Work
              </a>
              <a
                href="#projects"
                className="transition-colors text-text-primary hover:text-text-secondary"
              >
                Projects
              </a>
            </div>
            <div className="text-text-muted">{formatTime(currentTime)}</div>
          </div>
        </nav>

        {/* Main Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          {/* Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(148, 163, 184, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(148, 163, 184, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)",
            }}
          ></div>

          <div className="max-w-4xl mx-auto px-6 relative">
            <div className="text-center relative z-10">
              {/* Main Heading */}
              <div className="mb-12">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                  Devansh Kapoor
                </h1>
                <div className="h-8 mb-6">
                  <p
                    key={currentSkill}
                    className="text-xl md:text-2xl text-text-muted animate-pulse"
                  >
                    {skills[currentSkill]}
                  </p>
                </div>
                <p className="text-sm md:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
                  Building innovative solutions with clean code, thoughtful
                  design, and a passion for machine learning. Currently pursuing
                  Computer Science at Griffith University.
                </p>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex justify-center space-x-4 mb-12">
                <a
                  href="https://github.com/devanshkp/"
                  className="group relative p-4 rounded-full transition-all duration-300 border border-border-secondary hover:border-text-primary hover:shadow-lg hover:shadow-blue-500/20 bg-background-nav/50 backdrop-blur-sm hover:scale-110"
                  aria-label="GitHub Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background-nav px-2 py-1 rounded border border-border-secondary whitespace-nowrap">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/devansh-kapoor/"
                  className="group relative p-4 rounded-full transition-all duration-300 border border-border-secondary hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 bg-background-nav/50 backdrop-blur-sm hover:scale-110"
                  aria-label="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-blue-400" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background-nav px-2 py-1 rounded border border-border-secondary whitespace-nowrap">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="mailto:hello@devansh.kp@outlook.com"
                  className="group relative p-4 rounded-full transition-all duration-300 border border-border-secondary hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20 bg-background-nav/50 backdrop-blur-sm hover:scale-110"
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6 group-hover:scale-110 transition-transform group-hover:text-green-400" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-background-nav px-2 py-1 rounded border border-border-secondary whitespace-nowrap">
                    Email
                  </span>
                </a>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-full transition-all duration-300 group border border-border-secondary hover:bg-text-primary hover:text-background-primary inline-flex items-center justify-center hover:shadow-lg hover:scale-105 bg-background-nav/50 backdrop-blur-sm"
                >
                  Let's work together
                  <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform text-current" />
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 rounded-full transition-all duration-300 group border border-transparent hover:border-border-secondary inline-flex items-center justify-center text-text-muted hover:text-text-primary"
                >
                  View my work
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 relative">
          {/* About Section */}
          <section id="about" className="pt-20 md:pt-22">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-8">About me</h2>
              <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-25">
                <div className="md:w-9/12">
                  <p className="leading-relaxed mb-6 text-text-muted">
                    I am a software engineer, ui/ux designer, problem solver,
                    mentor, ML enthusiast, forever student, minimalist, and an
                    eternal optimist.
                  </p>
                  <p className="leading-relaxed mb-6 text-text-muted">
                    I love to both build and break things. I am motivated by
                    challenging projects with self-guided research and dynamic
                    problem solving. My recent focus has been on Machine
                    Learning work, exploring innovative solutions.
                  </p>
                  <p className="leading-relaxed text-text-muted">
                    This is my personal space, where I share my work and
                    projects, documenting my progress and showcasing my
                    capabilities.
                  </p>
                </div>
                <div className="md:w-7/12">
                  <h3 className="text-md md:text-lg font-semibold mb-4">
                    My primary tools include:
                  </h3>
                  <ul className="space-y-2 text-text-muted">
                    <li>• React.js, Flutter </li>
                    <li>• Flask </li>
                    <li>• Firebase, PostgreSQL </li>
                    <li>• Python, C/C++, Javascript </li>
                    <li>• Tensorflow, Scikit-learn, Pandas</li>
                    <li>• AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            className="pt-20 md:pt-22 bg-background-secondary"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl md:text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="pl-6 transition-colors border-l border-border-secondary hover:border-border-active"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-lg font-semibold">
                        {edu.institution}
                      </h3>
                      <span className="text-text-muted">{edu.period}</span>
                    </div>
                    <p className="text-sm mb-2 text-text-secondary">
                      {edu.degree}
                    </p>
                    {edu.gpa && (
                      <p className="text-sm mb-2 text-text-secondary font-medium">
                        {edu.gpa}
                      </p>
                    )}
                    {edu.misc && (
                      <div className="text-text-muted">
                        {edu.misc.map((item, miscIndex) => (
                          <p key={miscIndex} className="mb-1">
                            • {item}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section id="work" className="pt-20 md:pt-22 bg-background-secondary">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl md:text-2xl font-bold">Work</h2>
              </div>

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="pl-6 transition-colors border-l border-border-secondary hover:border-border-active"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h3 className="text-lg font-semibold">{job.company}</h3>
                      <span className="text-text-muted">{job.period}</span>
                    </div>
                    <p className="text-sm mb-2 text-text-secondary">
                      {job.role}
                    </p>
                    <p className="text-text-muted">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="pt-20 md:pt-22">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl md:text-2xl font-bold">Projects</h2>
                <a
                  href="https://github.com/devanshkp?tab=repositories"
                  className="transition-colors text-text-muted hover:text-text-primary"
                >
                  See more projects →
                </a>
              </div>

              <div className="grid gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-[1.02] border border-border-primary hover:border-border-hover"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg md:text-xl font-semibold group-hover:text-text-secondary transition-colors">
                          {project.title}
                        </h3>
                        <ArrowUpRight className="w-5 h-5 transition-colors text-text-muted group-hover:text-text-secondary" />{" "}
                      </div>
                    </a>{" "}
                    <p className="mb-4 text-text-muted">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs bg-accent-tag text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-60 py-10">
            <div className="text-text-subtle">
              <p>© 2025 | Devansh Kapoor</p>
            </div>
          </footer>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 z-50 rounded-sm transition-all duration-300 border border-border-secondary backdrop-blur-sm bg-background-nav hover:border-text-primary hover:bg-text-primary hover:text-background-primary group inline-flex items-center px-2 py-2 gap-x-2 text-text-secondary ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          style={{
            right: `max(1.5rem, calc((100vw - min(48rem, 100vw - 3rem)) / 2))`,
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
          Back to top
        </button>
      </div>
    </div>
  );
};

export default Home;
