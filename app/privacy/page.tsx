import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AISIA Club",
  description: "AISIA Club's privacy policy. How we handle your data.",
};

export default function Privacy() {
  return (
    <section style={{ background: "#F5F0EB", padding: "56px 1.5rem 80px" }}>
      <div className="container-article">
        <h1 style={{ fontSize: "2rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.5rem" }}>
          Privacy Policy
        </h1>
        <p style={{ color: "#9B9B9B", fontSize: "0.88rem", marginBottom: "3rem" }}>Last updated: January 2026</p>

        {[
          {
            title: "1. What We Collect",
            body: "When you subscribe to our newsletter or join our community channels, we collect your email address and basic profile information you provide. We do not collect sensitive personal data.",
          },
          {
            title: "2. How We Use Your Data",
            body: "We use your email solely to send AISIA Club newsletters and important community updates. We do not sell, rent, or share your data with third parties for marketing purposes.",
          },
          {
            title: "3. Cookies",
            body: "Our website may use essential cookies for analytics (via privacy-respecting tools) to understand how visitors interact with our content. No tracking across other websites.",
          },
          {
            title: "4. Data Storage",
            body: "Your data is stored securely using industry-standard encryption. We retain newsletter subscriber data only while you remain subscribed. You can unsubscribe at any time via the link in any email.",
          },
          {
            title: "5. Third-Party Services",
            body: "We may link to external sites (Telegram, WhatsApp, LinkedIn). Their privacy policies apply once you visit those platforms. AISIA Club is not responsible for third-party data practices.",
          },
          {
            title: "6. Your Rights",
            body: "You have the right to access, correct, or delete your personal data at any time. Contact us at hello@aisiaclub.com with any privacy-related requests.",
          },
          {
            title: "7. Changes to This Policy",
            body: "We may update this policy from time to time. Significant changes will be communicated via our newsletter. Continued use of AISIA Club after changes constitutes acceptance.",
          },
          {
            title: "8. Contact",
            body: "For privacy questions or data requests, email us at hello@aisiaclub.com. We aim to respond within 5 business days.",
          },
        ].map((s) => (
          <div key={s.title} style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.6rem" }}>{s.title}</h2>
            <p className="article-body" style={{ color: "#6B6B6B", lineHeight: 1.75, margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
