"use client";

import { motion } from "framer-motion";
import { ProfileIllustration } from "./ProfileIllustration";
import { EditorialDivider } from "./IllustrationFrame";

const highlights = [
  {
    number: "01",
    title: "End-to-End ML Systems",
    description:
      "From data pipelines to model deployment, I build production-grade ML systems that scale.",
  },
  {
    number: "02",
    title: "Full-Stack Craft",
    description:
      "Elegant frontend experiences paired with robust backend architecture.",
  },
  {
    number: "03",
    title: "Remote-First",
    description:
      "Collaborating effectively across timezones with teams worldwide.",
  },
  {
    number: "04",
    title: "Open Source",
    description:
      "Active contributor to projects that push the boundaries of what's possible.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-32"
      style={{ background: "var(--background-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top: Illustration + Intro */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 mb-24">
          {/* Profile Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <ProfileIllustration size="xl" variant="default" />
          </motion.div>

          {/* Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px" style={{ background: "var(--accent)" }} />
              <span
                className="text-sm uppercase tracking-[0.2em]"
                style={{ color: "var(--foreground-muted)" }}
              >
                About
              </span>
            </div>

            <h2
              className="text-4xl sm:text-5xl lg:text-6xl mb-8"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--foreground)",
              }}
            >
              Building at the
              <br />
              intersection of
              <br />
              <span style={{ color: "var(--accent)" }}>AI & craft</span>
            </h2>

            <div
              className="space-y-6 text-base leading-relaxed max-w-xl"
              style={{ color: "var(--foreground-muted)" }}
            >
              <p className="drop-cap">
                I&apos;m a senior software engineer with a passion for building
                intelligent systems that make a real impact. My journey spans from
                crafting elegant frontend experiences to architecting scalable ML
                pipelines.
              </p>
              <p>
                Currently, I focus on the intersection of machine learning and
                software engineering—building production-grade AI systems that
                are reliable, maintainable, and actually work in the real world.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open
                source projects, writing about AI/ML best practices, or exploring
                the latest advancements in LLMs and generative AI.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <EditorialDivider className="mb-20" />

        {/* Bottom: Highlights grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Section intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3
              className="text-2xl mb-4"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontWeight: 400,
                color: "var(--foreground)",
              }}
            >
              What I bring to the table
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
              A unique blend of deep technical expertise and creative
              problem-solving, refined through years of shipping production
              software.
            </p>
          </motion.div>

          {/* Highlights */}
          <div className="lg:col-span-8">
            <div
              className="grid sm:grid-cols-2 gap-px"
              style={{ background: "var(--border)" }}
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="p-8 lg:p-10 halftone"
                  style={{ background: "var(--background)" }}
                >
                  <span
                    className="text-xs tracking-[0.2em] mb-6 block"
                    style={{ color: "var(--accent)" }}
                  >
                    {item.number}
                  </span>
                  <h4
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      fontWeight: 400,
                      color: "var(--foreground)",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Large decorative initial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="hidden lg:flex mt-16 justify-end"
        >
          <span
            className="text-[10rem] leading-none select-none"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 300,
              color: "var(--border)",
            }}
          >
            A
          </span>
        </motion.div>
      </div>
    </section>
  );
}
