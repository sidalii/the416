const hours = [
  { day: "Tous les jours", time: "10h – 00h" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/the_416_oran/" },
  { label: "TikTok", href: "https://www.tiktok.com/@the_416_coffee" },
];

export default function FooterSection() {
  return (
    <footer id="footer" className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <h3 className="footer__brand-title">THE 416</h3>
            <p className="footer__brand-text">
              Une expérience gastronomique d'exception dans un cadre d'une élégance rare.
              Chaque visite est un voyage culinaire.
            </p>
          </div>

          <div>
            <h4 className="footer__section-title">Horaires</h4>
            <ul className="footer__hours">
              {hours.map((h) => (
                <li key={h.day} className="footer__hours-row">
                  <span>{h.day}</span>
                  <span className="footer__hours-time">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__section-title">Contact</h4>
            <ul className="footer__contact">
              <li>ARDIS (en Construction), Boulevard des lions, Rond-point</li>
              <li>Oran 31000, Algérie</li>
              <li style={{ paddingTop: "0.5rem" }}>
                <a href="tel:+213551158020" className="footer__contact-link">
                  +213 5 51 15 80 20
                </a>
              </li>
            </ul>
            <div className="footer__social">
              {socials.map((social) => (
                <a key={social.label} href={social.href} className="footer__social-link" target="_blank" rel="noopener noreferrer">
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__divider" />
        <p className="footer__copy">© 2026 THE 416. Tous droits réservés.</p>

        <div className="footer__devby">
          <span className="footer__devby-label">Site conçu & développé par</span>
          <a
            href="https://75code.com/ar"
            className="footer__devby-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            75Code
          </a>
          <div className="footer__devby-socials">
            <a
              href="https://instagram.com/75code"
              className="footer__devby-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <span className="footer__devby-dot" />
            <a
              href="https://facebook.com/75code"
              className="footer__devby-social"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
