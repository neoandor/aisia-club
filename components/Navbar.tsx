"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/community", label: "Community" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          background: "#F5F0EB",
          position: "sticky",
          top: 0,
          zIndex: 50,
          transition: "box-shadow 0.2s",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 72,
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", marginRight: "auto" }}>
            <img src="/aisia-logo.png" alt="aisia.club" className="nav-logo" />
          </Link>

          {/* Nav links — desktop */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.1rem" }} className="desktop-nav">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  padding: "0.4rem 0.9rem",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: pathname === l.href ? "#1A1A1A" : "#6B6B6B",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#1A1A1A")}
                onMouseOut={(e) => {
                  if (pathname !== l.href) e.currentTarget.style.color = "#6B6B6B";
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/community"
              style={{
                marginLeft: "1rem",
                display: "inline-block",
                background: "#1A1A1A",
                color: "#fff",
                border: "none",
                borderRadius: 999,
                padding: "0.5rem 1.25rem",
                fontSize: "0.88rem",
                fontWeight: 600,
                fontFamily: "'Inter', system-ui, sans-serif",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "opacity 0.15s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.75")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Join AISIA
            </Link>
          </div>

          {/* Mobile — hamburger + Join */}
          <div className="mobile-nav" style={{ display: "none", alignItems: "center", gap: 12 }}>
            <Link
              href="/community"
              style={{
                display: "inline-block",
                background: "#1A1A1A",
                color: "#fff",
                borderRadius: 999,
                padding: "0.4rem 0.9rem",
                fontSize: "0.78rem",
                fontWeight: 600,
                fontFamily: "'Inter', system-ui, sans-serif",
                textDecoration: "none",
              }}
            >
              Join AISIA
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: 4,
                display: "flex",
                flexDirection: "column",
                gap: 5,
                width: 28,
              }}
            >
              <span style={{
                display: "block", width: 24, height: 2, background: "#1A1A1A", borderRadius: 2,
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }} />
              <span style={{
                display: "block", width: 24, height: 2, background: "#1A1A1A", borderRadius: 2,
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: 24, height: 2, background: "#1A1A1A", borderRadius: 2,
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile slide-in menu overlay */}
      <div
        className="mobile-overlay"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.3)",
          zIndex: 98,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.3s",
        }}
        onClick={() => setMenuOpen(false)}
      />
      <div
        className="mobile-menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "75vw",
          maxWidth: 320,
          background: "#F5F0EB",
          zIndex: 99,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          display: "flex",
          flexDirection: "column",
          padding: "80px 2rem 2rem",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: "absolute",
            top: 24,
            right: 24,
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
            color: "#1A1A1A",
            lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Nav links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: "1.3rem",
                fontWeight: pathname === l.href ? 700 : 400,
                color: pathname === l.href ? "#1A1A1A" : "#6B6B6B",
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid #E5E5E0",
                transition: "color 0.15s",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 32 }}>
          <Link
            href="/community"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              background: "#1A1A1A",
              color: "#fff",
              borderRadius: 999,
              padding: "14px 0",
              fontSize: "1rem",
              fontWeight: 600,
              fontFamily: "'Inter', system-ui, sans-serif",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Join the Community →
          </Link>
        </div>
      </div>

      <style>{`
        .nav-logo { height: 42px; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          .nav-logo { height: 36px; }
        }
        @media (min-width: 769px) {
          .mobile-overlay { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}
