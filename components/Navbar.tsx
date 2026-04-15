"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Accueil", target: "hero" },
  { label: "Menu", target: "menu" },
  { label: "Réservation", target: "reservation" },
  { label: "Contact", target: "footer" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <button className="navbar__brand" onClick={() => scrollTo("hero")}>
          <img src="/the416-logo.jpg" alt="The 416" className="navbar__logo" />
          <span className="navbar__title">THE 416</span>
        </button>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.target}>
              <button className="navbar__link" onClick={() => scrollTo(link.target)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className={`navbar__bar${menuOpen ? " navbar__bar--top-open" : ""}`} />
          <span className={`navbar__bar${menuOpen ? " navbar__bar--mid-open" : ""}`} />
          <span className={`navbar__bar${menuOpen ? " navbar__bar--bot-open" : ""}`} />
        </button>
      </div>

      <div className={`navbar__mobile${menuOpen ? " navbar__mobile--open" : ""}`}>
        <ul className="navbar__mobile-links">
          {links.map((link) => (
            <li key={link.target}>
              <button
                className="navbar__mobile-link"
                onClick={() => { scrollTo(link.target); setMenuOpen(false); }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
