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
  return (
    <div className={`scroll-stack-card ${className}`}>
      {children}
    </div>
  );
};

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  stickyTop?: number;
  cardPeek?: number;
  gap?: number;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  stickyTop = 60,
  cardPeek = 16,
  gap = 600,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll(".scroll-stack-card")
    ) as HTMLElement[];

    // Set each card's sticky top and BASE z-index (ascending = later cards on top)
    cards.forEach((card, i) => {
      card.style.position = "sticky";
      card.style.top = `${stickyTop + i * cardPeek}px`;
      card.style.zIndex = `${i + 1}`;
    });

    const update = () => {
      // Pass 1: find the highest-index card that is currently stuck
      let topStuckIndex = -1;
      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();
        const stickAt = stickyTop + i * cardPeek;
        if (rect.top <= stickAt + 2) {
          topStuckIndex = i;
        }
      }

      // Pass 2: apply depth effects
      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();
        const stickAt = stickyTop + i * cardPeek;
        const isStuck = rect.top <= stickAt + 2;

        if (isStuck && topStuckIndex > i) {
          // This card is UNDERNEATH other stuck cards — push it back
          const depth = topStuckIndex - i;
          const scale = 1 - depth * 0.018;
          cards[i].style.transform = `scale(${scale})`;
          cards[i].style.opacity = `${Math.max(0.55, 1 - depth * 0.12)}`;
          cards[i].classList.add("active");
          cards[i].classList.add("underneath");
        } else if (isStuck) {
          // This IS the topmost stuck card — full size, full visibility
          cards[i].style.transform = "scale(1)";
          cards[i].style.opacity = "1";
          cards[i].classList.add("active");
          cards[i].classList.remove("underneath");
        } else {
          // Not stuck yet — reset
          cards[i].style.transform = "scale(1)";
          cards[i].style.opacity = "1";
          cards[i].classList.remove("active");
          cards[i].classList.remove("underneath");
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
    update(); // initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [stickyTop, cardPeek]);

  return (
    <div ref={containerRef} className={`scroll-stack-container ${className}`}>
      <div className="scroll-stack-wrapper" style={{ gap: `${gap}px` }}>
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;