"use client";

import { useEffect, useRef, useState } from "react";

export default function InteractiveSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports fine hover (desktop)
    const mediaQuery = window.matchMedia("(hover: hover)");
    setIsMobile(!mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(!e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaChange);

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Smooth animation loop using lerp (linear interpolation)
    let animationFrameId: number;
    const updatePosition = () => {
      if (spotlightRef.current) {
        // Interpolate position for buttery smooth trailing effect
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;
        spotlightRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    if (mediaQuery.matches) {
      updatePosition();
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={spotlightRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "350px",
        height: "350px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, transparent 100%)",
        filter: "blur(20px)",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "screen",
        willChange: "transform",
        transform: "translate(-100%, -100%)",
      }}
      aria-hidden="true"
    />
  );
}
