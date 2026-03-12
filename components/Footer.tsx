import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#F5F0EB", borderTop: "1px solid #E5E5E0", padding: "56px 0 32px" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img src="/aisia-logo.png" alt="aisia.club" style={{ height: 72 }} />
            </div>
            <p style={{ color: "#6B6B6B", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
              Southeast Asia&apos;s open community for artificial intelligence. Malaysia-first, region-proud.
            </p>
          </div>

          {/* Explore */}
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.07em", color: "#1A1A1A", marginBottom: 16, fontFamily: "'Inter', system-ui, sans-serif" }}>Explore</div>
            {[
              { href: "/news", label: "News" },
              { href: "/events", label: "Events" },
              { href: "/community", label: "Community" },
              { href: "/about", label: "About" },
            ].map((l) => (
              <div key={l.href} style={{ marginBottom: 10 }}>
                <Link href={l.href} style={{ color: "#6B6B6B", fontSize: "0.9rem", fontFamily: "'Inter', system-ui, sans-serif" }}>{l.label}</Link>
              </div>
            ))}
          </div>

          {/* Connect */}
          <div>
            <div style={{ fontWeight: 600, fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.07em", color: "#1A1A1A", marginBottom: 16, fontFamily: "'Inter', system-ui, sans-serif" }}>Connect</div>
            <div style={{ color: "#6B6B6B", fontSize: "0.9rem", lineHeight: 2, fontFamily: "'Inter', system-ui, sans-serif" }}>
              <div>WhatsApp Community</div>
              <div>Telegram Channel</div>
              <div>LinkedIn Group</div>
              <div>hello@aisiaclub.com</div>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid #E5E5E0", paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ margin: 0, color: "#6B6B6B", fontSize: "0.85rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
            © {new Date().getFullYear()} AISIA Club. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <Link href="/privacy" style={{ color: "#6B6B6B", fontSize: "0.85rem", fontFamily: "'Inter', system-ui, sans-serif" }}>Privacy Policy</Link>
            <Link href="/sponsors" style={{ color: "#6B6B6B", fontSize: "0.85rem", fontFamily: "'Inter', system-ui, sans-serif" }}>Sponsors</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
