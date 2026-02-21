import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · Curious Magpie",
  description:
    "Neem contact op met Curious Magpie keramiek atelier van Marjolein IJbema.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Page header */}
      <section className="bg-stone-100 py-16 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-stone-400 mb-3">
            Laten we kennismaken
          </p>
          <h1
            className="text-4xl md:text-5xl text-stone-800 mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Contact
          </h1>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            Heb je een vraag, een bijzondere wens of wil je gewoon even
            kennismaken? Ik hoor graag van je.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact info */}
          <div>
            <h2
              className="text-2xl text-stone-800 mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Contactgegevens
            </h2>

            <div className="space-y-6">
              {/* Name */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#e4ebe0" }}
                >
                  <svg
                    className="w-5 h-5 text-stone-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-0.5">
                    Naam
                  </p>
                  <p className="text-stone-700 font-medium">Marjolein IJbema</p>
                  <p className="text-sm text-stone-500">Curious Magpie Keramiek Atelier</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#e4ebe0" }}
                >
                  <svg
                    className="w-5 h-5 text-stone-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-0.5">
                    E-mail
                  </p>
                  <a
                    href="mailto:info@curiousmagpie.nl"
                    className="text-stone-700 hover:text-stone-900 hover:underline transition-colors"
                  >
                    info@curiousmagpie.nl
                  </a>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Ik reageer zo snel mogelijk
                  </p>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "#faeadb" }}
                >
                  <svg
                    className="w-5 h-5 text-stone-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-0.5">
                    Instagram
                  </p>
                  <a
                    href="https://www.instagram.com/curiousmagpie.studio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-700 hover:text-stone-900 hover:underline transition-colors"
                  >
                    @curiousmagpie.studio
                  </a>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Volg voor nieuws en nieuwe producten
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Message / extra info */}
          <div>
            <h2
              className="text-2xl text-stone-800 mb-8"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Stuur een bericht
            </h2>

            <div
              className="p-6 rounded-sm"
              style={{ backgroundColor: "#f5f5f4" }}
            >
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                Stuur me een e-mail voor vragen over producten, beschikbaarheid
                of een speciale bestelling. Ik reageer doorgaans binnen 2
                werkdagen.
              </p>
              <a
                href="mailto:info@curiousmagpie.nl"
                className="inline-block bg-stone-800 text-stone-50 px-6 py-3 text-sm tracking-wide hover:bg-stone-700 transition-colors"
              >
                Stuur een e-mail
              </a>
            </div>

            <div className="mt-8 p-6 rounded-sm" style={{ backgroundColor: "#faeadb" }}>
              <h3
                className="text-lg text-stone-800 mb-2"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Op de markt
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Liever persoonlijk kennismaken? Kom langs op een van de markten
                waar ik sta. Bekijk de{" "}
                <a
                  href="/agenda"
                  className="font-semibold text-stone-800 hover:underline"
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
