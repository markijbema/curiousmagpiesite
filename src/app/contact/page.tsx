import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Curious Magpie",
  description:
    "Neem contact op met Curious Magpie keramiek atelier van Marjolein IJbema.",
};

export default function ContactPage() {
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
              backgroundColor: "#b87fc4",
              border: "2.5px solid #1a1008",
              borderRadius: "20px",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#fdf8f0",
              transform: "rotate(-1.5deg)",
              display: "inline-block",
            }}
          >
            ✦ Laten we kennismaken ✦
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#1a1008",
              marginBottom: "1rem",
            }}
          >
            Contact
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
            Heb je een vraag, een bijzondere wens of wil je gewoon even
            kennismaken? Ik hoor graag van je!
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact info cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                color: "#1a1008",
                marginBottom: "0.5rem",
              }}
            >
              Contactgegevens
            </h2>

            {/* Name card */}
            <div
              style={{
                backgroundColor: "#f9d4cc",
                border: "2.5px solid #1a1008",
                borderRadius: "4px 14px 4px 14px",
                padding: "1.25rem",
                boxShadow: "3px 3px 0 #1a1008",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>👩‍🎨</span>
              <div>
                <p
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#e8392a",
                    marginBottom: "0.2rem",
                  }}
                >
                  Naam
                </p>
                <p style={{ fontWeight: 700, color: "#1a1008", fontSize: "1rem" }}>
                  Marjolein IJbema
                </p>
                <p style={{ fontSize: "0.85rem", color: "#5e3e1a" }}>
                  Curious Magpie Keramiek Atelier
                </p>
              </div>
            </div>

            {/* Email card */}
            <div
              style={{
                backgroundColor: "#fdf0a8",
                border: "2.5px solid #1a1008",
                borderRadius: "14px 4px 14px 4px",
                padding: "1.25rem",
                boxShadow: "3px 3px 0 #1a1008",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>✉️</span>
              <div>
                <p
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#c4881e",
                    marginBottom: "0.2rem",
                  }}
                >
                  E-mail
                </p>
                <a
                  href="mailto:info@curiousmagpie.nl"
                  style={{
                    fontWeight: 700,
                    color: "#1a1008",
                    fontSize: "1rem",
                    textDecoration: "none",
                  }}
                >
                  info@curiousmagpie.nl
                </a>
                <p style={{ fontSize: "0.8rem", color: "#a06e28", marginTop: "0.2rem" }}>
                  Ik reageer zo snel mogelijk
                </p>
              </div>
            </div>

            {/* Instagram card */}
            <div
              style={{
                backgroundColor: "#e0d0f0",
                border: "2.5px solid #1a1008",
                borderRadius: "4px 14px 4px 14px",
                padding: "1.25rem",
                boxShadow: "3px 3px 0 #1a1008",
                display: "flex",
                alignItems: "flex-start",
                gap: "1rem",
              }}
            >
              <span style={{ fontSize: "1.75rem", flexShrink: 0 }}>📸</span>
              <div>
                <p
                  style={{
                    fontSize: "0.6rem",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#b87fc4",
                    marginBottom: "0.2rem",
                  }}
                >
                  Instagram
                </p>
                <a
                  href="https://www.instagram.com/curiousmagpie.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: 700,
                    color: "#1a1008",
                    fontSize: "1rem",
                    textDecoration: "none",
                  }}
                >
                  @curiousmagpie.studio
                </a>
                <p style={{ fontSize: "0.8rem", color: "#7a5090", marginTop: "0.2rem" }}>
                  Volg voor nieuws en nieuwe producten
                </p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                color: "#1a1008",
                marginBottom: "0.5rem",
              }}
            >
              Stuur een bericht
            </h2>

            <div
              style={{
                backgroundColor: "#c8dff0",
                border: "2.5px solid #1a1008",
                borderRadius: "4px 14px 4px 14px",
                padding: "1.5rem",
                boxShadow: "3px 3px 0 #1a1008",
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#1a1008",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                Stuur me een e-mail voor vragen over producten, beschikbaarheid
                of een speciale bestelling. Ik reageer doorgaans binnen 2
                werkdagen.
              </p>
              <a
                href="mailto:info@curiousmagpie.nl"
                style={{
                  display: "inline-block",
                  backgroundColor: "#4a9fd4",
                  color: "#fdf8f0",
                  padding: "10px 24px",
                  border: "2.5px solid #1a1008",
                  borderRadius: "20px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  boxShadow: "3px 3px 0 #1a1008",
                }}
              >
                ✉️ Stuur een e-mail
              </a>
            </div>

            <div
              style={{
                backgroundColor: "#c8e8c8",
                border: "2.5px solid #1a1008",
                borderRadius: "14px 4px 14px 4px",
                padding: "1.5rem",
                boxShadow: "3px 3px 0 #1a1008",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "#1a1008",
                  marginBottom: "0.5rem",
                }}
              >
                📅 Op de markt
              </h3>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#1a1008",
                  lineHeight: 1.7,
                }}
              >
                Liever persoonlijk kennismaken? Kom langs op een van de markten
                waar ik sta. Bekijk de{" "}
                <a
                  href="/agenda"
                  style={{ fontWeight: 700, color: "#1a1008" }}
                >
                  agenda
                </a>{" "}
                voor actuele data.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
