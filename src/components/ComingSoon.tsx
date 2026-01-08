"use client";

import { useState, useEffect, ReactNode } from "react";

const PASSWORD = "preview123"; // Change this to your desired password
const STORAGE_KEY = "site_unlocked";

interface ComingSoonProps {
  children: ReactNode;
  enabled?: boolean;
}

export function ComingSoon({ children, enabled = true }: ComingSoonProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if already unlocked
    if (typeof window !== "undefined") {
      const unlocked = localStorage.getItem(STORAGE_KEY);
      if (unlocked === "true") {
        setIsUnlocked(true);
      }
    }
  }, []);

  // If protection disabled, show content
  if (!enabled) {
    return <>{children}</>;
  }

  // Don't render anything until mounted (prevents hydration mismatch)
  if (!mounted) {
    return null;
  }

  // If unlocked, show content
  if (isUnlocked) {
    return <>{children}</>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, "true");
      setIsUnlocked(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--background)",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "500px" }}>
        {/* Accent line */}
        <div
          style={{
            width: "60px",
            height: "2px",
            background: "var(--accent)",
            margin: "0 auto 2rem",
          }}
        />

        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(3rem, 10vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            color: "var(--foreground)",
          }}
        >
          Coming Soon<span style={{ color: "var(--accent)" }}>.</span>
        </h1>

        {/* Description */}
        <p
          style={{
            color: "var(--foreground-muted)",
            fontSize: "1.1rem",
            lineHeight: 1.6,
            marginBottom: "2rem",
          }}
        >
          Something new is in the works. Enter the password if you have early
          access.
        </p>

        {/* Password form */}
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            gap: "0.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="off"
            style={{
              padding: "0.75rem 1rem",
              fontSize: "1rem",
              background: "var(--background-secondary)",
              border: `1px solid ${error ? "var(--accent)" : "var(--border)"}`,
              color: "var(--foreground)",
              width: "200px",
              outline: "none",
              transition: "border-color 0.2s",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              background: "var(--foreground)",
              color: "var(--background)",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              transition: "background 0.2s",
            }}
          >
            Enter
          </button>
        </form>

        {/* Error message */}
        {error && (
          <p
            style={{
              color: "var(--accent)",
              marginTop: "1rem",
              fontSize: "0.9rem",
            }}
          >
            Incorrect password
          </p>
        )}

        {/* Footer */}
        <p
          style={{
            marginTop: "3rem",
            fontSize: "0.8rem",
            color: "var(--foreground-muted)",
          }}
        >
          Check back soon
        </p>
      </div>
    </div>
  );
}
