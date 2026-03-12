"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/news", label: "News" },
  { href: "/community", label: "Community" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
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
          height: 80,
        }}
      >
        {/* Logo — always left-aligned */}
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
                opacity: pathname === l.href ? 1 : 1,
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

        {/* Mobile */}
        <div className="mobile-nav" style={{ display: "none", alignItems: "center" }}>
          <Link
            href="/community"
            style={{
              display: "inline-block",
              background: "#1A1A1A",
              color: "#fff",
              borderRadius: 999,
              padding: "0.45rem 1rem",
              fontSize: "0.82rem",
              fontWeight: 600,
              fontFamily: "'Inter', system-ui, sans-serif",
              textDecoration: "none",
            }}
          >
            Join AISIA
          </Link>
        </div>
      </div>

      <style>{`
        .nav-logo { height: 28px; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          .nav-logo { height: 24px; }
        }
      `}</style>
    </nav>
  );
}
