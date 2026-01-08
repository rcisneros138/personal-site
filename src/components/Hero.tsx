"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* Subtle geometric accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      {/* Grid lines for editorial feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-current" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-current" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-current" />
      </div>

      <motion.div
        style={{ opacity, y, scale }}
        className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10"
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
          {/* Left content - dramatic typography */}
          <div className="lg:col-span-8 lg:col-start-1">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-[var(--accent)]" />
              <span
                className="text-sm tracking-[0.2em] uppercase"
                style={{ color: "var(--foreground-muted)" }}
              >
                Senior Engineer & AI Specialist
              </span>
            </motion.div>

            {/* Main heading - editorial style */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span
                className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 300,
                  lineHeight: 0.9,
                  color: "var(--foreground)",
                }}
              >
                Your
              </span>
              <span
                className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight mt-2"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 300,
                  lineHeight: 0.9,
                  color: "var(--foreground)",
                }}
              >
                Name
                <span style={{ color: "var(--accent)" }}>.</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl max-w-xl mb-12 leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
              I architect end-to-end machine learning systems and craft
              full-stack applications that solve real problems. Six years of
              shipping production software at scale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 flex items-center gap-3 font-medium transition-all duration-300"
                style={{
                  background: "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                View Selected Work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.a>
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 flex items-center gap-3 font-medium transition-all duration-300"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                }}
              >
                <Download className="w-4 h-4" />
                Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Right side - stats/highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="lg:col-span-3 lg:col-start-10 hidden lg:block"
          >
            <div className="space-y-8">
              {[
                { number: "6+", label: "Years Experience" },
                { number: "50+", label: "Projects Shipped" },
                { number: "1M+", label: "Users Impacted" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="border-l pl-6"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="text-4xl font-light mb-1"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      color: "var(--accent)",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-sm uppercase tracking-wider"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 group"
            style={{ color: "var(--foreground-muted)" }}
          >
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <ArrowDown className="w-4 h-4 group-hover:text-[var(--accent)] transition-colors" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
