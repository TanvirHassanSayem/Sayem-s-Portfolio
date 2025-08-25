import { useState, useEffect } from "react";

const EnhancedSkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const theme = {
    primary: "#6366f1",
    secondary: "#8b5cf6",
    accent: "#06b6d4",
    success: "#10b981",
    warning: "#f59e0b",
    danger: "#ef4444",
  };

  const skillsData = {
    Frontend: [
      {
        name: "React",
        level: 92,
        icon: "⚛️",
        color: theme.primary,
        description: "Advanced component architecture & hooks",
      },
      {
        name: "JavaScript",
        level: 89,
        icon: "🟨",
        color: theme.warning,
        description: "ES6+, async/await, modern patterns",
      },
      {
        name: "TypeScript",
        level: 85,
        icon: "🔷",
        color: theme.accent,
        description: "Type-safe development",
      },
      {
        name: "TailwindCSS",
        level: 88,
        icon: "🎨",
        color: theme.success,
        description: "Utility-first styling",
      },
      {
        name: "HTML5/CSS3",
        level: 95,
        icon: "🌐",
        color: theme.danger,
        description: "Semantic markup & modern CSS",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        level: 87,
        icon: "🟢",
        color: theme.success,
        description: "Server-side JavaScript runtime",
      },
      {
        name: "REST APIs",
        level: 84,
        icon: "🔗",
        color: theme.primary,
        description: "RESTful service architecture",
      },
      {
        name: "Firebase",
        level: 82,
        icon: "🔥",
        color: theme.warning,
        description: "Real-time database & auth",
      },
      {
        name: "Express.js",
        level: 86,
        icon: "⚡",
        color: theme.secondary,
        description: "Web application framework",
      },
    ],
    "Tools & DevOps": [
      {
        name: "Git & GitHub",
        level: 91,
        icon: "🐙",
        color: theme.accent,
        description: "Version control & collaboration",
      },
      {
        name: "Three.js",
        level: 78,
        icon: "🎮",
        color: theme.primary,
        description: "3D graphics & animations",
      },
      {
        name: "Webpack",
        level: 75,
        icon: "📦",
        color: theme.secondary,
        description: "Module bundling",
      },
      {
        name: "Docker",
        level: 72,
        icon: "🐳",
        color: theme.accent,
        description: "Containerization",
      },
    ],
    Database: [
      {
        name: "MongoDB",
        level: 83,
        icon: "🍃",
        color: theme.success,
        description: "NoSQL document database",
      },
      {
        name: "PostgreSQL",
        level: 79,
        icon: "🐘",
        color: theme.primary,
        description: "Relational database",
      },
      {
        name: "Redis",
        level: 74,
        icon: "🔴",
        color: theme.danger,
        description: "In-memory data structure",
      },
    ],
  };

  const additionalSkills = [
    { name: "Responsive Design", icon: "📱", color: theme.primary },
    { name: "API Integration", icon: "🔌", color: theme.accent },
    { name: "Performance Optimization", icon: "⚡", color: theme.warning },
    { name: "Testing", icon: "🧪", color: theme.success },
    { name: "UI/UX Design", icon: "🎨", color: theme.secondary },
    { name: "Agile Development", icon: "🔄", color: theme.danger },
    { name: "Code Review", icon: "👁️", color: theme.primary },
    { name: "CI/CD", icon: "🚀", color: theme.accent },
  ];

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const SkillCard = ({ skill, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <div
        style={{
          position: "relative",
          padding: "24px",
          background: isHovered
            ? `rgba(${parseInt(skill.color.slice(1, 3), 16)}, ${parseInt(
                skill.color.slice(3, 5),
                16
              )}, ${parseInt(skill.color.slice(5, 7), 16)}, 0.1)`
            : "rgba(255,255,255,0.05)",
          borderRadius: "20px",
          border: isHovered
            ? `2px solid ${skill.color}80`
            : "1px solid rgba(255,255,255,0.1)",
          transition: "all 0.3s ease",
          transform: isHovered ? "translateY(-5px)" : "translateY(0)",
          boxShadow: isHovered
            ? `0 15px 35px rgba(0,0,0,0.2), 0 0 20px ${skill.color}30`
            : "0 5px 15px rgba(0,0,0,0.1)",
          cursor: "pointer",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Skill header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              fontSize: "28px",
              marginRight: "16px",
              filter: isHovered
                ? "drop-shadow(0 0 8px rgba(255,255,255,0.3))"
                : "none",
              transition: "filter 0.3s ease",
            }}
          >
            {skill.icon}
          </span>
          <div style={{ flex: 1 }}>
            <h4
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontWeight: "700",
                margin: "0 0 4px 0",
              }}
            >
              {skill.name}
            </h4>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "13px",
                margin: 0,
                lineHeight: "1.4",
              }}
            >
              {skill.description}
            </p>
          </div>
        </div>

        {/* Progress section */}
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.8)",
                fontWeight: "500",
              }}
            >
              Proficiency
            </span>
            <span
              style={{
                fontSize: "14px",
                color: skill.color,
                fontWeight: "700",
              }}
            >
              {skill.level}%
            </span>
          </div>

          {/* Progress bar */}
          <div
            style={{
              height: "8px",
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "4px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${skill.level}%`,
                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}CC)`,
                borderRadius: "4px",
                transition: "width 1s ease-out",
                position: "relative",
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${theme.primary}15 0%, transparent 50%)`,
          pointerEvents: "none",
          transition: "background 0.1s ease",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "900",
              marginBottom: "16px",
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Skills & Technologies
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.7)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Building modern web experiences with cutting-edge technologies
          </p>
        </div>

        {/* Category Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          {Object.keys(skillsData).map((category) => (
            <button
              key={category}
              style={{
                padding: "12px 24px",
                borderRadius: "30px",
                background:
                  activeCategory === category
                    ? `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`
                    : "rgba(255,255,255,0.1)",
                border:
                  activeCategory === category
                    ? "none"
                    : "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.3s ease",
                transform:
                  activeCategory === category ? "scale(1.05)" : "scale(1)",
              }}
              onClick={() => setActiveCategory(category)}
              onMouseEnter={(e) => {
                if (activeCategory !== category) {
                  e.target.style.background = "rgba(255,255,255,0.15)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category) {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                }
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "60px",
          }}
        >
          {skillsData[activeCategory]?.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Skills */}
        <div style={{ textAlign: "center" }}>
          <h3
            style={{
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "40px",
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Additional Expertise
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {additionalSkills.map((skill, index) => {
              const [isHovered, setIsHovered] = useState(false);

              return (
                <div
                  key={skill.name}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "24px 20px",
                    borderRadius: "20px",
                    background: isHovered
                      ? `linear-gradient(135deg, ${skill.color}20, rgba(255,255,255,0.05))`
                      : "rgba(255,255,255,0.05)",
                    border: isHovered
                      ? `2px solid ${skill.color}60`
                      : "1px solid rgba(255,255,255,0.1)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered
                      ? "translateY(-8px) scale(1.02)"
                      : "translateY(0) scale(1)",
                    boxShadow: isHovered
                      ? `0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px ${skill.color}20, 0 0 20px ${skill.color}20`
                      : "0 4px 15px rgba(0,0,0,0.1)",
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Animated background glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `radial-gradient(circle at center, ${skill.color}15, transparent 70%)`,
                      opacity: isHovered ? 1 : 0,
                      transition: "opacity 0.3s ease",
                      borderRadius: "20px",
                    }}
                  />

                  {/* Icon container */}
                  <div
                    style={{
                      position: "relative",
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background: isHovered
                        ? `linear-gradient(135deg, ${skill.color}, ${skill.color}CC)`
                        : `linear-gradient(135deg, ${skill.color}40, ${skill.color}20)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px",
                      transition: "all 0.3s ease",
                      boxShadow: isHovered
                        ? `0 8px 25px ${skill.color}40, inset 0 1px 0 rgba(255,255,255,0.2)`
                        : `0 4px 15px ${skill.color}20`,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "24px",
                        filter: isHovered
                          ? "drop-shadow(0 0 8px rgba(255,255,255,0.5))"
                          : "none",
                        transition: "filter 0.3s ease",
                      }}
                    >
                      {skill.icon}
                    </span>

                    {/* Pulse effect */}
                    {isHovered && (
                      <div
                        style={{
                          position: "absolute",
                          top: "-10px",
                          left: "-10px",
                          right: "-10px",
                          bottom: "-10px",
                          borderRadius: "50%",
                          border: `2px solid ${skill.color}40`,
                          animation: "pulse 2s infinite",
                        }}
                      />
                    )}
                  </div>

                  {/* Skill name */}
                  <h4
                    style={{
                      color: isHovered ? "#ffffff" : "#e5e7eb",
                      fontSize: "16px",
                      fontWeight: "600",
                      margin: "0 0 8px 0",
                      textAlign: "center",
                      transition: "color 0.3s ease",
                      position: "relative",
                    }}
                  >
                    {skill.name}
                  </h4>

                  {/* Skill level indicator */}
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      marginTop: "4px",
                    }}
                  >
                    {[...Array(5)].map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background:
                            dotIndex < (index % 3) + 3
                              ? skill.color
                              : "rgba(255,255,255,0.2)",
                          transition: "all 0.3s ease",
                          transform:
                            isHovered && dotIndex < (index % 3) + 3
                              ? "scale(1.3)"
                              : "scale(1)",
                        }}
                      />
                    ))}
                  </div>

                  {/* Floating particles */}
                  {isHovered &&
                    [...Array(3)].map((_, particleIndex) => (
                      <div
                        key={particleIndex}
                        style={{
                          position: "absolute",
                          width: "3px",
                          height: "3px",
                          background: skill.color,
                          borderRadius: "50%",
                          top: `${20 + particleIndex * 20}%`,
                          left: `${10 + particleIndex * 30}%`,
                          opacity: 0.6,
                          animation: `float 3s ease-in-out infinite ${
                            particleIndex * 0.5
                          }s`,
                        }}
                      />
                    ))}
                </div>
              );
            })}
          </div>

          {/* Bottom decorative section */}
          <div
            style={{
              marginTop: "48px",
              padding: "32px",
              background: "rgba(255,255,255,0.03)",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.08)",
              maxWidth: "600px",
              margin: "48px auto 0",
            }}
          >
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#ffffff",
                marginBottom: "16px",
                textAlign: "center",
              }}
            >
              🚀 Always Learning & Growing
            </h4>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Passionate about exploring new technologies and methodologies to
              deliver exceptional user experiences and robust solutions.
            </p>
          </div>
        </div>

        {/* Add keyframes for animations */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @keyframes pulse {
              0% {
                transform: scale(1);
                opacity: 1;
              }
              50% {
                transform: scale(1.1);
                opacity: 0.7;
              }
              100% {
                transform: scale(1.2);
                opacity: 0;
              }
            }
            
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
                opacity: 0.6;
              }
              50% {
                transform: translateY(-15px);
                opacity: 1;
              }
            }
          `,
          }}
        />
      </div>
    </div>
  );
};

export default EnhancedSkillsSection;
