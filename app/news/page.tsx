"use client";
import { useState } from "react";

const categories = ["All", "Malaysia AI", "SEA Spotlight", "Tools & Reviews", "Deep Dives", "Interviews", "Opinion"];

const articles = [
  { emoji: "🏛️", cat: "Malaysia AI", title: "Malaysia's National AI Roadmap 2030 — What It Means for You", excerpt: "The government has unveiled an ambitious AI roadmap. Here's a plain-English breakdown of what's changing for businesses and professionals.", date: "Jan 2026", author: "AISIA Editorial", readTime: "6 min read", editorsPick: true },
  { emoji: "🛠️", cat: "Tools & Reviews", title: "Top 5 AI Tools Malaysian SMEs Are Actually Using", excerpt: "We surveyed 50 local SME owners to find out which AI tools are actually moving the needle in Malaysia's business landscape.", date: "Jan 2026", author: "AISIA Editorial", readTime: "4 min read", editorsPick: false },
  { emoji: "🌏", cat: "SEA Spotlight", title: "SEA's AI Startup Scene: The Founders Leading the Charge", excerpt: "Meet the Southeast Asian founders building the next generation of AI-native companies — from Singapore to Jakarta to KL.", date: "Jan 2026", author: "AISIA Editorial", readTime: "5 min read", editorsPick: false },
  { emoji: "⚔️", cat: "Deep Dives", title: "ChatGPT vs Gemini vs Claude — Which One for Malaysian Business?", excerpt: "A practical, no-nonsense comparison of the top AI assistants tested against real Malaysian business use cases.", date: "Jan 2026", author: "AISIA Editorial", readTime: "8 min read", editorsPick: false },
  { emoji: "🏢", cat: "Interviews", title: "How Grab, AirAsia, and Petronas Are Deploying AI", excerpt: "We spoke with AI leads at three of Malaysia's biggest corporations about what's working, what failed, and what's next.", date: "Jan 2026", author: "AISIA Editorial", readTime: "7 min read", editorsPick: false },
  { emoji: "💼", cat: "Opinion", title: "Will AI Replace Jobs in Malaysia? The Honest Answer", excerpt: "The fear is real but the picture is nuanced. Here's an evidence-based look at which roles are at risk and which are safe.", date: "Jan 2026", author: "AISIA Editorial", readTime: "5 min read", editorsPick: false },
  { emoji: "🤖", cat: "Malaysia AI", title: "Inside MDEC's AI Accelerator: Malaysia's Bet on Homegrown Talent", excerpt: "The Digital Economy Corporation is betting big on nurturing local AI talent. We got an inside look at the latest cohort.", date: "Jan 2026", author: "AISIA Editorial", readTime: "4 min read", editorsPick: false },
  { emoji: "📊", cat: "Deep Dives", title: "The State of AI Adoption in Malaysian Enterprises 2026", excerpt: "Our inaugural survey of 100+ Malaysian companies reveals the gap between AI hype and actual enterprise deployment.", date: "Jan 2026", author: "AISIA Research", readTime: "10 min read", editorsPick: false },
  { emoji: "🎓", cat: "SEA Spotlight", title: "NUS, NTU, and UM: Which SEA University is Winning the AI Race?", excerpt: "A comparative look at AI research output, talent pipelines, and industry partnerships at top regional universities.", date: "Jan 2026", author: "AISIA Editorial", readTime: "5 min read", editorsPick: false },
];

export default function News() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.cat === active);

  return (
    <>
      {/* Header */}
      <section style={{ background: "#FAFAF7", padding: "56px 1.5rem 40px", textAlign: "center", borderBottom: "1px solid #E5E7EB" }}>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#2D2D3A", margin: "0 0 0.75rem" }}>
          AI News for <span style={{ color: "#D4845A" }}>Southeast Asia</span>
        </h1>
        <p style={{ color: "#6B7280", fontSize: "1rem", margin: 0 }}>
          Original reporting, regional lens. No hype.
        </p>
      </section>

      <section style={{ padding: "40px 1.5rem 80px", background: "#FAFAF7" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Category Tabs */}
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "2rem", borderBottom: "2px solid #E5E7EB", paddingBottom: "0.75rem" }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  background: "transparent",
                  color: active === c ? "#D4845A" : "#6B7280",
                  border: "none",
                  borderBottom: active === c ? "2px solid #D4845A" : "2px solid transparent",
                  marginBottom: "-0.75rem",
                  padding: "0.45rem 0.9rem",
                  fontSize: "0.88rem",
                  fontWeight: active === c ? 600 : 500,
                  cursor: "pointer",
                  transition: "color 0.15s",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Article Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
            {filtered.map((a) => (
              <div key={a.title} className="card" style={{ padding: 24, cursor: "pointer" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>{a.emoji}</div>
                <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                  <span className="pill-violet">{a.cat}</span>
                  {a.editorsPick && <span className="pill-coral">Editor&apos;s Pick</span>}
                </div>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#2D2D3A", margin: "0 0 8px", lineHeight: 1.35 }}>
                  {a.title}
                </h3>
                <p style={{ color: "#6B7280", fontSize: "0.88rem", lineHeight: 1.65, margin: "0 0 16px" }}>
                  {a.excerpt}
                </p>
                <div style={{ color: "#9CA3AF", fontSize: "0.78rem", display: "flex", gap: 8 }}>
                  <span>{a.author}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
