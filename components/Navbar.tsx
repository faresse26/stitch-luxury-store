"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} role="navigation" aria-label="Main navigation">
        <a href="#" className="nav-logo" id="nav-logo" onClick={handleLinkClick}>STITCH</a>

        <ul className="nav-links">
          <li><a href="#collections" id="nav-collections">Collections</a></li>
          <li><a href="#products" id="nav-products">Shop</a></li>
          <li><a href="#story" id="nav-story">Story</a></li>
          <li><a href="#" id="nav-lookbook">Lookbook</a></li>
          <li><a href="#" id="nav-sale" style={{ color: "var(--rose-lt)" }}>Sale</a></li>
        </ul>

        <div className="nav-actions">
          <button className="nav-icon-btn" id="nav-search-btn" aria-label="Search">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>
          <button className="nav-icon-btn" id="nav-account-btn" aria-label="Account">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button className="nav-icon-btn" id="nav-cart-btn" aria-label="Cart" style={{ position: "relative" }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span className="nav-cart-badge" aria-label="2 items in cart" />
          </button>

          {/* Mobile hamburger menu button */}
          <button 
            className={`nav-hamburger ${menuOpen ? "open" : ""}`} 
            id="nav-menu-btn" 
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Full-screen Glassmorphic Mobile Drawer */}
      <div className={`mobile-menu-drawer ${menuOpen ? "open" : ""}`} aria-hidden={!menuOpen}>
        <ul className="mobile-menu-links">
          <li><a href="#collections" onClick={handleLinkClick}>Collections</a></li>
          <li><a href="#products" onClick={handleLinkClick}>Shop Featured</a></li>
          <li><a href="#story" onClick={handleLinkClick}>Our Story</a></li>
          <li><a href="#testimonials" onClick={handleLinkClick}>Reviews</a></li>
          <li><a href="#newsletter" onClick={handleLinkClick}>Insider Club</a></li>
          <li><a href="#" style={{ color: "var(--rose-lt)" }} onClick={handleLinkClick}>Seasonal Sale</a></li>
        </ul>
      </div>
    </>
  );
}
