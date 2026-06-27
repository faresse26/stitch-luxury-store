"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-content">
        <div className="section-eyebrow" style={{ justifyContent: "center", color: "var(--gold)", marginBottom: "1rem" }}>
          Stay Connected
        </div>
        <h2 className="newsletter-title">The STITCH Insider</h2>
        <p className="newsletter-subtitle">
          Be the first to discover new collections, exclusive offers,
          and behind-the-scenes stories from our ateliers.
        </p>

        {!submitted ? (
          <form className="newsletter-form" onSubmit={handleSubmit} id="newsletter-form">
            <input
              id="newsletter-email-input"
              type="email"
              className="newsletter-input"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address for newsletter"
            />
            <button
              type="submit"
              className="newsletter-submit"
              id="newsletter-submit-btn"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div style={{
            padding: "1.2rem 2rem",
            border: "1px solid rgba(201,169,110,0.3)",
            borderRadius: "3px",
            color: "var(--gold)",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            animation: "fadeIn 0.5s ease-out"
          }}>
            ✓ Welcome to the STITCH inner circle.
          </div>
        )}

        <p className="newsletter-disclaimer">
          No spam, ever. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  );
}
