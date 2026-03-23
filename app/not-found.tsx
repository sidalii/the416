import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1.5rem",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "hsl(43, 72%, 55%)",
        }}
      >
        Erreur 404
      </p>
      <h1
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2.5rem, 8vw, 5rem)",
          fontWeight: 700,
          background: "linear-gradient(135deg, hsl(43,72%,55%), hsl(43,80%,70%), hsl(43,60%,40%))",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Page introuvable
      </h1>
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.875rem 2.5rem",
          background: "hsl(152, 45%, 28%)",
          border: "1px solid rgba(201,162,39,0.3)",
          color: "hsl(43, 72%, 55%)",
          fontFamily: "'Lato', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          transition: "background 0.3s",
        }}
      >
        Retour à l'accueil
      </Link>
    </div>
  );
}
