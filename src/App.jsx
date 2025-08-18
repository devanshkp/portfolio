import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ArrowUpRight,
  ChevronUp,
  ArrowUp,
  ArrowDown,
  Code,
  Sun,
  Moon,
} from "lucide-react";

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

  // Toggle .light-theme class on <body> for light mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
    }
  }, [isDarkMode]);

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
    const handleScrollUp = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    const handleScrollDown = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollDown(scrollTop < 100);
    };

    // Rotate skills
    const skillTimer = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    window.addEventListener("scroll", handleScrollUp);
    window.addEventListener("scroll", handleScrollDown);

    return () => {
      clearInterval(timer);
      clearInterval(skillTimer);
      window.removeEventListener("scroll", handleScrollUp);
      window.removeEventListener("scroll", handleScrollDown);
    };
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const progressBar = document.getElementById("scroll-progress");
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update Meta Tags
  useEffect(() => {
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const appleStatusBar = document.querySelector(
      'meta[name="apple-mobile-web-app-status-bar-style"]'
    );

    if (isDarkMode) {
      metaThemeColor?.setAttribute("content", "#161b22");
      appleStatusBar?.setAttribute("content", "black-translucent");
    } else {
      metaThemeColor?.setAttribute("content", "#f8fafc");
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: "AI Mushroom Classifier",
      description:
        "React-based application for real-time species recognition using a custom-trained deep learning model.",
      tech: ["React", "Tailwind CSS", "Flask", "TensorFlow", "AWS"],
      link: "https://ai-mushroom-classifier-r2ed.vercel.app/",
      live: true,
      image: "/images/mushroom-classifier.png",
      techLogos: [
        {
          name: "TensorFlow",
          logo: "/logos/tensorflow.svg",
          color: "text-orange-400",
        },
        { name: "React", logo: "/logos/react.svg", color: "text-blue-400" },
        {
          name: "Flask",
          logo: isDarkMode ? "/logos/flask.svg" : "/logos/flask-black.svg",
          color: "text-green-400",
        },
        { name: "AWS", logo: "/logos/aws.svg", color: "text-yellow-400" },
      ],
    },
    {
      title: "Synapse",
      description:
        "Mobile quiz application built with Flutter, featuring secure authentication, social features, and 4,000+ questions with contextual hints.",
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
      image: "/images/synapse.png",
      techLogos: [
        { name: "Flutter", logo: "/logos/flutter.svg", color: "text-blue-500" },
        { name: "Python", logo: "/logos/python.svg", color: "text-yellow-500" },
        {
          name: "Firebase",
          logo: "/logos/firebase.svg",
          color: "text-orange-500",
        },
        {
          name: "Gemini API",
          logo: "/logos/gemini.svg",
          color: "text-purple-400",
        },
      ],
    },
  ];

  const education = [
    {
      institution: "Griffith University",
      degree: "Bachelor of Computer Science, Software Development major",
      period: "Mar 2022 - Jul 2025",
      gpa: "GPA: 6.54/7",
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
    <div
      className={`min-h-screen font-vulfsans bg-bg text-text-primary relative overflow-x-hidden transition-colors duration-300`}
    >
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } relative z-10`}
      >
        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 backdrop-blur-xl bg-bg-nav/60 border-border border-b-1`}
        >
          {/* Scroll progress bar */}
          <div
            id="scroll-progress"
            className="block md:hidden absolute bottom-0 left-0 h-[2px]"
            style={{
              width: "0%",
              background: isDarkMode
                ? "var(--accent-secondary-solid)"
                : "var(--accent-solid)",
              boxShadow: isDarkMode
                ? "0 0 6px var(--accent-secondary-solid)"
                : "0 0 6px var(--accent-solid)",
              transition: "width 0.1s ease-out",
            }}
          ></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
            <img
              src={isDarkMode ? "/logos/cat.svg" : "/logos/cat-black.svg"}
              alt={`Cat logo`}
              className="w-5 h-5 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="hidden md:flex space-x-8">
              {["About", "Education", "Work", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 text-text-secondary hover:text-text-primary hover:scale-105 font-medium`}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div
                onClick={toggleDarkMode}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-bg-secondary transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                role="switch"
                aria-checked={isDarkMode}
                aria-label="Toggle theme"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleDarkMode();
                  }
                }}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                    isDarkMode ? "bg-slate-700" : "bg-slate-300"
                  }`}
                />

                <div
                  className={`relative inline-block h-6 w-6 rounded-full bg-white shadow-lg transform transition-transform duration-300 ${
                    isDarkMode ? "translate-x-5" : "translate-x-0"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {isDarkMode ? (
                      <Moon className="w-4 h-4 text-slate-700" />
                    ) : (
                      <Sun className="w-4 h-4 text-yellow-500" />
                    )}
                  </div>
                </div>
              </div>
              <div className={`text-text-muted text-sm font-mono`}>
                {formatTime(currentTime)}
              </div>
            </div>
          </div>
        </nav>

        {/* Main Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          {/* Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none grid-bg"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)",
            }}
          ></div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
            <div className="text-center relative z-10">
              {/* Main Heading */}
              <div className="mb-8 md:mb-12">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
                  <span
                    className={`bg-gradient-to-r bg-clip-text text-gradient-accent text-transparent`}
                  >
                    Devansh
                  </span>{" "}
                  Kapoor
                </h1>
                <div className="h-8 mb-6">
                  <p
                    key={currentSkill}
                    className={`text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium animate-pulse`}
                  >
                    {skills[currentSkill]}
                  </p>
                </div>
                {/* Hide subtext on mobile screens */}
                <p
                  className={`text-text-muted max-w-2xl mx-auto leading-relaxed text-lg px-4 hidden sm:block`}
                >
                  Turning late-night ideas into working code. I build, I train,
                  I refine - All in pursuit of software that's actually useful.
                  CS grad from Griffith.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mb-8 md:mb-10">
                <a
                  href="https://github.com/devanshkp/"
                  className={`group relative p-4 rounded-4xl transition-all duration-300 bg-bg-card border-border-primary hover:border-active hover:shadow-xl hover:shadow-purple-500/20 backdrop-blur-sm hover:scale-110 hover:-translate-y-1`}
                  aria-label="GitHub Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
                  <span
                    className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity border-purple-400 bg-bg-nav px-2 py-1 rounded border whitespace-nowrap`}
                  >
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/devansh-kapoor/"
                  className={`group relative p-4 rounded-4xl transition-all duration-300 bg-bg-card border-border-primary hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 backdrop-blur-sm hover:scale-110 hover:-translate-y-1`}
                  aria-label="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
                  <span
                    className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity border-blue-400 bg-bg-nav px-2 py-1 rounded border whitespace-nowrap`}
                  >
                    LinkedIn
                  </span>
                </a>
                <a
                  href="mailto:hello@devansh.kp@outlook.com"
                  className={`group relative p-4 rounded-4xl transition-all duration-300 bg-bg-card border-border-primary hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 backdrop-blur-sm hover:scale-110 hover:-translate-y-1`}
                  aria-label="Email Contact"
                >
                  <Mail className="w-6 h-6 group-hover:text-emerald-400 transition-colors" />
                  <span
                    className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity border-emerald-400 bg-bg-card px-2 py-1 rounded border whitespace-nowrap`}
                  >
                    Email
                  </span>
                </a>
              </div>

              {/* Resume Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://drive.google.com/file/d/1EV7j6v1AqeVic54YIpfWG94guPpH6B84/view?usp=sharing"
                  aria-label="Resume PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-8 py-3 rounded-2xl transition-all duration-300 group inline-flex items-center justify-center text-text-muted hover:text-text-primary font-medium`}
                >
                  View Resume
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className="fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300"
            style={{
              bottom: `calc(2rem + env(safe-area-inset-bottom, 0px))`,
              opacity: showScrollDown ? 1 : 0,
              transform: showScrollDown
                ? "translateY(0px)"
                : "translateY(10px)",
              transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
              pointerEvents: showScrollDown ? "auto" : "none",
            }}
          >
            <div
              className="group cursor-pointer"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <div
                className={`flex flex-col items-center space-y-1 p-3 hover:border-active backdrop-blur-sm hover:scale-110 transition-all duration-300`}
                style={{
                  animation: showScrollDown
                    ? "float-smooth 1s ease-in-out infinite"
                    : "none",
                }}
              >
                <ArrowDown className="w-8 h-8 text-accent-solid group-hover:text-text-primary transition-all duration-500 group-hover:translate-y-1" />
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* About Section */}
          <section id="about" className="pt-20 md:pt-24">
            <div className="mx-auto">
              <div className="flex items-center mb-8">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-accent mr-4 shadow-lg`}
                ></div>
                <h2 className="text-2xl md:text-3xl font-bold">About me</h2>
              </div>
              <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
                <div className="lg:w-2/3">
                  <p
                    className={`leading-relaxed mb-6 text-text-secondary text-lg`}
                  >
                    I'm Devansh, a software engineer based on the Gold Coast
                    with experience in full-stack development, machine learning,
                    and mobile apps.
                  </p>
                  <p
                    className={`leading-relaxed mb-6 text-text-secondary text-lg`}
                  >
                    Some of my projects include a mushroom classifier using deep
                    learning, a CS quiz app built with Flutter, and various
                    small tools to automate tasks and explore new tech.
                  </p>
                  <p className={`leading-relaxed text-text-secondary text-lg`}>
                    When I'm not coding, I like to play video games, watch tv
                    shows, and hit the gym. I'm always open to chatting about
                    cool ideas or upcoming projects, so feel free to hit me up.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <h3 className="text-lg md:text-xl font-semibold mb-6">
                    My primary tools include:
                  </h3>
                  <div className="space-y-3">
                    {[
                      "React, Flutter",
                      "Flask",
                      "Firebase, PostgreSQL",
                      "Python, C++, Javascript",
                      "Tensorflow, Scikit-learn, Pandas",
                      "AWS",
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-text-secondary"
                      >
                        <span>•</span>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="pt-20 md:pt-24 mb-12">
            <div className="mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-accent-secondary mr-4 shadow-lg`}
                  ></div>
                  <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
                </div>
                <a
                  href="https://drive.google.com/file/d/1uSwKV8XJ4xjsUTqb2Gu5kiAunX_YQH0U/view?usp=sharing"
                  className={`group transition-all duration-300 text-text-muted hover:text-text-primary inline-flex items-center gap-1 rounded-lg px-3 py-2 hover:scale-105`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: isDarkMode
                      ? "var(--bg-secondary)"
                      : "var(--bg-card)",
                  }}
                >
                  <span className="font-medium text-sm">
                    Academic Transcript
                  </span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div className="flex group transition-colors">
                    <div className="w-0.5 bg-border transition-all duration-300 group-hover:bg-accent-secondary-solid group-hover:shadow-[0_0_10px_theme(colors.accent.secondary.solid/30%)]"></div>
                    <div className="pl-4 md:pl-8 flex-1 transition-colors">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className="text-xl font-semibold">
                          {edu.institution}
                        </h3>
                        <span className={`text-text-muted text-sm font-medium`}>
                          {edu.period}
                        </span>
                      </div>
                      <p className={`mb-4 text-text-muted text-lg`}>
                        {edu.degree}
                      </p>
                      {edu.gpa && (
                        <p
                          className={`mb-4 text-text-secondary font-semibold text-lg`}
                        >
                          {edu.gpa}
                        </p>
                      )}
                      {edu.misc && (
                        <div className="text-text-secondary">
                          {edu.misc.map((item, miscIndex) => (
                            <p
                              key={miscIndex}
                              className="mb-2 flex items-start"
                            >
                              <span className="text-teal-400 mr-2">•</span>
                              {item}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section id="work" className="pt-20 md:pt-24 mb-12">
            <div className="mx-auto">
              <div className="flex items-center mb-12">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-accent mr-4 shadow-lg`}
                ></div>
                <h2 className="text-2xl md:text-3xl font-bold">Work</h2>
              </div>

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className="flex group transition-colors">
                    <div className="w-0.5 bg-border transition-all duration-300 group-hover:bg-accent-solid group-hover:shadow-[0_0_10px_theme(colors.accent.solid/30%)]"></div>

                    <div className="pl-4 md:pl-8 flex-1 transition-colors">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <h3 className="text-xl font-semibold">{job.company}</h3>
                        <span className="text-text-muted text-sm font-medium">
                          {job.period}
                        </span>
                      </div>
                      <p className="mb-4 text-text-muted text-lg">{job.role}</p>
                      <p className="text-text-secondary text-lg leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="pt-20 md:pt-24 mb-12">
            <div className="mx-auto">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full bg-gradient-accent-secondary mr-4 shadow-lg`}
                  ></div>
                  <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
                </div>
                <a
                  href="https://github.com/devanshkp?tab=repositories"
                  className={`group transition-all duration-300 text-text-muted hover:text-text-primary inline-flex items-center gap-1 rounded-lg px-3 py-2 hover:scale-105`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: isDarkMode
                      ? "var(--bg-secondary)"
                      : "var(--bg-card)",
                  }}
                >
                  <span className="font-medium text-sm">See all projects</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="space-y-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className={`group relative bg-bg-card rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden transform`}
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="flex flex-col lg:flex-row">
                        {/* Project Image */}
                        <div className="relative lg:w-2/5 aspect-video lg:aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />

                          {/* Fallback placeholder */}
                          <div
                            className={`hidden w-full h-full items-center justify-center bg-bg-secondary`}
                          >
                            <div className={`text-center text-text-muted`}>
                              <div
                                className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-bg-card flex items-center justify-center`}
                              >
                                <Code className="w-8 h-8" />
                              </div>
                              <p className="font-medium text-lg">
                                {project.title}
                              </p>
                            </div>
                          </div>

                          {/* Overlay */}
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${
                              isDarkMode
                                ? "from-black/20 to-transparent"
                                : "from-white/20 to-transparent"
                            } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                          ></div>
                        </div>

                        {/* Project Content */}
                        <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                          <div className="md:mb-6">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3
                                  className={`text-2xl lg:text-3xl font-bold text-text-secondary group-hover:text-text-primary transition-colors duration-300 mb-3`}
                                >
                                  {project.title}
                                </h3>

                                {project.live && (
                                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                    Live
                                  </span>
                                )}
                              </div>

                              <div
                                className={`w-5 h-5 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 text-text-muted`}
                              >
                                <ArrowUpRight className="w-5 h-5" />
                              </div>
                            </div>

                            <p
                              className={`text-text-secondary leading-relaxed mb-6 text-lg`}
                            >
                              {project.description}
                            </p>
                          </div>

                          {/* Technology Stack */}
                          <div>
                            <div className="flex flex-wrap gap-3">
                              {project.techLogos.map((tech, techIndex) => (
                                <div
                                  key={techIndex}
                                  className="relative group/tech"
                                >
                                  <div
                                    className={`p-3 rounded-xl bg-bg-secondary hover:bg-bg-card transition-all duration-200 hover:border-active hover:scale-110 hover:-translate-y-1 backdrop-blur-sm`}
                                  >
                                    <img
                                      src={tech.logo}
                                      alt={tech.name}
                                      className="w-6 h-6 object-contain opacity-80 group-hover/tech:opacity-100 transition-opacity duration-200"
                                      onError={(e) => {
                                        e.target.style.display = "none";
                                        e.target.nextSibling.style.display =
                                          "inline-block";
                                      }}
                                    />
                                    <span
                                      className={`hidden text-sm font-medium ${tech.color}`}
                                    >
                                      {tech.name}
                                    </span>
                                  </div>

                                  {/* Tooltip */}
                                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                                    <div
                                      className={`bg-bg-nav px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap backdrop-blur-sm shadow-lg`}
                                    >
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
              <div
                className={`mt-20 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent`}
              ></div>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-16 py-12">
            <div className={`text-text-muted text-center`}>
              <p className="text-lg font-medium">© 2025 | Devansh Kapoor</p>
              <p className="mt-2 text-sm">Built with React & Tailwind CSS</p>
            </div>
          </footer>
        </div>

        {/* Scroll to Top Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pointer-events-none">
          <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 rounded-xl transition-all duration-300 bg-bg-card border-border-primary hover:border-active backdrop-blur-md hover:scale-110 hover:-translate-y-1 group inline-flex items-center px-4 py-3 gap-x-2 text-text-secondary hover:text-text-primary shadow-lg hover:shadow-xl ${
              showScrollTop
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"
            }`}
            aria-label="Scroll to top"
            style={{
              right: `max(1.5rem, calc((100vw - min(56rem, 100vw - 3rem)) / 2))`,
            }}
          >
            <div className="relative w-5 h-5">
              <ChevronUp
                className={`w-5 h-5 group-hover:scale-110 duration-300 transition-all group-hover:-translate-y-0.5 absolute ${
                  showScrollDown || isScrolling
                    ? "opacity-0"
                    : "group-hover:opacity-0"
                }`}
              />
              <ArrowUp
                className={`w-5 h-5 group-hover:scale-110 duration-300 transition-all absolute ${
                  showScrollDown || isScrolling
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              />
            </div>
            <span className="hidden sm:inline-block font-medium">
              Back to top
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
