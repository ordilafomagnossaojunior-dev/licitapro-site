// src/app/para-empresas/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Para Empresas | LicitaPro",
  description:
    "Apoio completo para vender ao governo: prospecção de editais, habilitação, propostas, impugnações, recursos e gestão de contratos.",
};

const bullets = [
  "Radar de editais com filtros do seu nicho",
  "Análise rápida de viabilidade (go/no go)",
  "Impugnações e esclarecimentos estratégicos",
  "Propostas seguras e competitivas",
  "Recursos administrativos (quando cabível)",
  "Gestão do contrato e conformidade",
];

export default function ParaEmpresasPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      {/* HERO */}
      <section className="rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-8 md:p-12">
        <h1 className="text-3xl font-bold tracking-tight">
          Vender para o governo sem travar a operação
        </h1>
        <p className="mt-3 max-w-2xl text-gray-700">
          Cuidamos da parte técnica e jurídica para você focar no core do
          negócio. Da busca de editais até a gestão do contrato, com segurança e
          velocidade.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#contato"
            className="rounded-2xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
          >
            Quero uma triagem de oportunidades
          </Link>
          <Link
            href="/downloads/checklist-14133.pdf"
            className="rounded-2xl border px-6 py-3 text-sm font-semibold hover:bg-gray-50"
          >
            Baixar Checklist 14.133
          </Link>
        </div>
      </section>

      {/* PROPOSTA DE VALOR */}
      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Onde ajudamos mais</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-600" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Resultados que perseguimos</h2>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>• Menor risco de inabilitação por detalhe</li>
            <li>• Propostas mais robustas em menos tempo</li>
            <li>• Redução de custos internos na operação de vendas B2G</li>
            <li>• Melhor taxa de sucesso por edital atacado</li>
          </ul>
        </div>
      </section>

      {/* OFERTAS */}
      <section className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Radar sob medida",
            desc: "Receba editais filtrados por CNAE/keywords, com análise de viabilidade e prazos.",
          },
          {
            title: "Proposta express",
            desc: "Montagem de proposta com checklist de documentação e conferência final.",
          },
          {
            title: "Proteção jurídica",
            desc: "Impugnações, recursos e respostas a diligências quando necessário.",
          },
        ].map((c) => (
          <div key={c.title} className="rounded-2xl border p-6">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-2 text-gray-700">{c.desc}</p>
          </div>
        ))}
      </section>

      {/* CTA FINAL / CONTATO */}
      <section id="contato" className="mt-12 rounded-2xl border p-6">
        <h2 className="text-xl font-semibold">
          Vamos rodar uma triagem gratuita?
        </h2>
        <p className="mt-2 text-gray-700">
          Conte seu segmento e região. Em 24–48h, retornamos com oportunidades
          quentes (sem compromisso).
        </p>

        <Link
          href="/#contato" // ancora do seu formulário na home; ajuste se preferir uma página própria
          className="mt-4 inline-block rounded-2xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
        >
          Falar com especialista
        </Link>
      </section>
    </main>
  );
}
