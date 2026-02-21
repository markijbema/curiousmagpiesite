import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    title: "Dansende Vrouwenfiguur",
    description: "Een sierlijk vrouwtje dat in de wind zwiert, op een paal in de tuin.",
    placeholder: "bg-stone-200",
  },
  {
    title: "Tuinpaddestoelen",
    description: "Vrolijke keramieke paddestoelen voor tussen het groen.",
    placeholder: "bg-stone-300",
  },
  {
    title: "Groentestekers",
    description: "Handgemaakte stekers voor in de moestuin.",
    placeholder: "bg-stone-200",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-stone-100 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-stone-500 mb-3">
              Handgemaakt keramiek
            </p>
            <h1
              className="text-5xl md:text-6xl text-stone-800 leading-tight mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Curious
              <br />
              <span className="text-sage-600" style={{ color: "#5a7d50" }}>
                Magpie
              </span>
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-md">
              Keramiek voor buiten, geïnspireerd op de natuur. Elk stuk is met
              de hand gemaakt door Marjolein IJbema in haar atelier.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/producten"
                className="inline-block bg-stone-800 text-stone-50 px-6 py-3 text-sm tracking-wide hover:bg-stone-700 transition-colors"
              >
                Bekijk producten
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-stone-400 text-stone-700 px-6 py-3 text-sm tracking-wide hover:border-stone-600 hover:text-stone-900 transition-colors"
              >
                Neem contact op
              </Link>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative aspect-[4/5] bg-stone-200 rounded-sm overflow-hidden shadow-lg">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-2">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">Foto volgt</span>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(to right, #a3bc99, #ecb085, #a3bc99)" }}
        />
      </section>

      {/* About / Description */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative aspect-square bg-stone-100 rounded-sm overflow-hidden shadow-md order-2 md:order-1">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-400 gap-2">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm">Foto volgt</span>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest text-stone-400 mb-3">
              Over het atelier
            </p>
            <h2
              className="text-3xl md:text-4xl text-stone-800 mb-6"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Natuur als inspiratie
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                In mijn atelier maak ik keramiek dat zijn thuis vindt in de
                buitenlucht. Tuinen, terrassen en moestuinen worden mooier met
                een handgemaakt stukje aardewerk dat de seizoenen trotsert.
              </p>
              <p>
                De natuur is mijn grootste inspiratiebron: de ronde vormen van
                een slak, de grappige hoed van een paddestoel, de sierlijkheid
                van een vrouwenfiguur die danst in de wind. Elk stuk vertelt
                een eigen verhaal.
              </p>
              <p>
                Alles wordt met de hand gemaakt en met zorg afgewerkt, zodat
                het jarenlang buiten kan staan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-stone-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-stone-400 mb-2">
              Uit het atelier
            </p>
            <h2
              className="text-3xl md:text-4xl text-stone-800"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Een greep uit de collectie
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.title} className="group">
                <div
                  className={`aspect-square ${product.placeholder} rounded-sm overflow-hidden mb-4 shadow-sm group-hover:shadow-md transition-shadow`}
                >
                  <div className="w-full h-full flex flex-col items-center justify-center text-stone-400 gap-2">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-xs">Foto volgt</span>
                  </div>
                </div>
                <h3
                  className="text-lg text-stone-800 mb-1"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {product.title}
                </h3>
                <p className="text-sm text-stone-500">{product.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/producten"
              className="inline-block border border-stone-400 text-stone-700 px-8 py-3 text-sm tracking-wide hover:bg-stone-800 hover:text-stone-50 hover:border-stone-800 transition-colors"
            >
              Alle producten bekijken
            </Link>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square bg-stone-100 rounded-sm overflow-hidden shadow-sm"
            >
              <div className="w-full h-full flex flex-col items-center justify-center text-stone-300 gap-1">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-xs">Foto volgt</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "#e4ebe0" }}
      >
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="text-3xl text-stone-800 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Kom me vinden op de markt
          </h2>
          <p className="text-stone-600 mb-6">
            Regelmatig sta ik op markten in de regio. Bekijk de agenda voor
            actuele data.
          </p>
          <Link
            href="/agenda"
            className="inline-block bg-stone-800 text-stone-50 px-8 py-3 text-sm tracking-wide hover:bg-stone-700 transition-colors"
          >
            Bekijk de agenda
          </Link>
        </div>
      </section>
    </main>
  );
}
