import TiltCard from "./TiltCard";

const items = [
  {
    title: "Análises & ETP/TR",
    excerpt:
      "Apoio técnico-jurídico na leitura de ETP, TR e matriz de riscos com foco em viabilidade, competitividade e segurança.",
    details: (
      <ul className="ml-4 list-disc space-y-1">
        <li>Checklist de diligências e impugnação fundamentada</li>
        <li>Ajustes de matriz de riscos e premissas do edital</li>
        <li>Memória de cálculo e documentação probatória</li>
      </ul>
    ),
  },
  {
    title: "Propostas & Disputa",
    excerpt:
      "Modelos de planilhas, estratégia de lances e registros formais durante a sessão pública.",
    details: (
      <ul className="ml-4 list-disc space-y-1">
        <li>Scripts de lance e limites por etapa</li>
        <li>Rastreabilidade de custos (técnica e preço)</li>
        <li>Pedidos de diligência objetivos e numerados</li>
      </ul>
    ),
  },
  {
    title: "Execução Contratual",
    excerpt:
      "Kickoff com fiscal, medição e gestão de aditivos/reequilíbrio baseados em evidência.",
    details: (
      <ul className="ml-4 list-disc space-y-1">
        <li>RDO/diário, evidências fotográficas e SLAs</li>
        <li>Reequilíbrio econômico-financeiro (provas e cálculo)</li>
        <li>Encerramento e lições aprendidas</li>
      </ul>
    ),
  },
];

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">
        Segurança jurídica e eficiência em licitações
      </h2>
      <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
        Lei 14.133/2021 • planejamento • disputa • execução contratual
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((it) => (
          <TiltCard
            key={it.title}
            title={it.title}
            excerpt={it.excerpt}
            details={it.details}
          />
        ))}
      </div>
    </section>
  );
}
