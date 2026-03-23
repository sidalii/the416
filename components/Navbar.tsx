"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Réservation", href: "#reservation" },
  { label: "Contact", href: "#footer" },
];

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
        <a href="#hero" className="navbar__brand">
          <img
            src="/the416-logo.jpg"
            alt="The 416"
            className="navbar__logo"
          />
          <span className="navbar__title">THE 416</span>
        </a>

        <ul className="navbar__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="navbar__link">
                {link.label}
              </a>
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
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
