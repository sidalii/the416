export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg">
        <video
          className="hero__img"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/cover-video.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <div className="animate-fade-in-up">
          <p className="hero__subtitle">Fine Dining Experience</p>
        </div>

        <h1 className="animate-fade-in-up-delay-1 hero__title">THE 416</h1>

        <div className="animate-fade-in-up-delay-2">
          <div className="hero__divider" />
          <p className="hero__text">
            Une expérience culinaire d'exception où l'élégance rencontre la gastronomie.
            Découvrez des saveurs raffinées dans un cadre somptueux.
          </p>
        </div>

        <div className="animate-fade-in-up-delay-3 hero__cta">
          <a href="#menu" className="hero__btn hero__btn--primary">
            Découvrir le Menu
          </a>
          <a href="#reservation" className="hero__btn hero__btn--outline">
            Réserver une Table
          </a>
        </div>
      </div>

      <div className="hero__scroll-indicator animate-float">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
}
