"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects, categories, type Project } from "@/lib/projects";

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        isEven ? "" : "lg:direction-rtl"
      }`}
    >
      {/* Image/Visual */}
      <div
        className={`lg:col-span-7 ${isEven ? "lg:col-start-1" : "lg:col-start-6"}`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative aspect-[4/3] overflow-hidden group cursor-pointer"
          style={{ background: "var(--background-secondary)" }}
        >
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, var(--accent) 0%, rgba(229, 168, 50, 0.6) 100%)`,
              opacity: 0.9,
            }}
          />
          {/* Project initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-[12rem] font-light opacity-20"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                color: "var(--background)",
              }}
            >
              {project.title.charAt(0)}
            </span>
          </div>
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight
              className="w-12 h-12"
              style={{ color: "var(--background)" }}
            />
          </div>
          {/* Featured badge */}
          {project.featured && (
            <div
              className="absolute top-6 left-6 px-3 py-1 text-xs uppercase tracking-wider font-medium"
              style={{
                background: "var(--background)",
                color: "var(--foreground)",
              }}
            >
              Featured
            </div>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div
        className={`lg:col-span-5 ${
          isEven ? "lg:col-start-8" : "lg:col-start-1"
        } ${isEven ? "" : "lg:text-right"}`}
      >
        {/* Category */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs uppercase tracking-[0.2em] mb-4 block"
          style={{ color: "var(--accent)" }}
        >
          {categories[project.category].name}
        </motion.span>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl mb-6"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--foreground)",
          }}
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-6 leading-relaxed"
          style={{ color: "var(--foreground-muted)" }}
        >
          {project.longDescription}
        </motion.p>

        {/* Metrics */}
        {project.metrics && (
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`space-y-2 mb-6 ${isEven ? "" : "lg:ml-auto"}`}
          >
            {project.metrics.map((metric, i) => (
              <li
                key={i}
                className={`text-sm flex items-center gap-3 ${
                  isEven ? "" : "lg:justify-end"
                }`}
                style={{ color: "var(--foreground-muted)" }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
                {metric}
              </li>
            ))}
          </motion.ul>
        )}

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className={`flex flex-wrap gap-2 mb-8 ${
            isEven ? "" : "lg:justify-end"
          }`}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground-muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className={`flex gap-6 ${isEven ? "" : "lg:justify-end"}`}
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors group"
              style={{ color: "var(--foreground-muted)" }}
            >
              <Github className="w-4 h-4" />
              <span className="group-hover:text-[var(--foreground)] transition-colors">
                View Code
              </span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium transition-colors group"
              style={{ color: "var(--accent)" }}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="group-hover:opacity-80 transition-opacity">
                Live Demo
              </span>
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  );
}

function SmallProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="group p-6 transition-all duration-300"
      style={{
        background: "var(--background-secondary)",
        border: "1px solid var(--border)",
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className="text-xs uppercase tracking-wider"
          style={{ color: "var(--accent)" }}
        >
          {categories[project.category].name}
        </span>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--foreground-muted)" }}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--foreground-muted)" }}
              className="hover:text-[var(--accent)] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <h4
        className="text-lg mb-3 group-hover:text-[var(--accent)] transition-colors"
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          color: "var(--foreground)",
        }}
      >
        {project.title}
      </h4>

      <p
        className="text-sm mb-4 leading-relaxed"
        style={{ color: "var(--foreground-muted)" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs"
            style={{ color: "var(--foreground-muted)" }}
          >
            {tag}
            {project.tags.indexOf(tag) < 2 && " ·"}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
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
              Selected Work
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl max-w-3xl"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--foreground)",
            }}
          >
            Projects that define my craft
            <span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-32 mb-32">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h3
                className="text-2xl"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  color: "var(--foreground)",
                }}
              >
                Other Notable Projects
              </h3>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <SmallProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
