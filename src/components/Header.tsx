"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4"
          : "py-6"
      }`}
      style={{
        background: isScrolled
          ? "rgba(var(--background-rgb, 13, 12, 11), 0.8)"
          : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            <span
              className="text-lg font-medium tracking-tight"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                color: "var(--foreground)",
              }}
            >
              YN
              <span style={{ color: "var(--accent)" }}>.</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <ul className="flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={item.href}
                    className="relative text-sm tracking-wide transition-colors duration-300 group"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    <span className="group-hover:text-[var(--foreground)] transition-colors">
                      {item.name}
                    </span>
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                      style={{ background: "var(--accent)" }}
                    />
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-5 py-2.5 text-sm font-medium transition-all duration-300"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                Let&apos;s Talk
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 transition-colors"
              style={{ color: "var(--foreground)" }}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="md:hidden overflow-hidden mt-6"
            >
              <div
                className="py-6 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-lg transition-colors"
                        style={{ color: "var(--foreground)" }}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-6 block w-full py-3 text-center font-medium"
                  style={{
                    background: "var(--foreground)",
                    color: "var(--background)",
                  }}
                >
                  Let&apos;s Talk
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
