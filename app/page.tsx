"use client";
import Link from "next/link";

const heroArticle = {
  emoji: "🏛️",
  category: "Malaysia AI",
  title: "Malaysia's National AI Roadmap 2030 — What It Means for You",
  excerpt:
    "The government has unveiled an ambitious AI roadmap. Here's a plain-English breakdown of what's changing and how it affects businesses and professionals.",
  date: "Jan 2026",
  author: "AISIA Editorial",
  readTime: "6 min read",
};

const articles = [
  {
    emoji: "🛠️",
    category: "Tools & Reviews",
    title: "Top 5 AI Tools Malaysian SMEs Are Actually Using",
    excerpt:
      "From automated customer service to financial forecasting — we surveyed 50 local SME owners to find out which AI tools are actually moving the needle.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "4 min read",
  },
  {
    emoji: "🌏",
    category: "SEA Spotlight",
    title: "SEA's AI Startup Scene: The Founders Leading the Charge",
    excerpt:
      "Meet the Southeast Asian founders building the next generation of AI-native companies — from Singapore to Jakarta to Kuala Lumpur.",
    date: "Jan 2026",
    author: "AISIA Editorial",
    readTime: "5 min read",
  },
];

const valueProps = [
  {
    emoji: "📚",
    title: "Learn",
    desc: "Original AI reporting written for Malaysia and Southeast Asia. No jargon, no hype — just clear, useful intelligence.",
  },
  {
    emoji: "🤝",
    title: "Connect",
    desc: "Join a growing community of practitioners, founders, and enthusiasts. Real people, real conversations.",
  },
  {
    emoji: "🚀",
    title: "Build",
    desc: "From hackathons to workshops — we create spaces to collaborate and ship AI projects together.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #FAFAF7 0%, #F3F0FF 100%)",
          padding: "80px 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(108,92,231,0.1)",
              border: "1px solid rgba(108,92,231,0.25)",
              borderRadius: 999,
              padding: "0.35rem 1rem",
              color: "#6C5CE7",
              fontSize: "0.8rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
              letterSpacing: "0.04em",
            }}
          >
            🌏 Malaysia&apos;s #1 AI Community
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: "#2D2D3A",
              margin: "0 0 1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Where <span style={{ color: "#6C5CE7" }}>AI</span> Meets{" "}
            <span style={{ color: "#FF6B6B" }}>Asia</span>
          </h1>

          <p
            style={{
              color: "#6B7280",
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            AISIA Club is Southeast Asia&apos;s open community for anyone curious about AI.
            Original reporting, curated intelligence, and real connections — Malaysia-first.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/community" className="btn-violet" style={{ fontSize: "1rem", padding: "0.75rem 1.75rem" }}>
              Join the Community →
            </Link>
            <Link
              href="/news"
              style={{
                display: "inline-block",
                padding: "0.75rem 1.75rem",
                borderRadius: 8,
                border: "1.5px solid #E5E7EB",
                color: "#2D2D3A",
                fontWeight: 500,
                fontSize: "1rem",
                background: "#fff",
                transition: "border-color 0.15s",
              }}
            >
              Read Latest News
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof strip */}
      <section style={{ background: "#FFFFFF", borderTop: "1px solid #E5E7EB", borderBottom: "1px solid #E5E7EB" }}>
        <div className="container" style={{ padding: "20px 1.5rem" }}>
          <div style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
          }}>
            {[
              { icon: "👥", stat: "500+ Members" },
              { icon: "📰", stat: "50+ Articles" },
              { icon: "🎉", stat: "10+ Events" },
            ].map((s) => (
              <div key={s.stat} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.25rem" }}>{s.icon}</span>
                <span style={{ fontWeight: 600, color: "#2D2D3A", fontSize: "0.95rem" }}>{s.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="section-pad" style={{ background: "#FAFAF7" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "1.75rem", marginBottom: "2.5rem", color: "#2D2D3A" }}>
            Why AISIA Club?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {valueProps.map((v) => (
              <div key={v.title} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: "2.25rem", marginBottom: "0.75rem" }}>{v.emoji}</div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#6C5CE7", marginBottom: "0.5rem" }}>
                  {v.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontSize: "1.75rem", margin: 0, color: "#2D2D3A" }}>Latest News</h2>
            <Link href="/news" style={{ color: "#6C5CE7", fontWeight: 600, fontSize: "0.95rem" }}>
              View all news →
            </Link>
          </div>

          {/* Hero article */}
          <div className="card" style={{ padding: 32, marginBottom: 24, display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ fontSize: "4rem", lineHeight: 1 }}>{heroArticle.emoji}</div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                <span className="pill-violet">{heroArticle.category}</span>
                <span className="pill-coral" style={{ background: "#FF6B6B" }}>Editor&apos;s Pick</span>
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 700, marginBottom: 12, color: "#2D2D3A", lineHeight: 1.3 }}>
                {heroArticle.title}
              </h3>
              <p style={{ color: "#6B7280", lineHeight: 1.65, marginBottom: 16, fontSize: "1rem" }}>
                {heroArticle.excerpt}
              </p>
              <div style={{ display: "flex", gap: 12, color: "#9CA3AF", fontSize: "0.82rem", alignItems: "center" }}>
                <span>{heroArticle.author}</span>
                <span>·</span>
                <span>{heroArticle.date}</span>
                <span>·</span>
                <span>{heroArticle.readTime}</span>
              </div>
            </div>
          </div>

          {/* Two article cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {articles.map((a) => (
              <div key={a.title} className="card" style={{ padding: 24 }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{a.emoji}</div>
                <div style={{ marginBottom: 10 }}>
                  <span className="pill-violet">{a.category}</span>
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: 10, color: "#2D2D3A", lineHeight: 1.35 }}>
                  {a.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: 16 }}>
                  {a.excerpt}
                </p>
                <div style={{ color: "#9CA3AF", fontSize: "0.8rem" }}>
                  {a.author} · {a.date} · {a.readTime}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section style={{ background: "#F3F0FF", padding: "80px 1.5rem" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, marginBottom: "0.75rem", color: "#2D2D3A" }}>
            Stay in the loop
          </h2>
          <p style={{ color: "#6B7280", marginBottom: "1.75rem", lineHeight: 1.65 }}>
            Get the best AI news from Malaysia and Southeast Asia — straight to your inbox. No spam, ever.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                minWidth: 220,
                padding: "0.7rem 1rem",
                border: "1.5px solid #E5E7EB",
                borderRadius: 8,
                fontSize: "0.95rem",
                fontFamily: "Inter, sans-serif",
                outline: "none",
                background: "#fff",
                color: "#2D2D3A",
              }}
            />
            <button className="btn-violet" style={{ padding: "0.7rem 1.5rem" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
