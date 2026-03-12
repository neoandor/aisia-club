import { articles, getArticleBySlug } from "@/lib/articles";
import ArticleClient from "./client";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const staticArticle = getArticleBySlug(slug);

  return <ArticleClient slug={slug} fallback={staticArticle || null} />;
}
