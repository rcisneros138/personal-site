"use client";

import { motion } from "framer-motion";

interface ProfileIllustrationProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "minimal" | "detailed";
}

const sizeClasses = {
  sm: "w-32 h-32",
  md: "w-48 h-48",
  lg: "w-64 h-64",
  xl: "w-80 h-80 lg:w-96 lg:h-96",
};

export function ProfileIllustration({
  className = "",
  size = "lg",
  variant = "default",
}: ProfileIllustrationProps) {
  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Halftone background texture */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "8px 8px",
          opacity: 0.03,
        }}
      />

      {/* Main illustration container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="relative w-full h-full"
      >
        {/* Paper layers - creates depth */}
        <div
          className="absolute inset-0 translate-x-3 translate-y-3"
          style={{
            background: "var(--accent)",
            opacity: 0.15,
          }}
        />
        <div
          className="absolute inset-0 translate-x-1.5 translate-y-1.5"
          style={{
            background: "var(--foreground)",
            opacity: 0.05,
          }}
        />

        {/* Main frame */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            background: "var(--background-secondary)",
            border: "1px solid var(--border)",
          }}
        >
          {/* SVG Illustration */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            style={{ color: "var(--foreground)" }}
          >
            {/* Halftone pattern definition */}
            <defs>
              <pattern
                id="halftone"
                x="0"
                y="0"
                width="4"
                height="4"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1" fill="currentColor" opacity="0.1" />
              </pattern>
              <pattern
                id="halftone-dense"
                x="0"
                y="0"
                width="3"
                height="3"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1.5" cy="1.5" r="0.8" fill="currentColor" opacity="0.15" />
              </pattern>
              <linearGradient id="accent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "var(--accent)", stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: "var(--accent)", stopOpacity: 0.4 }} />
              </linearGradient>
              {/* Sketch line filter for hand-drawn effect */}
              <filter id="sketch" x="-20%" y="-20%" width="140%" height="140%">
                <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>

            {/* Background fill with halftone */}
            <rect width="200" height="200" fill="url(#halftone)" />

            {/* Abstract portrait - geometric/editorial style */}
            <g filter="url(#sketch)">
              {/* Head shape - organic form */}
              <motion.ellipse
                cx="100"
                cy="85"
                rx="45"
                ry="55"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />

              {/* Shoulder line */}
              <motion.path
                d="M 40 160 Q 60 140 100 135 Q 140 140 160 160"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5 }}
              />

              {/* Neck */}
              <motion.path
                d="M 85 135 L 85 140 M 115 135 L 115 140"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
              />

              {variant !== "minimal" && (
                <>
                  {/* Hair suggestion - loose strokes */}
                  <motion.path
                    d="M 60 50 Q 70 30 100 25 Q 130 30 140 50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <motion.path
                    d="M 55 60 Q 65 35 100 30 Q 135 35 145 60"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                  />

                  {/* Eye suggestions - minimal marks */}
                  <motion.line
                    x1="80"
                    y1="80"
                    x2="90"
                    y2="80"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                  <motion.line
                    x1="110"
                    y1="80"
                    x2="120"
                    y2="80"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  />
                </>
              )}

              {variant === "detailed" && (
                <>
                  {/* Nose hint */}
                  <motion.path
                    d="M 100 85 L 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1 }}
                  />
                  {/* Ear suggestions */}
                  <motion.path
                    d="M 55 75 Q 50 85 55 95"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  />
                  <motion.path
                    d="M 145 75 Q 150 85 145 95"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.75"
                    opacity="0.4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  />
                </>
              )}
            </g>

            {/* Accent strokes - golden editorial marks */}
            <motion.line
              x1="25"
              y1="170"
              x2="75"
              y2="170"
              stroke="url(#accent-gradient)"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
            />
            <motion.circle
              cx="175"
              cy="30"
              r="8"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              opacity="0.6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.3 }}
            />
          </svg>

          {/* Corner accent */}
          <div
            className="absolute bottom-0 right-0 w-12 h-12"
            style={{
              background: `linear-gradient(135deg, transparent 50%, var(--accent) 50%)`,
              opacity: 0.2,
            }}
          />
        </div>

        {/* Decorative corner marks */}
        <div
          className="absolute -top-2 -left-2 w-4 h-4"
          style={{ borderTop: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)" }}
        />
        <div
          className="absolute -bottom-2 -right-2 w-4 h-4"
          style={{ borderBottom: "2px solid var(--accent)", borderRight: "2px solid var(--accent)" }}
        />
      </motion.div>
    </div>
  );
}
