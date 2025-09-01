import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

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
  MapPin,
} from "lucide-react";

const SocialLink = ({
  href,
  Icon,
  tooltip,
  ariaLabel,
  color = "purple",
  isEmail = false,
  isDarkMode = true,
  animationDuration = 0.4,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    purple: {
      border: "hover:border-purple-400/50",
      shadow: "hover:shadow-purple-500/25",
      gradient: "from-purple-500/10 to-pink-500/10",
      icon: "group-hover:text-purple-400",
      tooltip: {
        bg: isDarkMode ? "bg-bg-tertiary/95" : "bg-bg-secondary/95",
        border: isDarkMode ? "border-purple-500/30" : "border-purple-300/40",
        text: isDarkMode ? "text-purple-100" : "text-purple-700",
        accent: isDarkMode ? "bg-purple-500/20" : "bg-purple-200/60",
      },
    },
    blue: {
      border: "hover:border-blue-400/50",
      shadow: "hover:shadow-blue-500/25",
      gradient: "from-blue-500/10 to-cyan-500/10",
      icon: "group-hover:text-blue-400",
      tooltip: {
        bg: isDarkMode ? "bg-bg-tertiary/95" : "bg-bg-secondary/95",
        border: isDarkMode ? "border-blue-500/30" : "border-blue-300/40",
        text: isDarkMode ? "text-blue-100" : "text-blue-700",
        accent: isDarkMode ? "bg-blue-500/20" : "bg-blue-200/60",
      },
    },
    emerald: {
      border: "hover:border-emerald-400/50",
      shadow: "hover:shadow-emerald-500/25",
      gradient: "from-emerald-500/10 to-teal-500/10",
      icon: "group-hover:text-emerald-400",
      tooltip: {
        bg: isDarkMode ? "bg-bg-tertiary/95" : "bg-bg-secondary/95",
        border: isDarkMode ? "border-emerald-500/30" : "border-emerald-300/40",
        text: isDarkMode ? "text-emerald-100" : "text-emerald-700",
        accent: isDarkMode ? "bg-emerald-500/20" : "bg-emerald-200/60",
      },
    },
  };

  const colors = colorClasses[color] || colorClasses.purple;

  const raindropVariants = {
    initial: {
      scale: 0,
      y: -20,
      borderRadius: "50%",
      opacity: 0,
    },
    animate: {
      scale: 1,
      y: 0,
      borderRadius: "48px",
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
        duration: animationDuration,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      scale: 0,
      y: -10,
      opacity: 0,
      transition: {
        duration: animationDuration * 0.33,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: animationDuration * 0.25,
        duration: animationDuration * 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: animationDuration * 0.17,
      },
    },
  };

  const accentVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.5,
      transition: {
        delay: animationDuration * 0.33,
        duration: animationDuration * 0.25,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: animationDuration * 0.17,
      },
    },
  };

  return (
    <a
      href={href}
      className={`group relative p-5 rounded-full transition-all duration-500 border-1 border-border ${colors.border} hover:shadow-2xl ${colors.shadow} backdrop-blur-sm hover:scale-110 hover:-translate-y-2`}
      aria-label={ariaLabel}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isDarkMode
          ? "var(--bg-tertiary)"
          : "var(--bg-secondary)",
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full`}
      ></div>

      <div className="relative z-10">
        <Icon
          className={`w-6 h-6 text-text-secondary ${colors.icon} transition-all duration-500 group-hover:scale-110 group-hover:rotate-12`}
        />
      </div>

      {/* Raindrop Tooltip Animation */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 pointer-events-none z-30">
        <AnimatePresence>
          {isHovered && (
            <motion.div
              variants={raindropVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={`${colors.tooltip.bg} ${colors.tooltip.text} backdrop-blur-md px-4 py-2.5 text-xs font-medium shadow-xl whitespace-nowrap border ${colors.tooltip.border} relative overflow-hidden`}
              style={{
                transformOrigin: "center top",
              }}
            >
              {/* Animated accent background */}
              <motion.div
                variants={accentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className={`absolute inset-0 ${colors.tooltip.accent}`}
              />

              {/* Animated text content */}
              <motion.span
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="relative z-10"
              >
                {tooltip}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </a>
  );
};

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSkill, setCurrentSkill] = useState(0);
  const [hoveredCodeButton, setHoveredCodeButton] = useState(null);
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

  const reduceMotion = useReducedMotion();

  const easing = [0.22, 1, 0.36, 1];

  const heroStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easing },
    },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: easing } },
  };

  const projects = [
    {
      title: "AI Mushroom Classifier",
      description:
        "React-based application for real-time species recognition using a custom-trained deep learning model.",
      tech: ["React", "Tailwind CSS", "Flask", "TensorFlow", "AWS"],
      link: "https://ai-mushroom-classifier-r2ed.vercel.app/",
      git: "https://github.com/devanshkp/ai-mushroom-classifier",
      live: true,
      inDevelopment: false,
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
      git: "https://github.com/devanshkp/synapse-quiz-app",
      live: false,
      inDevelopment: false,
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
    {
      title: "Forge",
      description:
        "Workout tracking app built with React Native, offering offline-first logging, progress insights, and personalized routines.",
      tech: [
        "React Native",
        "Expo",
        "TypeScript",
        "SQLite",
        "React Query",
        "Expo Router",
      ],

      link: "https://github.com/devanshkp/workout-tracker",
      git: "https://github.com/devanshkp/workout-tracker",
      live: false,
      inDevelopment: true,
      image: "/images/forge.png",
      techLogos: [
        {
          name: "React Native",
          logo: "/logos/react.svg",
          color: "text-blue-500",
        },
        { name: "Expo", logo: "/logos/expo.svg", color: "text-yellow-500" },
        {
          name: "TypeScript",
          logo: "/logos/typescript.svg",
          color: "text-blue-400",
        },
        {
          name: "SQLite",
          logo: isDarkMode ? "logos/sqlite-lighter.svg" : "/logos/sqlite.svg",
          color: "text-blue-300",
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
      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav
          variants={fade}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className={`fixed top-0 w-full z-50 backdrop-blur-xl bg-bg-nav/85 border-border-secondary border-b-1`}
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
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 hover:scale-105 cursor-pointer focus:outline-none ring-1 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ring-border-active
                `}
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
                    isDarkMode
                      ? "bg-bg-quaternary brightness-130"
                      : "bg-gray-300"
                  }`}
                />

                <motion.div
                  initial={{ scale: reduceMotion ? 1 : 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.25, ease: easing, delay: 0.1 }}
                  className={`relative inline-block h-6 w-6 rounded-full shadow-lg transform transition-transform duration-300 ${
                    isDarkMode
                      ? "translate-x-5 bg-bg"
                      : "translate-x-0 bg-white"
                  }`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    {isDarkMode ? (
                      <Moon className="w-4 h-4 text-gray-200" />
                    ) : (
                      <Sun className="w-4 h-4 text-yellow-500" />
                    )}
                  </div>
                </motion.div>
              </div>
              <div className={`text-text-muted text-sm font-mono`}>
                {formatTime(currentTime)}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Main Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          {/* Grid Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)",
            }}
          >
            {/* Base grid*/}
            <div
              className="absolute inset-0 grid-bg"
              style={{ filter: "brightness(0.75) contrast(1)" }}
            />

            {/* Shimmer layer*/}
            <motion.div
              className="absolute inset-0 grid-bg"
              style={{
                filter: "brightness(3) contrast(1.5)",
                WebkitMaskImage:
                  "linear-gradient(90deg, transparent 35%, rgba(0,0,0,0.6) 46%, #000 50%, rgba(0,0,0,0.6) 54%, transparent 65%)",
                maskImage:
                  "linear-gradient(90deg, transparent 35%, rgba(0,0,0,0.6) 46%, #000 50%, rgba(0,0,0,0.6) 54%, transparent 65%)",
                WebkitMaskSize: "220% 100%",
                maskSize: "220% 100%",
                WebkitMaskPosition: "var(--mask-x, -110%) 0%",
                maskPosition: "var(--mask-x, -110%) 0%",
                mixBlendMode: isDarkMode ? "screen" : "multiply",
                opacity: 1,
              }}
              initial={{ opacity: 0 }}
              animate={
                reduceMotion
                  ? { opacity: 0 }
                  : {
                      opacity: 0.5,
                      ["--mask-x"]: ["-110%", "110%"],
                    }
              }
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      opacity: {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                        delay: 3,
                      },
                      ["--mask-x"]: {
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatType: "mirror",
                      },
                    }
              }
            />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
            <motion.div
              variants={heroStagger}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="text-center relative z-10"
            >
              {/* Main Heading */}
              <motion.div variants={fadeUp} className="mb-8 md:mb-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 relative tracking-tight">
                  <span className="relative inline-grid">
                    <span
                      className={`bg-gradient-to-r bg-clip-text text-gradient-accent text-transparent col-start-1 row-start-1`}
                    >
                      Devansh
                    </span>
                    <span
                      className="bg-gradient-to-r bg-clip-text text-gradient-accent text-transparent blur-lg opacity-25 col-start-1 row-start-1"
                      style={{ transform: "translate(2px, 2px)" }}
                    >
                      Devansh
                    </span>
                  </span>{" "}
                  Kapoor
                </h1>
                <motion.div variants={fadeUp} className="h-8 mb-6">
                  <p
                    key={currentSkill}
                    className={`text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium animate-pulse`}
                  >
                    {skills[currentSkill]}
                  </p>
                </motion.div>
                {/* Subtext */}
                <motion.p
                  variants={fadeUp}
                  className={`text-text-muted max-w-2xl mx-auto leading-relaxed text-lg px-4 hidden sm:block`}
                >
                  Turning late-night ideas into working code. I build, I train,
                  I refine - All in pursuit of software that's actually useful.
                  CS grad from Griffith.
                </motion.p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={fadeUp}
                className="flex justify-center space-x-6 mb-8 md:mb-12"
              >
                <SocialLink
                  href="https://github.com/devanshkp/"
                  Icon={Github}
                  tooltip="GitHub"
                  ariaLabel="GitHub Profile"
                  color="purple"
                  isDarkMode={isDarkMode}
                />

                <SocialLink
                  href="https://www.linkedin.com/in/devansh-kapoor/"
                  Icon={Linkedin}
                  tooltip="LinkedIn"
                  ariaLabel="LinkedIn Profile"
                  color="blue"
                  isDarkMode={isDarkMode}
                />

                <SocialLink
                  href="mailto:devansh.kp@outlook.com"
                  Icon={Mail}
                  tooltip="Email"
                  ariaLabel="Email Contact"
                  color="emerald"
                  isEmail={true}
                  isDarkMode={isDarkMode}
                />
              </motion.div>

              {/* Resume Button */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <a
                  href="https://drive.google.com/file/d/1EV7j6v1AqeVic54YIpfWG94guPpH6B84/view?usp=sharing"
                  aria-label="Resume PDF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-3 transition-all duration-300 group inline-flex items-center justify-center text-text-muted hover:text-text-primary font-medium`}
                >
                  View Resume
                  <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
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
                  className={`group transition-all duration-300 ring-1 ring-border-secondary text-text-secondary hover:text-text-primary inline-flex items-center gap-1 rounded-lg px-3 py-2 hover:scale-105 ${
                    isDarkMode
                      ? "bg-bg-tertiary hover:bg-bg-quaternary"
                      : "bg-bg-secondary hover:bg-bg-tertiary"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
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
                    <div
                      className={`w-0.5 transition-all duration-300 group-hover:bg-accent-secondary-solid group-hover:shadow-[0_0_10px_theme(colors.accent.secondary.solid/30%)] ${
                        isDarkMode ? "bg-bg-tertiary" : "bg-bg-quaternary"
                      }`}
                    ></div>
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
                <h2 className="text-2xl md:text-3xl font-bold">
                  Work Experience
                </h2>
              </div>

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className="flex group transition-colors">
                    <div
                      className={`w-0.5 transition-all duration-300 group-hover:bg-accent-solid group-hover:shadow-[0_0_10px_theme(colors.accent.solid/30%)] ${
                        isDarkMode ? "bg-bg-tertiary" : "bg-bg-quaternary"
                      }`}
                    ></div>

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
                  className={`group transition-all duration-300 ring-1 ring-border-secondary text-text-secondary hover:text-text-primary inline-flex items-center gap-1 rounded-lg px-3 py-2 hover:scale-105 ${
                    isDarkMode
                      ? "bg-bg-tertiary hover:bg-bg-quaternary"
                      : "bg-bg-secondary hover:bg-bg-tertiary"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="font-medium text-sm">See all projects</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="space-y-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    transition={{ delay: 0.12 + index * 0.03 }}
                    className={`group relative bg-bg-secondary rounded-2xl ring-1 ring-border transition-all duration-300 hover:shadow-lg hover:-translate-y-2 overflow-hidden transform`}
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
                            className="w-full h-full scale-110 md:scale-120 object-cover object-center transition-transform duration-500 group-hover:scale-120 md:group-hover:scale-130"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.nextSibling.style.display = "flex";
                            }}
                          />

                          {/* Fallback placeholder */}
                          <div
                            className={`hidden w-full h-full items-center justify-center bg-bg-tertiary`}
                          >
                            <div className={`text-center text-text-muted`}>
                              <div
                                className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-bg-secondary flex items-center justify-center`}
                              >
                                <Code className="w-8 h-8" />
                              </div>
                              <p className="font-medium text-lg whitespace-nowrap">
                                {project.title}
                              </p>
                            </div>
                          </div>

                          {/* Live Badge */}
                          {(project.live || project.inDevelopment) && (
                            <div className="absolute top-4 right-4">
                              {project.live ? (
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-green-500 text-white shadow-lg">
                                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                  Live
                                </span>
                              ) : (
                                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-yellow-600 text-white shadow-lg">
                                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                                  WIP
                                </span>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Project Content */}
                        <div className="md:w-3/5 p-6 flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start mb-4 md:mb-6">
                              <div className="flex items-center gap-2">
                                <h3 className="text-xl lg:text-2xl font-bold text-text-secondary group-hover:text-text-primary duration-200">
                                  {project.title}
                                </h3>
                                <ArrowUpRight
                                  className={`hidden md:block w-5 h-5 text-text-secondary group-hover:text-text-primary transition-all duration-300 group-hover:translate-x-1 ${
                                    hoveredCodeButton === index
                                      ? "opacity-0"
                                      : "opacity-0 group-hover:opacity-100"
                                  }`}
                                />
                                <ArrowUpRight
                                  className="md:hidden w-5 h-5 text-text-secondary group-hover:text-text-primary transition-all duration-300 group-hover:translate-x-1
                                  "
                                />
                              </div>

                              {/* View Code Button - Desktop */}
                              <a
                                href={project.git}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:inline-flex group/code items-center gap-2 px-3 py-2 rounded-lg bg-bg-tertiary hover:bg-bg-quaternary transition-all duration-200 hover:scale-105 ring-1 ring-border-secondary text-text-secondary hover:text-text-primary"
                                onClick={(e) => e.stopPropagation()}
                                onMouseEnter={() => setHoveredCodeButton(index)}
                                onMouseLeave={() => setHoveredCodeButton(null)}
                              >
                                <Github className="w-4 h-4 transition-colors" />
                                <span className="text-sm font-medium whitespace-nowrap">
                                  View Code
                                </span>
                              </a>
                            </div>

                            <p className="text-text-secondary leading-relaxed mb-4 md:mb-8 text-lg">
                              {project.description}
                            </p>

                            {/* View Code Button - Mobile */}
                            <div className="md:hidden">
                              <a
                                href={project.git}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/code inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-tertiary hover:bg-bg-quaternary transition-all duration-200 hover:scale-105 ring-1 ring-border text-text-secondary hover:text-text-primary"
                                onClick={(e) => e.stopPropagation()}
                                onMouseEnter={() => setHoveredCodeButton(index)}
                                onMouseLeave={() => setHoveredCodeButton(null)}
                              >
                                <Github className="w-4 h-4 transition-colors" />
                                <span className="text-sm font-medium">
                                  View Code
                                </span>
                              </a>
                            </div>
                          </div>

                          {/* Technology Stack */}
                          <div className="hidden md:flex flex-wrap gap-2">
                            {project.techLogos.map((tech, techIndex) => (
                              <div
                                key={techIndex}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-bg-tertiary text-text-secondary text-sm font-medium ring-1 ring-border-secondary"
                              >
                                <img
                                  src={tech.logo}
                                  alt={tech.name}
                                  className="w-4 h-4 object-contain"
                                  onError={(e) => {
                                    e.target.style.display = "none";
                                  }}
                                />
                                <span>{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-bg-secondary border-t border-border-secondary mt-20 md:pb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-6">
            {/* top row */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-text-muted">
              <p className="text-text-muted">&copy; 2025 Devansh Kapoor</p>
              <nav aria-label="Footer">
                <ul className="flex items-center gap-6">
                  <li>
                    <a
                      href="https://github.com/devanshkp/"
                      className="hover:text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/40 rounded-sm"
                      target="_blank"
                      rel="noopener noreferrer me"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/devansh-kapoor/"
                      className="hover:text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/40 rounded-sm"
                      target="_blank"
                      rel="noopener noreferrer me"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:devansh.kp@outlook.com"
                      className="hover:text-text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text-primary/40 rounded-sm"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* meta row */}
            <address className="hidden md:flex mt-4 not-italic text-xs text-text-muted max-w-lg items-center gap-2">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Gold Coast, QLD, Australia</span>
            </address>
          </div>
        </footer>

        {/* Scroll to Top Button */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pointer-events-none">
          <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 rounded-xl transition-all ring-1 ring-border-secondary duration-300 border-border-primary hover:border-active backdrop-blur-xl hover:scale-110 hover:-translate-y-1 group inline-flex items-center px-4 py-2 gap-x-2 text-text-secondary hover:text-text-primary shadow-md hover:shadow-lg ${
              showScrollTop
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"
            }  ${
              isDarkMode
                ? "bg-bg-tertiary hover:bg-bg-quaternary"
                : "bg-bg-secondary hover:bg-bg-tertiary"
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
            <span className="hidden sm:inline-block font-medium cursor-pointer">
              Back to top
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
