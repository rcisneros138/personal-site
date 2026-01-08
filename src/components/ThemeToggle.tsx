"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-full animate-pulse"
        style={{ background: "var(--border)" }}
      />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-9 h-9 rounded-full flex items-center justify-center transition-colors"
      style={{
        background: "var(--background-secondary)",
        border: "1px solid var(--border)",
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : 180,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="absolute"
      >
        <Moon className="w-4 h-4" style={{ color: "var(--accent)" }} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : -180,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="absolute"
      >
        <Sun className="w-4 h-4" style={{ color: "var(--accent)" }} />
      </motion.div>
    </motion.button>
  );
}
