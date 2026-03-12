import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community — AISIA Club",
  description: "Join Malaysia's most active AI community on Telegram. Forum-style discussions, AI news, jobs, and more.",
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
          <p style={{ color: "#6B6B6B", fontSize: "1.05rem", lineHeight: 1.7, margin: "0 0 1.5rem" }}>
            Malaysia&apos;s home for AI practitioners, founders, students, and enthusiasts. Join the conversation on Telegram.
          </p>
          <a
            href="https://t.me/aisiaclub"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              background: "#1A1A1A",
              color: "#fff",
              borderRadius: 999,
              fontSize: "1rem",
              fontWeight: 700,
              fontFamily: "'Inter', system-ui, sans-serif",
              textDecoration: "none",
              transition: "opacity 0.15s",
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>✈️</span>
            Join AISIA on Telegram
          </a>
        </div>
      </section>

      {/* Telegram Forum Topics */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: 8 }}>
              Forum-Style Discussions
            </h2>
            <p style={{ color: "#6B6B6B", fontSize: "0.95rem", maxWidth: 520, margin: "0 auto" }}>
              Our Telegram group uses Topics — organised channels for different conversations, like a modern forum inside your favourite chat app.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, maxWidth: 900, margin: "0 auto" }}>
            {[
              { icon: "/icon-general.png", topic: "General", desc: "Open chat — introductions, random AI thoughts, community vibes" },
              { icon: "/icon-tools.png", topic: "AI Tools & Reviews", desc: "Share and discuss tools you're using — ChatGPT, Canva AI, Copilot, local tools" },
              { icon: "/icon-ask.png", topic: "Ask Anything", desc: "No stupid questions. Get help from the community on AI topics, career, tech" },
              { icon: "/icon-news.png", topic: "News & Articles", desc: "Discuss AISIA articles, share external news, debate AI developments" },
              { icon: "/icon-jobs.png", topic: "Jobs & Hiring", desc: "Post AI job openings, freelance gigs, and career opportunities in Malaysia & SEA" },
              { icon: "/icon-projects.png", topic: "Projects & Showcase", desc: "Show what you're building — get feedback, find collaborators, launch together" },
              { icon: "/icon-learning.png", topic: "Learning & Resources", desc: "Courses, tutorials, papers, and study groups for levelling up your AI skills" },
              { icon: "/icon-weekly.png", topic: "Weekly Discussion", desc: "Curated weekly topic — community polls, debates, and themed conversations" },
            ].map((t) => (
              <div key={t.topic} style={{
                border: "1px solid #E5E5E0",
                borderRadius: 12,
                padding: "20px 24px",
                display: "flex",
                gap: 16,
                alignItems: "flex-start",
                transition: "box-shadow 0.15s",
              }}>
                <img src={t.icon} alt={t.topic} style={{ width: 32, height: 32, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1A1A1A", margin: "0 0 4px" }}>#{t.topic}</h3>
                  <p style={{ color: "#6B6B6B", fontSize: "0.82rem", lineHeight: 1.55, margin: 0 }}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-pad" style={{ background: "#F5F0EB" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "2rem" }}>
            How It Works
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32, maxWidth: 800, margin: "0 auto" }}>
            {[
              { step: "1", title: "Join the Group", desc: "Click the Telegram link — you're in. No forms, no signups, no approval needed." },
              { step: "2", title: "Browse Topics", desc: "Find the topic that interests you. Each one is a focused thread — like a mini-forum." },
              { step: "3", title: "Start Talking", desc: "Ask questions, share insights, post your projects. The community is here to help." },
            ].map((s) => (
              <div key={s.step} style={{ textAlign: "center" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%", background: "#1A1A1A", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.1rem", fontWeight: 700, margin: "0 auto 16px",
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}>{s.step}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1A1A1A", margin: "0 0 8px" }}>{s.title}</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also on */}
      <section className="section-pad" style={{ background: "#FFFFFF" }}>
        <div className="container">
          <h2 style={{ textAlign: "center", fontSize: "1.25rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "1.5rem" }}>
            Also Find Us On
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, maxWidth: 700, margin: "0 auto" }}>
            {[
              { icon: "📸", name: "Instagram", desc: "AI tips, community highlights, and visual content for the scroll.", href: "https://instagram.com/aisiaclub", cta: "Follow on Instagram →" },
              { icon: "𝕏", name: "X (Twitter)", desc: "Real-time AI news, threads, and conversations with the global AI community.", href: "https://x.com/aisiaclub", cta: "Follow on X →" },
            ].map((ch) => (
              <a key={ch.name} href={ch.href} target="_blank" rel="noopener noreferrer" style={{
                border: "1px solid #E5E5E0",
                borderRadius: 12,
                padding: "24px",
                textAlign: "center",
                textDecoration: "none",
                color: "inherit",
                transition: "box-shadow 0.15s",
                display: "block",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: 8 }}>{ch.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#1A1A1A", margin: "0 0 6px" }}>{ch.name}</h3>
                <p style={{ color: "#6B6B6B", fontSize: "0.85rem", lineHeight: 1.55, marginBottom: 12 }}>{ch.desc}</p>
                <span style={{ color: "#1A1A1A", fontWeight: 600, fontSize: "0.88rem" }}>{ch.cta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
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

      {/* CTA */}
      <section style={{ background: "#1A1A1A", padding: "64px 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.75rem", fontFamily: "'Source Serif 4', Georgia, serif" }}>
            Ready to join the conversation?
          </h2>
          <p style={{ color: "#9B9B9B", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            Free forever. No spam. Just real conversations about AI in Malaysia and Southeast Asia.
          </p>
          <a
            href="https://t.me/aisiaclub"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 32px",
              background: "#FFFFFF",
              color: "#1A1A1A",
              borderRadius: 999,
              fontSize: "1rem",
              fontWeight: 700,
              fontFamily: "'Inter', system-ui, sans-serif",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "1.3rem" }}>✈️</span>
            Join AISIA on Telegram
          </a>
        </div>
      </section>
    </>
  );
}
