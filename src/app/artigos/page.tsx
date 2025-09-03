// src/app/artigos/[slug]/page.tsx
import type { Metadata } from "next";

type Params = { slug: string };

// Se você tem um loader de MDX/Markdown, importe/ajuste aqui
// import { getArticleBySlug } from "@/lib/content";

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;

  // Exemplo – troque por dados reais do artigo, se quiser
  return {
    title: `Artigo: ${slug} | LicitaPro`,
    description: `Leitura do artigo ${slug}`,
  };
}

export default async function ArticlePage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;

  // Exemplo simples (render estático). Substitua pelo seu renderer de MDX.
  // const article = await getArticleBySlug(slug);
  // return <ArticleRenderer content={article.content} />

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-2xl font-bold">Artigo: {slug}</h1>
      <p className="mt-3 text-gray-700">
        Aqui você renderiza o conteúdo do artigo “{slug}”.
      </p>
    </main>
  );
}
