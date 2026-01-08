"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
    handle: "@yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    handle: "/in/yourusername",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com",
    handle: "@yourusername",
  },
];

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="py-32"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            {/* Section label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px" style={{ background: "var(--accent)" }} />
              <span
                className="text-sm uppercase tracking-[0.2em]"
                style={{ color: "var(--foreground-muted)" }}
              >
                Contact
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
              Let&apos;s build
              <br />
              something
              <br />
              <span style={{ color: "var(--accent)" }}>together</span>
            </h2>

            <p
              className="text-base leading-relaxed mb-12"
              style={{ color: "var(--foreground-muted)" }}
            >
              Have a project in mind or want to discuss opportunities? I&apos;d
              love to hear from you. Let&apos;s create something extraordinary.
            </p>

            {/* Email */}
            <motion.a
              href="mailto:hello@example.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group flex items-center gap-4 mb-12"
            >
              <div
                className="w-12 h-12 flex items-center justify-center"
                style={{ border: "1px solid var(--border)" }}
              >
                <Mail className="w-5 h-5" style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <span
                  className="text-xs uppercase tracking-[0.2em] block mb-1"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  Email
                </span>
                <span
                  className="text-lg group-hover:text-[var(--accent)] transition-colors"
                  style={{
                    fontFamily: "var(--font-display), Georgia, serif",
                    color: "var(--foreground)",
                  }}
                >
                  hello@example.com
                </span>
              </div>
            </motion.a>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span
                className="text-xs uppercase tracking-[0.2em] block mb-6"
                style={{ color: "var(--foreground-muted)" }}
              >
                Connect
              </span>
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="group flex items-center justify-between py-4"
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    <div className="flex items-center gap-4">
                      <link.icon
                        className="w-5 h-5"
                        style={{ color: "var(--foreground-muted)" }}
                      />
                      <span style={{ color: "var(--foreground)" }}>
                        {link.label}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        {link.handle}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "var(--accent)" }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 lg:col-start-7"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full px-0 py-4 bg-transparent outline-none transition-colors"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full px-0 py-4 bg-transparent outline-none transition-colors"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-[0.2em] mb-4"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-0 py-4 bg-transparent outline-none transition-colors resize-none"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    color: "var(--foreground)",
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 font-medium flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: submitted
                    ? "var(--accent)"
                    : "var(--foreground)",
                  color: "var(--background)",
                }}
              >
                {isSubmitting ? (
                  <div
                    className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin"
                    style={{ borderColor: "var(--background)" }}
                  />
                ) : submitted ? (
                  "Message Sent"
                ) : (
                  <>
                    Send Message
                    <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="hidden lg:block mt-16 text-right"
            >
              <span
                className="text-[8rem] leading-none select-none"
                style={{
                  fontFamily: "var(--font-display), Georgia, serif",
                  fontWeight: 300,
                  color: "var(--border)",
                }}
              >
                C
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
