export default function AboutSection() {
  return (
    <section id="about" className="about-video">
      <div className="about-video__bg">
        {/* Blurred fill for the empty sides */}
        <video autoPlay muted loop playsInline className="about-video__vid-blur" aria-hidden="true">
          <source src="/sit-here-with-the416.mp4" type="video/mp4" />
        </video>
        {/* Clean video, fully visible */}
        <video autoPlay muted loop playsInline className="about-video__vid">
          <source src="/sit-here-with-the416.mp4" type="video/mp4" />
        </video>
        <div className="about-video__overlay" />
      </div>

      <div className="about-video__content">
        <p className="about-video__overline">Nos Créations</p>
        <h2 className="about-video__heading">
          L'Assiette <span>comme Toile</span>
        </h2>
        <div className="about-video__divider" />
        <p className="about-video__text">
          Venez vous asseoir avec nous. Chaque table est une invitation,
          chaque plat une confidence entre le chef et ses convives.
        </p>
      </div>
    </section>
  );
}
