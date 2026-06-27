"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!parallaxRef.current) return;
      const y = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${y * 0.35}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Parallax BG */}
      <div className="hero-parallax-layer" ref={parallaxRef}>
        <Image
          src="/images/hero.png"
          alt="STITCH luxury fashion"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center top", transform: "scale(1.1)" }}
        />
      </div>

      {/* Overlays */}
      <div className="hero-overlay-1" />
      <div className="hero-overlay-2" />
      <div className="hero-overlay-3" />

      {/* Floating 3D shapes */}
      <div className="hero-shape hero-shape-1" />
      <div className="hero-shape hero-shape-2" />
      <div className="hero-shape hero-shape-3" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-pill">
            <span className="eyebrow-dot" />
            New Season 2026
          </span>
        </div>

        <h1 className="hero-title">
          Wear Your<br />
          <em className="line-accent">Signature</em>
          <br />Story
        </h1>

        <p className="hero-subtitle">
          Where timeless elegance meets modern craftsmanship.
          Every stitch, a statement. Every piece, a legacy.
        </p>

        <div className="hero-actions">
          <a href="#collections" className="btn-glow btn-gold" id="hero-explore-btn">
            Explore Collections
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a href="#story" className="btn-glow btn-glass" id="hero-story-btn">
            Our Story
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="hero-stat-number">12K+</div>
            <div className="hero-stat-label">Happy Clients</div>
          </div>
          <div className="hero-stat-divider" />
          <div>
            <div className="hero-stat-number">8</div>
            <div className="hero-stat-label">Years of Craft</div>
          </div>
          <div className="hero-stat-divider" />
          <div>
            <div className="hero-stat-number">100%</div>
            <div className="hero-stat-label">Sustainable</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-label">Scroll</span>
      </div>
    </section>
  );
}
