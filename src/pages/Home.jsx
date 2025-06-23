import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ArrowUpRight,
  ChevronUp,
  ChevronDown,
  Code,
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
    const onScroll = () => {
      if (window.scrollY === 0) {
        document.activeElement.blur();
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      title: "AI Mushroom Classifier",
      description:
        "React-based application for real-time species recognition using a custom-trained deep learning model.",
      tech: ["React", "Tailwind CSS", "Flask", "TensorFlow", "AWS"],
      link: "https://ai-mushroom-classifier-r2ed.vercel.app/",
      live: true,
      image: "/images/mushroom-classifier-preview.png",
      techLogos: [
        { name: "TensorFlow", logo: "/logos/tensorflow.svg" },
        { name: "React", logo: "/logos/react.svg" },
        { name: "Flask", logo: "/logos/flask.svg" },
        { name: "AWS", logo: "/logos/aws.svg" },
      ],
    },
    {
      title: "Synapse",
      description:
        "Mobile Quiz Application with secure authentication, social features, web-scraped questions, and AI-generated hints.",
      tech: [
        "Flutter",
        "Selenium",
        "BeautifulSoup",
        "Firebase",
        "Google Cloud Platform",
        "Gemini API",
      ],
      link: "https://github.com/devanshkp/synapse-quiz-app",
      live: false,
      image: "/images/synapse-preview.png",
      techLogos: [
        { name: "Flutter", logo: "/logos/flutter.svg" },
        { name: "Python", logo: "/logos/python.svg" },
        { name: "Firebase", logo: "/logos/firebase.svg" },
        { name: "Gemini API", logo: "/logos/gemini.svg" },
      ],
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
    <div className="min-h-screen font-vulfsans bg-background-primary text-text-primary relative overflow-x-hidden">
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } relative z-10`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-black/25 border-b border-border-primary">
          <div className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
            <img
              src={"/logos/cat.svg"}
              alt={`Cat logo`}
              className="w-5 h-5 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden md:flex space-x-8">
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

          <div className="max-w-3xl mx-auto px-6 relative">
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
                <p className=" text-text-muted max-w-2xl mx-auto leading-relaxed">
                  Building innovative solutions with clean code, thoughtful
                  design, and a passion for machine learning. Currently pursuing
                  Computer Science at Griffith University.
                </p>
              </div>

              {/* Social Links */}
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
                  href="mailto:hello@devansh.kp@outlook.com"
                  className="px-8 py-4 rounded-full transition-all duration-300 group border border-border-secondary hover:bg-text-primary hover:text-background-primary inline-flex items-center justify-center hover:shadow-lg hover:scale-105 bg-background-nav/50 backdrop-blur-sm"
                >
                  Let's work together
                  <ArrowRight className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform text-current" />
                </a>
                <a
                  href="https://drive.google.com/file/d/1EV7j6v1AqeVic54YIpfWG94guPpH6B84/view?usp=sharing"
                  aria-label="Resume PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full transition-all duration-300 group border border-transparent hover:border-border-secondary inline-flex items-center justify-center text-text-muted hover:text-text-primary"
                >
                  View my Resume
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div
              className="group cursor-pointer"
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                animation: "float-smooth 2s ease-in-out infinite",
              }}
            >
              <div className="flex flex-col items-center space-y-.25">
                <ChevronDown className="w-7 h-7 text-text-muted group-hover:text-text-primary transition-all duration-500 group-hover:translate-y-0.5 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                <ChevronDown className="w-7 h-7 text-text-muted group-hover:text-text-primary transition-all duration-500 group-hover:translate-y-1 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] -mt-2" />
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes float-smooth {
              0%,
              100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(8px);
              }
            }
          `}</style>
        </section>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          {/* About Section */}
          <section id="about" className="pt-20 md:pt-22">
            <div className="mx-auto">
              <div className="flex items-center mb-8">
                <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-3"></span>
                <h2 className="text-xl md:text-2xl font-bold">About me</h2>
              </div>
              <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-25">
                <div className="md:w-9/12">
                  <p className="leading-relaxed mb-6 text-text-secondary">
                    I'm a Software Engineer and UI/UX Designer with a hands-on
                    approach to problem-solving, driven by a natural curiosity.
                  </p>
                  <p className="leading-relaxed mb-6 text-text-secondary">
                    I love to both build and break things. I am motivated by
                    challenging projects with self-guided research and dynamic
                    problem solving. My recent focus has been on Machine
                    Learning work, exploring innovative solutions.
                  </p>
                  <p className="leading-relaxed text-text-secondary">
                    This is my personal space, where I share my work and
                    projects, documenting my progress and showcasing my
                    capabilities.
                  </p>
                </div>
                <div className="md:w-7/12">
                  <h3 className="text-md md:text-lg font-semibold mb-4">
                    My primary tools include:
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
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
          <section id="education" className="pt-20 md:pt-22 rounded-xl mb-12">
            <div className="mx-auto">
              <div className="flex items-center mb-12">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-3"></span>
                <h2 className="text-xl md:text-2xl font-bold">Education</h2>
                <a
                  href="https://drive.google.com/file/d/1uSwKV8XJ4xjsUTqb2Gu5kiAunX_YQH0U/view?usp=sharing"
                  className="group transition-all duration-300 text-text-secondary hover:text-text-primary inline-flex items-center gap-1 rounded-lg ml-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium">Academic Transcript</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.25 group-hover:-translate-y-0.25" />
                </a>
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
                    <p className="mb-5   text-text-muted">{edu.degree}</p>
                    {edu.gpa && (
                      <p className="mb-2 text-text-secondary font-medium">
                        {edu.gpa}
                      </p>
                    )}
                    {edu.misc && (
                      <div className="text-text-secondary">
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
          <section id="work" className="pt-20 md:pt-22 rounded-xl mb-12">
            <div className="mx-auto">
              <div className="flex items-center mb-12">
                <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-3"></span>
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
                    <p className="mb-2 text-text-muted">{job.role}</p>
                    <p className="text-text-secondary">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="pt-20 md:pt-22 mb-12">
            <div className="mx-auto">
              <div className="flex items-center mb-12">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-3"></span>
                <h2 className="text-xl md:text-2xl font-bold">Projects</h2>
                <a
                  href="https://github.com/devanshkp?tab=repositories"
                  className="group transition-all duration-300 text-text-secondary hover:text-text-primary inline-flex items-center gap-1 rounded-lg ml-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium">See all projects</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.25 group-hover:-translate-y-0.25" />
                </a>
              </div>

              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative bg-background-nav/40 backdrop-blur-sm rounded-xl border border-border-secondary hover:border-border-active transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden transform"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Project Image */}
                        <div className="relative md:w-2/5 aspect-video md:aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />

                          {/* Fallback placeholder */}
                          <div className="hidden w-full h-full items-center justify-center">
                            <div className="text-center text-text-muted">
                              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-background-primary/50 flex items-center justify-center">
                                <Code className="w-6 h-6" />
                              </div>
                              <p className="font-medium">{project.title}</p>
                            </div>
                          </div>

                          {/* Simple overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
                        </div>

                        {/* Project Content */}
                        <div className="md:w-3/5 p-4 md:p-6 flex flex-col justify-between">
                          <div className="mb-6">
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <h3 className="text-xl md:text-2xl font-bold text-text-secondary group-hover:text-text-primary transition-colors duration-300 mb-2">
                                  {project.title}
                                </h3>

                                {project.live && (
                                  <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium text-text-muted border border-border-secondary">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                                    Live
                                  </span>
                                )}
                              </div>

                              <div className="w-4 h-4 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                                <ArrowUpRight className="w-4 h-4 text-gray-50" />
                              </div>
                            </div>

                            <p className="text-text-secondary leading-relaxed mb-6">
                              {project.description}
                            </p>
                          </div>

                          {/* Technology Stack */}
                          <div>
                            <div className="flex flex-wrap gap-2">
                              {project.techLogos.map((tech, techIndex) => (
                                <div
                                  key={techIndex}
                                  className="relative group/tech"
                                >
                                  <div className="p-2.5 rounded-lg bg-background-secondary/40 hover:bg-background-secondary/70 transition-all duration-200 border border-border-secondary/50 hover:border-border-secondary hover:translate-y-0.5">
                                    <img
                                      src={tech.logo}
                                      alt={tech.name}
                                      className="w-5 h-5 object-contain opacity-70 group-hover/tech:opacity-100 transition-opacity duration-200"
                                      onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display =
                                          "inline-block";
                                      }}
                                    />
                                    <span className="hidden text-xs font-medium text-text-muted">
                                      {tech.name}
                                    </span>
                                  </div>

                                  {/* Tooltip */}
                                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                    <div className="bg-background-nav px-2 py-1 rounded border border-border-secondary text-xs font-medium whitespace-nowrap">
                                      {tech.name}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Bottom divider */}
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-border-secondary to-transparent"></div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-40 py-10">
            <div className="text-text-subtle text-xs md:text-sm">
              <p>© 2025 | Devansh Kapoor</p>
            </div>
          </footer>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 z-50 rounded-sm transition-all duration-300 border border-border-secondary bg-background-primary/50 backdrop-blur-md hover:border-border-active hover:bg-background-lighter hover:text-text-primary group inline-flex items-center px-2 py-2 gap-x-2 text-text-muted ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          style={{
            right: `max(1.5rem, calc((100vw - min(48rem, 100vw - 3rem)) / 2))`,
          }}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-3.5 h-3.5 group-hover:scale-110 duration-300 transition-transform group-hover:-translate-y-0.25" />
          Back to top
        </button>
      </div>
    </div>
  );
};

export default Home;
