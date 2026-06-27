"use client";

import Image from "next/image";

export default function StorySection() {
  return (
    <section className="section story-section" id="story">
      <div className="section-inner">
        <div className="story-grid">
          {/* 3D Image Stack */}
          <div className="story-img-stack">
            <Image
              src="/images/evening.png"
              alt="STITCH brand story — craftsmanship and elegance"
              width={700}
              height={875}
              className="story-img-main"
            />
            <Image
              src="/images/casual.png"
              alt="STITCH atelier detail"
              width={400}
              height={400}
              className="story-img-accent"
            />
            {/* Floating info badge */}
            <div className="story-img-badge">
              <div className="story-img-badge-number">47</div>
              <div className="story-img-badge-label">Quality Checks</div>
            </div>
          </div>

          {/* Content */}
          <div className="story-content">
            <div className="section-eyebrow" style={{ justifyContent: "flex-start" }}>
              Our Story
            </div>

            <h2 className="story-title">
              Crafted with <em>Purpose</em>,<br />
              Worn with Intention
            </h2>

            <p className="story-body">
              STITCH was born from a singular belief: that clothing is not merely
              fabric and thread, but a language — one that speaks of who you are
              before you utter a single word.
            </p>
            <p className="story-body">
              Founded in 2015 by a collective of artisans and designers, we source
              only the finest sustainable materials from ethical suppliers across
              Italy, Portugal, and Japan. Each piece passes through 47 quality
              checkpoints before it reaches you.
            </p>

            <div className="story-stats">
              <div className="stat-item">
                <div className="stat-number">47</div>
                <div className="stat-label">Quality Checks</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">12K+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Sustainable</div>
              </div>
            </div>

            <a href="#" className="btn-glow btn-glass" id="story-learn-more-btn">
              Learn More About Us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
