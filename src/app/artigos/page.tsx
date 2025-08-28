// src/app/artigos/page.tsx
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import type { Metadata } from "next";
import Link from "next/link";

// ⚠️ Import RELATIVO (saindo de app/artigos -> app -> src -> components)
import DownloadCTA from "../../components/DownloadCTA";

export const metadata: Metadata = {
  title: "Artigos | LicitaPro",
  description:
    "Conteúdos práticos sobre contratações públicas, Lei 14.133/21, ETP, TR, análise de riscos, recursos e mais.",
};

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  // cover?: string;      // opcional: se for usar imagem
  // coverWidth?: number; // opcional
  // coverHeight?: number;// opcional
};

type PostIndex = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  // cover?: string;
  // coverWidth?: number;
  // coverHeight?: number;
};

async function listPosts(): Promise<PostIndex[]> {
  const dir = path.join(process.cwd(), "content", "artigos");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const mdxFiles = files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts: PostIndex[] = [];
  for (const file of mdxFiles) {
    const slug = file.replace(/\.mdx?$/, "");
    const full = path.join(dir, file);
    try {
      const raw = await fs.readFile(full, "utf-8");
      const { data } = matter(raw);
      const fm = (data || {}) as Frontmatter;
      posts.push({
        slug,
        title: fm.title ?? slug.replace(/-/g, " "),
        description: fm.description,
        date: fm.date,
        // cover: fm.cover,
        // coverWidth: fm.coverWidth,
        // coverHeight: fm.coverHeight,
      });
    } catch {
      // ignora arquivo inválido
    }
  }

  // ordena por data desc (quando existir)
  posts.sort((a, b) => {
    const da = a.date ? new Date(a.date).getTime() : 0;
    const db = b.date ? new Date(b.date).getTime() : 0;
    return db - da;
  });

  return posts;
}

export default async function ArticlesIndexPage() {
  const posts = await listPosts();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Artigos</h1>
        <p className="mt-2 text-gray-600">
          Guias e atualizações para você executar projetos com segurança e
          performance.
        </p>
      </header>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/artigos/${p.slug}`}
            className="rounded-2xl border p-5 transition hover:shadow-sm"
          >
            {/* Se quiser capa, veja bloco opcional abaixo */}
            <h2 className="text-lg font-semibold">{p.title}</h2>
            {p.date && (
              <p className="mt-1 text-xs text-gray-500">
                {new Date(p.date).toLocaleDateString("pt-BR")}
              </p>
            )}
            {p.description && (
              <p className="mt-3 text-sm text-gray-700 line-clamp-3">
                {p.description}
              </p>
            )}
            <span className="mt-3 inline-block text-sm font-semibold text-primary-700">
              Ler artigo →
            </span>
          </Link>
        ))}
      </div>

      {/* CTA download do checklist */}
      <div className="mt-10">
        <DownloadCTA href="/downloads/checklist-14133.pdf" />
      </div>
    </main>
  );
}
