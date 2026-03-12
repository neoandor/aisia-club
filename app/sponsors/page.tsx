import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sponsors & Partners — AISIA Club",
  description: "Partner with AISIA Club to reach Malaysia's AI community. Sponsorship packages available.",
};

const packages = [
  {
    name: "Featured Article",
    icon: "📰",
    desc: "Co-produced sponsored content article published on aisiaclub.com and distributed to our newsletter and social channels. Full editorial transparency.",
    perks: ["1,000+ article views (est.)", "Newsletter feature", "Social amplification", "AISIA co-branded content"],
  },
  {
    name: "Newsletter Sponsor",
    icon: "📧",
    desc: "Prominent placement in AISIA's weekly digest, sent to our subscriber base of engaged AI professionals and enthusiasts.",
    perks: ["Top-of-email banner", "Link + 50-word description", "One dedicated send per month", "Analytics report"],
  },
  {
    name: "Event Partner",
    icon: "🎤",
    desc: "Sponsor an AISIA meetup, workshop, or fireside chat. Get logo placement, speaking opportunity, and direct access to attendees.",
    perks: ["Event naming rights (optional)", "Logo on all materials", "Speaking slot", "Post-event recap feature"],
  },
  {
    name: "Community Partner",
    icon: "🌐",
    desc: "Long-term brand presence across AISIA's community channels, website, and events. Ideal for organizations aligned with AI education and growth in Malaysia.",
    perks: ["Website footer logo", "Community channel mention", "Quarterly co-authored report", "Priority event partnership"],
  },
];

export default function Sponsors() {
  return (
    <>
      {/* Header */}
      <section style={{ background: "#F5F0EB", padding: "56px 1.5rem 40px", textAlign: "center", borderBottom: "1px solid #E5E5E0" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1A1A1A", margin: "0 0 0.75rem" }}>
            Partner with <span style={{ color: "#1A1A1A" }}>AISIA Club</span>
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: "1.05rem", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
            Reach Malaysia&apos;s most engaged AI audience. From SMEs to Fortune 500s, our community is full of decision-makers curious about AI.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[{ n: "500+", l: "Community Members" }, { n: "50+", l: "Published Articles" }, { n: "10+", l: "Events Planned" }].map((s) => (
              <div key={s.l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A" }}>{s.n}</div>
                <div style={{ color: "#6B6B6B", fontSize: "0.82rem" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "2rem" }}>
            Sponsorship Packages
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {packages.map((p) => (
              <div key={p.name} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{p.icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1A1A1A", margin: "0 0 10px" }}>{p.name}</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: 16 }}>{p.desc}</p>
                <ul style={{ margin: 0, padding: "0 0 0 1.1rem", color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 2 }}>
                  {p.perks.map((pk) => (
                    <li key={pk}>{pk}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#F5F0EB", padding: "80px 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 540, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.75rem" }}>
            Let&apos;s talk partnership
          </h2>
          <p style={{ color: "#6B6B6B", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Custom packages are available for brands who want deeper integration. Reach out and let&apos;s explore what works for you.
          </p>
          <a href="mailto:hello@aisiaclub.com" className="btn-violet" style={{ fontSize: "1rem", padding: "0.75rem 2rem" }}>
            hello@aisiaclub.com →
          </a>
        </div>
      </section>
    </>
  );
}
