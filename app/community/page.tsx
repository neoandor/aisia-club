import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — AISIA Club",
  description: "Join Malaysia's most active AI community. Connect on WhatsApp, Telegram, and LinkedIn.",
};

export default function Community() {
  return (
    <>
      {/* Header */}
      <section style={{ background: "#F5F0EB", padding: "56px 1.5rem 40px", textAlign: "center", borderBottom: "1px solid #E5E5E0" }}>
        <div style={{ maxWidth: 660, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1A1A1A", margin: "0 0 0.75rem" }}>
            The AISIA <span style={{ color: "#1A1A1A" }}>Community</span>
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
            500+ members strong. Practitioners, founders, students, and AI enthusiasts from across Malaysia and Southeast Asia.
          </p>
        </div>
      </section>

      {/* Activity strip */}
      <section style={{ background: "#F5F0EB", borderBottom: "1px solid #E5E5E0" }}>
        <div className="container" style={{ padding: "16px 1.5rem" }}>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", alignItems: "center" }}>
            {[
              { dot: "#22C55E", text: "🟢 Active community — 50+ messages today" },
              { dot: "#1A1A1A", text: "🎉 New members joined this week" },
            ].map((s) => (
              <span key={s.text} style={{ color: "#6B6B6B", fontSize: "0.88rem" }}>{s.text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "2rem" }}>
            Join Us Where You Are
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              { icon: "✈️", name: "Telegram", desc: "Daily AI news, discussions, and announcements. The fastest-moving channel.", href: "#", cta: "Join Telegram →" },
              { icon: "📱", name: "WhatsApp", desc: "A curated weekly digest and community Q&A for those who prefer WhatsApp.", href: "#", cta: "Join WhatsApp →" },
              { icon: "💼", name: "LinkedIn", desc: "Professional updates, job opportunities, and thought leadership from AISIA members.", href: "#", cta: "Follow on LinkedIn →" },
            ].map((ch) => (
              <div key={ch.name} className="card" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{ch.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>{ch.name}</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: 20 }}>{ch.desc}</p>
                <a
                  href={ch.href}
                  style={{
                    display: "inline-block",
                    padding: "0.55rem 1.25rem",
                    borderRadius: 8,
                    border: "1.5px solid #1A1A1A",
                    color: "#1A1A1A",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    fontFamily: "Inter, sans-serif",
                    transition: "all 0.15s",
                  }}
                >
                  {ch.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad" style={{ background: "#F5F0EB" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "2rem" }}>
            Why Join AISIA?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { icon: "🤝", title: "Network", desc: "Connect with AI practitioners, founders, students, and enthusiasts across Malaysia and SEA." },
              { icon: "📚", title: "Learn", desc: "Access curated resources, member-recommended tools, and hands-on workshops." },
              { icon: "🔨", title: "Build", desc: "Find co-founders, collaborators, and early users for your AI projects and startups." },
              { icon: "✨", title: "Get Featured", desc: "Share your work with thousands of readers. AISIA members get a platform to shine." },
            ].map((b) => (
              <div key={b.title} className="card" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{b.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>{b.title}</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section style={{ background: "#F5F0EB", padding: "80px 1.5rem" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🚧</div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.75rem" }}>
            Member Profiles &amp; Showcase — Coming Soon
          </h2>
          <p style={{ color: "#6B6B6B", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            We&apos;re building a dedicated space for members to share projects, connect with peers, and showcase their AI work. Be among the first to know when it launches.
          </p>
          <a href="/community#channels" className="btn-violet">
            Join the Community First →
          </a>
        </div>
      </section>
    </>
  );
}
