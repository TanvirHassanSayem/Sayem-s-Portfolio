import React, { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import EnhancedHomeSection from './EnhancedHomeSection'; 
import EnhancedSkillsSection from "./EnhancedSkillsSection";
import DashingAboutMe from "./DashingAboutMe";
import UltimateProjectsSection from "./UltimateProjectsSection";
import ContactSection from "./ContactSection";

const GITHUB_USERNAME = "TanvirHassanSayem";

// Theme system with multiple color schemes
const THEMES = {
  purple: { primary: "#804FEF", secondary: "#A78BFA", accent: "#60A5FA" },
  blue: { primary: "#3B82F6", secondary: "#60A5FA", accent: "#10B981" },
  green: { primary: "#10B981", secondary: "#34D399", accent: "#F59E0B" },
  orange: { primary: "#F59E0B", secondary: "#FBBF24", accent: "#EF4444" },
  pink: { primary: "#EC4899", secondary: "#F472B6", accent: "#8B5CF6" },
};

const Portfolio2025 = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [currentTheme, setCurrentTheme] = useState("purple");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [aiChat, setAiChat] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [repoFilter, setRepoFilter] = useState("all");
  const [githubStats, setGithubStats] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);

  const theme = THEMES[currentTheme];

  // Skills data with proficiency levels
  const skillsData = [
    { name: "React", level: 90, category: "Frontend" },
    { name: "JavaScript", level: 85, category: "Programming" },
    { name: "TypeScript", level: 80, category: "Programming" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "TailwindCSS", level: 95, category: "Styling" },
    { name: "Three.js", level: 65, category: "3D Graphics" },
    { name: "Firebase", level: 80, category: "Backend" },
    { name: "Git & GitHub", level: 90, category: "Tools" },
    { name: "REST APIs", level: 85, category: "Integration" },
  ];

  // Global page styles
  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflow = "hidden";
    document.body.style.background = "#000000";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Load comprehensive GitHub data
  useEffect(() => {
    const loadGitHubData = async () => {
      try {
        // Fetch profile
        const profileRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`
        );
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch repositories
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
        );
        const reposData = await reposRes.json();

        // Filter and sort repos
        const topRepos = reposData
          .filter((r) => !r.fork && !r.archived)
          .sort(
            (a, b) =>
              (b.stargazers_count || 0) - (a.stargazers_count || 0) ||
              new Date(b.pushed_at) - new Date(a.pushed_at)
          )
          .slice(0, 12);

        setRepos(topRepos);
        setFilteredRepos(topRepos);

        // Calculate GitHub stats
        const stats = {
          totalStars: reposData.reduce(
            (acc, repo) => acc + (repo.stargazers_count || 0),
            0
          ),
          totalForks: reposData.reduce(
            (acc, repo) => acc + (repo.forks_count || 0),
            0
          ),
          languages: [
            ...new Set(reposData.map((r) => r.language).filter(Boolean)),
          ],
          totalCommits: profileData.public_repos, // Approximation
        };
        setGithubStats(stats);
      } catch (error) {
        console.warn("GitHub API fetch failed:", error);
      }
    };

    loadGitHubData();
  }, []);

  // Filter repositories by language/category
  useEffect(() => {
    if (repoFilter === "all") {
      setFilteredRepos(repos);
    } else {
      setFilteredRepos(
        repos.filter(
          (repo) => repo.language?.toLowerCase() === repoFilter.toLowerCase()
        )
      );
    }
  }, [repos, repoFilter]);

  // Enhanced 3D background with interactive particles
  useEffect(() => {
    const initializeEnhancedScene = () => {
      try {
        if (!canvasRef.current) {
          setIsLoading(false);
          return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );

        const renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current,
          alpha: true,
          antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);

        // Enhanced particle system
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 2000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
          // Positions
          positions[i] = (Math.random() - 0.5) * 300;
          positions[i + 1] = (Math.random() - 0.5) * 300;
          positions[i + 2] = (Math.random() - 0.5) * 300;

          // Colors based on current theme
          const themeColor = new THREE.Color(theme.primary);
          colors[i] = themeColor.r + Math.random() * 0.3;
          colors[i + 1] = themeColor.g + Math.random() * 0.3;
          colors[i + 2] = themeColor.b + Math.random() * 0.3;

          // Velocities
          velocities[i] = (Math.random() - 0.5) * 0.02;
          velocities[i + 1] = (Math.random() - 0.5) * 0.02;
          velocities[i + 2] = (Math.random() - 0.5) * 0.02;
        }

        particleGeometry.setAttribute(
          "position",
          new THREE.BufferAttribute(positions, 3)
        );
        particleGeometry.setAttribute(
          "color",
          new THREE.BufferAttribute(colors, 3)
        );

        const particleMaterial = new THREE.PointsMaterial({
          size: 0.9,
          vertexColors: true,
          transparent: true,
          opacity: 0.4,
          blending: THREE.AdditiveBlending,
        });

        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // Add geometric shapes for visual interest
        const geometries = [
          new THREE.SphereGeometry(1, 8, 8),
          new THREE.BoxGeometry(1, 1, 1),
          new THREE.ConeGeometry(0.5, 1, 8),
        ];

        const shapes = [];
        for (let i = 0; i < 15; i++) {
          const geometry =
            geometries[Math.floor(Math.random() * geometries.length)];
          const material = new THREE.MeshBasicMaterial({
            color: theme.secondary,
            transparent: true,
            opacity: 0.1,
            wireframe: true,
          });

          const mesh = new THREE.Mesh(geometry, material);
          mesh.position.set(
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200,
            (Math.random() - 0.5) * 200
          );
          mesh.rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
          );

          shapes.push(mesh);
          scene.add(mesh);
        }

        camera.position.z = 80;
        sceneRef.current = {
          scene,
          camera,
          renderer,
          particles,
          shapes,
          velocities,
        };

        let animationId;
        const clock = new THREE.Clock();

        const animate = () => {
          animationId = requestAnimationFrame(animate);
          const elapsedTime = clock.getElapsedTime();

          // Animate particles
          const positions = particles.geometry.attributes.position.array;
          const speedMultiplier = 0.3;
          for (let i = 0; i < particleCount * 3; i += 3) {
               positions[i] += velocities[i] * speedMultiplier;
               positions[i + 1] += velocities[i + 1] * speedMultiplier;
               positions[i + 2] += velocities[i + 2] * speedMultiplier;


            // Boundary check
            if (Math.abs(positions[i]) > 150) velocities[i] *= -1;
            if (Math.abs(positions[i + 1]) > 150) velocities[i + 1] *= -1;
            if (Math.abs(positions[i + 2]) > 150) velocities[i + 2] *= -1;
          }
          particles.geometry.attributes.position.needsUpdate = true;

          // Animate shapes
          shapes.forEach((shape, index) => {
            shape.rotation.x += 0.001 * (index + 1);
            shape.rotation.y += 0.002 * (index + 1);
            shape.position.y += Math.sin(elapsedTime + index) * 0.01;
          });

          // Mouse interaction
          particles.rotation.x += mousePosition.y * 0.0005;
          particles.rotation.y += mousePosition.x * 0.0005;

          renderer.render(scene, camera);
        };

        animate();
        setIsLoading(false);

        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          if (animationId) cancelAnimationFrame(animationId);
          renderer.dispose();
          particleGeometry.dispose();
          particleMaterial.dispose();
          geometries.forEach((g) => g.dispose());
        };
      } catch (error) {
        console.log("3D initialization failed, using fallback");
        setIsLoading(false);
      }
    };

    const timer = setTimeout(initializeEnhancedScene, 100);
    return () => clearTimeout(timer);
  }, [theme, mousePosition.x, mousePosition.y]);

  // Update particle colors when theme changes
  useEffect(() => {
    if (sceneRef.current?.particles) {
      const colors = sceneRef.current.particles.geometry.attributes.color.array;
      const themeColor = new THREE.Color(theme.primary);

      for (let i = 0; i < colors.length; i += 3) {
        colors[i] = themeColor.r + Math.random() * 0.3;
        colors[i + 1] = themeColor.g + Math.random() * 0.3;
        colors[i + 2] = themeColor.b + Math.random() * 0.3;
      }
      sceneRef.current.particles.geometry.attributes.color.needsUpdate = true;

      // Update shape colors
      if (sceneRef.current.shapes) {
        sceneRef.current.shapes.forEach((shape) => {
          shape.material.color.setHex(theme.secondary.replace("#", "0x"));
        });
      }
    }
  }, [theme]);

  // Enhanced mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Enhanced AI chat with more context
  const handleAiChat = async () => {
    if (!chatInput.trim()) return;
    const userMessage = chatInput.trim();
    setChatInput("");
    setAiChat((prev) => [...prev, { type: "user", message: userMessage }]);

    try {
      // Enhanced local bot with more contextual responses
      const aiResponse = enhancedLocalBot(
        userMessage,
        profile,
        githubStats,
        skillsData
      );

      setTimeout(() => {
        setAiChat((prev) => [...prev, { type: "ai", message: aiResponse }]);
      }, 500); // Simulate thinking time
    } catch (error) {
      setAiChat((prev) => [
        ...prev,
        {
          type: "ai",
          message: "Oops! Something went wrong. Please try again!",
        },
      ]);
    }
  };

  // Enhanced AI bot with contextual responses
  const enhancedLocalBot = (query, profile, stats, skills) => {
    const lower = query.toLowerCase();

    if (lower.includes("skills") || lower.includes("technologies")) {
      const topSkills = skills
        .filter((s) => s.level >= 80)
        .map((s) => s.name)
        .join(", ");
      return `Tanvir's top skills include: ${topSkills}. He's proficient in ${skills.length} different technologies across frontend, backend, and tools.`;
    }

    if (lower.includes("github") || lower.includes("repositories")) {
      const totalStars = stats?.totalStars || 0;
      return `Tanvir has ${
        profile?.public_repos || 0
      } public repositories on GitHub with ${totalStars} total stars across all projects. Check out the Projects section to see his work!`;
    }

    if (lower.includes("experience") || lower.includes("background")) {
      return "Tanvir is a passionate web developer specializing in React and modern web technologies. He focuses on creating elegant, performant applications with great user experiences.";
    }

    if (
      lower.includes("contact") ||
      lower.includes("hire") ||
      lower.includes("work")
    ) {
      return "Interested in working with Tanvir? Head to the Contact section to send a message directly, or reach out via email at tanvirsayem.dev@gmail.com!";
    }

    if (lower.includes("project") || lower.includes("portfolio")) {
      return "This portfolio showcases Tanvir's projects fetched live from GitHub, complete with 3D graphics, dynamic themes, and interactive features. Navigate to different sections to explore!";
    }

    if (lower.includes("theme") || lower.includes("color")) {
      return "You can change the portfolio theme using the color palette icon in the top navigation! Try switching between Purple, Blue, Green, Orange, and Pink themes.";
    }

    return "I'm here to help you learn more about Tanvir! Ask me about his skills, projects, experience, or how to get in touch. You can also ask about this portfolio's features!";
  };

  // Contact form validation
  const validateForm = () => {
    const errors = {};

    if (!contactForm.name.trim()) errors.name = "Name is required";
    if (!contactForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
      errors.email = "Email is invalid";
    }
    if (!contactForm.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
      setFormErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  // Get unique languages for filtering
  const uniqueLanguages = useMemo(() => {
    return [...new Set(repos.map((repo) => repo.language).filter(Boolean))];
  }, [repos]);

  // Common styles
  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    backgroundColor: "#000000",
    color: "#ffffff",
    overflow: "hidden",
    fontFamily:
      "Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, sans-serif",
  };

  const canvasStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: 1,
    transition: "all 0.5s ease",
  };

  const contentStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    zIndex: 10,
    overflowY: "auto",
    scrollBehavior: "smooth",
  };

  const navStyle = {
    position: "fixed",
    top: 20,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.8)",
    backdropFilter: "blur(20px)",
    borderRadius: 999,
    padding: "12px 24px",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: `0 10px 40px rgba(${parseInt(
      theme.primary.slice(1, 3),
      16
    )}, ${parseInt(theme.primary.slice(3, 5), 16)}, ${parseInt(
      theme.primary.slice(5, 7),
      16
    )}, 0.3)`,
    display: "flex",
    alignItems: "center",
    gap: 24,
  };

  const sectionStyle = {
    width: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 24px",
    textAlign: "center",
  };

  const pillStyle = (active) => ({
    padding: "10px 16px",
    borderRadius: 999,
    border: "none",
    backgroundColor: active ? theme.primary : "transparent",
    color: active ? "#ffffff" : "#d1d5db",
    cursor: "pointer",
    transition: "all 0.9s ease",
    textTransform: "capitalize",
    fontWeight: active ? 600 : 400,
    fontSize: 14,
  });

  // Loading screen
  if (isLoading) {
    return (
      <div style={containerStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            flexDirection: "column",
            gap: 20,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              border: `4px solid ${theme.primary}`,
              borderTop: "4px solid transparent",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
          <div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                background: `linear-gradient(90deg, ${theme.primary}, ${theme.secondary})`,
                backgroundClip: "text",
                color: "transparent",
                marginBottom: 8,
              }}
            >
              Initializing Portfolio
            </div>
            <div style={{ fontSize: 16, color: "#9ca3af" }}>
              Loading 3D environment & GitHub data...
            </div>
          </div>
        </div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } }`}</style>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {/* Enhanced 3D Background */}
      <canvas ref={canvasRef} style={canvasStyle} />

      {/* Enhanced Navigation */}
      <nav style={navStyle}>
        <div style={{ display: "flex", gap: 20 }}>
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              style={pillStyle(activeSection === section)}
              onMouseEnter={(e) => {
                if (activeSection !== section) {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== section) {
                  e.target.style.backgroundColor = "transparent";
                }
              }}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Theme Selector */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginLeft: 12,
            padding: "8px 12px",
            backgroundColor: "rgba(255,255,255,0.05)",
            borderRadius: 999,
          }}
        ></div>
      </nav>

      {/* AI Assistant Toggle */}
      <button
        onClick={() => setShowAiAssistant(!showAiAssistant)}
        style={{
          position: "fixed",
          top: 24,
          right: 24,
          zIndex: 1000,
          padding: 14,
          background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
          border: "none",
          borderRadius: "50%",
          fontSize: 20,
          cursor: "pointer",
          boxShadow: `0 10px 30px rgba(${parseInt(
            theme.primary.slice(1, 3),
            16
          )}, ${parseInt(theme.primary.slice(3, 5), 16)}, ${parseInt(
            theme.primary.slice(5, 7),
            16
          )}, 0.4)`,
          transition: "all 0.3s ease",
          transform: showAiAssistant ? "scale(1.1)" : "scale(1)",
        }}
      >
        🤖
      </button>

      {/* Enhanced AI Assistant */}
      {showAiAssistant && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            width: 380,
            height: 480,
            backgroundColor: "rgba(0,0,0,0.95)",
            backdropFilter: "blur(20px)",
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.1)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            animation: "slideIn 0.3s ease",
          }}
        >
          <div
            style={{
              padding: 20,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#10b981",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                }}
              />
              <span
                style={{ fontSize: 16, fontWeight: 700, color: theme.primary }}
              >
                AI Assistant
              </span>
            </div>
            <button
              onClick={() => setShowAiAssistant(false)}
              style={{
                background: "none",
                border: "none",
                color: "#9ca3af",
                cursor: "pointer",
                fontSize: 18,
              }}
            >
              ×
            </button>
          </div>

          <div
            style={{
              flex: 1,
              padding: 20,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            {aiChat.length === 0 ? (
              <div
                style={{
                  fontSize: 14,
                  color: "#9ca3af",
                  textAlign: "center",
                  padding: 20,
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 12 }}>👋</div>
                <div>Hi! I'm here to help you learn more about Tanvir.</div>
                <div style={{ marginTop: 8, fontSize: 12, opacity: 0.7 }}>
                  Ask about skills, projects, experience, or this portfolio!
                </div>
              </div>
            ) : (
              aiChat.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    justifyContent:
                      msg.type === "user" ? "flex-end" : "flex-start",
                    animation: "messageSlide 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "85%",
                      padding: "12px 16px",
                      borderRadius: 16,
                      fontSize: 14,
                      lineHeight: 1.4,
                      backgroundColor:
                        msg.type === "user"
                          ? theme.primary
                          : "rgba(255,255,255,0.1)",
                      color: "#fff",
                      borderBottomRightRadius: msg.type === "user" ? 4 : 16,
                      borderBottomLeftRadius: msg.type === "ai" ? 4 : 16,
                    }}
                  >
                    {msg.message}
                  </div>
                </div>
              ))
            )}
          </div>

          <div
            style={{
              padding: 16,
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAiChat()}
                placeholder="Ask me anything about TanvirHassanSayem..."
                style={{
                  flex: 1,
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: 12,
                  padding: "12px 16px",
                  fontSize: 14,
                  color: "#fff",
                  outline: "none",
                }}
              />
              <button
                onClick={handleAiChat}
                style={{
                  padding: "12px 16px",
                  background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
                  border: "none",
                  borderRadius: 12,
                  fontSize: 14,
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div style={contentStyle}>
        {/* HOME SECTION */}
        {activeSection === "home" && (
          <EnhancedHomeSection
            theme={theme}
            profile={profile}
            githubStats={githubStats}
            mousePosition={mousePosition}
            setActiveSection={setActiveSection}
            GITHUB_USERNAME={GITHUB_USERNAME}
          />
        )}

        {/* ABOUT SECTION */}
        {activeSection === "about" && (
          <DashingAboutMe theme={theme} profile={profile} />
        )}

        {/* SKILLS SECTION */}
        {activeSection === "skills" && <EnhancedSkillsSection />}

        {/* PROJECTS SECTION */}
        {activeSection === "projects" && (
          <UltimateProjectsSection
            theme={theme}
            repos={repos}
            githubStats={githubStats}
            filteredRepos={filteredRepos}
            repoFilter={repoFilter}
            setRepoFilter={setRepoFilter}
            uniqueLanguages={uniqueLanguages}
          />
        )}

        {/* CONTACT SECTION */}
        {activeSection === "contact" && <ContactSection theme={theme} />}
      </div>

      {/* Floating Elements */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 5,
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              backgroundColor: theme.primary,
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.1,
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg) }
          100% { transform: rotate(360deg) }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1) }
          50% { opacity: 1; transform: scale(1.2) }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          25% { 
            transform: translateY(-20px) rotate(90deg);
            opacity: 0.7;
          }
          50% { 
            transform: translateY(-10px) rotate(180deg);
            opacity: 1;
          }
          75% { 
            transform: translateY(-30px) rotate(270deg);
            opacity: 0.7;
          }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateX(100%) scale(0.8);
          }
          to { 
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }
        
        @keyframes messageSlide {
          from { 
            opacity: 0;
            transform: translateY(10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes skillBar {
          from { width: 0% }
          to { width: var(--skill-level, 0%) }
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          nav {
            padding: 8px 16px !important;
            gap: 12px !important;
          }
          
          nav button {
            padding: 6px 12px !important;
            font-size: 12px !important;
          }
          
          .theme-selector {
            padding: 6px 8px !important;
            gap: 6px !important;
          }
          
          .theme-color {
            width: 16px !important;
            height: 16px !important;
          }
        }
        
        @media (max-width: 480px) {
          .ai-assistant {
            width: 320px !important;
            height: 400px !important;
            bottom: 16px !important;
            right: 16px !important;
          }
          
          .contact-form {
            padding: 20px !important;
          }
          
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Smooth scrolling for all elements */
        * {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb {
          background: ${theme.primary};
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: ${theme.secondary};
        }

        /* Selection styles */
        ::selection {
          background-color: ${theme.primary};
          color: white;
        }

        ::-moz-selection {
          background-color: ${theme.primary};
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Portfolio2025;
