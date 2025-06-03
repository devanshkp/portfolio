import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  ArrowUp,
} from "lucide-react";

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Trigger fade-in animation
    setTimeout(() => setIsLoaded(true), 100);

    // Handle scroll for scroll-to-top button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(timer);
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
        "Developed a full-stack web application for real-time mushroom species identification using a custom-trained deep learning model and an interactive React frontend.",
      tech: ["React", "Tailwind CSS", "Flask", "TensorFlow", "AWS"],
      link: "https://ai-mushroom-classifier-r2ed.vercel.app/",
    },
    {
      title: "Synapse (Mobile Quiz App)",
      description:
        "Built a mobile quiz application in Flutter with a Firebase backend, featuring secure user authentication, automated question collection via web scraping, and AI-generated hints.",
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

  const workExperience = [
    {
      company: "aka studio",
      role: "Software Engineer Intern",
      period: "Mar 2024 - Jun 2024",
      description:
        "As a Software Engineer Intern, I enhanced UI responsiveness and mobile usability through user-centric design, and improved core functionalities like colour detection accuracy with advanced algorithms and integrated personalized features.",
    },
  ];

  return (
    <div className="min-h-screen font-mono bg-background-primary text-text-primary">
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-background-nav border-b border-border-primary">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-sm font-bold">Portfolio.</div>
            <div className="hidden md:flex space-x-8 text-sm">
              <a
                href="#about"
                className="transition-colors text-text-primary hover:text-text-secondary"
              >
                About
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
              <a
                href="#contact"
                className="transition-colors text-text-primary hover:text-text-secondary"
              >
                Contact
              </a>
            </div>
            <div className="text-xs text-text-muted">
              {formatTime(currentTime)}
            </div>
          </div>
        </nav>

        {/* Main Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-tight">
                Devansh Kapoor
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-text-muted">
                Software Engineer
              </p>
              <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-text-subtle">
                I am a software engineer, ui/ux designer, problem solver,
                mentor, ML enthusiast, forever student, minimalist, and an
                eternal optimist.
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://github.com/devanshkp/"
                className="p-3 rounded-full transition-colors group border border-border-secondary hover:border-text-primary"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/devansh-kapoor/"
                className="p-3 rounded-full transition-colors group border border-border-secondary hover:border-text-primary"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:hello@devansh.kp@outlook.com"
                className="p-3 rounded-full transition-colors group border border-border-secondary hover:border-text-primary"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full transition-all duration-300 group border border-border-secondary hover:bg-text-primary hover:text-background-primary inline-flex items-center justify-center"
            >
              Let's work together
              <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform text-current" />
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="leading-relaxed mb-6 text-text-muted">
                  I love to both build and break things. I am motivated by
                  challenging projects with self-guided research and dynamic
                  problem solving. My recent focus has been on Machine Learning
                  work, exploring innovative solutions.
                </p>
                <p className="leading-relaxed text-text-muted">
                  This is my personal space, where I share my work and projects,
                  documenting my progress and showcasing my capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">
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

        {/* Work Experience */}
        <section id="work" className="py-20 px-6 bg-background-secondary">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Work</h2>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="pl-6 transition-colors border-l border-border-secondary hover:border-border-active"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <h3 className="text-lg font-semibold">{job.company}</h3>
                    <span className="text-sm text-text-muted">
                      {job.period}
                    </span>
                  </div>
                  <p className="mb-2 text-text-secondary">{job.role}</p>
                  <p className="text-sm text-text-muted">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold">Projects</h2>
              <a
                href="https://github.com/devanshkp?tab=repositories"
                className="text-sm transition-colors text-text-muted hover:text-text-primary"
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
                    {" "}
                    {/* Added anchor tag here */}
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 transition-colors text-text-muted group-hover:text-text-secondary" />{" "}
                      {/* Added group-hover to icon */}
                    </div>
                  </a>{" "}
                  {/* Closed anchor tag */}
                  <p className="mb-4 text-text-muted">{project.description}</p>
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

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-background-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Let's start working together!
            </h2>
            <div className="mb-8">
              <p className="mb-2 text-text-muted">Contact Details</p>
              <a
                href="mailto:hello@devansh.kp@outlook.com"
                className="text-lg transition-colors text-text-primary hover:text-text-secondary"
              >
                devansh.kp@outlook.com
              </a>
              <p className="text-sm mt-2 text-text-subtle">
                Available for work
              </p>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/devansh-kapoor/"
                className="transition-colors text-text-muted hover:text-text-primary"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/devanshkp"
                className="transition-colors text-text-muted hover:text-text-primary"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-border-primary">
          <div className="max-w-4xl mx-auto flex justify-between items-center text-sm text-text-subtle">
            <p>© 2025 • Crafted with ♥ using React</p>
            <p>Expected Graduation - July, 2025</p>
          </div>
        </footer>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-300 border-2 border-text-primary backdrop-blur-sm bg-background-nav hover:border-text-primary hover:bg-text-primary hover:text-background-primary group ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default Home;
