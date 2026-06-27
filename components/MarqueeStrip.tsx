const items = [
  "New Summer Collection 2026",
  "Free Shipping on Orders Over $300",
  "Handcrafted in Italy & Portugal",
  "100% Sustainable Materials",
  "Complimentary Gift Wrapping",
  "Exclusive Member Benefits",
  "New Summer Collection 2026",
  "Free Shipping on Orders Over $300",
  "Handcrafted in Italy & Portugal",
  "100% Sustainable Materials",
  "Complimentary Gift Wrapping",
  "Exclusive Member Benefits",
];

export default function MarqueeStrip() {
  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-gem">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
