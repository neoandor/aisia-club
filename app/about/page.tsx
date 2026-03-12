import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AISIA Club",
  description: "Learn about AISIA Club — Southeast Asia's open AI community. Founded 2026, Kuala Lumpur.",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#FAFAF7", padding: "56px 1.5rem 40px", textAlign: "center", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#2D2D3A", margin: "0 0 1rem" }}>
            About <span style={{ color: "#D4845A" }}>AISIA Club</span>
          </h1>
          <p style={{ color: "#6B7280", fontSize: "1.1rem", lineHeight: 1.7, margin: 0 }}>
            Southeast Asia&apos;s open community for anyone curious about artificial intelligence.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="container-article">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2D2D3A", marginBottom: "1.25rem" }}>
            Who We Are
          </h2>
          <p style={{ color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.8, borderLeft: "3px solid #D4845A", paddingLeft: "1.25rem", margin: "0 0 2rem" }}>
            AISIA Club is Southeast Asia&apos;s open community for anyone curious about artificial intelligence.
            From first-time explorers to seasoned practitioners, we publish original reporting, curate the most
            relevant AI developments through a regional lens, and connect builders across Malaysia and beyond.
          </p>
          <div style={{ background: "#F5F0EC", borderRadius: 12, padding: "1.25rem 1.5rem", border: "1px solid #E5E7EB" }}>
            <p style={{ color: "#6B7280", margin: 0, fontSize: "0.95rem", lineHeight: 1.8 }}>
              📍 Founded: <span style={{ fontWeight: 600, color: "#2D2D3A" }}>2026</span> &nbsp;|&nbsp;
              📌 HQ: <span style={{ fontWeight: 600, color: "#2D2D3A" }}>Kuala Lumpur, Malaysia</span> &nbsp;|&nbsp;
              🌏 Focus: <span style={{ fontWeight: 600, color: "#2D2D3A" }}>Malaysia &amp; SEA</span>
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#FAFAF7", padding: "48px 1.5rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24, textAlign: "center" }}>
            {[
              { num: "500+", label: "Members" },
              { num: "50+", label: "Articles" },
              { num: "10+", label: "Events" },
              { num: "6+", label: "Countries" },
            ].map((s) => (
              <div key={s.label} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#D4845A" }}>{s.num}</div>
                <div style={{ color: "#6B7280", fontSize: "0.9rem", marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why AISIA */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2D2D3A", marginBottom: "2rem", textAlign: "center" }}>
            Why AISIA Exists
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { num: "01", text: "Global AI news ignores Southeast Asia. Major outlets cover Silicon Valley and Beijing — but not KL, Jakarta, or Bangkok." },
              { num: "02", text: "Local tech media lacks AI depth. Regional outlets cover tech broadly but rarely go deep on AI trends, tools, or implications." },
              { num: "03", text: "No dedicated community hub. Practitioners, students, and founders in SEA have no single place to gather, learn, and collaborate." },
              { num: "04", text: "We fill that gap. AISIA brings original reporting + a real community — grounded in Malaysian and SEA context." },
            ].map((r) => (
              <div key={r.num} className="card" style={{ padding: 24 }}>
                <div style={{ color: "#D4845A", fontSize: "1.75rem", fontWeight: 800, marginBottom: "0.75rem", opacity: 0.6 }}>{r.num}</div>
                <p style={{ color: "#6B7280", lineHeight: 1.65, margin: 0 }}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-pad" style={{ background: "#FAFAF7" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2D2D3A", marginBottom: "2rem", textAlign: "center" }}>
            What We Do
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 24 }}>
            {[
              { icon: "📰", title: "News", desc: "Original AI reporting with a regional perspective. No fluff, no hype — just what matters for Malaysia and SEA." },
              { icon: "🎓", title: "Learning", desc: "Accessible explainers, tutorials, and tool reviews designed for everyone from students to C-suite." },
              { icon: "🎤", title: "Events", desc: "Meetups, workshops, and fireside chats connecting the AI community across Malaysia." },
              { icon: "💬", title: "Community", desc: "Telegram, WhatsApp, and LinkedIn channels where members share, debate, and build together." },
            ].map((w) => (
              <div key={w.title} className="card" style={{ padding: 24, textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{w.icon}</div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#D4845A", margin: "0 0 0.5rem" }}>{w.title}</h3>
                <p style={{ color: "#6B7280", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
