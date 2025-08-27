import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

// Componente CTA de captura
function DownloadCTA() {
  return (
    <div className="p-6 my-10 bg-blue-50 border rounded-xl text-center">
      <h3 className="text-xl font-bold">🎁 Checklist Exclusivo da Lei 14.133</h3>
      <p className="mt-2 text-gray-700">
        Baixe gratuitamente o guia prático para ETP, TR e Análise de Riscos.
      </p>
      <a
        href="/checklists/checklist-14133.pdf"
        className="inline-block mt-4 px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
      >
        Quero meu checklist
      </a>
    </div>
  );
}

export default async function ArtigoPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content", "artigos", `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 prose prose-blue">
      <MDXRemote source={source} components={{ DownloadCTA }} />
    </article>
  );
}
