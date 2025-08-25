import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  Download,
  MapPin,
  Clock,
  Sun,
  Moon,
  Star,
  Zap,
  Code2,
  Briefcase,
  GraduationCap,
  User,
} from "lucide-react";

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return !window.matchMedia("(prefers-color-scheme: light)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.remove("light-theme");
    } else {
      document.documentElement.classList.add("light-theme");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    setTimeout(() => setIsLoaded(true), 100);

    const handleScroll = () => {
      const sections = ["hero", "about", "education", "work", "projects"];
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
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

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "hero", label: "Home", icon: User },
    { id: "about", label: "About", icon: Star },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Code2 },
  ];

  const skills = [
    { name: "React/Next.js", level: 90, category: "Frontend" },
    { name: "Flutter", level: 85, category: "Mobile" },
    { name: "Python/Flask", level: 88, category: "Backend" },
    { name: "Machine Learning", level: 82, category: "AI/ML" },
    { name: "Firebase/AWS", level: 80, category: "Cloud" },
    { name: "PostgreSQL", level: 75, category: "Database" },
  ];

  const projects = [
    {
      title: "AI Mushroom Classifier",
      description:
        "Real-time species recognition using custom-trained deep learning model with React frontend and Flask API.",
      tech: ["React", "TensorFlow", "Flask", "AWS", "Tailwind"],
      link: "https://ai-mushroom-classifier-r2ed.vercel.app/",
      github: "https://github.com/devanshkp/mushroom-classifier",
      status: "Live",
      image: "/images/mushroom-classifier.png",
      featured: true,
    },
    {
      title: "Synapse Quiz App",
      description:
        "Mobile quiz platform with 4,000+ questions, social features, and AI-powered contextual hints built with Flutter.",
      tech: ["Flutter", "Firebase", "Python", "Gemini API", "GCP"],
      github: "https://github.com/devanshkp/synapse-quiz-app",
      status: "Development",
      image: "/images/synapse.png",
      featured: true,
    },
    {
      title: "Stock Portfolio Tracker",
      description:
        "Real-time portfolio management with advanced analytics and automated rebalancing suggestions.",
      tech: ["Vue.js", "Node.js", "MongoDB", "Alpha Vantage API"],
      github: "#",
      status: "Concept",
      featured: false,
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 text-slate-900 dark:text-slate-100 transition-all duration-500 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg">
                D
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Devansh
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeSection === id
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            {/* Theme Toggle & Time */}
            <div className="flex items-center space-x-4">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:block">
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{formatTime(currentTime)}</span>
                </div>
                <div className="flex items-center space-x-1 mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>Gold Coast, AU</span>
                </div>
              </div>

              <button
                onClick={toggleDarkMode}
                className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:scale-105 transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Profile Image */}
            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white text-5xl font-bold shadow-2xl shadow-blue-600/25 hover:scale-105 transition-all duration-500">
                D
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-slate-900 animate-pulse"></div>
            </div>

            {/* Name & Title */}
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Devansh Kapoor
            </h1>

            <div className="text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-300 mb-4">
              Software Engineer & ML Enthusiast
            </div>

            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
              Crafting digital experiences through code, data, and design. CS
              graduate building the future one algorithm at a time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://drive.google.com/file/d/1EV7j6v1AqeVic54YIpfWG94guPpH6B84/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/25 transition-all duration-300 group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </a>

              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl font-semibold border border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/devanshkp/",
                  label: "GitHub",
                  color: "hover:text-slate-800 dark:hover:text-slate-200",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/devansh-kapoor/",
                  label: "LinkedIn",
                  color: "hover:text-blue-600",
                },
                {
                  icon: Mail,
                  href: "mailto:devansh.kp@outlook.com",
                  label: "Email",
                  color: "hover:text-green-600",
                },
              ].map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 ${color} hover:scale-110 hover:shadow-xl transition-all duration-300 group`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a passionate software engineer based on Australia's Gold
                Coast, where I blend creativity with technology to build
                meaningful digital experiences. My journey spans full-stack
                development, machine learning, and mobile applications.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                From training neural networks to classify mushroom species to
                building quiz apps with thousands of questions, I love tackling
                complex problems and turning ideas into reality. Currently
                finishing my Computer Science degree at Griffith University.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you'll find me gaming, binge-watching
                sci-fi series, or hitting the gym. Always excited to collaborate
                on innovative projects and explore emerging technologies.
              </p>

              <a
                href="https://drive.google.com/file/d/1uSwKV8XJ4xjsUTqb2Gu5kiAunX_YQH0U/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300 group"
              >
                View Academic Transcript
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-8">Skills & Technologies</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.category}
                      </span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-blue-600/25"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 hover:scale-[1.02] transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    Griffith University
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">
                    Bachelor of Computer Science
                  </p>
                  <p className="text-base text-blue-600 dark:text-blue-400 font-semibold">
                    Software Development Major
                  </p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    Mar 2022 - Jul 2025
                  </p>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">
                    GPA: 6.54/7
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-yellow-500" />
                    Extracurricular Activities
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {["Griffith ICT Club", "Griffith Coding Club"].map(
                      (activity) => (
                        <span
                          key={activity}
                          className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-xl font-medium"
                        >
                          {activity}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center">
                    <Code2 className="w-5 h-5 mr-2 text-purple-500" />
                    Key Coursework
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      "Advanced Algorithms & Data Structures",
                      "Machine Learning & Intelligent Systems",
                      "Web Development",
                      "DevSecOps",
                      "Object-Oriented Programming (C++)",
                      "Software Engineering Principles",
                    ].map((course) => (
                      <div key={course} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                        <span className="text-slate-600 dark:text-slate-300">
                          {course}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="work" className="py-24 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 hover:scale-[1.02] transition-all duration-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                    aka studio
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    Software Engineer Intern
                  </p>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    Mar 2024 - Jun 2024
                  </p>
                  <div className="flex items-center mt-2 md:justify-end">
                    <Zap className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      4 months
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Enhanced user experience and system performance through
                UI/mobile optimizations, improved data accuracy, and integrated
                personalized features. Collaborated with cross-functional teams
                to deliver measurable improvements in user engagement and core
                functionality optimization.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "UI/UX Optimization",
                  "Mobile Development",
                  "Data Integration",
                  "Performance Enhancement",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-slate-800 dark:text-slate-200 rounded-xl font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A collection of projects showcasing my expertise in web
              development, machine learning, and mobile applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={project.title}
                  className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 border border-slate-200 dark:border-slate-700 hover:scale-[1.02] transition-all duration-500"
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling.style.display = "flex";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                      <Code2 className="w-16 h-16 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          project.status === "Live"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-500 text-white"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl py-3 px-4 font-semibold hover:scale-105 transition-all duration-300 text-center group/btn"
                      >
                        <span className="flex items-center justify-center">
                          {project.status === "Live"
                            ? "View Live"
                            : "View Code"}
                          <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </span>
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-xl flex items-center justify-center hover:scale-105 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Additional Projects */}
          <div className="text-center">
            <a
              href="https://github.com/devanshkp?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-2xl font-semibold border border-slate-200 dark:border-slate-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              D
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              I'm always open to discussing new opportunities, innovative
              projects, or just having a chat about technology and its
              possibilities.
            </p>

            {/* Contact Links */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              {[
                {
                  icon: Github,
                  href: "https://github.com/devanshkp/",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/devansh-kapoor/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:devansh.kp@outlook.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 hover:shadow-xl transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <div className="flex flex-col md:flex-row items-center justify-between text-slate-500 dark:text-slate-400">
              <p className="text-sm mb-4 md:mb-0">
                © 2025 Devansh Kapoor. Built with React & Tailwind CSS.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatTime(currentTime)}
                </span>
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Gold Coast, AU
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
