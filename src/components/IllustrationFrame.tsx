"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface IllustrationFrameProps {
  children: ReactNode;
  className?: string;
  variant?: "paper" | "sketch" | "halftone" | "cutout";
  accentPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

export function IllustrationFrame({
  children,
  className = "",
  variant = "paper",
  accentPosition = "bottom-right",
}: IllustrationFrameProps) {
  const accentStyles = {
    "top-left": "-top-2 -left-2",
    "top-right": "-top-2 -right-2",
    "bottom-left": "-bottom-2 -left-2",
    "bottom-right": "-bottom-2 -right-2",
  };

  const accentBorders = {
    "top-left": "borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)'",
    "top-right": "borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)'",
    "bottom-left": "borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)'",
    "bottom-right": "borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)'",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative ${className}`}
    >
      {/* Paper shadow layers */}
      {variant === "paper" && (
        <>
          <div
            className="absolute inset-0 translate-x-3 translate-y-3"
            style={{ background: "var(--accent)", opacity: 0.12 }}
          />
          <div
            className="absolute inset-0 translate-x-1.5 translate-y-1.5"
            style={{ background: "var(--foreground)", opacity: 0.04 }}
          />
        </>
      )}

      {/* Sketch frame border effect */}
      {variant === "sketch" && (
        <svg
          className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none"
          style={{ color: "var(--foreground)" }}
        >
          <defs>
            <filter id="sketch-frame" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
            </filter>
          </defs>
          <rect
            x="8"
            y="8"
            width="calc(100% - 16px)"
            height="calc(100% - 16px)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
            filter="url(#sketch-frame)"
            rx="0"
          />
        </svg>
      )}

      {/* Halftone overlay */}
      {variant === "halftone" && (
        <div
          className="absolute inset-0 pointer-events-none z-10 mix-blend-multiply dark:mix-blend-screen"
          style={{
            background: `radial-gradient(circle at 1px 1px, var(--foreground) 0.5px, transparent 0.5px)`,
            backgroundSize: "4px 4px",
            opacity: 0.08,
          }}
        />
      )}

      {/* Cutout style */}
      {variant === "cutout" && (
        <>
          <div
            className="absolute -inset-1"
            style={{
              background: "var(--background)",
              transform: "rotate(-1deg)",
            }}
          />
          <div
            className="absolute -inset-0.5"
            style={{
              background: "var(--accent)",
              opacity: 0.1,
              transform: "rotate(0.5deg)",
            }}
          />
        </>
      )}

      {/* Main content container */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "var(--background-secondary)",
          border: "1px solid var(--border)",
        }}
      >
        {children}

        {/* Editorial corner accent */}
        <div
          className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 50%, var(--accent) 50%)`,
            opacity: 0.15,
          }}
        />
      </div>

      {/* Corner registration marks */}
      <div
        className={`absolute ${accentStyles[accentPosition]} w-4 h-4`}
        style={
          accentPosition === "top-left"
            ? { borderTop: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)" }
            : accentPosition === "top-right"
            ? { borderTop: "2px solid var(--accent)", borderRight: "2px solid var(--accent)" }
            : accentPosition === "bottom-left"
            ? { borderBottom: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)" }
            : { borderBottom: "2px solid var(--accent)", borderRight: "2px solid var(--accent)" }
        }
      />

      {/* Opposite corner mark */}
      <div
        className={`absolute ${
          accentPosition === "bottom-right"
            ? "-top-2 -left-2"
            : accentPosition === "bottom-left"
            ? "-top-2 -right-2"
            : accentPosition === "top-right"
            ? "-bottom-2 -left-2"
            : "-bottom-2 -right-2"
        } w-4 h-4`}
        style={
          accentPosition === "bottom-right"
            ? { borderTop: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)" }
            : accentPosition === "bottom-left"
            ? { borderTop: "2px solid var(--accent)", borderRight: "2px solid var(--accent)" }
            : accentPosition === "top-right"
            ? { borderBottom: "2px solid var(--accent)", borderLeft: "2px solid var(--accent)" }
            : { borderBottom: "2px solid var(--accent)", borderRight: "2px solid var(--accent)" }
        }
      />
    </motion.div>
  );
}

/**
 * A decorative divider with editorial styling
 */
export function EditorialDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
      <div className="flex gap-1">
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--accent)" }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--accent)", opacity: 0.5 }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: "var(--accent)", opacity: 0.25 }}
        />
      </div>
      <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
    </div>
  );
}

/**
 * A stylized blockquote with editorial design
 */
export function EditorialQuote({
  children,
  author,
  className = "",
}: {
  children: ReactNode;
  author?: string;
  className?: string;
}) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative pl-8 ${className}`}
    >
      {/* Accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{ background: "var(--accent)" }}
      />
      {/* Quote mark */}
      <span
        className="absolute -left-2 -top-4 text-6xl leading-none select-none"
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          color: "var(--accent)",
          opacity: 0.2,
        }}
      >
        "
      </span>
      <p
        className="text-xl lg:text-2xl italic leading-relaxed"
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          color: "var(--foreground)",
        }}
      >
        {children}
      </p>
      {author && (
        <footer
          className="mt-4 text-sm uppercase tracking-[0.2em]"
          style={{ color: "var(--foreground-muted)" }}
        >
          — {author}
        </footer>
      )}
    </motion.blockquote>
  );
}
