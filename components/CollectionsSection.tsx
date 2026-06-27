"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const collections = [
  {
    id: "summer",
    tag: "SS 2026",
    title: "The Summer Edit",
    imgSrc: "/images/summer.png",
    imgAlt: "Summer luxury collection",
    large: true,
  },
  {
    id: "evening",
    tag: "Exclusive",
    title: "Evening Noir",
    imgSrc: "/images/evening.png",
    imgAlt: "Evening wear collection",
    large: false,
  },
  {
    id: "casual",
    tag: "New In",
    title: "Urban Essentials",
    imgSrc: "/images/casual.png",
    imgAlt: "Urban casual collection",
    large: false,
  },
];

export default function CollectionsSection() {
  const ref = useRef<HTMLDivElement>(null);

  /* Intersection Observer for scroll reveal */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  /* 3D mouse-tilt on cards */
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".collection-card");
    const handlers: Array<[HTMLElement, (e: MouseEvent) => void, (e: MouseEvent) => void]> = [];

    cards.forEach((card) => {
      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        card.style.transform = `
          perspective(800px)
          rotateY(${dx * 8}deg)
          rotateX(${-dy * 6}deg)
          translateZ(10px)
          scale(1.02)
        `;
      };
      const onLeave = () => {
        card.style.transform = "";
        card.style.transition = "transform 0.5s cubic-bezier(0.4,0,0.2,1)";
        setTimeout(() => (card.style.transition = ""), 500);
      };
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      handlers.push([card, onMove, onLeave]);
    });

    return () => {
      handlers.forEach(([card, onMove, onLeave]) => {
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <section className="section" id="collections" ref={ref}>
      <div className="section-inner">
        <div className="section-header fade-up">
          <div className="section-eyebrow">Collections</div>
          <div className="glow-divider" />
          <h2 className="section-title">Curated For You</h2>
          <p className="section-subtitle">
            Three distinct worlds of style, each telling a unique story through
            fabric, silhouette, and soul.
          </p>
        </div>

        <div className="collections-grid fade-up">
          {collections.map((col) => (
            <a
              href="#"
              key={col.id}
              id={`collection-card-${col.id}`}
              className="collection-card"
              aria-label={`Explore ${col.title} collection`}
            >
              <Image
                src={col.imgSrc}
                alt={col.imgAlt}
                width={800}
                height={col.large ? 1000 : 500}
                className="collection-card-img"
              />
              <div className="collection-card-overlay" />
              <div className="collection-card-content">
                <span className="collection-card-tag">{col.tag}</span>
                <h3 className="collection-card-title">{col.title}</h3>
                <span className="collection-card-cta">
                  Shop Now <span className="cta-arrow">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
