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
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid #E5E7EB",
        position: "sticky",
        top: 0,
        zIndex: 50,
        transition: "box-shadow 0.2s",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
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
          height: scrolled ? 56 : 64,
          transition: "height 0.2s",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          <img src="/aisia-logo.svg" alt="aisia.club" style={{ height: 72 }} />
        </Link>

        {/* Nav links — desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          className="desktop-nav">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                padding: "0.4rem 0.75rem",
                borderRadius: 6,
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: pathname === l.href ? "#1A1A1A" : "#2D2D3A",
                borderBottom: pathname === l.href ? "2px solid #1A1A1A" : "2px solid transparent",
                transition: "color 0.15s",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/community" className="btn-violet" style={{ marginLeft: "0.75rem", whiteSpace: "nowrap" }}>
            Join AISIA →
          </Link>
        </div>

        {/* Mobile: always show Join button + hamburger */}
        <div className="mobile-nav" style={{ display: "none", alignItems: "center", gap: "0.75rem" }}>
          <Link href="/community" className="btn-violet" style={{ fontSize: "0.82rem", padding: "0.45rem 1rem" }}>
            Join AISIA →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
