import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Producten · Curious Magpie",
  description:
    "Overzicht van handgemaakt keramiek voor buiten door Marjolein IJbema.",
};

const products = [
  {
    title: "Dansende Vrouwenfiguur",
    description:
      "Een sierlijk vrouwtje van ongeveer 20 cm hoog. Ze wordt op een paal in de tuin geplaatst en zwiert vrolijk in de wind. Een echte blikvanger tussen het groen.",
    tag: "Tuindecoratie",
    bg: "#f9d4cc",
    accent: "#e8392a",
    icon: "✿",
    rotate: "-2deg",
  },
  {
    title: "Slakjes",
    description:
      "Lieve kleine slakjes van keramiek. Prachtig onder een glazen stolp of verstopt tussen de planten. Elk slakje is uniek en met de hand gevormd.",
    tag: "Decoratie",
    bg: "#c8dff0",
    accent: "#4a9fd4",
    icon: "🐌",
    rotate: "1deg",
  },
  {
    title: "Kaartjeshouder met Worm",
    description:
      "Een vrolijke houder voor een kaartje of naamplaatje, met een worm als handvat. Ideaal als cadeau of als persoonlijk accent in de tuin.",
    tag: "Accessoire",
    bg: "#fdf0a8",
    accent: "#c4881e",
    icon: "✦",
    rotate: "-1deg",
  },
  {
    title: "Tuinpaddestoelen",
    description:
      "Keramieke paddestoelen in verschillende maten en kleuren. Ze staan prachtig tussen de vaste planten of in een pot op het terras.",
    tag: "Tuindecoratie",
    bg: "#c8e8c8",
    accent: "#5aaa5a",
    icon: "❧",
    rotate: "2deg",
  },
  {
    title: "Groentestekers",
    description:
      "Handgemaakte stekers voor in de moestuin om gezaaide groenten te markeren. Met een herkenbaar icoontje van de groente erop. Praktisch én decoratief.",
    tag: "Moestuin",
    bg: "#fdf0a8",
    accent: "#5aaa5a",
    icon: "✾",
    rotate: "-1.5deg",
  },
  {
    title: "Keramiek Bloemetjeskaartjes",
    description:
      "Papieren kaartjes met een handgemaakt keramiek bloemetje erop. Een bijzonder en persoonlijk cadeau of wenskaartje dat je kunt bewaren.",
    tag: "Cadeau",
    bg: "#e0d0f0",
    accent: "#b87fc4",
    icon: "✿",
    rotate: "1.5deg",
  },
];

export default function ProductenPage() {
  return (
    <main style={{ backgroundColor: "#fdf8f0" }}>
      {/* Page header */}
      <section
        className="dot-bg"
        style={{ borderBottom: "3px solid #1a1008", padding: "4rem 1.5rem" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="inline-block mb-4 px-4 py-1.5"
            style={{
              backgroundColor: "#f5c842",
              border: "2.5px solid #1a1008",
              borderRadius: "20px",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#1a1008",
              transform: "rotate(-1deg)",
              display: "inline-block",
            }}
          >
            ✦ Handgemaakt keramiek ✦
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#1a1008",
              marginBottom: "1rem",
            }}
          >
            Producten
          </h1>
          <p
            style={{
              color: "#5e3e1a",
              maxWidth: "36rem",
              margin: "0 auto",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            Elk stuk is met de hand gemaakt en uniek. Hieronder vind je een
            overzicht van wat er momenteel in het atelier gemaakt wordt.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product.title}
              style={{
                backgroundColor: "#fdf8f0",
                border: "2.5px solid #1a1008",
                borderRadius: "4px 16px 4px 16px",
                overflow: "hidden",
                boxShadow: "4px 4px 0 #1a1008",
                transform: `rotate(${product.rotate})`,
                transition: "transform 0.2s",
              }}
            >
              {/* Image placeholder */}
              <div
                className="aspect-square flex flex-col items-center justify-center gap-2"
                style={{
                  backgroundColor: product.bg,
                  borderBottom: "2.5px solid #1a1008",
                }}
              >
                <span style={{ fontSize: "3.5rem", color: product.accent }}>
                  {product.icon}
                </span>
                <span
                  style={{
                    fontSize: "0.65rem",
                    color: "#6a5040",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Foto volgt
                </span>
              </div>

              {/* Text */}
              <div style={{ padding: "1.25rem" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#fdf8f0",
                    backgroundColor: product.accent,
                    border: "1.5px solid #1a1008",
                    borderRadius: "10px",
                    padding: "2px 8px",
                    marginBottom: "0.5rem",
                  }}
                >
                  {product.tag}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    color: "#1a1008",
                    marginBottom: "0.5rem",
                  }}
                >
                  {product.title}
                </h2>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#5e3e1a",
                    lineHeight: 1.65,
                  }}
                >
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#f07d2a",
          borderTop: "3px solid #1a1008",
          padding: "3.5rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div className="max-w-xl mx-auto">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "#fdf8f0",
              marginBottom: "0.75rem",
            }}
          >
            Op zoek naar iets speciaals?
          </h2>
          <p
            style={{
              color: "#fdf0a8",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              marginBottom: "1.5rem",
            }}
          >
            Ik maak ook op aanvraag. Neem gerust contact op als je een
            specifieke wens hebt.
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#fdf8f0",
              color: "#1a1008",
              padding: "12px 32px",
              border: "2.5px solid #1a1008",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              textDecoration: "none",
              boxShadow: "3px 3px 0 #1a1008",
            }}
          >
            Neem contact op →
          </a>
        </div>
      </section>
    </main>
  );
}
