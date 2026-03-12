"use client";
import { useState } from "react";
import Link from "next/link";

const heroArticle = {
  category: "Malaysia AI",
  title: "Malaysia's National AI Roadmap 2030 — What It Means for You",
  excerpt:
    "The government has unveiled an ambitious AI roadmap. Here's a plain-English breakdown of what's changing and how it affects businesses and professionals across the region.",
  date: "Jan 2026",
  author: "AISIA Editorial",
  readTime: "6 min read",
};

const articles = [
  {
    category: "Tools & Reviews",
    title: "Top 5 AI Tools Malaysian SMEs Are Actually Using",
    excerpt: "From automated customer service to financial forecasting — we surveyed 50 local SME owners.",
    date: "Jan 2026",
    readTime: "4 min read",
  },
  {
    category: "SEA Spotlight",
    title: "SEA's AI Startup Scene: The Founders Leading the Charge",
    excerpt: "Meet the Southeast Asian founders building the next generation of AI-native companies.",
    date: "Jan 2026",
    readTime: "5 min read",
  },
  {
    category: "Deep Dives",
    title: "ChatGPT vs Gemini vs Claude — Which One for Malaysian Business?",
    excerpt: "A practical, no-nonsense comparison tested against real Malaysian business use cases.",
    date: "Jan 2026",
    readTime: "8 min read",
  },
];

const allCategories = ["All", "Malaysia AI", "Tools & Reviews", "SEA Spotlight", "Editor's Pick"];

const valueProps = [
  {
    icon: "◈",
    title: "Learn",
    desc: "Original AI reporting written for Malaysia and Southeast Asia. No jargon, no hype — just clear, useful intelligence.",
  },
  {
    icon: "◎",
    title: "Connect",
    desc: "Join a growing community of practitioners, founders, and enthusiasts. Real people, real conversations.",
  },
  {
    icon: "◇",
    title: "Build",
    desc: "From hackathons to workshops — we create spaces to collaborate and ship AI projects together.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#F5F0EB", padding: "120px 1.5rem 100px", textAlign: "center" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#1A1A1A",
              margin: "0 0 1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Where AI Meets Asia
          </h1>
          <p
            style={{
              color: "#6B6B6B",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              lineHeight: 1.7,
              marginBottom: "3rem",
              fontFamily: "'Inter', system-ui, sans-serif",
            }}
          >
            Southeast Asia&apos;s open community for anyone curious about AI.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/community" className="btn-primary">
              Join the Community →
            </Link>
            <Link href="/news" className="btn-outline">
              Read Latest News
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section style={{ background: "#F5F0EB", padding: "0 1.5rem 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div
            className="card"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.3fr",
              gap: 0,
              overflow: "hidden",
              borderRadius: 16,
            }}
          >
            {/* Image placeholder */}
            <div
              style={{
                background: "#1A1A1A",
                minHeight: 320,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "3rem", opacity: 0.3 }}>🏛️</span>
            </div>
            {/* Content */}
            <div style={{ padding: "40px 40px" }}>
              <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
                <span className="pill">{heroArticle.category}</span>
                <span className="pill">Editor&apos;s Pick</span>
              </div>
              <h2
                style={{
                  fontFamily: "'Source Serif 4', Georgia, serif",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#1A1A1A",
                  marginBottom: "1rem",
                }}
              >
                {heroArticle.title}
              </h2>
              <p style={{ color: "#6B6B6B", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                {heroArticle.excerpt}
              </p>
              <div style={{ color: "#9B9B9B", fontSize: "0.82rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
                {heroArticle.author} · {heroArticle.date} · {heroArticle.readTime}
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .featured-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Recent Posts Grid */}
      <section style={{ background: "#F5F0EB", padding: "0 1.5rem 100px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: "1.25rem",
            }}
          >
            Latest News
          </h2>
          {/* Category tabs */}
          <div style={{ display: "flex", gap: "0.1rem", flexWrap: "wrap", marginBottom: "2rem", borderBottom: "1px solid #E5E5E0", paddingBottom: "0.75rem" }}>
            {allCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveTab(c)}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: activeTab === c ? "2px solid #1A1A1A" : "2px solid transparent",
                  marginBottom: "-0.75rem",
                  padding: "0.45rem 0.9rem",
                  fontSize: "0.88rem",
                  fontWeight: activeTab === c ? 600 : 400,
                  color: activeTab === c ? "#1A1A1A" : "#6B6B6B",
                  cursor: "pointer",
                  fontFamily: "'Inter', system-ui, sans-serif",
                  transition: "color 0.15s",
                }}
              >
                {c}
              </button>
            ))}
          </div>
          {/* Card grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {articles.map((a) => (
              <div key={a.title} className="card" style={{ overflow: "hidden" }}>
                {/* Image placeholder */}
                <div style={{ background: "#EEEBE6", height: 180 }} />
                <div style={{ padding: 24 }}>
                  <span className="pill" style={{ marginBottom: 12, display: "inline-block" }}>{a.category}</span>
                  <h3
                    style={{
                      fontFamily: "'Source Serif 4', Georgia, serif",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      lineHeight: 1.35,
                      color: "#1A1A1A",
                      margin: "0 0 0.75rem",
                    }}
                  >
                    {a.title}
                  </h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.88rem", lineHeight: 1.65, margin: "0 0 1rem" }}>
                    {a.excerpt}
                  </p>
                  <div style={{ color: "#9B9B9B", fontSize: "0.78rem", fontFamily: "'Inter', system-ui, sans-serif" }}>
                    {a.date} · {a.readTime}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/news" className="btn-outline">View all news</Link>
          </div>
        </div>
      </section>

      {/* Why AISIA */}
      <section style={{ background: "#fff", padding: "100px 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#1A1A1A",
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Why AISIA Club?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 48 }}>
            {valueProps.map((v) => (
              <div key={v.title} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: "1rem",
                    color: "#1A1A1A",
                    fontFamily: "monospace",
                  }}
                >
                  {v.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Source Serif 4', Georgia, serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    marginBottom: "0.75rem",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section style={{ background: "#F5F0EB", padding: "100px 1.5rem" }}>
        <div style={{ maxWidth: 500, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: "2rem",
              fontWeight: 700,
              color: "#1A1A1A",
              marginBottom: "0.75rem",
            }}
          >
            Stay in the loop
          </h2>
          <p style={{ color: "#6B6B6B", marginBottom: "2rem", lineHeight: 1.7, fontFamily: "'Inter', system-ui, sans-serif", fontSize: "0.95rem" }}>
            Get the best AI news from Malaysia and Southeast Asia — straight to your inbox. No spam, ever.
          </p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                minWidth: 220,
                padding: "0.75rem 1rem",
                border: "1px solid #E5E5E0",
                borderRadius: 999,
                fontSize: "0.9rem",
                fontFamily: "'Inter', system-ui, sans-serif",
                outline: "none",
                background: "#fff",
                color: "#1A1A1A",
              }}
            />
            <button className="btn-primary" style={{ padding: "0.75rem 1.5rem" }}>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
