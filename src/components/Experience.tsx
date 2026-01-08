"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  url?: string;
}

const experiences: Experience[] = [
  {
    company: "Tech Company",
    role: "Senior ML Engineer",
    period: "2022 — Present",
    location: "Remote",
    description:
      "Leading the development of production ML systems and mentoring junior engineers.",
    achievements: [
      "Built end-to-end ML pipeline serving 1M+ predictions daily",
      "Reduced model deployment time by 60% through MLOps automation",
      "Led team of 4 engineers on LLM integration project",
    ],
    technologies: ["Python", "PyTorch", "Kubernetes", "AWS"],
    url: "https://example.com",
  },
  {
    company: "Startup Inc",
    role: "Full Stack Engineer",
    period: "2020 — 2022",
    location: "San Francisco, CA",
    description:
      "Developed and scaled the core product from MVP to serving 100K+ users.",
    achievements: [
      "Architected React/Node.js platform handling 10K daily active users",
      "Implemented real-time features using WebSockets and Redis",
      "Reduced page load times by 40% through optimization",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
    url: "https://example.com",
  },
  {
    company: "Enterprise Corp",
    role: "Software Engineer",
    period: "2018 — 2020",
    location: "New York, NY",
    description:
      "Built internal tools and automation systems for enterprise clients.",
    achievements: [
      "Developed REST APIs serving 50+ internal applications",
      "Created automated testing framework reducing QA time by 50%",
      "Migrated legacy systems to modern cloud infrastructure",
    ],
    technologies: ["Python", "Django", "Docker", "GCP"],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
      style={{ background: "var(--background-secondary)" }}
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
              Career
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl max-w-2xl"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--foreground)",
            }}
          >
            Where I&apos;ve made an impact
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <motion.article
              key={experience.company + experience.role}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="py-12 lg:py-16"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left: Company & Meta */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start justify-between lg:flex-col lg:gap-4">
                      <div>
                        <span
                          className="text-xs tracking-[0.2em] block mb-2"
                          style={{ color: "var(--accent)" }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3
                          className="text-2xl lg:text-3xl mb-2"
                          style={{
                            fontFamily: "var(--font-display), Georgia, serif",
                            fontWeight: 400,
                            color: "var(--foreground)",
                          }}
                        >
                          {experience.company}
                        </h3>
                        <p
                          className="font-medium mb-4"
                          style={{ color: "var(--foreground)" }}
                        >
                          {experience.role}
                        </p>
                        <div
                          className="text-sm space-y-1"
                          style={{ color: "var(--foreground-muted)" }}
                        >
                          <p>{experience.period}</p>
                          <p>{experience.location}</p>
                        </div>
                      </div>
                      {experience.url && (
                        <motion.a
                          href={experience.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="lg:mt-4 p-3 transition-colors"
                          style={{
                            border: "1px solid var(--border)",
                            color: "var(--foreground-muted)",
                          }}
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Right: Details */}
                  <div className="lg:col-span-8">
                    <p
                      className="text-lg mb-8 leading-relaxed"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-3 mb-8">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ background: "var(--accent)" }}
                          />
                          <span style={{ color: "var(--foreground-muted)" }}>
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-xs uppercase tracking-wider"
                          style={{
                            border: "1px solid var(--border)",
                            color: "var(--foreground-muted)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom border */}
        <div className="h-px" style={{ background: "var(--border)" }} />
      </div>
    </section>
  );
}
