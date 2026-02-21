import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda · Curious Magpie",
  description:
    "Bekijk op welke markten en evenementen je Curious Magpie keramiek kunt vinden.",
};

// Update these dates and locations as needed
const upcomingMarkets = [
  {
    date: "Zaterdag 15 maart 2025",
    event: "Voorjaarsmarkt Groningen",
    location: "Vismarkt, Groningen",
    time: "10:00 – 17:00",
    note: "",
  },
  {
    date: "Zondag 6 april 2025",
    event: "Boerenmarkt Haren",
    location: "Dorpsplein, Haren",
    time: "09:00 – 14:00",
    note: "Alleen bij droog weer",
  },
  {
    date: "Zaterdag 3 mei 2025",
    event: "Kunstmarkt Assen",
    location: "Brink, Assen",
    time: "11:00 – 17:00",
    note: "",
  },
  {
    date: "Zondag 18 mei 2025",
    event: "Tuinmarkt Leek",
    location: "Tolberterstraat, Leek",
    time: "10:00 – 16:00",
    note: "",
  },
  {
    date: "Zaterdag 7 juni 2025",
    event: "Zomermarkt Groningen",
    location: "Vismarkt, Groningen",
    time: "10:00 – 17:00",
    note: "",
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
    <main>
      {/* Page header */}
      <section className="bg-stone-100 py-16 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-stone-400 mb-3">
            Kom langs
          </p>
          <h1
            className="text-4xl md:text-5xl text-stone-800 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Agenda
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            Regelmatig sta ik op markten en evenementen in de regio. Hieronder
            vind je de komende data. Volg me ook op Instagram voor de laatste
            updates.
          </p>
        </div>
      </section>

      {/* Upcoming markets */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2
          className="text-2xl text-stone-800 mb-8"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Komende markten
        </h2>

        <div className="space-y-4">
          {upcomingMarkets.map((market, i) => (
            <div
              key={i}
              className="border border-stone-200 bg-white rounded-sm p-6 hover:border-stone-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-stone-500 uppercase tracking-wide mb-1">
                    {market.date}
                  </p>
                  <h3
                    className="text-xl text-stone-800 mb-1"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    {market.event}
                  </h3>
                  <p className="text-sm text-stone-500 flex items-center gap-1">
                    <svg
                      className="w-4 h-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {market.location}
                  </p>
                  {market.note && (
                    <p className="text-xs text-stone-400 mt-1 italic">
                      * {market.note}
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <span
                    className="inline-block text-sm px-3 py-1 rounded-full text-stone-600"
                    style={{ backgroundColor: "#e4ebe0" }}
                  >
                    {market.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram follow note */}
        <div
          className="mt-10 p-6 rounded-sm text-center"
          style={{ backgroundColor: "#faeadb" }}
        >
          <p className="text-stone-700 text-sm leading-relaxed">
            Wil je altijd op de hoogte zijn van nieuwe markten en producten?
            Volg me op Instagram:{" "}
            <a
              href="https://www.instagram.com/curiousmagpie.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-stone-800 hover:underline"
            >
              @curiousmagpie.studio
            </a>
          </p>
        </div>
      </section>

      {/* Past markets */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h2
          className="text-xl text-stone-500 mb-6"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Eerder aanwezig
        </h2>
        <div className="space-y-3">
          {pastMarkets.map((market, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-stone-100 text-stone-400"
            >
              <span className="text-sm">{market.event}</span>
              <span className="text-xs">{market.date} · {market.location}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
