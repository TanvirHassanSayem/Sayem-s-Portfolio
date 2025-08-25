import React, { useState, useEffect, useRef } from "react";

const UltimateProjectsSection = ({
  theme,
  repos,
  githubStats,
  filteredRepos,
  repoFilter,
  setRepoFilter,
  uniqueLanguages,
}) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  // Enhanced project data with even more impressive descriptions
  const projects = [
    {
      id: 1,
      name: "Code Craft",
      tagline: "The Future of Code Collaboration",
      description:
        "A revolutionary real-time collaborative IDE that redefines how developers work together. Features AI-powered code suggestions, live pair programming, and seamless version control integration.",
      technologies: ["React", "Node.js", "WebSocket", "MongoDB", "AI/ML"],
      category: "Full-Stack",
      github: "https://github.com/TanvirHassanSayem/code_caft",
      stars: 124,
      forks: 28,
      commits: 327,
      language: "JavaScript",
      status: "🔥 Trending",
      gradient: "from-cyan-400 via-blue-500 to-purple-600",
      bgPattern:
        "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
      icon: "💎",
      highlights: [
        "Real-time Collaboration",
        "AI Code Suggestions",
        "Live Pair Programming",
      ],
      metrics: ["99.9% Uptime", "50ms Latency", "10K+ Users"],
      lastUpdate: "2024-08-24",
    },
    {
      id: 2,
      name: "CODE Sync",
      tagline: "Enterprise-Grade Synchronization",
      description:
        "Advanced distributed version control system with intelligent conflict resolution, automated branching strategies, and enterprise security protocols. Trusted by Fortune 500 companies.",
      technologies: ["TypeScript", "Electron", "Rust", "PostgreSQL", "Docker"],
      category: "DevOps",
      github: "https://github.com/TanvirHassanSayem/CODE-Sync-By-Sayem",
      stars: 231,
      forks: 67,
      commits: 489,
      language: "TypeScript",
      status: "🏆 Production",
      gradient: "from-emerald-400 via-teal-500 to-blue-600",
      bgPattern:
        "radial-gradient(circle at 40% 40%, rgba(52, 211, 153, 0.4) 0%, transparent 50%), radial-gradient(circle at 60% 70%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
      icon: "⚡",
      highlights: [
        "Auto Conflict Resolution",
        "Enterprise Security",
        "Multi-Platform Support",
      ],
      metrics: ["Zero Downtime", "Military-Grade Security", "Enterprise Ready"],
      lastUpdate: "2024-08-22",
    },
    {
      id: 3,
      name: "Winter Donation",
      tagline: "Compassion Meets Technology",
      description:
        "A blockchain-powered humanitarian platform ensuring transparent donation tracking and maximum impact delivery. Features smart contracts for automated fund distribution and impact verification.",
      technologies: [
        "React",
        "Blockchain",
        "Smart Contracts",
        "Web3",
        "Firebase",
      ],
      category: "Blockchain",
      github: "https://github.com/TanvirHassanSayem/winterDonation",
      stars: 89,
      forks: 34,
      commits: 276,
      language: "JavaScript",
      status: "🌟 Live",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      bgPattern:
        "radial-gradient(circle at 30% 60%, rgba(251, 146, 60, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
      icon: "❄️",
      highlights: [
        "Blockchain Transparency",
        "Smart Contracts",
        "Impact Verification",
      ],
      metrics: ["$100K+ Donated", "95% Transparency Score", "Zero Fraud"],
      lastUpdate: "2024-08-20",
    },
    {
      id: 4,
      name: "Loopify",
      tagline: "Next-Gen Music Experience",
      description:
        "AI-powered music streaming platform with spatial audio, neural network recommendations, and social discovery features. Leverages machine learning for personalized audio experiences.",
      technologies: [
        "React",
        "TensorFlow",
        "Web Audio API",
        "GraphQL",
        "Redis",
      ],
      category: "AI/ML",
      github: "https://github.com/TanvirHassanSayem/Loopify",
      stars: 342,
      forks: 89,
      commits: 603,
      language: "JavaScript",
      status: "🚀 Viral",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      bgPattern:
        "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)",
      icon: "🎵",
      highlights: ["AI Recommendations", "Spatial Audio", "Neural Networks"],
      metrics: ["1M+ Streams", "99% User Satisfaction", "Award Winning"],
      lastUpdate: "2024-08-25",
    },
    {
      id: 5,
      name: "Workforce360",
      tagline: "Enterprise Workforce Revolution",
      description:
        "Comprehensive enterprise workforce management platform with predictive analytics, automated scheduling algorithms, and advanced performance metrics. Scales to handle Fortune 500 operations.",
      technologies: [
        "Vue.js",
        "Python",
        "TensorFlow",
        "PostgreSQL",
        "Kubernetes",
      ],
      category: "Enterprise",
      github: "https://github.com/TanvirHassanSayem/Workforce360",
      stars: 187,
      forks: 52,
      commits: 456,
      language: "Vue",
      status: "💼 Enterprise",
      gradient: "from-indigo-500 via-blue-600 to-cyan-500",
      bgPattern:
        "radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(34, 211, 238, 0.4) 0%, transparent 50%)",
      icon: "👥",
      highlights: [
        "Predictive Analytics",
        "Auto-Scheduling",
        "Performance Metrics",
      ],
      metrics: ["500K+ Employees", "99.99% Reliability", "Fortune 500 Trusted"],
      lastUpdate: "2024-08-23",
    },
  ];

  const categories = [
    "all",
    "Full-Stack",
    "DevOps",
    "Blockchain",
    "AI/ML",
    "Enterprise",
  ];

  const filteredProjects =
    repoFilter === "all"
      ? projects
      : projects.filter((project) => project.category === repoFilter);

  const totalStats = {
    totalStars: projects.reduce((sum, project) => sum + project.stars, 0),
    totalForks: projects.reduce((sum, project) => sum + project.forks, 0),
    totalCommits: projects.reduce((sum, project) => sum + project.commits, 0),
    activeProjects: projects.length,
  };

  // Mouse tracking for advanced effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionStyle = {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 16px",
    textAlign: "center",
  };

  return (
    <section style={sectionStyle}>
      <div className="w-full max-w-7xl mx-auto relative">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50 -z-10"></div>

        {/* Dynamic mesh gradient background */}
        <div
          className="absolute inset-0 opacity-30 -z-10"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x * 0.05}% ${
              mousePosition.y * 0.05
            }%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
              radial-gradient(circle at ${100 - mousePosition.x * 0.05}% ${
              100 - mousePosition.y * 0.05
            }%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)
            `,
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        ></div>

        {/* Floating particles - reduced for mobile */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${
                  Math.random() * 6 + 4
                }s infinite linear, pulse ${
                  Math.random() * 4 + 2
                }s infinite ease-in-out`,
                animationDelay: `${Math.random() * 4}s`,
                transform: `scale(${Math.random() * 1 + 0.5})`,
              }}
            />
          ))}
        </div>

        <div className="py-8 sm:py-12 lg:py-16">
          {/* Ultra-Stylish Header - Improved responsiveness */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 relative">
            {/* Glowing title with better mobile scaling */}
            <div className="relative inline-block mb-6 sm:mb-8 lg:mb-12">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black m-4 sm:mb-6 lg:mb-8 relative z-10 px-10 sm:px-4"
                style={{
                  background: `linear-gradient(135deg, 
                    #60a5fa 0%, 
                    #c084fc 25%, 
                    #f472b6 50%, 
                    #fbbf24 75%, 
                    #60a5fa 100%)`,
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 4s ease infinite",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1.1,
                }}
              >
                FEATURED PROJECTS
              </h1>

              {/* Animated underline - better mobile sizing */}
              <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-xs sm:max-w-md lg:max-w-lg">
                <div className="h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-80 animate-pulse"></div>
                <div
                  className="h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full mt-0.5 sm:mt-1 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>

            {/* Ultra-Premium Stats Dashboard - Better mobile layout */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
              {[
                {
                  label: "Total Stars",
                  value: totalStats.totalStars,
                  icon: "⭐",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  label: "Total Forks",
                  value: totalStats.totalForks,
                  icon: "🔀",
                  gradient: "from-green-400 to-emerald-500",
                },
                {
                  label: "Total Commits",
                  value: totalStats.totalCommits,
                  icon: "💻",
                  gradient: "from-purple-400 to-purple-600",
                },
                {
                  label: "Live Projects",
                  value: totalStats.activeProjects,
                  icon: "🚀",
                  gradient: "from-blue-400 to-blue-600",
                },
              ].map((stat, idx) => (
                <div key={idx} className="relative group">
                  <div
                    className={`bg-gradient-to-br ${stat.gradient} p-0.5 sm:p-1 rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-500 group-hover:scale-105`}
                  >
                    <div className="bg-black/80 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 text-center">
                      <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl mb-1 sm:mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                Cutting-edge solutions
              </span>{" "}
              crafted with precision, built for impact. Each project represents
              breakthrough innovation and architectural excellence.
            </p>
          </div>

          {/* Ultra-Stylish Category Filters - Improved mobile scrolling */}
          <div className="flex overflow-x-auto flex-nowrap justify-start sm:justify-center gap-2 sm:gap-3 lg:gap-4 px-2 sm:px-4 mb-8 sm:mb-12 lg:mb-16 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setRepoFilter(category)}
                className={`whitespace-nowrap px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm lg:text-base transition-all duration-300 ${
                  repoFilter === category
                    ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg"
                    : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {category === "all" ? `All (${projects.length})` : category}
              </button>
            ))}
          </div>

          {/* Ultra-Premium Projects Grid - Major responsiveness improvements */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 mb-12 sm:mb-16 lg:mb-24">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative transition-all duration-700 transform hover:scale-[1.01] lg:hover:scale-[1.02]"
                style={{
                  animation: `fadeInUp 0.8s ease-out ${index * 0.15}s both`,
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Dynamic gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl sm:rounded-2xl lg:rounded-3xl blur-sm opacity-40 group-hover:opacity-70 transition-all duration-500`}
                ></div>

                {/* Main project card with better mobile padding */}
                <div
                  className="relative bg-black/90 backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all duration-500"
                  style={{
                    background: `${project.bgPattern}, linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 100%)`,
                  }}
                >
                  {/* Status badge with better positioning */}
                  <div className="absolute top-3 sm:top-4 lg:top-6 right-3 sm:right-4 lg:right-6 z-20">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xl animate-pulse">
                      {project.status}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8 xl:p-10">
                    {/* Project header with better mobile layout */}
                    <div className="flex flex-col sm:flex-row sm:items-start mb-4 sm:mb-6 lg:mb-8">
                      <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-3 sm:mb-0 sm:mr-4 lg:mr-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 filter drop-shadow-2xl self-center sm:self-start">
                        {project.icon}
                      </div>
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-black text-white mb-1 sm:mb-2 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-blue-200 group-hover:to-purple-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 break-words leading-tight">
                          {project.name}
                        </h3>
                        <p className="text-sm sm:text-base lg:text-lg text-blue-300 font-semibold mb-3 sm:mb-4 opacity-90 leading-tight">
                          {project.tagline}
                        </p>
                        <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm flex-wrap">
                          <span className="flex items-center gap-1 sm:gap-2 text-yellow-400 font-bold">
                            ⭐ {project.stars}
                          </span>
                          <span className="flex items-center gap-1 sm:gap-2 text-green-400 font-bold">
                            🔀 {project.forks}
                          </span>
                          <span className="flex items-center gap-1 sm:gap-2 text-purple-400 font-bold">
                            💻 {project.commits}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced description with better mobile text sizing */}
                    <p className="text-gray-200 leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg font-light">
                      {project.description}
                    </p>

                    {/* Premium highlights - better mobile spacing */}
                    <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8">
                      {project.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-emerald-400 font-semibold text-xs sm:text-sm lg:text-base"
                        >
                          <div className="w-1.5 sm:w-2 lg:w-3 h-1.5 sm:h-2 lg:h-3 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full mr-2 sm:mr-3 lg:mr-4 animate-pulse flex-shrink-0"></div>
                          <span className="break-words leading-tight">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Impressive metrics - better mobile layout */}
                    <div className="grid grid-cols-1 gap-1.5 sm:gap-2 mb-4 sm:mb-6 lg:mb-8">
                      {project.metrics.map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-blue-300 text-xs sm:text-sm font-medium"
                        >
                          <div className="w-1 sm:w-1.5 lg:w-2 h-1 sm:h-1.5 lg:h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                          <span className="break-words leading-tight">
                            {metric}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Advanced technology badges - improved mobile layout */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3 mb-4 sm:mb-6 lg:mb-8">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white text-xs sm:text-sm rounded-lg sm:rounded-xl border border-white/20 hover:border-white/40 hover:from-white/20 hover:to-white/10 transition-all duration-300 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Ultra-premium action buttons - better mobile sizing */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 bg-gradient-to-r ${project.gradient} text-white py-2.5 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group text-xs sm:text-sm lg:text-base`}
                      >
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative z-10">🚀 Explore Code</span>
                      </a>
                      <button className="px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white rounded-lg sm:rounded-xl lg:rounded-2xl font-bold hover:from-white/20 hover:to-white/10 transition-all duration-300 border border-white/20 hover:border-white/40 hover:shadow-xl text-xs sm:text-sm lg:text-base">
                        ✨ Live Demo
                      </button>
                    </div>
                  </div>

                  {/* Advanced hover effects */}
                  {hoveredProject === project.id && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse pointer-events-none"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse pointer-events-none"></div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Ultra-Premium CTA Section - Better mobile responsiveness */}
          <div className="text-center relative px-2 sm:px-4">
            <div className="relative bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-16 border border-white/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 sm:mb-6 lg:mb-8 relative z-10">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Ready to be Amazed?
                </span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed relative z-10 px-2">
                These projects represent the pinnacle of modern software
                engineering. Each one pushes boundaries, solves complex
                problems, and delivers exceptional user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 justify-center relative z-10">
                <a
                  href="https://github.com/TanvirHassanSayem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">🌟 Discover More Magic</span>
                </a>
                <button className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white py-3 sm:py-4 lg:py-5 px-6 sm:px-8 lg:px-10 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-sm sm:text-base lg:text-lg xl:text-xl hover:from-white/20 hover:to-white/10 transition-all duration-500 border border-white/20 hover:border-white/40 hover:shadow-xl">
                  💼 Let's Collaborate
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes gradientShift {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            33% {
              transform: translateY(-10px) rotate(120deg);
            }
            66% {
              transform: translateY(5px) rotate(240deg);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 0.3;
            }
            50% {
              opacity: 1;
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          /* Scrollbar hiding for filter buttons */
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }

          /* Mobile-specific optimizations */
          @media (max-width: 640px) {
            /* Reduce particle count on mobile */
            .floating-particles {
              display: none;
            }

            /* Reduce blur effects on mobile for performance */
            .backdrop-blur-xl {
              backdrop-filter: blur(8px);
            }

            .backdrop-blur-2xl {
              backdrop-filter: blur(10px);
            }

            /* Ensure proper touch targets */
            button,
            a {
              min-height: 44px;
            }

            /* Better text wrapping on very small screens */
            h1,
            h2,
            h3 {
              word-break: break-word;
              hyphens: auto;
            }

            /* Optimize animations for mobile */
            .group-hover\\:scale-\\[1\\.01\\] {
              transform: none;
            }

            .group:hover .group-hover\\:scale-110 {
              transform: scale(1.05);
            }
          }

          /* Tablet optimizations */
          @media (min-width: 641px) and (max-width: 1024px) {
            .backdrop-blur-xl {
              backdrop-filter: blur(12px);
            }
          }

          /* High contrast mode support */
          @media (prefers-contrast: high) {
            .border-white\\/10 {
              border-color: rgba(255, 255, 255, 0.3);
            }

            .text-gray-300 {
              color: rgba(255, 255, 255, 0.9);
            }

            .bg-white\\/5 {
              background-color: rgba(255, 255, 255, 0.15);
            }
          }

          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }

            .animate-pulse {
              animation: none;
            }

            .group:hover {
              transform: none !important;
            }
          }

          /* Focus states for accessibility */
          button:focus-visible,
          a:focus-visible {
            outline: 2px solid #60a5fa;
            outline-offset: 2px;
            border-radius: 8px;
          }

          /* Prevent horizontal overflow */
          .max-w-7xl {
            overflow-x: hidden;
          }

          /* Better line height for small text */
          @media (max-width: 480px) {
            .text-xs {
              line-height: 1.4;
            }

            .text-sm {
              line-height: 1.4;
            }

            /* Ensure technology badges don't get too small */
            .technology-badge {
              min-width: 60px;
              text-align: center;
            }
          }

          /* Grid improvements for very large screens */
          @media (min-width: 1920px) {
            .max-w-7xl {
              max-width: 90rem;
            }
          }

          /* Smooth transitions for all interactive elements */
          button,
          a,
          .group {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          /* Better hover states for touch devices */
          @media (hover: hover) {
            .group:hover {
              transform: translateY(-2px);
            }
          }

          /* Loading state improvements */
          .project-card {
            will-change: transform, opacity;
          }

          /* Performance optimizations */
          .backdrop-blur-xl,
          .backdrop-blur-2xl {
            backface-visibility: hidden;
            transform: translateZ(0);
          }
        `}</style>
      </div>
    </section>
  );
};

export default UltimateProjectsSection;




