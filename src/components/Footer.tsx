"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Email", icon: Mail, href: "mailto:hello@example.com" },
];

const navLinks = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-16"
      style={{
        background: "var(--background-secondary)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <motion.a
              href="#"
              className="inline-block mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <span
                className="text-2xl"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 400,
                  color: "var(--foreground)",
                }}
              >
                YN
                <span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </motion.a>
            <p
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "var(--foreground-muted)" }}
            >
              Senior Software Engineer & AI Specialist building production-grade
              systems that make an impact.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3 lg:col-start-6">
            <span
              className="text-xs uppercase tracking-[0.2em] block mb-6"
              style={{ color: "var(--foreground-muted)" }}
            >
              Navigation
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[var(--accent)]"
                    style={{ color: "var(--foreground)" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-3 lg:col-start-10">
            <span
              className="text-xs uppercase tracking-[0.2em] block mb-6"
              style={{ color: "var(--foreground-muted)" }}
            >
              Connect
            </span>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center transition-colors"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--foreground-muted)",
                  }}
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ background: "var(--border)" }} />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-sm"
            style={{ color: "var(--foreground-muted)" }}
          >
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm transition-colors group"
            style={{ color: "var(--foreground-muted)" }}
          >
            <span className="group-hover:text-[var(--foreground)] transition-colors">
              Back to top
            </span>
            <ArrowUp className="w-4 h-4 group-hover:text-[var(--accent)] transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
