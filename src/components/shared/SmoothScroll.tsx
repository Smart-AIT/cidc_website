"use client";

import { ReactNode } from "react";
import { ReactLenis } from "lenis/react";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, 
        duration: 0.7,
        wheelMultiplier: 0.7, 
        touchMultiplier: 0.7 
      }}
    >
      {children}
    </ReactLenis>
  );
}
