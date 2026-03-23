const hours = [
  { day: "Tous les jours", time: "10h – 00h" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/the_416_oran/" },
  { label: "Facebook", href: "#" },
  { label: "TripAdvisor", href: "#" },
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
              <li>416 Avenue des Champs-Élysées</li>
              <li>75008 Paris, France</li>
              <li style={{ paddingTop: "0.5rem" }}>
                <a href="tel:+33142567890" className="footer__contact-link">
                  +33 1 42 56 78 90
                </a>
              </li>
              <li>
                <a href="mailto:contact@the416.fr" className="footer__contact-link">
                  contact@the416.fr
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
      </div>
    </footer>
  );
}
