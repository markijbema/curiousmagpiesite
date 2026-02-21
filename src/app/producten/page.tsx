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
    bg: "bg-stone-200",
  },
  {
    title: "Slakjes",
    description:
      "Lieve kleine slakjes van keramiek. Prachtig onder een glazen stolp of verstopt tussen de planten. Elk slakje is uniek en met de hand gevormd.",
    tag: "Decoratie",
    bg: "bg-stone-300",
  },
  {
    title: "Kaartjeshouder met Worm",
    description:
      "Een vrolijke houder voor een kaartje of naamplaatje, met een worm als handvat. Ideaal als cadeau of als persoonlijk accent in de tuin.",
    tag: "Accessoire",
    bg: "bg-stone-200",
  },
  {
    title: "Tuinpaddestoelen",
    description:
      "Keramieke paddestoelen in verschillende maten en kleuren. Ze staan prachtig tussen de vaste planten of in een pot op het terras.",
    tag: "Tuindecoratie",
    bg: "bg-stone-300",
  },
  {
    title: "Groentestekers",
    description:
      "Handgemaakte stekers voor in de moestuin om gezaaide groenten te markeren. Met een herkenbaar icoontje van de groente erop. Praktisch én decoratief.",
    tag: "Moestuin",
    bg: "bg-stone-200",
  },
  {
    title: "Keramiek Bloemetjeskaartjes",
    description:
      "Papieren kaartjes met een handgemaakt keramiek bloemetje erop. Een bijzonder en persoonlijk cadeau of wenskaartje dat je kunt bewaren.",
    tag: "Cadeau",
    bg: "bg-stone-300",
  },
];

function PlaceholderImage({ bg }: { bg: string }) {
  return (
    <div
      className={`aspect-square ${bg} rounded-sm overflow-hidden flex flex-col items-center justify-center text-stone-400 gap-2`}
    >
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
  );
}

export default function ProductenPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-stone-100 py-16 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-stone-400 mb-3">
            Handgemaakt keramiek
          </p>
          <h1
            className="text-4xl md:text-5xl text-stone-800 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Producten
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            Elk stuk is met de hand gemaakt en uniek. Hieronder vind je een
            overzicht van wat er momenteel in het atelier gemaakt wordt.
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <article key={product.title} className="group">
              <PlaceholderImage bg={product.bg} />
              <div className="mt-4">
                <span className="inline-block text-xs uppercase tracking-widest text-stone-400 mb-1">
                  {product.tag}
                </span>
                <h2
                  className="text-xl text-stone-800 mb-2"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {product.title}
                </h2>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Note about custom orders */}
      <section
        className="py-14 text-center"
        style={{ backgroundColor: "#e4ebe0" }}
      >
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="text-2xl text-stone-800 mb-3"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Op zoek naar iets speciaals?
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed mb-6">
            Ik maak ook op aanvraag. Neem gerust contact op als je een
            specifieke wens hebt.
          </p>
          <a
            href="/contact"
            className="inline-block bg-stone-800 text-stone-50 px-8 py-3 text-sm tracking-wide hover:bg-stone-700 transition-colors"
          >
            Neem contact op
          </a>
        </div>
      </section>
    </main>
  );
}
