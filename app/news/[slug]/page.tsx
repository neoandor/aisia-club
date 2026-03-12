import { articles, getArticleBySlug } from "@/lib/articles";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return notFound();

  return (
    <article style={{ background: "#F5F0EB", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ padding: "60px 1.5rem 40px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: "#6B6B6B",
              background: "#FFFFFF",
              border: "1px solid #E5E5E0",
              borderRadius: 999,
              padding: "4px 12px",
            }}
          >
            {article.category}
          </span>
          {article.editorsPick && (
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#6B6B6B",
                background: "#FFFFFF",
                border: "1px solid #E5E5E0",
                borderRadius: 999,
                padding: "4px 12px",
              }}
            >
              Editor&apos;s Pick
            </span>
          )}
        </div>
        <h1
          style={{
            fontFamily: "'Source Serif 4', Georgia, serif",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "#1A1A1A",
            lineHeight: 1.2,
            margin: "0 0 20px",
          }}
        >
          {article.title}
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#6B6B6B", lineHeight: 1.6, margin: "0 0 20px" }}>
          {article.excerpt}
        </p>
        <div style={{ color: "#9B9B9B", fontSize: "0.85rem", display: "flex", gap: 8 }}>
          <span>{article.author}</span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>
      </header>

      <div style={{ maxWidth: 720, margin: "0 auto", borderTop: "1px solid #E5E5E0" }} />

      {/* Body */}
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "40px 1.5rem 80px",
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          color: "#1A1A1A",
        }}
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

      {/* Back link */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem 80px", textAlign: "center" }}>
        <Link
          href="/news"
          style={{
            display: "inline-block",
            background: "#1A1A1A",
            color: "#fff",
            borderRadius: 999,
            padding: "0.6rem 1.5rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          ← Back to News
        </Link>
      </div>

      <style>{`
        article h2 {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 1.4rem;
          font-weight: 700;
          margin: 2rem 0 1rem;
          color: #1A1A1A;
        }
        article p { margin: 0 0 1.25rem; }
        article ul { margin: 0 0 1.25rem; padding-left: 1.5rem; }
        article li { margin-bottom: 0.5rem; }
        article strong { font-weight: 600; }
      `}</style>
    </article>
  );
}
