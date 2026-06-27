"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const products = [
  {
    id: "p1",
    name: "Atelier Silk Blouse",
    category: "Women",
    price: "$420",
    badge: "New",
    badgeType: "badge-new",
    imgSrc: "/images/summer.png",
  },
  {
    id: "p2",
    name: "Evening Noir Gown",
    category: "Evening Wear",
    price: "$1,200",
    oldPrice: "$1,600",
    badge: "Sale",
    badgeType: "badge-sale",
    imgSrc: "/images/evening.png",
  },
  {
    id: "p3",
    name: "Cashmere Blazer",
    category: "Men",
    price: "$780",
    badge: "New",
    badgeType: "badge-new",
    imgSrc: "/images/casual.png",
  },
  {
    id: "p4",
    name: "Linen Summer Dress",
    category: "Women",
    price: "$340",
    badge: "New",
    badgeType: "badge-new",
    imgSrc: "/images/hero.png",
  },
];

export default function ProductsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section products-section" id="products" ref={ref}>
      <div className="section-inner">
        <div className="section-header fade-up">
          <div className="section-eyebrow">Bestsellers</div>
          <div className="glow-divider" />
          <h2 className="section-title">Featured Pieces</h2>
          <p className="section-subtitle">
            The most coveted pieces of the season — hand-picked for those
            who know exactly what they want.
          </p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <div
              key={p.id}
              id={`product-card-${p.id}`}
              className={`product-card fade-up delay-${i + 1}`}
            >
              <div className="product-img-wrap">
                <Image
                  src={p.imgSrc}
                  alt={p.name}
                  width={600}
                  height={800}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {p.badge && (
                  <span className={`product-badge ${p.badgeType}`}>{p.badge}</span>
                )}
                <button
                  className="product-wishlist"
                  id={`wishlist-${p.id}`}
                  aria-label={`Add ${p.name} to wishlist`}
                >
                  ♡
                </button>
                <button
                  className="product-quick-add"
                  id={`quick-add-${p.id}`}
                  aria-label={`Quick add ${p.name}`}
                >
                  + Quick Add
                </button>
              </div>
              <div className="product-info">
                <span className="product-category">{p.category}</span>
                <h3 className="product-name">{p.name}</h3>
                <div className="product-price-row">
                  <span className="product-price">{p.price}</span>
                  {p.oldPrice && (
                    <span className="product-price-old">{p.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta fade-up">
          <a href="#" className="btn-glow btn-gold" id="view-all-btn">
            View All Products
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
