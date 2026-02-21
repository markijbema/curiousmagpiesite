import Link from "next/link";

const featuredProducts = [
  {
    title: "Dansende Vrouwenfiguur",
    description: "Zwiert vrolijk in de wind op een paal in de tuin.",
    color: "#f9d4cc",
    accent: "#e8392a",
    icon: "✿",
  },
  {
    title: "Tuinpaddestoelen",
    description: "Vrolijke paddestoelen voor tussen het groen.",
    color: "#c8e8c8",
    accent: "#5aaa5a",
    icon: "❧",
  },
  {
    title: "Groentestekers",
    description: "Handgemaakte stekers voor in de moestuin.",
    color: "#fdf0a8",
    accent: "#c4881e",
    icon: "✦",
  },
];

function PlaceholderBox({
  bg,
  accent,
  icon,
  className = "",
}: {
  bg: string;
  accent: string;
  icon: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      style={{
        backgroundColor: bg,
        border: `3px solid #1a1008`,
        borderRadius: "4px 12px 4px 12px",
      }}
    >
      <span style={{ fontSize: "2.5rem", color: accent }}>{icon}</span>
      <span style={{ fontSize: "0.75rem", color: "#6a5040", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        Foto volgt
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ backgroundColor: "#fdf8f0" }}>

      {/* ── HERO ── */}
      <section
        className="dot-bg"
        style={{ borderBottom: "3px solid #1a1008" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div
              className="inline-block mb-6 px-4 py-1.5"
              style={{
                backgroundColor: "#f5c842",
                border: "2.5px solid #1a1008",
                borderRadius: "20px",
                fontSize: "0.7rem",
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
                fontSize: "clamp(3rem, 8vw, 5rem)",
                lineHeight: 1.05,
                color: "#1a1008",
                marginBottom: "1.5rem",
              }}
            >
              Curious
              <br />
              <span style={{ color: "#e8392a" }}>Magpie</span>
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "#3a2818",
                maxWidth: "28rem",
                marginBottom: "2rem",
              }}
            >
              Keramiek voor buiten, geïnspireerd op de natuur. Elk stuk is met
              de hand gemaakt door Marjolein IJbema in haar atelier.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/producten"
                style={{
                  display: "inline-block",
                  backgroundColor: "#e8392a",
                  color: "#fdf8f0",
                  padding: "12px 28px",
                  border: "2.5px solid #1a1008",
                  borderRadius: "30px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  boxShadow: "3px 3px 0 #1a1008",
                }}
              >
                Bekijk producten →
              </Link>
              <Link
                href="/agenda"
                style={{
                  display: "inline-block",
                  backgroundColor: "#f5c842",
                  color: "#1a1008",
                  padding: "12px 28px",
                  border: "2.5px solid #1a1008",
                  borderRadius: "30px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  boxShadow: "3px 3px 0 #1a1008",
                }}
              >
                Agenda ✦
              </Link>
            </div>
          </div>

          {/* Hero image */}
          <PlaceholderBox
            bg="#c8dff0"
            accent="#4a9fd4"
            icon="✿"
            className="aspect-[4/5] shadow-lg"
          />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <PlaceholderBox
            bg="#c8e8c8"
            accent="#5aaa5a"
            icon="❧"
            className="aspect-square order-2 md:order-1"
          />

          <div className="order-1 md:order-2">
            {/* Section label */}
            <div
              className="inline-block mb-4 px-3 py-1"
              style={{
                backgroundColor: "#c8e8c8",
                border: "2px solid #1a1008",
                borderRadius: "4px",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#1a1008",
              }}
            >
              Over het atelier
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                color: "#1a1008",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Natuur als
              <br />
              <span style={{ color: "#5aaa5a" }}>inspiratie</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#3a2818", lineHeight: 1.75, fontSize: "0.95rem" }}>
              <p>
                In mijn atelier maak ik keramiek dat zijn thuis vindt in de
                buitenlucht. Tuinen, terrassen en moestuinen worden mooier met
                een handgemaakt stukje aardewerk.
              </p>
              <p>
                De natuur is mijn grootste inspiratiebron: de ronde vormen van
                een slak, de grappige hoed van een paddestoel, de sierlijkheid
                van een vrouwenfiguur die danst in de wind.
              </p>
              <p>
                Alles wordt met de hand gemaakt en met zorg afgewerkt, zodat
                het jarenlang buiten kan staan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section
        className="stripe-bg py-20"
        style={{ borderTop: "3px solid #1a1008", borderBottom: "3px solid #1a1008" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading with ornament */}
          <div className="text-center mb-14">
            <div
              className="inline-block mb-4 px-4 py-1.5"
              style={{
                backgroundColor: "#b87fc4",
                border: "2.5px solid #1a1008",
                borderRadius: "20px",
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#fdf8f0",
              }}
            >
              Uit het atelier
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                color: "#1a1008",
              }}
            >
              Een greep uit de collectie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.title}
                style={{
                  backgroundColor: "#fdf8f0",
                  border: "2.5px solid #1a1008",
                  borderRadius: "4px 16px 4px 16px",
                  overflow: "hidden",
                  boxShadow: "4px 4px 0 #1a1008",
                }}
              >
                {/* Image placeholder */}
                <div
                  className="aspect-square flex flex-col items-center justify-center gap-2"
                  style={{ backgroundColor: product.color, borderBottom: "2.5px solid #1a1008" }}
                >
                  <span style={{ fontSize: "3rem", color: product.accent }}>{product.icon}</span>
                  <span style={{ fontSize: "0.7rem", color: "#6a5040", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Foto volgt
                  </span>
                </div>
                {/* Text */}
                <div style={{ padding: "1.25rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.2rem",
                      color: "#1a1008",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {product.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#5e3e1a", lineHeight: 1.6 }}>
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/producten"
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
              Alle producten bekijken →
            </Link>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { bg: "#f9d4cc", accent: "#e8392a", icon: "✿" },
            { bg: "#fdf0a8", accent: "#c4881e", icon: "✦" },
            { bg: "#c8e8c8", accent: "#5aaa5a", icon: "❧" },
            { bg: "#e0d0f0", accent: "#b87fc4", icon: "✾" },
          ].map((item, i) => (
            <div
              key={i}
              className="aspect-square flex flex-col items-center justify-center gap-2"
              style={{
                backgroundColor: item.bg,
                border: "2.5px solid #1a1008",
                borderRadius: i % 2 === 0 ? "4px 14px 4px 14px" : "14px 4px 14px 4px",
              }}
            >
              <span style={{ fontSize: "2rem", color: item.accent }}>{item.icon}</span>
              <span style={{ fontSize: "0.65rem", color: "#6a5040", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Foto volgt
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{
          backgroundColor: "#4a9fd4",
          borderTop: "3px solid #1a1008",
          borderBottom: "3px solid #1a1008",
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <div
            className="inline-block mb-4"
            style={{
              fontSize: "2.5rem",
              transform: "rotate(-5deg)",
              display: "inline-block",
            }}
          >
            📅
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2.25rem",
              color: "#fdf8f0",
              marginBottom: "0.75rem",
            }}
          >
            Kom me vinden op de markt!
          </h2>
          <p style={{ color: "#c8dff0", marginBottom: "1.5rem", fontSize: "1rem" }}>
            Regelmatig sta ik op markten in de regio. Bekijk de agenda voor actuele data.
          </p>
          <Link
            href="/agenda"
            style={{
              display: "inline-block",
              backgroundColor: "#f5c842",
              color: "#1a1008",
              padding: "12px 32px",
              border: "2.5px solid #1a1008",
              borderRadius: "30px",
              fontWeight: 700,
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              textDecoration: "none",
              boxShadow: "3px 3px 0 #1a1008",
            }}
          >
            Bekijk de agenda ✦
          </Link>
        </div>
      </section>
    </main>
  );
}
