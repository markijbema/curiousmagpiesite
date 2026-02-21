import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda · Curious Magpie",
  description:
    "Bekijk op welke markten en evenementen je Curious Magpie keramiek kunt vinden.",
};

const upcomingMarkets = [
  {
    date: "Zaterdag 15 maart 2025",
    event: "Voorjaarsmarkt Groningen",
    location: "Vismarkt, Groningen",
    time: "10:00 – 17:00",
    note: "",
    color: "#f9d4cc",
    accent: "#e8392a",
  },
  {
    date: "Zondag 6 april 2025",
    event: "Boerenmarkt Haren",
    location: "Dorpsplein, Haren",
    time: "09:00 – 14:00",
    note: "Alleen bij droog weer",
    color: "#fdf0a8",
    accent: "#c4881e",
  },
  {
    date: "Zaterdag 3 mei 2025",
    event: "Kunstmarkt Assen",
    location: "Brink, Assen",
    time: "11:00 – 17:00",
    note: "",
    color: "#c8e8c8",
    accent: "#5aaa5a",
  },
  {
    date: "Zondag 18 mei 2025",
    event: "Tuinmarkt Leek",
    location: "Tolberterstraat, Leek",
    time: "10:00 – 16:00",
    note: "",
    color: "#c8dff0",
    accent: "#4a9fd4",
  },
  {
    date: "Zaterdag 7 juni 2025",
    event: "Zomermarkt Groningen",
    location: "Vismarkt, Groningen",
    time: "10:00 – 17:00",
    note: "",
    color: "#e0d0f0",
    accent: "#b87fc4",
  },
];

const pastMarkets = [
  {
    date: "Zaterdag 14 december 2024",
    event: "Kerstmarkt Groningen",
    location: "Grote Markt, Groningen",
  },
  {
    date: "Zondag 10 november 2024",
    event: "Herfstmarkt Haren",
    location: "Dorpsplein, Haren",
  },
];

export default function AgendaPage() {
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
              backgroundColor: "#4a9fd4",
              border: "2.5px solid #1a1008",
              borderRadius: "20px",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#fdf8f0",
              transform: "rotate(1deg)",
              display: "inline-block",
            }}
          >
            ✦ Kom langs ✦
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#1a1008",
              marginBottom: "1rem",
            }}
          >
            Agenda
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
            Regelmatig sta ik op markten en evenementen in de regio. Hieronder
            vind je de komende data. Volg me ook op Instagram voor de laatste
            updates.
          </p>
        </div>
      </section>

      {/* Upcoming markets */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.75rem",
            color: "#1a1008",
            marginBottom: "2rem",
          }}
        >
          Komende markten
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {upcomingMarkets.map((market, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#fdf8f0",
                border: "2.5px solid #1a1008",
                borderRadius: "4px 14px 4px 14px",
                padding: "1.25rem 1.5rem",
                boxShadow: "3px 3px 0 #1a1008",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {/* Coloured date badge */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: market.color,
                      border: `2px solid ${market.accent}`,
                      borderRadius: "10px",
                      padding: "2px 10px",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#1a1008",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {market.date}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.3rem",
                      color: "#1a1008",
                      marginBottom: "0.2rem",
                    }}
                  >
                    {market.event}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#5e3e1a",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    📍 {market.location}
                  </p>
                  {market.note && (
                    <p style={{ fontSize: "0.75rem", color: "#a06e28", marginTop: "0.25rem", fontStyle: "italic" }}>
                      * {market.note}
                    </p>
                  )}
                </div>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: market.accent,
                    color: "#fdf8f0",
                    border: "2px solid #1a1008",
                    borderRadius: "20px",
                    padding: "4px 14px",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {market.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram note */}
        <div
          style={{
            marginTop: "2.5rem",
            backgroundColor: "#fdf0a8",
            border: "2.5px solid #1a1008",
            borderRadius: "4px 14px 4px 14px",
            padding: "1.25rem 1.5rem",
            textAlign: "center",
            boxShadow: "3px 3px 0 #1a1008",
          }}
        >
          <p style={{ fontSize: "0.9rem", color: "#3a2818", lineHeight: 1.7 }}>
            Wil je altijd op de hoogte zijn van nieuwe markten en producten?
            Volg me op Instagram:{" "}
            <a
              href="https://www.instagram.com/curiousmagpie.studio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: 700, color: "#1a1008" }}
            >
              @curiousmagpie.studio
            </a>
          </p>
        </div>
      </section>

      {/* Past markets */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.4rem",
            color: "#a06e28",
            marginBottom: "1.25rem",
          }}
        >
          Eerder aanwezig
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {pastMarkets.map((market, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "0.25rem",
                padding: "0.75rem 0",
                borderBottom: "1.5px dashed #d4c8b0",
                color: "#a06e28",
                fontSize: "0.85rem",
              }}
            >
              <span style={{ fontWeight: 600 }}>{market.event}</span>
              <span style={{ color: "#c8b898" }}>{market.date} · {market.location}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
