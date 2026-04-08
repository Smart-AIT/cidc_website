"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Adjust these physics values to make the cursor feel "slower" or "heavier"
  const springConfig = { damping: 30, stiffness: 60, mass: 1.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if device has a fine pointer (mouse), disable on touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="hidden md:block pointer-events-none fixed top-0 left-0 z-[999999]"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      <div
        style={{
          width: isHovering ? "56px" : "16px",
          height: isHovering ? "56px" : "16px",
          backgroundColor: isHovering ? "rgba(163, 59, 60, 0.15)" : "#1a1c1a",
          border: isHovering ? "2px solid #A33B3C" : "2px solid #1a1c1a",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          backdropFilter: isHovering ? "blur(3px)" : "none",
        }}
      />
    </motion.div>
  );
}
