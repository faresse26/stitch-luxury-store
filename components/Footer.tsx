export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer-inner">
        <div className="footer-top">
          {/* Brand Column */}
          <div>
            <div className="footer-brand-logo">STITCH</div>
            <p className="footer-brand-desc">
              Where timeless elegance meets modern craftsmanship.
              Each piece is designed to transcend seasons.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-link" id="footer-instagram" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a href="#" className="social-link" id="footer-pinterest" aria-label="Pinterest">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.22-5.17 1.22-5.17s-.31-.63-.31-1.55c0-1.45.84-2.54 1.89-2.54.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.88 1.54 1.88 1.85 0 3.09-2.37 3.09-5.17 0-2.13-1.44-3.63-3.49-3.63-2.37 0-3.77 1.78-3.77 3.61 0 .71.27 1.48.62 1.9.07.08.08.15.06.23-.06.26-.2.82-.23.93-.04.15-.13.18-.3.11-1.13-.52-1.83-2.18-1.83-3.5 0-2.85 2.07-5.46 5.97-5.46 3.13 0 5.57 2.23 5.57 5.21 0 3.1-1.96 5.6-4.67 5.6-.91 0-1.77-.47-2.06-1.03l-.56 2.09c-.2.79-.75 1.77-1.12 2.37.84.26 1.73.4 2.65.4 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </a>
              <a href="#" className="social-link" id="footer-twitter" aria-label="Twitter / X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-link" id="footer-tiktok" aria-label="TikTok">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.77a4.85 4.85 0 0 1-1.01-.08z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="footer-col-title">Shop</h4>
            <ul className="footer-links">
              <li><a href="#" id="footer-women">Women</a></li>
              <li><a href="#" id="footer-men">Men</a></li>
              <li><a href="#" id="footer-evening">Evening Wear</a></li>
              <li><a href="#" id="footer-accessories">Accessories</a></li>
              <li><a href="#" id="footer-sale">Sale</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#story" id="footer-about">About STITCH</a></li>
              <li><a href="#" id="footer-sustainability">Sustainability</a></li>
              <li><a href="#" id="footer-ateliers">Our Ateliers</a></li>
              <li><a href="#" id="footer-careers">Careers</a></li>
              <li><a href="#" id="footer-press">Press</a></li>
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="footer-col-title">Help</h4>
            <ul className="footer-links">
              <li><a href="#" id="footer-shipping">Shipping & Returns</a></li>
              <li><a href="#" id="footer-sizing">Size Guide</a></li>
              <li><a href="#" id="footer-care">Garment Care</a></li>
              <li><a href="#" id="footer-contact">Contact Us</a></li>
              <li><a href="#" id="footer-faq">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} STITCH. All rights reserved.</p>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="#" id="footer-privacy">Privacy Policy</a>
            <a href="#" id="footer-terms">Terms of Use</a>
            <a href="#" id="footer-cookies">Cookie Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
