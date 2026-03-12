import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events — AISIA Club",
  description: "Upcoming AI events, meetups, and workshops in Malaysia. Hosted by AISIA Club.",
};

const upcoming = [
  {
    icon: "📍",
    day: "TBD",
    month: "2026",
    title: "AISIA Meetup #1 — KL",
    location: "Kuala Lumpur, Malaysia",
    desc: "Our inaugural in-person meetup. Networking, lightning talks from community members, and a panel discussion on AI in Malaysia.",
    tag: "Meetup",
  },
  {
    icon: "🛠️",
    day: "TBD",
    month: "2026",
    title: "AI Tools Workshop",
    location: "Online (Zoom)",
    desc: "Hands-on workshop covering the top AI productivity tools for professionals. Bring your laptop. Limited seats.",
    tag: "Workshop",
  },
  {
    icon: "🔥",
    day: "TBD",
    month: "2026",
    title: "Fireside Chat: AI in Malaysian Business",
    location: "Kuala Lumpur, Malaysia",
    desc: "An intimate conversation with business leaders deploying AI in Malaysian enterprises. What's working, what's not, and what's next.",
    tag: "Fireside Chat",
  },
];

export default function Events() {
  return (
    <>
      {/* Header */}
      <section style={{ background: "#FAFAF7", padding: "56px 1.5rem 40px", textAlign: "center", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700, color: "#2D2D3A", margin: "0 0 0.75rem" }}>
            AISIA <span style={{ color: "#D4845A" }}>Events</span>
          </h1>
          <p style={{ color: "#6B7280", fontSize: "1.05rem", lineHeight: 1.7, margin: 0 }}>
            Meetups, workshops, and fireside chats — bringing the AI community together across Malaysia.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="section-pad" style={{ background: "#FAFAF7" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#2D2D3A", marginBottom: "1.75rem" }}>
            Upcoming Events
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {upcoming.map((ev) => (
              <div key={ev.title} className="card" style={{ padding: 24, display: "flex", gap: 20, alignItems: "flex-start" }}>
                {/* Date badge */}
                <div style={{
                  minWidth: 64,
                  height: 64,
                  background: "#D4845A",
                  borderRadius: "50%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  flexShrink: 0,
                }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 600, opacity: 0.8, textTransform: "uppercase" }}>{ev.month}</span>
                  <span style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1 }}>{ev.day}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8, flexWrap: "wrap" }}>
                    <span className="pill-violet">{ev.tag}</span>
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#2D2D3A", margin: "0 0 6px" }}>{ev.title}</h3>
                  <div style={{ color: "#9CA3AF", fontSize: "0.82rem", marginBottom: 10 }}>
                    📌 {ev.location}
                  </div>
                  <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggest / Host CTA */}
      <section style={{ background: "#F3F0FF", padding: "80px 1.5rem", textAlign: "center" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2D2D3A", marginBottom: "0.75rem" }}>
            Want to host an event?
          </h2>
          <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
            We welcome community-led workshops, talks, and meetups. Get in touch and we&apos;ll help you make it happen.
          </p>
          <a href="mailto:hello@aisiaclub.com" className="btn-violet">
            Contact Us →
          </a>
        </div>
      </section>
    </>
  );
}
