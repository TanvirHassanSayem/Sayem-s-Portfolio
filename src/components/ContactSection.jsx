import React, { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  FileDown,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react";

const ContactSection = ({ theme = { primary: "#8B5CF6" } }) => {
  const [copiedText, setCopiedText] = useState("");
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleCopyEmail = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("tanvirsayem431@gmail.com");
      setCopiedText("email");
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleCopyPhone = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText("+8801943724499");
      setCopiedText("phone");
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error("Failed to copy phone:", err);
    }
  };

  const buttons = [
    {
      id: 1,
      href: "mailto:tanvirsayem431@gmail.com",
      label: "Send Me an Email",
      sublabel: "tanvirsayem431@gmail.com",
      icon: <Mail className="w-7 h-7 text-pink-400" />,
      onClick: handleCopyEmail,
      copied: copiedText === "email",
      classes:
        "bg-white/10 backdrop-blur-xl border border-white/20 hover:border-pink-400/50 shadow-md hover:shadow-2xl hover:shadow-pink-500/30",
      gradient:
        "hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20",
    },
    {
      id: 2,
      href: "tel:+8801943724499",
      label: "Call Me Directly",
      sublabel: "+880 194 372 4499",
      icon: <Phone className="w-7 h-7" />,
      onClick: handleCopyPhone,
      copied: copiedText === "phone",
      classes:
        "bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-green-500/40",
      pulse: true,
    },
    {
      id: 3,
      href: "https://wa.me/8801772903756",
      label: "Chat on WhatsApp",
      sublabel: "Quick response guaranteed",
      icon: <MessageCircle className="w-7 h-7" />,
      classes:
        "bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-green-500/50",
      bounce: true,
    },
    {
      id: 4,
      href: "https://github.com/TanvirHassanSayem?tab=repositories",
      label: "My GitHub Repos",
      sublabel: "Check out my projects",
      icon: <Github className="w-7 h-7" />,
      classes:
        "bg-gradient-to-r from-gray-800 to-black text-white font-mono tracking-wider hover:shadow-2xl hover:shadow-gray-500/30",
      sparkle: true,
    },
    {
      id: 5,
      href: "https://www.linkedin.com/in/tanvir-sayem",
      label: "Connect on LinkedIn",
      sublabel: "Professional networking",
      icon: <Linkedin className="w-7 h-7" />,
      classes:
        "bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50",
    },
    {
      id: 6,
      href: "/Tanvir_Sayem_Resume.pdf",
      label: "Download Resume",
      sublabel: "Latest version • PDF",
      icon: <FileDown className="w-7 h-7 relative z-10" />,
      download: "Tanvir_Sayem_Resume_2025.pdf",
      classes:
        "relative overflow-hidden text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg group hover:shadow-2xl hover:shadow-purple-500/50",
      glow: true,
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(139,92,246,0.2),transparent_70%)]" />
      </div>

      {/* Floating Background Icons */}
      <div className="absolute top-20 left-20 text-white/20 animate-bounce">
        <Sparkles
          className="w-8 h-8"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        />
      </div>
      <div className="absolute top-40 right-32 text-white/20 animate-pulse">
        <Zap className="w-6 h-6" style={{ animationDelay: "1s" }} />
      </div>
      <div className="absolute bottom-32 left-16 text-white/20 animate-bounce">
        <Heart
          className="w-5 h-5"
          style={{ animationDelay: "2s", animationDuration: "3s" }}
        />
      </div>
      <div className="absolute bottom-20 right-20 text-white/20 animate-pulse">
        <Sparkles className="w-4 h-4" style={{ animationDelay: "0.5s" }} />
      </div>

      {/* Enhanced Title with Gradient Text */}
      <div className="text-center mb-16 relative z-10 animate-fadeInUp">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient-shift">
          Let's Connect
        </h2>
        <div className="inline-block text-4xl md:text-5xl animate-wiggle">
          ⚡
        </div>
        <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto opacity-0 animate-fadeIn">
          Ready to bring your ideas to life? Let's collaborate and create
          something amazing together!
        </p>
      </div>

      {/* Enhanced Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full relative z-10">
        {buttons.map((btn, i) => (
          <div
            key={btn.id}
            className="relative group perspective-1000 animate-slideInUp"
            style={{ animationDelay: `${i * 0.1}s` }}
            onMouseEnter={() => setHoveredButton(btn.id)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <a
              href={btn.href}
              download={btn.download || false}
              target={btn.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              onClick={btn.onClick}
              className={`
                flex items-center justify-between p-6 rounded-2xl transition-all duration-500 cursor-pointer
                transform hover:scale-105 hover:-translate-y-2 active:scale-95
                ${btn.classes} ${btn.gradient || ""}
                ${btn.pulse && hoveredButton === btn.id ? "animate-pulse" : ""}
                ${
                  btn.bounce && hoveredButton === btn.id ? "animate-bounce" : ""
                }
              `}
            >
              {/* Glow Effect for Resume */}
              {btn.glow && (
                <span
                  className={`absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-xl transition duration-500 rounded-2xl ${
                    hoveredButton === btn.id ? "animate-pulse" : ""
                  }`}
                />
              )}

              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  {btn.icon}
                  {btn.sparkle && hoveredButton === btn.id && (
                    <div className="absolute -top-1 -right-1 animate-spin">
                      <Sparkles className="w-3 h-3 text-yellow-400" />
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <div className="font-semibold text-lg">{btn.label}</div>
                  <div className="text-sm opacity-70 mt-1">{btn.sublabel}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 relative z-10">
                {btn.copied ? (
                  <div className="text-green-400 animate-bounce">
                    <Check className="w-5 h-5" />
                  </div>
                ) : (
                  <div className="hover:scale-110 transition-transform">
                    {btn.onClick ? (
                      <Copy className="w-5 h-5 opacity-60" />
                    ) : (
                      <ExternalLink className="w-5 h-5 opacity-60" />
                    )}
                  </div>
                )}
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${
                  hoveredButton === btn.id
                    ? "border-purple-400/50 shadow-lg shadow-purple-400/25"
                    : "border-transparent"
                }`}
              />
            </a>
          </div>
        ))}
      </div>

      {/* Success Message */}
      {copiedText && (
        <div className="fixed bottom-8 right-8 bg-green-500 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center gap-2 z-50 animate-slideInRight">
          <Check className="w-5 h-5" />
          <span className="font-semibold">
            {copiedText === "email" ? "Email copied!" : "Phone copied!"}
          </span>
        </div>
      )}

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(10deg);
          }
          75% {
            transform: rotate(-10deg);
          }
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out 0.5s both;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 5s ease infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
