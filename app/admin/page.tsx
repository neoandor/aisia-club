"use client";
import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import { supabase, DbArticle } from "@/lib/supabase";
const RichEditor = lazy(() => import("@/components/RichEditor"));

const ADMIN_PASS = "aisia2026";
const CATEGORIES = ["Malaysia AI", "SEA Spotlight", "Tools & Reviews", "Deep Dives", "Interviews", "Opinion"];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [articles, setArticles] = useState<DbArticle[]>([]);
  const [editing, setEditing] = useState<DbArticle | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const fetchArticles = useCallback(async () => {
    const { data } = await supabase
      .from("aisia_articles")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setArticles(data);
  }, []);

  useEffect(() => {
    if (authed) fetchArticles();
  }, [authed, fetchArticles]);

  if (!authed) {
    return (
      <div style={{ background: "#F5F0EB", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ background: "#fff", padding: 40, borderRadius: 16, maxWidth: 400, width: "100%", textAlign: "center" }}>
          <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.5rem", marginBottom: 24 }}>AISIA Admin</h1>
          <input
            type="password"
            placeholder="Enter admin password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && pass === ADMIN_PASS) setAuthed(true); }}
            style={{ width: "100%", padding: "12px 16px", fontSize: "1rem", border: "1px solid #E5E5E0", borderRadius: 8, marginBottom: 16, boxSizing: "border-box" }}
          />
          <button
            onClick={() => { if (pass === ADMIN_PASS) setAuthed(true); else setMsg("Wrong password"); }}
            style={{ width: "100%", padding: "12px", background: "#1A1A1A", color: "#fff", border: "none", borderRadius: 8, fontSize: "1rem", fontWeight: 600, cursor: "pointer" }}
          >
            Login
          </button>
          {msg && <p style={{ color: "red", marginTop: 12 }}>{msg}</p>}
        </div>
      </div>
    );
  }

  if (editing) {
    return (
      <div style={{ background: "#F5F0EB", minHeight: "100vh", padding: "40px 1.5rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", background: "#fff", borderRadius: 16, padding: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
            <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.5rem", margin: 0 }}>
              {isNew ? "New Article" : "Edit Article"}
            </h1>
            <button onClick={() => { setEditing(null); setIsNew(false); }} style={{ background: "transparent", border: "1px solid #E5E5E0", borderRadius: 8, padding: "8px 16px", cursor: "pointer" }}>
              ← Back
            </button>
          </div>

          {/* Title */}
          <label style={{ display: "block", marginBottom: 16 }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6B6B6B", display: "block", marginBottom: 4 }}>Title</span>
            <input
              value={editing.title}
              onChange={(e) => {
                const title = e.target.value;
                setEditing({ ...editing, title, slug: isNew ? slugify(title) : editing.slug });
              }}
              style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E5E0", borderRadius: 8, fontSize: "1rem", boxSizing: "border-box" }}
            />
          </label>

          {/* Slug */}
          <label style={{ display: "block", marginBottom: 16 }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6B6B6B", display: "block", marginBottom: 4 }}>Slug</span>
            <input
              value={editing.slug}
              onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
              style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E5E0", borderRadius: 8, fontSize: "0.9rem", fontFamily: "monospace", boxSizing: "border-box" }}
            />
          </label>

          {/* Category + Author row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <label>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6B6B6B", display: "block", marginBottom: 4 }}>Category</span>
              <select
                value={editing.category}
                onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E5E0", borderRadius: 8, fontSize: "0.95rem", boxSizing: "border-box" }}
              >
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </label>
            <label>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6B6B6B", display: "block", marginBottom: 4 }}>Author</span>
              <input
                value={editing.author}
                onChange={(e) => setEditing({ ...editing, author: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E5E0", borderRadius: 8, fontSize: "0.95rem", boxSizing: "border-box" }}
              />
            </label>
          </div>

          {/* Read time + Editor's pick row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <label>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6B6B6B", display: "block", marginBottom: 4 }}>Read Time</span>
              <input
                value={editing.read_time}
                onChange={(e) => setEditing({ ...editing, read_time: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E5E0", borderRadius: 8, fontSize: "0.95rem", boxSizing: "border-box" }}
              />
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 24 }}>
              <input
                type="checkbox"
                checked={editing.editors_pick}
                onChange={(e) => setEditing({ ...editing, editors_pick: e.target.checked })}
                style={{ width: 18, height: 18 }}
              />
              <span style={{ fontSize: "0.95rem" }}>Editor&apos;s Pick</span>
            </label>
          </div>

          {/* Excerpt */}
          <label style={{ display: "block", marginBottom: 16 }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6B6B6B", display: "block", marginBottom: 4 }}>Excerpt</span>
            <textarea
              value={editing.excerpt || ""}
              onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
              rows={3}
              style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E5E0", borderRadius: 8, fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }}
            />
          </label>

          {/* Body (Rich Editor) */}
          <div style={{ marginBottom: 24 }}>
            <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#6B6B6B", display: "block", marginBottom: 8 }}>Body</span>
            <Suspense fallback={<div style={{ padding: 20, color: "#6B6B6B" }}>Loading editor...</div>}>
              <RichEditor
                content={editing.body || ""}
                onChange={(html) => setEditing({ ...editing, body: html })}
              />
            </Suspense>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button
              onClick={async () => {
                setSaving(true);
                const { slug, title, category, excerpt, body, author, read_time, editors_pick, published } = editing;
                const payload = { slug, title, category, excerpt, body, author, read_time, editors_pick, published };
                let error;
                if (isNew) {
                  ({ error } = await supabase.from("aisia_articles").insert(payload));
                } else {
                  ({ error } = await supabase.from("aisia_articles").update(payload).eq("id", editing.id));
                }
                setSaving(false);
                if (error) { setMsg(`Error: ${error.message}`); return; }
                setMsg("Saved as draft!");
                setEditing(null); setIsNew(false); fetchArticles();
              }}
              disabled={saving}
              style={{ padding: "12px 24px", background: "#6B6B6B", color: "#fff", border: "none", borderRadius: 8, fontSize: "0.95rem", fontWeight: 600, cursor: "pointer" }}
            >
              {saving ? "Saving..." : "Save Draft"}
            </button>
            <button
              onClick={async () => {
                setSaving(true);
                const { slug, title, category, excerpt, body, author, read_time, editors_pick } = editing;
                const payload = { slug, title, category, excerpt, body, author, read_time, editors_pick, published: true };
                let error;
                if (isNew) {
                  ({ error } = await supabase.from("aisia_articles").insert(payload));
                } else {
                  ({ error } = await supabase.from("aisia_articles").update(payload).eq("id", editing.id));
                }
                setSaving(false);
                if (error) { setMsg(`Error: ${error.message}`); return; }
                setMsg("Published!");
                setEditing(null); setIsNew(false); fetchArticles();
              }}
              disabled={saving}
              style={{ padding: "12px 24px", background: "#1A1A1A", color: "#fff", border: "none", borderRadius: 8, fontSize: "0.95rem", fontWeight: 600, cursor: "pointer" }}
            >
              {saving ? "Publishing..." : "Publish"}
            </button>
            {!isNew && (
              <button
                onClick={async () => {
                  if (!confirm("Delete this article?")) return;
                  await supabase.from("aisia_articles").delete().eq("id", editing.id);
                  setEditing(null); fetchArticles();
                }}
                style={{ padding: "12px 24px", background: "#fff", color: "red", border: "1px solid red", borderRadius: 8, fontSize: "0.95rem", fontWeight: 600, cursor: "pointer", marginLeft: "auto" }}
              >
                Delete
              </button>
            )}
          </div>
          {msg && <p style={{ marginTop: 16, color: msg.startsWith("Error") ? "red" : "#1A1A1A" }}>{msg}</p>}
        </div>
      </div>
    );
  }

  // Article list
  return (
    <div style={{ background: "#F5F0EB", minHeight: "100vh", padding: "40px 1.5rem" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
          <h1 style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "1.8rem", margin: 0 }}>Articles</h1>
          <button
            onClick={() => {
              setIsNew(true);
              setEditing({
                id: "", slug: "", title: "", category: "Malaysia AI", excerpt: "",
                body: "", author: "AISIA Editorial", read_time: "5 min read",
                editors_pick: false, published: false, image_url: null,
                created_at: "", updated_at: "",
              });
            }}
            style={{ padding: "10px 20px", background: "#1A1A1A", color: "#fff", border: "none", borderRadius: 8, fontSize: "0.95rem", fontWeight: 600, cursor: "pointer" }}
          >
            + New Article
          </button>
        </div>

        {articles.length === 0 && <p style={{ color: "#6B6B6B" }}>Loading articles...</p>}

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {articles.map((a) => (
            <div
              key={a.id}
              onClick={() => { setEditing(a); setIsNew(false); setMsg(""); }}
              style={{
                background: "#fff",
                border: "1px solid #E5E5E0",
                borderRadius: 12,
                padding: "20px 24px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
                transition: "box-shadow 0.15s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)")}
              onMouseOut={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                  <span style={{
                    fontSize: "0.7rem", fontWeight: 700, padding: "2px 8px", borderRadius: 4,
                    background: a.published ? "#E8F5E9" : "#FFF3E0",
                    color: a.published ? "#2E7D32" : "#E65100",
                  }}>
                    {a.published ? "PUBLISHED" : "DRAFT"}
                  </span>
                  <span style={{ fontSize: "0.78rem", color: "#9B9B9B" }}>{a.category}</span>
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 600, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {a.title}
                </h3>
              </div>
              <span style={{ fontSize: "0.78rem", color: "#9B9B9B", whiteSpace: "nowrap" }}>
                {new Date(a.created_at).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
