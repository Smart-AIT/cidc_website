"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Counter digit animation component
function Number({ mv, number, height }: any) {
  let y = useTransform(mv, (latest: number) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;
    let memo = offset * height;
    if (offset > 5) memo -= 10 * height;
    return memo;
  });
  const style = {
    position: "absolute" as const,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
  };
  return <motion.span style={{ ...style, y }}>{number}</motion.span>;
}

// Individual digit with smooth animation
function Digit({ place, value, height, digitStyle }: any) {
  let valueRoundedToPlace = Math.floor(value / place);
  const animatedValue = useSpring(valueRoundedToPlace, {
    stiffness: 100,
    damping: 20,
  });

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  const defaultStyle = {
    height,
    position: "relative" as const,
    width: "1ch",
    fontVariantNumeric: "tabular-nums" as const,
  };

  return (
    <div style={{ ...defaultStyle, ...digitStyle }}>
      {Array.from({ length: 10 }, (_, i) => (
        <Number key={i} mv={animatedValue} number={i} height={height} />
      ))}
    </div>
  );
}

// Counter display component
function Counter({
  value,
  fontSize = 100,
  padding = 0,
  places = [100, 10, 1],
  gap = 8,
  textColor = "white",
  fontWeight = "bold",
  digitStyle,
}: any) {
  const height = fontSize + padding;
  const defaultContainerStyle = {
    position: "relative" as const,
    display: "inline-block" as const,
  };
  const defaultCounterStyle = {
    fontSize,
    display: "flex" as const,
    gap: gap,
    overflow: "hidden" as const,
    lineHeight: 1,
    color: textColor,
    fontWeight: fontWeight,
  };

  return (
    <div style={defaultContainerStyle}>
      <div style={defaultCounterStyle}>
        {places.map((place: number) => (
          <Digit
            key={place}
            place={place}
            value={value}
            height={height}
            digitStyle={digitStyle}
          />
        ))}
      </div>
    </div>
  );
}

// Time display with HH:MM:SS format
function TimeDisplay({ hour, minute, seconds, fontSize }: any) {
  const renderCounter = (value: number) => (
    <Counter
      value={value}
      fontSize={fontSize}
      padding={0}
      places={[10, 1]}
      gap={0}
      textColor="#b3b3b3"
      fontWeight={400}
      digitStyle={{ marginRight: 0 }}
    />
  );

  return (
    <div
      className="flex items-center gap-0"
      style={{ lineHeight: 1, fontFamily: "var(--font-space-grotesk)" }}
    >
      {renderCounter(hour)}
      <span>:</span>
      {renderCounter(minute)}
      <span>:</span>
      {renderCounter(seconds)}
    </div>
  );
}

interface HeroLandingProps {
  entered: boolean;
}

export default function HeroLanding({ entered }: HeroLandingProps) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [location, setLocation] = useState("");

  const heroParallaxRef = useRef(null);
  const ghostRef = useRef(null);
  const fixedBgRef = useRef(null);

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setHour(now.getHours());
      setMinute(now.getMinutes());
      setSeconds(now.getSeconds());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch user location
  useEffect(() => {
    fetch("https://ipwho.is/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.city && data.country) {
          setLocation(`${data.city}, ${data.country}`);
        } else if (data && data.country) {
          setLocation(data.country);
        } else {
          setLocation("");
        }
      })
      .catch(() => setLocation(""));
  }, []);

  // Scroll-triggered parallax animation
  useEffect(() => {
    if (
      !entered ||
      !heroParallaxRef.current ||
      !ghostRef.current ||
      !fixedBgRef.current
    )
      return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroParallaxRef.current,
        { scale: 1, rotateX: 0, y: 0, filter: "brightness(1) saturate(1)" },
        {
          scale: 0.9,
          rotateX: 7,
          y: 10,
          filter: "brightness(0.5) saturate(1)",
          ease: "power1.out",
          scrollTrigger: {
            trigger: ghostRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.to(fixedBgRef.current, {
        backgroundColor: "#000000",
        ease: "none",
        scrollTrigger: {
          trigger: ghostRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ghostRef);

    return () => ctx.revert();
  }, [entered]);

  return (
    <div ref={ghostRef} className="relative w-full h-screen">
      <div
        ref={fixedBgRef}
        className="fixed top-0 left-0 h-screen w-full -z-10 overflow-hidden bg-[#212125]"
        style={{ perspective: "1200px" }}
      >
        <div
          ref={heroParallaxRef}
          className="relative w-full h-full flex items-center justify-center transition-opacity duration-700"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="relative z-30 w-full h-full flex items-center justify-center">
            <div
              className="relative w-full h-full md:w-[calc(100%-40px)] md:h-[calc(100%-40px)] md:m-5 md:rounded-3xl flex flex-col items-center justify-center"
              style={{
                overflow: "hidden",
                backgroundImage:
                  "radial-gradient(circle at center, #2a2a2e 0%, #161618 100%)",
              }}
            >
              {/* Center Content */}
              <div className="text-center z-10">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                  AIT CIDC
                </h1>
                <p className="text-lg md:text-xl text-white/70">
                  College Innovation & Development Club
                </p>
              </div>

              {/* Bottom Left: Time Display */}
              <div
                className="absolute left-0 bottom-0 pl-6 md:pl-8 pb-4 md:pb-6 text-xs text-white/70 select-none"
                style={{ zIndex: 50 }}
              >
                <TimeDisplay
                  hour={hour}
                  minute={minute}
                  seconds={seconds}
                  fontSize={12}
                />
              </div>

              {/* Bottom Right: Location Display */}
              <div
                className="absolute right-0 bottom-0 pr-6 md:pr-8 pb-4 md:pb-6 text-xs text-white/70 select-none"
                style={{ zIndex: 50 }}
              >
                {location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
