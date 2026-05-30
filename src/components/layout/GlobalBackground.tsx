"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalBackground() {
  const { scrollY } = useScroll();
  
  // Puri website par scroll ke hisab se map 1 se 1.35 tak scale (zoom) hoga
  const backgroundScale = useTransform(scrollY, [0, 2000], [1, 1.35]);
  // Scroll depth ke sath transparency control karega
  const backgroundOpacity = useTransform(scrollY, [0, 1500], [0.35, 0.15]);

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none bg-repeat bg-center -z-50"
      style={{ 
        backgroundImage: "url('/topography.png')", 
        backgroundSize: '400px',
        scale: backgroundScale,
        opacity: backgroundOpacity
      }}
    />
  );
}