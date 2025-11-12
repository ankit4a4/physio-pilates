"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 300, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const addHoverEvents = () => {
      document.querySelectorAll("a, button, .hover-cursor").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };

    window.addEventListener("mousemove", moveCursor);
    addHoverEvents();

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trailing blob */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full w-36 h-36 opacity-10 bg-gradient-to-r from-[#5ce2e7] to-[#b49559] blur-3xl"
      />

      {/* Main cursor */}
      <motion.div
        style={{ x: springX, y: springY }}
        animate={{
          width: hovered ? 75 : 60,
          height: hovered ? 75: 60,
          rotate: hovered ? 50 : 0,
          opacity: hovered ? 0.8 : 0.6,
        }}
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-gradient-to-r from-[#b49559] to-[#5ce2e7] shadow-lg border border-white/30"
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </>
  );
}
