import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  FileDown,
  MessageCircle,
} from "lucide-react";

const ContactSection = ({ theme }) => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-gray-900 text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
      >
        Let’s <span style={{ color: theme.primary }}>Connect</span> ✨
      </motion.h2>

      {/* Buttons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        {/* 1️⃣ Email - Glassy Glow */}
        <motion.a
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:tanvirsayem431@gmail.com"
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:shadow-lg hover:shadow-pink-500/40 transition duration-500"
        >
          <Mail className="w-6 h-6 text-pink-400" />
          <span className="font-semibold">Send Me an Email</span>
        </motion.a>

        {/* 2️⃣ Phone - Vibrating Button */}
        <motion.a
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.9 }}
          href="tel:+8801943724499"
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-md hover:animate-pulse transition duration-300"
        >
          <Phone className="w-6 h-6" />
          Call Me Directly
        </motion.a>

        {/* 3️⃣ WhatsApp - Bubble Pop */}
        <motion.a
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/8801772903756"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-6 py-4 rounded-full bg-green-500 text-white font-bold shadow-lg hover:shadow-xl hover:bg-green-600 transition duration-300"
        >
          <MessageCircle className="w-6 h-6" />
          Chat on WhatsApp
        </motion.a>

        {/* 4️⃣ GitHub - Hacker Vibe */}
        <motion.a
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/TanvirHassanSayem?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-6 py-4 rounded-md bg-black text-white font-mono tracking-wider hover:bg-gray-900 shadow-[0_0_20px_rgba(255,255,255,0.1)] transition duration-500"
        >
          <Github className="w-6 h-6" />
          My GitHub Repos
        </motion.a>

        {/* 5️⃣ LinkedIn - Corporate Shine */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://www.linkedin.com/in/tanvir-sayem"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition duration-300"
        >
          <Linkedin className="w-6 h-6" />
          Connect on LinkedIn
        </motion.a>

        {/* 6️⃣ Resume - Futuristic Glow */}
        <motion.a
          whileHover={{ scale: 1.1, rotate: -2 }}
          whileTap={{ scale: 0.9 }}
          href="/Tanvir_Sayem_Resume.pdf" // make sure the PDF is in your public folder
          download="Tanvir_Sayem_Resume_2025.pdf" // optional: custom download filename
          className="group relative flex items-center gap-3 px-6 py-4 rounded-lg overflow-hidden text-white font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg transition duration-500"
        >
          {/* Glow effect on hover */}
          <span className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></span>

          {/* Icon */}
          <FileDown className="w-6 h-6 relative z-10" />

          {/* Label */}
          <span className="relative z-10">Download Resume</span>
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;
