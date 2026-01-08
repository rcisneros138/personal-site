"use client";

import { motion } from "framer-motion";
import {
  skillCategories,
  experienceYears,
  projectsCompleted,
  technologiesUsed,
} from "@/lib/skills";

const stats = [
  { label: "Years", value: experienceYears },
  { label: "Projects", value: `${projectsCompleted}+` },
  { label: "Technologies", value: `${technologiesUsed}+` },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px" style={{ background: "var(--accent)" }} />
            <span
              className="text-sm uppercase tracking-[0.2em]"
              style={{ color: "var(--foreground-muted)" }}
            >
              Expertise
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--foreground)",
              }}
            >
              Technical toolkit
              <span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p
              className="text-base leading-relaxed max-w-lg lg:text-right"
              style={{ color: "var(--foreground-muted)" }}
            >
              A comprehensive stack spanning machine learning, full-stack
              development, and cloud infrastructure—built through years of
              shipping production software.
            </p>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-start gap-16 lg:gap-24 mb-20 pb-12"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className="text-5xl sm:text-6xl lg:text-7xl mb-2"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 300,
                  color: "var(--accent)",
                }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: "var(--foreground-muted)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-px" style={{ background: "var(--border)" }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-8 lg:p-12"
              style={{ background: "var(--background)" }}
            >
              {/* Category Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <span
                    className="text-xs tracking-[0.2em] mb-3 block"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-2xl mb-2"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontWeight: 400,
                      color: "var(--foreground)",
                    }}
                  >
                    {category.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + skillIndex * 0.05 }}
                    className="flex items-center justify-between py-3"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <span
                      className="font-medium"
                      style={{ color: "var(--foreground)" }}
                    >
                      {skill.name}
                    </span>
                    <div className="flex items-center gap-4">
                      <span
                        className="text-xs uppercase tracking-wider"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        {skill.level}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full transition-colors"
                            style={{
                              background:
                                i <
                                (skill.level === "expert"
                                  ? 3
                                  : skill.level === "advanced"
                                  ? 2
                                  : 1)
                                  ? "var(--accent)"
                                  : "var(--border)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
