"use client";
import React, { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import "./ScrollStack.css";

export interface ScrollStackItemProps {
  children: ReactNode;
  className?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  className = "",
}) => {
  return <div className={`scroll-stack-card ${className}`}>{children}</div>;
};

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  stickyTop?: number;
  cardPeek?: number;
  gap?: number;
  animationType?: "pop" | "flip" | "flip-horizontal";
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  stickyTop = 60,
  cardPeek = 18,
  gap = 500,
  animationType = "pop",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll(".scroll-stack-card"),
    ) as HTMLElement[];

    const cardsTransformOrigin =
      animationType === "flip-horizontal" ? "center" : "top center";

    // Set sticky positions, z-index, and transform origin
    cards.forEach((card, i) => {
      card.style.position = "sticky";
      card.style.top = `${stickyTop + i * cardPeek}px`;
      card.style.zIndex = `${i + 1}`;
      card.style.transformOrigin = cardsTransformOrigin;
    });

    const update = () => {
      const viewportH = window.innerHeight;

      // Pass 1: find the topmost stuck card index
      let topStuckIndex = -1;
      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();
        const stickAt = stickyTop + i * cardPeek;
        if (rect.top <= stickAt + 2) {
          topStuckIndex = i;
        }
      }

      // Pass 2: apply effects
      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();
        const stickAt = stickyTop + i * cardPeek;
        const isStuck = rect.top <= stickAt + 2;

        // ── Entrance pop: card transitions from below viewport ──
        // Calculate how far the card is into the viewport (0 = just entered bottom, 1 = fully in)
        const enterProgress = Math.min(
          1,
          Math.max(0, (viewportH - rect.top) / (viewportH * 0.4)),
        );

        if (isStuck && topStuckIndex > i) {
          // ── UNDERNEATH: pushed back into the screen with 3D depth ──
          const depth = topStuckIndex - i;
          const pushBack = depth * 30; // translateZ depth
          const scale = 1 - depth * 0.025;
          const opacity = Math.max(0.4, 1 - depth * 0.15);

          cards[i].style.transform =
            `perspective(1200px) translateZ(-${pushBack}px) scale(${scale})`;
          cards[i].style.opacity = `${opacity}`;
          cards[i].classList.add("active", "underneath");
        } else if (isStuck) {
          // ── TOP CARD: fully visible, no distortion ──
          cards[i].style.transform =
            "perspective(1200px) translateZ(0) scale(1)";
          cards[i].style.opacity = "1";
          cards[i].classList.add("active");
          cards[i].classList.remove("underneath");
        } else {
          // ── NOT STUCK YET: entrance animation ──
          if (animationType === "flip") {
            // Flip in: start rotated backwards on X-axis, then rotate to 0 as it enters
            const rotateXVal = (1 - enterProgress) * -45; // -45deg → 0deg
            const flipScale = 0.9 + enterProgress * 0.1; // 0.9 → 1.0
            const flipY = (1 - enterProgress) * 60; // 60px → 0px
            const flipOpacity = 0.1 + enterProgress * 0.9; // 0.1 → 1.0

            cards[i].style.transform =
              `perspective(1200px) rotateX(${rotateXVal}deg) translateY(${flipY}px) scale(${flipScale})`;
            cards[i].style.opacity = `${flipOpacity}`;
          } else if (animationType === "flip-horizontal") {
            // Flip in horizontal: 360-degree rotation on Y-axis (from left to right) as it enters
            const rotateYVal = (1 - enterProgress) * -360; // -360deg → 0deg
            const flipScale = 0.8 + enterProgress * 0.2; // 0.8 → 1.0
            const flipY = (1 - enterProgress) * 80; // 80px → 0px
            const flipOpacity = 0.1 + enterProgress * 0.9; // 0.1 → 1.0

            cards[i].style.transform =
              `perspective(1200px) rotateY(${rotateYVal}deg) translateY(${flipY}px) scale(${flipScale})`;
            cards[i].style.opacity = `${flipOpacity}`;
          } else {
            // Pop in: start slightly below + scaled down, ease to natural position
            const popScale = 0.92 + enterProgress * 0.08; // 0.92 → 1.0
            const popY = (1 - enterProgress) * 40; // 40px → 0px
            const popOpacity = 0.3 + enterProgress * 0.7; // 0.3 → 1.0

            cards[i].style.transform =
              `perspective(1200px) translateY(${popY}px) scale(${popScale})`;
            cards[i].style.opacity = `${popOpacity}`;
          }
          cards[i].classList.remove("active", "underneath");
        }
      }
    };

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        update();
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [stickyTop, cardPeek, animationType]);

  return (
    <div ref={containerRef} className={`scroll-stack-container ${className}`}>
      <div className="scroll-stack-wrapper" style={{ gap: `${gap}px` }}>
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
