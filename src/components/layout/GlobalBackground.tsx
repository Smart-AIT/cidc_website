"use client";
import { useEffect, useState } from "react";

export default function GlobalBackground() {
  const [bgSize, setBgSize] = useState(240); // Dense tightly-packed sizing

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Shuru se aakhiri tak sirf size smoothly scale (chota-bada) hoga
      const newSize = 240 + scrollTop * 0.18;
      setBgSize(newSize);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0, // FIXED: Wapas back layer par daal diya taaki website ki brightness 100% normal ho jaye
        pointerEvents: "none",
        overflow: "hidden",
        backgroundColor: "#f4f4f0", // Base clean white-bone background
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: "url('/topography.avif')",
          backgroundSize: `${bgSize}px`,
          backgroundPosition: "center",
          backgroundRepeat: "repeat",

          // Koi complex overlay ya brightness filter nahi, direct high opacity constant dark look ke liye
          opacity: 0.45,

          willChange: "background-size",
        }}
      />
    </div>
  );
}