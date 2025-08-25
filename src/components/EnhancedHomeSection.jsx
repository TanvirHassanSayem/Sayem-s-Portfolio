import React, { useState, useEffect } from 'react';

const EnhancedHomeSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSkill, setCurrentSkill] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const theme = {
    primary: "#00d4ff",
    secondary: "#ff006e",
    accent: "#8338ec",
    success: "#06ffa5",
    warning: "#ffb700"
  };

  const skills = [
    "Full-Stack Developer",
    "React Specialist", 
    "Node.js Expert",
    "UI/UX Designer",
    "3D Enthusiast",
    "Open Source Contributor"
  ];

  const techStack = [
    { name: "React", level: 95, color: "#61dafb" },
    { name: "Node.js", level: 90, color: "#339933" },
    { name: "JavaScript", level: 92, color: "#f7df1e" },
    { name: "TypeScript", level: 85, color: "#3178c6" },
    { name: "Python", level: 88, color: "#3776ab" },
    { name: "CSS/SCSS", level: 90, color: "#1572b6" },
    { name: "MongoDB", level: 82, color: "#47a248" },
    { name: "Express.js", level: 88, color: "#000000" }
  ];

  const achievements = [
    { icon: "🏆", title: "Most Starred Project", desc: "Beautiful Flowers CSS Art" },
    { icon: "🌟", title: "Open Source Contributor", desc: "Multiple trending repositories" },
    { icon: "🎯", title: "Full-Stack Expertise", desc: "MERN Stack Specialist" },
    { icon: "🚀", title: "Real-World Tutorials", desc: "Curated learning resources" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 0.5;
      const y = (e.clientY / window.innerHeight - 0.5) * 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentSkill((prev) => (prev + 1) % skills.length);
        setIsTyping(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const sectionStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
    color: "#ffffff",
    padding: "80px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden"
  };

  return (
    <section style={sectionStyle}>
      {/* Animated Background */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 50%, ${theme.primary}20 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${theme.secondary}15 0%, transparent 50%),
          radial-gradient(circle at 40% 80%, ${theme.accent}10 0%, transparent 50%)
        `,
        animation: "float 6s ease-in-out infinite"
      }} />

      <div style={{ maxWidth: 1400, zIndex: 1, position: "relative", width: "100%" }}>
        
        {/* Hero Section */}
        <div style={{
          transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`,
          marginBottom: 48,
          transition: "transform 0.1s ease-out",
          textAlign: "center"
        }}>
          <div style={{
            display: "inline-block",
            padding: "8px 20px",
            backgroundColor: `${theme.success}20`,
            border: `1px solid ${theme.success}`,
            borderRadius: 25,
            marginBottom: 24,
            marginTop: 44,
            fontSize: 14,
            fontWeight: 600
          }}>
            🟢 Available for hire
          </div>

          <h1 style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 24
          }}>
            <span style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.accent})`,
              backgroundClip: "text",
              color: "transparent",
              backgroundSize: "200% 200%",
              animation: "gradient 3s ease infinite"
            }}>
              TANVIR HASSAN
            </span>
            <br />
            <span style={{
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              backgroundClip: "text",
              color: "transparent",
              fontSize: "clamp(3rem, 6vw, 5rem)"
            }}>
              SAYEM
            </span>
          </h1>

          <div style={{
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 700,
            height: "1.2em",
            marginBottom: 32
          }}>
            <span style={{
              background: "linear-gradient(135deg, #34d399, #3b82f6, #8b5cf6)",
              backgroundClip: "text",
              color: "transparent",
              opacity: isTyping ? 1 : 0,
              transition: "opacity 0.3s ease"
            }}>
              {skills[currentSkill]}
            </span>
          </div>
        </div>

        {/* About Me */}
        <div style={{
          maxWidth: 900,
          margin: "0 auto 48px",
          textAlign: "center"
        }}>
          <p style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            color: "#e2e8f0",
            lineHeight: 1.7,
            marginBottom: 32
          }}>
            🎓 CSE @ MEC (DU Affiliated) | 📍 Dhaka, Bangladesh
          </p>
          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "#94a3b8",
            lineHeight: 1.6,
            marginBottom: 32
          }}>
            Passionate full-stack developer crafting exceptional digital experiences with React, Node.js, and cutting-edge web technologies. 
            I specialize in building beautiful, performant applications that solve real-world problems. From stunning CSS animations to 
            robust backend systems, I bring ideas to life through clean code and innovative solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 24,
          marginBottom: 48,
          maxWidth: 1000,
          margin: "0 auto 48px"
        }}>
          {[
            { label: "Projects", value: "15+", icon: "🚀", color: theme.primary },
            { label: "GitHub Stars", value: "100+", icon: "⭐", color: theme.warning },
            { label: "Technologies", value: "12+", icon: "💻", color: theme.secondary },
            { label: "Experience", value: "2+ Years", icon: "🎯", color: theme.success }
          ].map((stat, idx) => (
            <div key={idx} style={{
              padding: "24px",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
              borderRadius: 20,
              border: `1px solid ${stat.color}30`,
              textAlign: "center",
              transition: "all 0.3s ease",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = `0 20px 40px ${stat.color}20`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{stat.icon}</div>
              <div style={{
                fontSize: 28,
                fontWeight: 900,
                color: stat.color,
                marginBottom: 8
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 14, color: "#94a3b8", fontWeight: 600 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div style={{ marginBottom: 48, maxWidth: 1000, margin: "0 auto 48px" }}>
          <h3 style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 32,
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
            backgroundClip: "text",
            color: "transparent"
          }}>
            💡 Tech Stack & Expertise
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 16
          }}>
            {techStack.map((tech, idx) => (
              <div key={idx} style={{
                padding: "16px 20px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 12,
                border: `1px solid ${tech.color}30`
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 8
                }}>
                  <span style={{ fontWeight: 600, color: "#e2e8f0" }}>{tech.name}</span>
                  <span style={{ fontSize: 12, color: tech.color, fontWeight: 700 }}>
                    {tech.level}%
                  </span>
                </div>
                <div style={{
                  height: 6,
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: 3,
                  overflow: "hidden"
                }}>
                  <div style={{
                    height: "100%",
                    width: `${tech.level}%`,
                    background: `linear-gradient(90deg, ${tech.color}, ${tech.color}aa)`,
                    borderRadius: 3,
                    transition: "width 2s ease"
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div style={{ marginBottom: 48, maxWidth: 1000, margin: "0 auto 48px" }}>
          <h3 style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 800,
            textAlign: "center",
            marginBottom: 32,
            background: `linear-gradient(135deg, ${theme.accent}, ${theme.success})`,
            backgroundClip: "text",
            color: "transparent"
          }}>
            🏆 Key Achievements
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20
          }}>
            {achievements.map((achievement, idx) => (
              <div key={idx} style={{
                padding: "24px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.1)",
                textAlign: "center",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.borderColor = theme.primary;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{achievement.icon}</div>
                <h4 style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: theme.primary,
                  marginBottom: 8
                }}>
                  {achievement.title}
                </h4>
                <p style={{ fontSize: 14, color: "#94a3b8", lineHeight: 1.4 }}>
                  {achievement.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div style={{
          display: "flex",
          gap: 20,
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: 40
        }}>
          <button style={{
            padding: "18px 36px",
            background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
            borderRadius: 50,
            color: "#fff",
            fontWeight: 700,
            border: "none",
            cursor: "pointer",
            fontSize: 16,
            boxShadow: `0 15px 35px ${theme.primary}40`,
            transition: "all 0.3s ease",
            position: "relative",
            overflow: "hidden"
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px) scale(1.05)";
            e.target.style.boxShadow = `0 20px 40px ${theme.primary}60`;
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = `0 15px 35px ${theme.primary}40`;
          }}>
            🚀 View My Projects
          </button>
          
          <a href="https://github.com/TanvirHassanSayem" target="_blank" rel="noreferrer" style={{
            padding: "18px 36px",
            border: `2px solid ${theme.primary}`,
            borderRadius: 50,
            color: "#fff",
            fontWeight: 700,
            textDecoration: "none",
            fontSize: 16,
            transition: "all 0.3s ease",
            display: "inline-block",
            background: "rgba(255,255,255,0.05)",
            backdropFilter: "blur(10px)"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = theme.primary;
            e.target.style.transform = "translateY(-3px) scale(1.05)";
            e.target.style.boxShadow = `0 20px 40px ${theme.primary}40`;
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255,255,255,0.05)";
            e.target.style.transform = "translateY(0) scale(1)";
            e.target.style.boxShadow = "none";
          }}>
            💻 GitHub Profile
          </a>

          <button style={{
            padding: "18px 36px",
            border: `2px solid ${theme.success}`,
            borderRadius: 50,
            color: theme.success,
            fontWeight: 700,
            fontSize: 16,
            background: "transparent",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = theme.success;
            e.target.style.color = "#000";
            e.target.style.transform = "translateY(-3px) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = theme.success;
            e.target.style.transform = "translateY(0) scale(1)";
          }}>
            📧 Let's Connect
          </button>
        </div>

        {/* Contact Info */}
        <div style={{
          textAlign: "center",
          padding: "32px",
          background: "rgba(255,255,255,0.02)",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.1)",
          maxWidth: 600,
          margin: "0 auto"
        }}>
          <h4 style={{
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 16,
            color: theme.primary
          }}>
            Ready to work together? 🤝
          </h4>
          <p style={{ color: "#94a3b8", marginBottom: 20, lineHeight: 1.6 }}>
            I'm always excited to discuss new opportunities, collaborate on innovative projects, 
            or just chat about the latest in web development!
          </p>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap"
          }}>
            <span style={{ 
              padding: "8px 16px", 
              background: `${theme.primary}20`, 
              borderRadius: 20,
              fontSize: 14,
              color: theme.primary,
              fontWeight: 600
            }}>
              📍 Dhaka, Bangladesh
            </span>
            <span style={{ 
              padding: "8px 16px", 
              background: `${theme.success}20`, 
              borderRadius: 20,
              fontSize: 14,
              color: theme.success,
              fontWeight: 600
            }}>
              🌐 Remote Friendly
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }

        @media (max-width: 768px) {
          section {
            padding: 40px 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default EnhancedHomeSection;