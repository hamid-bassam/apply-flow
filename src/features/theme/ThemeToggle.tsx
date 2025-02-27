"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Fixe le problème d'hydratation Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size={"icon"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      {/* Icône Soleil pour mode clair */}
      <motion.div
        key="sun"
        initial={{ rotate: 90, scale: 0 }}
        animate={theme === "light" ? { rotate: 0, scale: 1 } : { rotate: 90, scale: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun size={20} fill="yellow" className="" />
      </motion.div>

      {/* Icône Lune pour mode sombre */}
      <motion.div
        key="moon"
        initial={{ rotate: -90, scale: 0 }}
        animate={theme === "dark" ? { rotate: 0, scale: 1 } : { rotate: -90, scale: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon size={20} className="text-gray-400" />
      </motion.div>

      <span className="sr-only">Toggle Theme</span>
    </Button>
  );
};
