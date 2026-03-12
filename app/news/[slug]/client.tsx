"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase, DbArticle } from "@/lib/supabase";
import type { Article } from "@/lib/articles";

interface Props {
  slug: string;
  fallback: Article | null;
}

export default function ArticleClient({ slug, fallback }: Props) {
  const [article, setArticle] = useState<DbArticle | Article | null>(fallback);
  const [loading, setLoading] = useState(!fallback);

  useEffect(() => {
    // Try to fetch from Supabase (fresher content)
    async function load() {
      const { data } = await supabase
        .from("aisia_articles")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .single();
      if (data) setArticle(data);
      setLoading(false);
    }
    load();
  }, [slug]);

  if (loading && !article) {
    return (
      <div style={{ background: "#F5F0EB", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#6B6B6B" }}>Loading...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div style={{ background: "#F5F0EB", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }}>
        <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "2rem" }}>Article not found</h1>
        <Link href="/news" style={{ color: "#1A1A1A" }}>← Back to News</Link>
      </div>
    );
  }

  // Normalize fields (static uses camelCase, Supabase uses snake_case)
  const title = article.title;
  const category = article.category;
  const excerpt = article.excerpt || "";
  const body = article.body || "";
  const author = "author" in article ? article.author : "AISIA Editorial";
  const readTime = "readTime" in article ? article.readTime : ("read_time" in article ? (article as DbArticle).read_time : "5 min read");
  const editorsPick = "editorsPick" in article ? article.editorsPick : ("editors_pick" in article ? (article as DbArticle).editors_pick : false);

  return (
    <article style={{ background: "#F5F0EB", minHeight: "100vh" }}>
      <header style={{ padding: "60px 1.5rem 40px", maxWidth: 720, margin: "0 auto" }}>
        <div style={{ marginBottom: 16, display: "flex", gap: 8 }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#6B6B6B", background: "#FFFFFF", border: "1px solid #E5E5E0", borderRadius: 999, padding: "4px 12px" }}>
            {category}
          </span>
          {editorsPick && (
            <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#6B6B6B", background: "#FFFFFF", border: "1px solid #E5E5E0", borderRadius: 999, padding: "4px 12px" }}>
              Editor&apos;s Pick
            </span>
          )}
        </div>
        <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#1A1A1A", lineHeight: 1.2, margin: "0 0 20px" }}>
          {title}
        </h1>
        <p style={{ fontSize: "1.1rem", color: "#6B6B6B", lineHeight: 1.6, margin: "0 0 20px" }}>
          {excerpt}
        </p>
        <div style={{ color: "#9B9B9B", fontSize: "0.85rem", display: "flex", gap: 8 }}>
          <span>{author}</span>
          <span>·</span>
          <span>{readTime}</span>
        </div>
      </header>

      <div style={{ maxWidth: 720, margin: "0 auto", borderTop: "1px solid #E5E5E0" }} />

      <div
        className="article-body"
        style={{ maxWidth: 720, margin: "0 auto", padding: "40px 1.5rem 80px", fontFamily: "'Inter', system-ui, sans-serif", fontSize: "1.05rem", lineHeight: 1.8, color: "#1A1A1A" }}
        dangerouslySetInnerHTML={{ __html: body }}
      />

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem 80px", textAlign: "center" }}>
        <Link
          href="/news"
          style={{ display: "inline-block", background: "#1A1A1A", color: "#fff", borderRadius: 999, padding: "0.6rem 1.5rem", fontSize: "0.9rem", fontWeight: 600, textDecoration: "none" }}
        >
          ← Back to News
        </Link>
      </div>

      <style>{`
        .article-body h2 { font-family: 'Source Serif 4', Georgia, serif; font-size: 1.4rem; font-weight: 700; margin: 2rem 0 1rem; color: #1A1A1A; }
        .article-body p { margin: 0 0 1.25rem; }
        .article-body ul { margin: 0 0 1.25rem; padding-left: 1.5rem; }
        .article-body li { margin-bottom: 0.5rem; }
        .article-body strong { font-weight: 600; }
      `}</style>
    </article>
  );
}
