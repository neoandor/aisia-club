"use client";
import { useState } from "react";
import Link from "next/link";
import { articles } from "@/lib/articles";

const categories = ["All", "Malaysia AI", "SEA Spotlight", "Tools & Reviews", "Deep Dives", "Interviews", "Opinion"];

export default function News() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? articles : articles.filter((a) => a.category === active);

  return (
    <>
      {/* Header */}
      <section style={{ background: "#F5F0EB", padding: "56px 1.5rem 40px", textAlign: "center", borderBottom: "1px solid #E5E5E0" }}>
        <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#1A1A1A", margin: "0 0 0.75rem" }}>
          AI News for Southeast Asia
        </h1>
        <p style={{ color: "#6B6B6B", fontSize: "1rem", margin: 0 }}>
          Original reporting, regional lens. No hype.
        </p>
      </section>

      <section style={{ padding: "40px 1.5rem 80px", background: "#F5F0EB" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Category Tabs */}
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "2rem", borderBottom: "2px solid #E5E5E0", paddingBottom: "0.75rem" }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  background: "transparent",
                  color: active === c ? "#1A1A1A" : "#6B6B6B",
                  border: "none",
                  borderBottom: active === c ? "2px solid #1A1A1A" : "2px solid transparent",
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
              <Link key={a.slug} href={`/news/${a.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="card" style={{ padding: 24, cursor: "pointer", height: "100%" }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                    <span className="pill">{a.category}</span>
                    {a.editorsPick && <span className="pill">Editor&apos;s Pick</span>}
                  </div>
                  <h3 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.05rem", fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px", lineHeight: 1.35 }}>
                    {a.title}
                  </h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.88rem", lineHeight: 1.65, margin: "0 0 16px" }}>
                    {a.excerpt}
                  </p>
                  <div style={{ color: "#9B9B9B", fontSize: "0.78rem", display: "flex", gap: 8 }}>
                    <span>{a.author}</span>
                    <span>·</span>
                    <span>{a.date}</span>
                    <span>·</span>
                    <span>{a.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
