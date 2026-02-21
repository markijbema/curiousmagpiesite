"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/producten", label: "Producten" },
  { href: "/agenda", label: "Agenda" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "#fdf8f0",
        borderBottom: "3px solid #1a1008",
      }}
    >
      {/* Colourful stripe at top */}
      <div className="flex h-2">
        {["#e8392a", "#f5c842", "#5aaa5a", "#4a9fd4", "#f07d2a", "#b87fc4"].map(
          (c) => (
            <div key={c} className="flex-1" style={{ backgroundColor: c }} />
          )
        )}
      </div>

      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-tight">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.75rem",
              color: "#1a1008",
              letterSpacing: "-0.01em",
              lineHeight: 1,
            }}
          >
            Curious Magpie
          </span>
          <span
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#e8392a",
              fontWeight: 700,
            }}
          >
            keramiek atelier
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-2 items-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: "20px",
                border: "2px solid #1a1008",
                backgroundColor: pathname === href ? "#f5c842" : "transparent",
                color: "#1a1008",
                transition: "background-color 0.15s",
                textDecoration: "none",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          style={{ color: "#1a1008" }}
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu openen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-3"
          style={{ borderTop: "2px solid #1a1008", backgroundColor: "#fdf8f0" }}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "8px 16px",
                borderRadius: "20px",
                border: "2px solid #1a1008",
                backgroundColor: pathname === href ? "#f5c842" : "transparent",
                color: "#1a1008",
                display: "inline-block",
                width: "fit-content",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
