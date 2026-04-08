"use client";

import React, { useEffect, useRef, useState } from "react";
import "./ParticleLoader.css";

interface ParticleLoaderProps {
  isLoaded: boolean;
  onEnter: () => void;
  title?: string;
  subtitle?: string;
}

const ParticleLoader: React.FC<ParticleLoaderProps> = ({
  isLoaded,
  onEnter,
  title = "AIT CIDC",
  subtitle = "%",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const [userClicked, setUserClicked] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const mouse = useRef({ x: -1000, y: -1000 });

  const handleButtonClick = () => {
    setUserClicked(true);
    if (isLoaded) triggerExit();
  };

  const triggerExit = () => {
    setIsExiting(true);
    setTimeout(onEnter, 800);
  };

  const [progress, setProgress] = useState(0);

  // Progress bar animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoaded) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 10);
    } else {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) return prev;
          return prev + 1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isLoaded]);

  // Auto-exit when loaded
  useEffect(() => {
    if (userClicked && isLoaded && !isExiting) triggerExit();
  }, [isLoaded, userClicked, isExiting]);

  // Canvas animation: Orbital particles with explosion effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let w = canvas.width;
    let h = canvas.height;
    let cx = w / 2;
    let cy = h / 2;
    let time = 0;
    let exitStartTime = 0;

    interface Particle {
      baseAngle: number;
      angle: number;
      orbitRadius: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      mass: number;
      size: number;
      rotationSpeed: number;
      opacity: number;
      explosionPower: number;
      update: (exiting: boolean, currentTime: number) => void;
      draw: () => void;
    }

    class ParticleClass implements Particle {
      baseAngle: number;
      angle: number;
      orbitRadius: number;
      x: number;
      y: number;
      vx: number = 0;
      vy: number = 0;
      mass: number;
      size: number;
      rotationSpeed: number;
      opacity: number;
      explosionPower: number;

      constructor(i: number, count: number) {
        this.baseAngle = (i / count) * Math.PI * 2;
        this.angle = this.baseAngle;
        // Make the orbit responsive so particles do not fly off screen on mobile
        const isMobile = w < 768;
        const baseRadius = isMobile ? 110 : 240;
        const variance = isMobile ? 40 : 90;
        
        this.orbitRadius = baseRadius + Math.random() * variance;
        this.x = cx + Math.cos(this.angle) * this.orbitRadius;
        this.y = cy + Math.sin(this.angle) * this.orbitRadius;
        this.mass = 0.01 + Math.random() * 0.02;
        this.size = Math.random() * 2 + 0.6;
        this.rotationSpeed =
          (0.001 + Math.random() * 0.002) * (Math.random() > 0.5 ? 1 : -1);
        this.opacity = Math.random() * 0.4 + 0.3;
        this.explosionPower = 4 + Math.random() * 10;
      }

      update(exiting: boolean, currentTime: number) {
        if (exiting) {
          const elapsed = currentTime - exitStartTime;
          const angle = Math.atan2(this.y - cy, this.x - cx);

          if (elapsed < 0.4) {
            // CINEMATIC WIND-UP: Tighten before explosion
            this.vx -= Math.cos(angle) * 3.5;
            this.vy -= Math.sin(angle) * 3.5;
          } else {
            // RELEASE: Radial Expansion
            this.vx += Math.cos(angle) * this.explosionPower;
            this.vy += Math.sin(angle) * this.explosionPower;
            this.opacity *= 0.96;
            this.size *= 1.01;
          }
        } else {
          // Orbital animation with wave effect
          const wave =
            Math.sin(time * 1.5 + this.baseAngle * 12) * 15 +
            Math.sin(time * 3 + this.baseAngle * 25) * 8;

          const targetR = this.orbitRadius + wave;
          this.angle += this.rotationSpeed;
          const tx = cx + Math.cos(this.angle) * targetR;
          const ty = cy + Math.sin(this.angle) * targetR;

          // Mouse interaction
          const dx = this.x - mouse.current.x;
          const dy = this.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const scatter = (150 - dist) / 150;
            this.vx += (dx / dist) * scatter * 8;
            this.vy += (dy / dist) * scatter * 8;
          }

          this.vx += (tx - this.x) * this.mass;
          this.vy += (ty - this.y) * this.mass;
        }

        this.vx *= 0.93;
        this.vy *= 0.93;
        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);

        if (speed > 6) {
          // Motion blur during explosion
          ctx!.beginPath();
          ctx!.strokeStyle = `rgba(0, 0, 0, ${this.opacity * 0.6})`;
          ctx!.lineWidth = this.size;
          ctx!.lineCap = "round";
          ctx!.moveTo(this.x, this.y);
          ctx!.lineTo(this.x - this.vx * 0.4, this.y - this.vy * 0.4);
          ctx!.stroke();
        } else {
          // Energy dust with glow - black particles
          ctx!.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
          ctx!.beginPath();
          ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx!.fill();

          if (Math.random() > 0.85) {
            ctx!.fillStyle = `rgba(0, 0, 0, ${this.opacity * 0.5})`;
            ctx!.beginPath();
            ctx!.arc(
              this.x + (Math.random() - 0.5) * 2,
              this.y + (Math.random() - 0.5) * 2,
              this.size * 1.5,
              0,
              Math.PI * 2
            );
            ctx!.fill();
          }
        }
      }
    }

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cx = w / 2;
      cy = h / 2;
    };

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < 1500; i++) particles.push(new ParticleClass(i, 1500));
    };

    const loop = () => {
      time += 0.01;
      ctx!.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update(isExiting, time);
        p.draw();
      });
      requestRef.current = requestAnimationFrame(loop);
    };

    init();
    loop();

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", resize);

    if (isExiting) {
      exitStartTime = time;
    }

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isExiting]);

  return (
    <div className={`loader-overlay ${isExiting ? "is-exiting" : ""}`}>
      <canvas ref={canvasRef} className="loader-canvas" />
      <div className={`loader-content ${isExiting ? "content-out" : ""}`}>
        <h3 className="loader-title">{title}</h3>
        <p className="loader-subtitle">{Math.round(progress)}{subtitle}</p>
        <button
          className={`loader-button ${userClicked && !isLoaded ? "waiting" : ""}`}
          onClick={handleButtonClick}
          disabled={userClicked && !isLoaded}
          style={{ pointerEvents: userClicked ? "none" : "all", borderRadius: "12px" }}
        >
          {userClicked && !isLoaded ? "PREPARING..." : "ENTER"}
        </button>
      </div>
    </div>
  );
};

export default ParticleLoader;
