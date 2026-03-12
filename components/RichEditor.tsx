"use client";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { useEffect } from "react";

const btnStyle = (active: boolean) => ({
  background: active ? "#1A1A1A" : "#F5F0EB",
  color: active ? "#fff" : "#1A1A1A",
  border: "1px solid #D5D5D0",
  borderRadius: 6,
  padding: "4px 10px",
  fontSize: "0.78rem",
  fontWeight: 600 as const,
  cursor: "pointer" as const,
  fontFamily: "'Inter', system-ui, sans-serif",
  transition: "all 0.15s",
});

function Toolbar({ editor }: { editor: ReturnType<typeof useEditor> }) {
  if (!editor) return null;

  const addImage = () => {
    const url = window.prompt("Image URL:");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  };

  const addLink = () => {
    const url = window.prompt("Link URL:");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, padding: "8px 0", borderBottom: "1px solid #E5E5E0", marginBottom: 12 }}>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} style={btnStyle(editor.isActive("heading", { level: 2 }))}>H2</button>
      <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} style={btnStyle(editor.isActive("heading", { level: 3 }))}>H3</button>
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} style={btnStyle(editor.isActive("bold"))}>B</button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} style={btnStyle(editor.isActive("italic"))}>I</button>
      <button type="button" onClick={() => editor.chain().focus().toggleUnderline().run()} style={btnStyle(editor.isActive("underline"))}>U</button>
      <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} style={btnStyle(editor.isActive("bulletList"))}>• List</button>
      <button type="button" onClick={() => editor.chain().focus().toggleOrderedList().run()} style={btnStyle(editor.isActive("orderedList"))}>1. List</button>
      <button type="button" onClick={() => editor.chain().focus().toggleBlockquote().run()} style={btnStyle(editor.isActive("blockquote"))}>Quote</button>
      <button type="button" onClick={addLink} style={btnStyle(editor.isActive("link"))}>🔗 Link</button>
      <button type="button" onClick={addImage} style={btnStyle(false)}>🖼 Image</button>
      <button type="button" onClick={() => editor.chain().focus().setHorizontalRule().run()} style={btnStyle(false)}>— HR</button>
    </div>
  );
}

export default function RichEditor({ content, onChange }: { content: string; onChange: (html: string) => void }) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({ inline: false }),
      Link.configure({ openOnClick: false }),
      Underline,
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Sync external content changes
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ border: "1px solid #D5D5D0", borderRadius: 10, padding: 16, background: "#fff" }}>
      <Toolbar editor={editor} />
      <EditorContent
        editor={editor}
        style={{ minHeight: 400 }}
      />
      <style>{`
        .tiptap { outline: none; font-family: 'Source Serif 4', Georgia, serif; font-size: 1rem; line-height: 1.75; color: #1A1A1A; }
        .tiptap h2 { font-size: 1.4rem; font-weight: 700; margin: 1.5rem 0 0.75rem; }
        .tiptap h3 { font-size: 1.15rem; font-weight: 600; margin: 1.25rem 0 0.5rem; }
        .tiptap p { margin: 0 0 1rem; }
        .tiptap ul, .tiptap ol { margin: 0 0 1rem; padding-left: 1.5rem; }
        .tiptap li { margin-bottom: 0.25rem; }
        .tiptap blockquote { border-left: 3px solid #1A1A1A; margin: 1rem 0; padding-left: 1rem; color: #6B6B6B; font-style: italic; }
        .tiptap a { color: #1A1A1A; text-decoration: underline; }
        .tiptap img { max-width: 100%; border-radius: 8px; margin: 1rem 0; }
        .tiptap hr { border: none; border-top: 1px solid #E5E5E0; margin: 1.5rem 0; }
      `}</style>
    </div>
  );
}
