import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A2E", color: "#E5E7EB", padding: "56px 0 32px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 32, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 12 }}>
              <img src="/logo-final-full-white.svg" alt="aisia.club" style={{ height: 30 }} />
            </div>
            <p style={{ color: "#9CA3AF", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
              Southeast Asia&apos;s open community for artificial intelligence. Malaysia-first, region-proud.
            </p>
          </div>

          {/* Explore */}
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#9CA3AF", marginBottom: 12 }}>Explore</div>
            {[
              { href: "/news", label: "News" },
              { href: "/events", label: "Events" },
              { href: "/community", label: "Community" },
              { href: "/about", label: "About" },
            ].map((l) => (
              <div key={l.href} style={{ marginBottom: 8 }}>
                <Link href={l.href} style={{ color: "#D1D5DB", fontSize: "0.9rem" }}>{l.label}</Link>
              </div>
            ))}
          </div>

          {/* Connect */}
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", color: "#9CA3AF", marginBottom: 12 }}>Connect</div>
            <div style={{ color: "#D1D5DB", fontSize: "0.9rem", lineHeight: 2 }}>
              <div>📱 WhatsApp Community</div>
              <div>✈️ Telegram Channel</div>
              <div>💼 LinkedIn Group</div>
              <div>📧 hello@aisiaclub.com</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ margin: 0, color: "#6B7280", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} AISIA Club. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <Link href="/privacy" style={{ color: "#6B7280", fontSize: "0.85rem" }}>Privacy Policy</Link>
            <Link href="/sponsors" style={{ color: "#6B7280", fontSize: "0.85rem" }}>Sponsors</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
