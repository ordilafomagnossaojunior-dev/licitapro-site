// src/app/page.tsx
import Link from "next/link";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 pb-20">
      {/* HERO */}
      <section className="pt-10 md:pt-14">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-gray-700">
          <span className="inline-block h-2 w-2 rounded-full bg-primary-600" />
          Conformidade total com a Lei nº 14.133/2021
        </div>

        <div className="mt-6 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Segurança jurídica e
              <br />
              eficiência em{" "}
              <span className="underline decoration-4 decoration-primary-600">
                licitações
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg text-gray-700">
              Do ETP ao contrato: estudos técnicos, TR, matriz de riscos,
              análise de preços e defesa do interesse público — com rigor
              jurídico e visão prática de mercado.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#contato"
                className="rounded-2xl bg-primary-600 px-6 py-3 text-sm text-white font-semibold hover:bg-primary-700 text-center"
              >
                Solicitar proposta
              </Link>

              <Link
                href="/#servicos"
                className="rounded-2xl border px-6 py-3 text-sm font-semibold hover:bg-gray-50 text-center"
              >
                Ver serviços
              </Link>
            </div>

            <p className="mt-6 rounded-xl border bg-red-50 px-4 py-3 text-sm text-red-800">
              Compromisso com legalidade, transparência e defesa do interesse
              público.
            </p>
          </div>

          <div className="rounded-3xl border bg-gradient-to-br from-white to-blue-50 p-6 md:p-8">
            <h3 className="text-center text-sm font-semibold text-gray-600">
              LICITAÇÕES PÚBLICAS
            </h3>
            <p className="mt-4 text-center text-2xl font-semibold">
              ETP • TR • Análise de Riscos • Pesquisa de Preços • Editais •
              Contratos
            </p>
            <p className="mt-4 text-gray-700 text-center">
              Modelos e entregáveis claros, prontos para auditoria. Foco em
              economicidade e integridade.
            </p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="mt-16">
        <h2 className="text-2xl font-bold">Serviços</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Acompanhe o ciclo completo da contratação — do planejamento à execução
          contratual.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Planejamento",
              d: "ETP, TR e matriz de riscos com base técnica sólida e aderência normativa.",
            },
            {
              t: "Seleção do fornecedor",
              d: "Análise de editais, impugnações, diligências e suporte jurídico durante o certame.",
            },
            {
              t: "Contratos e execução",
              d: "Minutas, termos de referência e conformidade ao longo do vínculo.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="diferenciais" className="mt-16">
        <h2 className="text-2xl font-bold">Diferenciais</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Entregáveis auditáveis, prazos realistas e visão de resultado para o
          órgão e a sociedade.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Rigor jurídico + prática",
              d: "Aplicação consistente da Lei 14.133/2021 sem perder objetividade.",
            },
            {
              t: "Transparência total",
              d: "Fluxos claros, templates versionados e trilha de auditoria.",
            },
            {
              t: "Time responsivo",
              d: "Atendimento ágil, comunicação simples e compromisso com prazos.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border p-6">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMO ATUAMOS */}
      <section id="como-atuamos" className="mt-16">
        <h2 className="text-2xl font-bold">Como atuamos</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Passo a passo transparente — do kickoff à entrega final.
        </p>

        <ol className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            { n: 1, t: "Kickoff", d: "Alinhamento de escopo, prazos e responsáveis." },
            { n: 2, t: "Execução", d: "Produção técnica e jurídica com checkpoints." },
            { n: 3, t: "Validação", d: "Ajustes finais e validação com a equipe interna." },
            { n: 4, t: "Entrega", d: "Documentos prontos para auditoria e continuidade." },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl border p-6">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-gray-700">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA PARA EMPRESAS */}
      <section className="mt-16 rounded-3xl border bg-gradient-to-br from-white to-gray-50 p-6 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold">
              Empresas que vendem para o governo
            </h2>
            <p className="mt-2 text-gray-700">
              Radar de editais, impugnações, propostas, recursos e gestão do
              contrato — sob medida.
            </p>
          </div>

          <div className="flex gap-3 md:justify-end">
            <Link
              href="/para-empresas"
              className="rounded-2xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700"
            >
              Ver soluções para Empresas
            </Link>

            <Link
              href="/downloads/checklist-14133.pdf"
              className="rounded-2xl border px-6 py-3 text-sm font-semibold hover:bg-gray-50"
            >
              Baixar checklist 14.133
            </Link>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="mt-16">
        <h2 className="text-2xl font-bold">Fale conosco</h2>
        <p className="mt-2 max-w-2xl text-gray-700">
          Envie sua necessidade. Respondemos com um plano objetivo, cronograma e
          orçamento.
        </p>

        <div className="mt-6 rounded-2xl border p-6 md:p-8">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
