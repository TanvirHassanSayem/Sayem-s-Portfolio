import React, { useState, useEffect } from "react";
import {
  Github,
  MapPin,
  Target,
  Code,
  Sparkles,
  Heart,
  Star,
  GitBranch,
  ExternalLink,
  Download,
  Mail,
  Linkedin,
  Trophy,
  Calendar,
  Briefcase,
  GraduationCap,
  Zap,
  Users,
  Globe,
  Database,
  Server,
  Smartphone,
  Palette,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  BookOpen,
  Coffee,
} from "lucide-react";

import { motion } from "framer-motion";

const EnhancedPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  // Enhanced theme with vibrant colors
  const theme = {
    primary: "#00f5ff", // Cyan
    secondary: "#ff6b6b", // Coral
    accent: "#4ecdc4", // Teal
    purple: "#a78bfa", // Purple
    gold: "#fbbf24", // Gold
    green: "#10b981", // Green
    blue: "#3b82f6", // Blue
    dark: "#0f0f23",
    darkSecondary: "#1a1a3a",
  };

  // Comprehensive profile data
  const profile = {
    name: "Tanvir Hassan Sayem",
    title: "Full-Stack Developer & UI/UX Enthusiast",
    subtitle: "Crafting Digital Excellence Through Code",
    bio: "CSE @ MEC (DU Affiliated) • Building scalable applications, stunning interfaces, and open-source solutions that impact thousands of users worldwide.",
    location: "Dhaka, Bangladesh",
    avatar_url: "https://avatars.githubusercontent.com/TanvirHassanSayem",
    github: "https://github.com/TanvirHassanSayem",
    email: "tanvirhassansayem@gmail.com",
    linkedin: "https://linkedin.com/in/tanvirhassansayem",

    experience: [
      {
        title: "Senior Full-Stack Developer",
        company: "Tech Innovation Hub",
        period: "2023 - Present",
        description:
          "Leading development of enterprise applications serving 50K+ users",
        achievements: [
          "Reduced load times by 60% through optimization",
          "Built scalable microservices architecture",
          "Mentored 5 junior developers",
        ],
      },
      {
        title: "Frontend Developer",
        company: "Digital Solutions Ltd",
        period: "2022 - 2023",
        description:
          "Specialized in React ecosystem and modern web technologies",
        achievements: [
          "Delivered 15+ production applications",
          "Implemented responsive designs for mobile-first approach",
          "Integrated complex APIs and third-party services",
        ],
      },
    ],

    projects: [
      {
        title: "Real-World Tutorial Platform",
        description:
          "Comprehensive learning platform with interactive coding exercises, video tutorials, and progress tracking. Built with React, Node.js, and MongoDB.",
        tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
        stats: { stars: "2.3K", forks: "650", users: "15K+" },
        highlights: [
          "Most starred repository",
          "Featured in dev communities",
          "Used by coding bootcamps",
        ],
        image: "🚀",
        link: "#",
        github: "#",
      },
      {
        title: "CSS Art Gallery",
        description:
          "Stunning collection of pure CSS animations and art pieces. Trending among web designers and developers for inspiration and learning.",
        tech: ["CSS3", "HTML5", "JavaScript", "SCSS"],
        stats: { stars: "1.8K", forks: "420", views: "25K+" },
        highlights: [
          "Featured on CodePen",
          "Viral on social media",
          "Design inspiration hub",
        ],
        image: "🎨",
        link: "#",
        github: "#",
      },
      {
        title: "E-Commerce Dashboard",
        description:
          "Modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and sales insights.",
        tech: ["Next.js", "TypeScript", "Tailwind", "Chart.js", "PostgreSQL"],
        stats: { performance: "98%", users: "5K+", uptime: "99.9%" },
        highlights: [
          "Client project success",
          "High performance score",
          "Scalable architecture",
        ],
        image: "📊",
        link: "#",
        github: "#",
      },
    ],

    skills: {
      Frontend: {
        items: [
          "React & Next.js",
          "TypeScript",
          "Vue.js",
          "Tailwind CSS",
          "SCSS/SASS",
          "Framer Motion",
        ],
        icon: <Smartphone size={24} />,
      },
      Backend: {
        items: [
          "Node.js",
          "Express.js",
          "Python/Django",
          "REST APIs",
          "GraphQL",
          "Microservices",
        ],
        icon: <Server size={24} />,
      },
      Database: {
        items: [
          "MongoDB",
          "PostgreSQL",
          "MySQL",
          "Redis",
          "Firebase",
          "Prisma ORM",
        ],
        icon: <Database size={24} />,
      },
      "DevOps & Tools": {
        items: [
          "Git/GitHub",
          "Docker",
          "AWS/Vercel",
          "CI/CD",
          "Jest/Testing",
          "Linux",
        ],
        icon: <Globe size={24} />,
      },
      Design: {
        items: [
          "UI/UX Design",
          "Figma",
          "CSS Art",
          "Animations",
          "Responsive Design",
          "Accessibility",
        ],
        icon: <Palette size={24} />,
      },
    },

    achievements: [
      {
        title: "Open Source Contributor",
        desc: "50+ repositories contributed",
        icon: <GitBranch />,
      },
      {
        title: "Community Impact",
        desc: "25K+ developers reached",
        icon: <Users />,
      },
      {
        title: "Performance Expert",
        desc: "Average 95+ Lighthouse scores",
        icon: <Zap />,
      },
      {
        title: "Mentor & Teacher",
        desc: "Guided 100+ junior developers",
        icon: <GraduationCap />,
      },
    ],

    stats: {
      projects: "35+",
      commits: "2,500+",
      stars: "4.2K",
      contributions: "1,200+",
    },
  };

  // Floating particles animation
  const particles = Array.from({ length: 60 }, (_, i) => (
    <div
      key={i}
      style={{
        position: "absolute",
        width: Math.random() * 6 + 2 + "px",
        height: Math.random() * 6 + 2 + "px",
        backgroundColor: [
          theme.primary,
          theme.secondary,
          theme.accent,
          theme.purple,
          theme.gold,
        ][i % 5],
        borderRadius: "50%",
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animation: `float-${i % 4} ${
          3 + Math.random() * 6
        }s ease-in-out infinite`,
        opacity: 0.2 + Math.random() * 0.6,
      }}
    />
  ));

  useEffect(() => {
    setIsVisible(true);

    // Project carousel auto-rotation
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % profile.projects.length);
      setAnimationKey((prev) => prev + 1);
    }, 5000);

    // Enhanced keyframe animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float-0 {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
        50% { transform: translateY(-30px) rotate(180deg); opacity: 0.8; }
      }
      @keyframes float-1 {
        0%, 100% { transform: translateX(0px) rotate(0deg); opacity: 0.4; }
        50% { transform: translateX(25px) rotate(-180deg); opacity: 0.7; }
      }
      @keyframes float-2 {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); opacity: 0.3; }
        33% { transform: translate(15px, -15px) rotate(120deg); opacity: 0.6; }
        66% { transform: translate(-15px, 15px) rotate(240deg); opacity: 0.9; }
      }
      @keyframes float-3 {
        0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.5; }
        50% { transform: scale(1.2) rotate(180deg); opacity: 0.8; }
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 30px ${theme.primary}40, 0 0 60px ${theme.primary}20; }
        50% { box-shadow: 0 0 50px ${theme.secondary}60, 0 0 80px ${theme.secondary}30; }
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(0,245,255,0.5); }
        50% { box-shadow: 0 0 40px rgba(255,107,107,0.7), 0 0 60px rgba(255,107,107,0.3); }
      }
      @keyframes slide-in-left {
        0% { transform: translateX(-100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes slide-in-right {
        0% { transform: translateX(100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes fade-in-up {
        0% { transform: translateY(30px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      .skill-tag:hover {
        transform: translateY(-1px) scale(1.01);
        box-shadow: 0 4px 12px rgba(0,245,255,0.2);
      }
      .project-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
      }
      .achievement-card:hover {
        animation: pulse-glow 8s infinite;
      }
      .glass-effect {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      .gradient-text {
        background: linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.purple});
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
      }
      .typing-animation {
        border-right: 2px solid ${theme.primary};
        animation: typing-cursor 1s infinite;
      }
      @keyframes typing-cursor {
        0%, 50% { border-color: ${theme.primary}; }
        51%, 100% { border-color: transparent; }
      }
      @media (max-width: 768px) {
        .skill-tag:hover {
          transform: none;
          box-shadow: none;
        }
        .project-card:hover {
          transform: none;
          box-shadow: none;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      clearInterval(interval);
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [theme.primary, theme.secondary, theme.purple, profile.projects.length]);

  const sectionStyle = {
    minHeight: "100vh",
    padding: "40px 20px",
    position: "relative",
    overflow: "hidden",
    background: `
      linear-gradient(135deg, 
        ${theme.dark} 0%, 
        ${theme.darkSecondary} 25%, 
        #2d1b69 50%, 
        ${theme.darkSecondary} 75%, 
        ${theme.dark} 100%
      ),
      radial-gradient(circle at 20% 80%, ${theme.primary}15 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${theme.secondary}15 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, ${theme.purple}10 0%, transparent 50%)
    `,
  };

  const Section = ({ children, id, style = {} }) => (
    <section id={id} style={{ ...sectionStyle, ...style }}>
      {particles}
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {children}
      </div>
    </section>
  );

  const Card = ({ children, style = {}, className = "" }) => (
    <div
      className={`glass-effect ${className}`}
      style={{
        padding: "30px",
        borderRadius: "20px",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        ...style,
      }}
    >
      {children}
    </div>
  );

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Hero Section */}
      <Section id="hero">
        <div
          style={{
            display: window.innerWidth > 768 ? "grid" : "block",
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 1fr" : "1fr",
            gap: "80px",
            alignItems: "center",
            minHeight: "100vh",
            textAlign: window.innerWidth <= 768 ? "center" : "left",
          }}
        >
          {/* Left Content */}
          <div
            style={{
              // animation: isVisible ? "slide-in-left 1s ease-out" : "",
            }}
          >
            <div style={{ marginBottom: "30px" }}>
              <p
                style={{
                  color: theme.accent,
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  marginBottom: "10px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                👋 Hello, I'm
              </p>

              <h1
                className="gradient-text typing-animation"
                style={{
                  fontSize: "clamp(3rem, 8vw, 5.5rem)",
                  fontWeight: 900,
                  marginBottom: "20px",
                  lineHeight: 1.1,
                  position: "relative",
                }}
              >
                {profile.name}
              </h1>

              <h2
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                  color: "#e2e8f0",
                  fontWeight: 600,
                  marginBottom: "15px",
                }}
              >
                {profile.title}
              </h2>

              <p
                style={{
                  color: theme.secondary,
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  marginBottom: "30px",
                  fontStyle: "italic",
                }}
              >
                {profile.subtitle}
              </p>
            </div>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#cbd5e1",
                lineHeight: 1.7,
                marginBottom: "40px",
                maxWidth: "600px",
              }}
            >
              {profile.bio}
            </p>

            {/* Quick Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth > 600 ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
                gap: "20px",
                marginBottom: "40px",
              }}
            >
              {Object.entries(profile.stats).map(([key, value], index) => (
                <div
                  key={key}
                  style={{
                    textAlign: "center",
                    padding: "20px 15px",
                    background: `linear-gradient(135deg, ${
                      [
                        theme.primary,
                        theme.secondary,
                        theme.accent,
                        theme.purple,
                      ][index]
                    }20, transparent)`,
                    borderRadius: "15px",
                    border: `2px solid ${
                      [
                        theme.primary,
                        theme.secondary,
                        theme.accent,
                        theme.purple,
                      ][index]
                    }30`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "bold",
                      color: [
                        theme.primary,
                        theme.secondary,
                        theme.accent,
                        theme.purple,
                      ][index],
                      marginBottom: "5px",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#94a3b8",
                      textTransform: "capitalize",
                    }}
                  >
                    {key}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
                justifyContent:
                  window.innerWidth <= 768 ? "center" : "flex-start",
              }}
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px) scale(1.05)";
                  e.target.style.boxShadow = `0 20px 40px ${theme.primary}40`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <Github size={24} />
                View GitHub
              </a>

              <a
                href={`mailto:${profile.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "18px 36px",
                  background: "transparent",
                  color: theme.accent,
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  border: `2px solid ${theme.accent}`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = theme.accent;
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = theme.accent;
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <Mail size={24} />
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image & Status */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Profile Image */}
            <div
              style={{
                width: "350px",
                height: "350px",
                borderRadius: "50%",
                overflow: "hidden",
                animation: "glow 4s ease-in-out infinite",
                border: `6px solid transparent`,
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.purple}) padding-box, 
                          linear-gradient(135deg, ${theme.primary}, ${theme.secondary}) border-box`,
                position: "relative",
                marginBottom: "40px",
              }}
            >
              <img
                src={profile.avatar_url}
                alt={profile.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `linear-gradient(135deg, ${theme.primary}20, ${theme.secondary}20)`,
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "4rem",
                  fontWeight: "bold",
                  color: theme.primary,
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                Tanvir Hassan Sayem
              </div>
            </div>

            {/* Status Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "100%",
                maxWidth: "300px",
              }}
            >
              <Card
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  background: `linear-gradient(135deg, ${theme.green}20, ${theme.green}05)`,
                  border: `2px solid ${theme.green}40`,
                }}
              >
                <div style={{ color: theme.green }}>
                  <CheckCircle size={24} />
                </div>
                <div>
                  <div
                    style={{
                      color: theme.green,
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    Available for Work
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                    Open to opportunities
                  </div>
                </div>
              </Card>

              <Card
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  background: `linear-gradient(135deg, ${theme.blue}20, ${theme.blue}05)`,
                  border: `2px solid ${theme.blue}40`,
                }}
              >
                <div style={{ color: theme.blue }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <div
                    style={{
                      color: theme.blue,
                      fontWeight: 600,
                      fontSize: "1rem",
                    }}
                  >
                    {profile.location}
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>
                    Remote & On-site
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
      {/* Skills Section */}
      <Section
        id="skills"
        style={{
          background: `linear-gradient(135deg, ${theme.darkSecondary}, ${theme.dark})`,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            className="gradient-text"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              marginBottom: "20px",
            }}
          >
            Technical Expertise
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#94a3b8",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Comprehensive skill set spanning modern web technologies and best
            practices
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {Object.entries(profile.skills).map(([category, data], index) => (
            <Card
              key={category}
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                border: `2px solid ${
                  [
                    theme.primary,
                    theme.secondary,
                    theme.accent,
                    theme.purple,
                    theme.gold,
                  ][index % 5]
                }40`,
                textAlign: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                  marginBottom: "25px",
                }}
              >
                <div
                  style={{
                    color: [
                      theme.primary,
                      theme.secondary,
                      theme.accent,
                      theme.purple,
                      theme.gold,
                    ][index % 5],
                  }}
                >
                  {data.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#f1f5f9",
                    margin: 0,
                  }}
                >
                  {category}
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  justifyContent: "center",
                }}
              >
                {data.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-tag"
                    style={{
                      padding: "10px 18px",
                      background: `linear-gradient(135deg, ${
                        [
                          theme.primary,
                          theme.secondary,
                          theme.accent,
                          theme.purple,
                          theme.gold,
                        ][index % 5]
                      }20, transparent)`,
                      border: `2px solid ${
                        [
                          theme.primary,
                          theme.secondary,
                          theme.accent,
                          theme.purple,
                          theme.gold,
                        ][index % 5]
                      }40`,
                      borderRadius: "25px",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: [
                        theme.primary,
                        theme.secondary,
                        theme.accent,
                        theme.purple,
                        theme.gold,
                      ][index % 5],
                      transition: "all 0.1s cubic-bezier(0.4, 0, 0.2, 1)",
                      cursor: "pointer",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements">
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            className="gradient-text"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 900,
              marginBottom: "20px",
            }}
          >
            Achievements & Impact
          </h2>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#94a3b8",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Measurable contributions to the developer community and professional
            growth
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginBottom: "60px",
          }}
        >
          {profile.achievements.map((achievement, index) => (
            <Card
              key={index}
              className="achievement-card"
              style={{
                background: `linear-gradient(135deg, ${
                  [theme.primary, theme.secondary, theme.accent, theme.purple][
                    index % 4
                  ]
                }20, transparent)`,
                border: `2px solid ${
                  [theme.primary, theme.secondary, theme.accent, theme.purple][
                    index % 4
                  ]
                }40`,
                textAlign: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "20px",
                  color: [
                    theme.primary,
                    theme.secondary,
                    theme.accent,
                    theme.purple,
                  ][index % 4],
                }}
              >
                <div
                  style={{
                    padding: "20px",
                    background: `linear-gradient(135deg, ${
                      [
                        theme.primary,
                        theme.secondary,
                        theme.accent,
                        theme.purple,
                      ][index % 4]
                    }20, transparent)`,
                    borderRadius: "50%",
                    border: `2px solid ${
                      [
                        theme.primary,
                        theme.secondary,
                        theme.accent,
                        theme.purple,
                      ][index % 4]
                    }40`,
                  }}
                >
                  {React.cloneElement(achievement.icon, { size: 32 })}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#f1f5f9",
                  marginBottom: "12px",
                }}
              >
                {achievement.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                }}
              >
                {achievement.desc}
              </p>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div
          style={{
            textAlign: "center",
            padding: "60px 40px",
            background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
            borderRadius: "30px",
            border: `2px solid ${theme.primary}30`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "200%",
              height: "200%",
              background: `radial-gradient(circle, ${theme.primary}10 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 2 }}>
            <h3
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                marginBottom: "20px",
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Ready to Collaborate?
            </h3>

            <p
              style={{
                fontSize: "1.2rem",
                color: "#cbd5e1",
                marginBottom: "40px",
                maxWidth: "600px",
                margin: "0 auto 40px",
              }}
            >
              Let's build something amazing together! I'm always excited to work
              on innovative projects that make a real impact.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexWrap: "wrap",
                flexDirection: window.innerWidth <= 600 ? "column" : "row",
                alignItems: "center",
              }}
            >
              <a
                href={`mailto:${profile.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "20px 40px",
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-3px) scale(1.05)";
                  e.target.style.boxShadow = `0 20px 40px ${theme.primary}40`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <Mail size={24} />
                Start a Conversation
                <ArrowRight size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/tanvir-hassan-sayem-a33a39204/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "20px 40px",
                  background: "transparent",
                  color: theme.accent,
                  textDecoration: "none",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  border: `2px solid ${theme.accent}`,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = theme.accent;
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.color = theme.accent;
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <Linkedin size={24} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
export default EnhancedPortfolio;