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
} from "lucide-react";

const DashingAboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  // Enhanced theme with vibrant colors
  const theme = {
    primary: "#00f5ff", // Cyan
    secondary: "#ff6b6b", // Coral
    accent: "#4ecdc4", // Teal
    purple: "#a78bfa", // Purple
    gold: "#fbbf24", // Gold
  };

  // Profile data based on GitHub
  const profile = {
    name: "Tanvir Hassan Sayem",
    title: "Full-Stack Developer & UI Enthusiast",
    bio: "CSE @ MEC (DU Affiliated) • Building full-stack apps, beautiful UIs, and open source magic!",
    location: "Dhaka, Bangladesh",
    avatar_url: "https://avatars.githubusercontent.com/TanvirHassanSayem", // Your actual GitHub avatar
    github: "https://github.com/TanvirHassanSayem",
    skills: [
      "React & Next.js",
      "Node.js",
      "Python",
      "CSS Art & Animations",
      "Full-Stack Development",
      "UI/UX Design",
      "Open Source",
    ],
    highlights: [
      "🔥 Curated real-world tutorials (most starred!)",
      "🌸 Beautiful CSS art & animations trending with web designers",
      "🌐 Open source portfolio projects",
      "🐍 Python experiments and automation scripts",
    ],
  };

  const sectionStyle = {
    minHeight: "100vh",
    padding: "80px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `
      linear-gradient(135deg, 
        #0f0f23 0%, 
        #1a1a3a 25%, 
        #2d1b69 50%, 
        #1a1a3a 75%, 
        #0f0f23 100%
      ),
      radial-gradient(circle at 20% 80%, ${theme.primary}15 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, ${theme.secondary}15 0%, transparent 50%)
    `,
    position: "relative",
    overflow: "hidden",
  };

  // Floating particles animation
  const particles = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      style={{
        position: "absolute",
        width: Math.random() * 4 + 1 + "px",
        height: Math.random() * 4 + 1 + "px",
        backgroundColor:
          i % 3 === 0
            ? theme.primary
            : i % 3 === 1
            ? theme.secondary
            : theme.accent,
        borderRadius: "50%",
        left: Math.random() * 100 + "%",
        top: Math.random() * 100 + "%",
        animation: `float-${i % 3} ${
          3 + Math.random() * 4
        }s ease-in-out infinite`,
        opacity: 0.3 + Math.random() * 0.7,
      }}
    />
  ));

  useEffect(() => {
    setIsVisible(true);

    // Add keyframe animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float-0 {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      @keyframes float-1 {
        0%, 100% { transform: translateX(0px) rotate(0deg); }
        50% { transform: translateX(20px) rotate(-180deg); }
      }
      @keyframes float-2 {
        0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
        33% { transform: translate(10px, -10px) rotate(120deg); }
        66% { transform: translate(-10px, 10px) rotate(240deg); }
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 30px ${theme.primary}40; }
        50% { box-shadow: 0 0 50px ${theme.secondary}60; }
      }
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .skill-tag:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 10px 25px rgba(0,245,255,0.3);
      }
    `;
    document.head.appendChild(style);

    return () => document.head.removeChild(style);
  }, []);

  return (
    <section style={sectionStyle}>
      {/* Animated Background Particles */}
      {particles}

      <div
        style={{
          maxWidth: 1200,
          display: "grid",
          gap: 10,
          alignItems: "center",
          position: "relative",
          zIndex: 10,
          transform: isVisible ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 1s ease-out",
        }}
      >
        {/* Profile Image Section */}
        <div style={{ display: "flex", justifyContent: "center", marginTop:24 }}>
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: "50%",
              overflow: "hidden",
              animation: "glow 3s ease-in-out infinite",
              border: `4px solid transparent`,
              background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.purple}) padding-box, 
                          linear-gradient(135deg, ${theme.primary}, ${theme.secondary}) border-box`,
              position: "relative",
            }}
          >
            {/* Your GitHub profile photo */}
            <img
              src={profile.avatar_url}
              alt={profile.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "60%",
              }}
              onError={(e) => {
                // Fallback to initials if image fails to load
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Fallback with initials */}
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
              Sayem
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${theme.primary}10, transparent)`,
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ textAlign: "center" }}>
          {/* Name & Title */}
          <div style={{ marginBottom: 40 }}>
            <h1
              style={{
                fontSize: "clamp(3rem, 6vw, 5rem)",
                fontWeight: 900,
                marginBottom: 16,
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary}, ${theme.purple})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                position: "relative",
              }}
            >
              {profile.name}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)`,
                  animation: "shimmer 2s infinite",
                }}
              />
            </h1>

            <p
              style={{
                fontSize: "1.5rem",
                color: theme.accent,
                fontWeight: 600,
                marginBottom: 8,
              }}
            >
              {profile.title}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                color: "#94a3b8",
                fontSize: "1.1rem",
              }}
            >
              <MapPin size={20} />
              {profile.location}
            </div>
          </div>

          {/* Bio & Description */}
          <div
            style={{
              fontSize: 18,
              color: "#e2e8f0",
              lineHeight: 1.8,
              maxWidth: 800,
              margin: "0 auto 40px",
            }}
          >
            <p
              style={{ marginBottom: 24, fontSize: "1.2rem", fontWeight: 500 }}
            >
              {profile.bio}
            </p>
            <p style={{ marginBottom: 20 }}>
              I'm passionate about creating elegant, performant applications
              that provide exceptional user experiences. My journey in web
              development started with curiosity about how websites work, and
              has evolved into a deep passion for crafting digital solutions
              that make a difference.
            </p>
            <p>
              I specialize in the React ecosystem, full-stack development, and
              enjoy experimenting with CSS art, animations, and interactive
              experiences. When I'm not coding, you'll find me contributing to
              open-source projects and sharing knowledge with the developer
              community.
            </p>
          </div>

          {/* Highlights */}
          <div style={{ marginBottom: 40 }}>
            <h3
              style={{
                fontSize: "1.5rem",
                color: theme.secondary,
                marginBottom: 20,
                fontWeight: 700,
              }}
            >
              🚀 What I'm Building
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 16,
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              {profile.highlights.map((highlight, index) => (
                <div
                  key={index}
                  style={{
                    padding: "16px 20px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderRadius: 16,
                    border: `1px solid rgba(${
                      index % 2 ? "0,245,255" : "255,107,107"
                    },0.3)`,
                    fontSize: 14,
                    color: "#f1f5f9",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.backgroundColor = "rgba(255,255,255,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.backgroundColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div style={{ marginBottom: 40 }}>
            <h3
              style={{
                fontSize: "1.5rem",
                color: theme.purple,
                marginBottom: 20,
                fontWeight: 700,
              }}
            >
              💻 Tech Stack & Expertise
            </h3>
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
                maxWidth: 600,
                margin: "0 auto",
              }}
            >
              {profile.skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag"
                  style={{
                    padding: "12px 24px",
                    background: `linear-gradient(135deg, ${theme.primary}20, ${theme.secondary}20)`,
                    border: `2px solid ${
                      index % 3 === 0
                        ? theme.primary
                        : index % 3 === 1
                        ? theme.secondary
                        : theme.accent
                    }40`,
                    borderRadius: 30,
                    fontSize: 14,
                    fontWeight: 600,
                    color:
                      index % 3 === 0
                        ? theme.primary
                        : index % 3 === 1
                        ? theme.secondary
                        : theme.accent,
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Status Tags */}
          <div
            style={{
              display: "flex",
              gap: 20,
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                padding: "16px 28px",
                background: `linear-gradient(135deg, ${theme.primary}15, ${theme.primary}05)`,
                border: `2px solid ${theme.primary}40`,
                borderRadius: 50,
                fontSize: 16,
                color: theme.primary,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <MapPin size={18} />
              {profile.location}
            </div>
            <div
              style={{
                padding: "16px 28px",
                background: `linear-gradient(135deg, ${theme.secondary}15, ${theme.secondary}05)`,
                border: `2px solid ${theme.secondary}40`,
                borderRadius: 50,
                fontSize: 16,
                color: theme.secondary,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Target size={18} />
              Available for Projects
            </div>
            <div
              style={{
                padding: "16px 28px",
                background: `linear-gradient(135deg, ${theme.accent}15, ${theme.accent}05)`,
                border: `2px solid ${theme.accent}40`,
                borderRadius: 50,
                fontSize: 16,
                color: theme.accent,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Heart size={18} />
              Open Source Contributor
            </div>
          </div>

          {/* Call to Action */}
          <div
            style={{
              marginTop: 48,
            }}
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 36px",
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                color: "white",
                textDecoration: "none",
                borderRadius: 50,
                fontSize: 18,
                fontWeight: 700,
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
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
              Explore My Work
              <Sparkles size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashingAboutMe;
