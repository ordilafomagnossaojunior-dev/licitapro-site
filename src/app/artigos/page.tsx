// src/app/artigos/page.tsx
import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import Link from "next/link";

type Article = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
};

async function getArticles(): Promise<Article[]> {
  const dir = path.join(process.cwd(), "content", "artigos");
  let files: string[] = [];
  try {
    files = await fs.readdir(dir);
  } catch {
    // se a pasta não existir, retorna vazio
    return [];
  }

  const mdxFiles = files.filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const items: Article[] = [];
  for (const file of mdxFiles) {
    const full = path.join(dir, file);
    const raw = await fs.readFile(full, "utf-8");
    const { data } = matter(raw);
    const slug = file.replace(/\.mdx?$/, "");

    items.push({
      slug,
      title: data.title ?? slug,
      description: data.description,
      date: data.date,
      tags: data.tags ?? [],
    });
  }

  // ordena por data desc, se existir
  items.sort((a, b) => {
    const da = a.date ? Date.parse(a.date) : 0;
    const db = b.date ? Date.parse(b.date) : 0;
    return db - da;
  });

  return items;
}

export const metadata = {
  title: "Artigos | LicitaPro",
  description:
    "Conteúdos práticos sobre licitações: ETP, TR, análise de riscos, pesquisa de preços e mais.",
};

export default async function ArtigosPage() {
  const articles = await getArticles();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Artigos</h1>
        <p className="mt-2 text-gray-600">
          Materiais práticos para elevar a qualidade das suas contratações
          públicas.
        </p>
      </header>

      {articles.length === 0 ? (
        <div className="rounded-xl border p-6">
          <p className="text-gray-600">
            Nenhum artigo publicado ainda. Crie arquivos{" "}
            <code className="rounded bg-gray-100 px-1 py-0.5">
              .mdx
            </code>{" "}
            em <code className="rounded bg-gray-100 px-1 py-0.5">
              content/artigos
            </code>{" "}
            para começar.
          </p>
        </div>
      ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {articles.map((a) => (
            <li
              key={a.slug}
              className="group rounded-2xl border p-6 transition hover:shadow-sm"
            >
              <Link href={`/artigos/${a.slug}`}>
                <h2 className="text-xl font-semibold group-hover:text-primary-700">
                  {a.title}
                </h2>
                {a.date && (
                  <p className="mt-1 text-sm text-gray-500">
                    {new Date(a.date).toLocaleDateString("pt-BR")}
                  </p>
                )}
                {a.description && (
                  <p className="mt-3 text-gray-700">{a.description}</p>
                )}
                {a.tags && a.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                <span className="mt-5 inline-block text-primary-700">
                  Ler artigo →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
