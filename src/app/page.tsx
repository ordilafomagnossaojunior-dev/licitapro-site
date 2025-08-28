import ContactForm from "./components/ContactForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-primary-900 text-white grid place-items-center font-bold">
              LP
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-lg">LicitaPro</p>
              <p className="text-xs text-gray-500 -mt-0.5">
                Assessoria técnica e jurídica em licitações
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="hover:text-primary-700">Serviços</a>
            <a href="#diferenciais" className="hover:text-primary-700">Diferenciais</a>
            <a href="#processo" className="hover:text-primary-700">Como atuamos</a>
            <a href="/para-empresas" className="hover:text-gray-700">Empresas</a>
            <a href="#contato" className="hover:text-primary-700">Contato</a>
          </nav>
          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-2xl border border-primary-900 px-4 py-2 text-sm font-medium hover:bg-primary-900 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Fale conosco
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 px-3 py-1 text-xs mb-4">
              <span className="h-2 w-2 rounded-full bg-primary-600" />
              Conformidade total com a Lei nº 14.133/2021
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Segurança jurídica e eficiência em{" "}
              <span className="underline decoration-4 decoration-primary-700">licitações</span>
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              Do ETP ao contrato: estudos técnicos, TR, matriz de riscos, análise de preços
              e defesa do interesse público — com rigor jurídico e visão prática de mercado.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contato"
                className="rounded-2xl bg-primary-600 text-white px-5 py-3 text-sm font-semibold hover:bg-primary-700 transition focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Solicitar proposta
              </a>
              <a
                href="#servicos"
                className="rounded-2xl border border-primary-200 px-5 py-3 text-sm font-semibold hover:border-primary-600 transition"
              >
                Ver serviços
              </a>
            </div>

            {/* faixa institucional (compromisso em vermelho) */}
            <div className="mt-6 rounded-xl bg-danger-50 border border-danger-200 p-4 text-sm text-danger-700">
              Compromisso com legalidade, transparência e defesa do interesse público.
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border border-primary-200 shadow-sm p-6">
              <div className="h-full w-full rounded-2xl bg-primary-50 grid place-items-center text-center px-6">
                <div>
                  <p className="text-sm uppercase tracking-wide text-gray-500">Licitações públicas</p>
                  <h3 className="text-2xl font-semibold mt-1">
                    ETP • TR • Análise de Riscos • Pesquisa de Preços • Editais • Contratos
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Modelos e entregáveis claros, prontos para auditoria. Foco em economicidade e integridade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">Serviços</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">
          Consultoria ponta a ponta com base na Lei nº 14.133/2021, IN SEGES/ME nº 65/2021 e jurisprudência do TCU/TCE.
        </p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Estudo Técnico Preliminar (ETP)",
              desc: "Diagnóstico de necessidade, alternativas, justificativas e análise de viabilidade com base legal e melhores práticas.",
            },
            {
              title: "Termo de Referência (TR)",
              desc: "Descrição do objeto, requisitos de desempenho e qualidade, critérios de medição e pagamento e matriz de avaliação.",
            },
            {
              title: "Análise de Riscos",
              desc: "Identificação, classificação e tratamento de riscos conforme art. 18, §1º, VI da Lei 14.133 e IN 65/2021.",
              danger: true,
            },
            {
              title: "Pesquisa de Preços e Orçamentação",
              desc: "Metodologias saneadas, mercado comparado, economia de escala e documentação para auditoria.",
            },
            {
              title: "Gestão de Editais e Contratos",
              desc: "Elaboração, revisão e blindagem jurídica de minutas, aditivos e termos de referência.",
            },
            {
              title: "Defesas e Pareceres",
              desc: "Pareceres técnicos e jurídicos, respostas a pedidos de esclarecimento e defesas perante controle externo.",
            },
          ].map((s) => (
            <div
              key={s.title}
              className={`rounded-3xl border p-6 hover:shadow-sm transition ${
                s.danger ? "border-danger-200 bg-danger-50/40" : ""
              }`}
            >
              <h3 className={`font-semibold text-lg ${s.danger ? "text-danger-700" : ""}`}>{s.title}</h3>
              <p className={`mt-2 text-sm ${s.danger ? "text-danger-600" : "text-gray-600"}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold">Diferenciais</h2>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {[
              { h: "Rigor jurídico", p: "Aplicação estrita da Lei 14.133/2021 e alinhamento com TCU/TCE." },
              { h: "Entregáveis auditáveis", p: "Documentos padronizados, referências legais e trilhas de decisão." },
              { h: "Agilidade com qualidade", p: "Prazos realistas e comunicação transparente." },
              { h: "Foco em economicidade", p: "Análises de mercado e formação de preços com critérios saneados." },
              { h: "Gestão de riscos", p: "Mapeamento, mitigação e monitoramento contínuo." },
              { h: "Suporte contínuo", p: "Acompanhamento de impugnações, recursos e auditorias." },
            ].map((d) => (
              <div key={d.h} className="rounded-3xl border p-6 bg-white">
                <h3 className="font-semibold">{d.h}</h3>
                <p className="mt-2 text-gray-600">{d.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section id="processo" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-bold">Como atuamos</h2>
        <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          {[
            { n: 1, t: "Imersão e diagnóstico", p: "Briefing, levantamento de requisitos e definição de objetivos." },
            { n: 2, t: "Estratégia e planejamento", p: "Matriz de riscos, cronograma e governança do processo." },
            { n: 3, t: "Produção técnica", p: "ETP, TR, pesquisa de preços e minutas com base legal." },
            { n: 4, t: "Acompanhamento", p: "Suporte em sessão pública, impugnações, recursos e auditorias." },
          ].map((x) => (
            <li key={x.t} className="rounded-3xl border p-6">
              <div className="h-9 w-9 rounded-full bg-primary-900 text-white grid place-items-center font-semibold">
                {x.n}
              </div>
              <h3 className="mt-4 font-semibold">{x.t}</h3>
              <p className="mt-2 text-gray-600">{x.p}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Depoimentos (placeholder) */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-3xl font-bold">O que dizem nossos clientes</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6 text-sm">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-3xl border p-6 bg-white">
                <p className="italic text-gray-700">
                  “Texto de depoimento do cliente será inserido aqui. Resultados, economia gerada e segurança jurídica.”
                </p>
                <p className="mt-3 font-semibold">Nome do Cliente</p>
                <p className="text-gray-500">Cargo • Órgão/Empresa</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contato */}
      <section id="contato" className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-3xl border p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Pronto para elevar suas contratações públicas?</h2>
            <p className="mt-3 text-gray-600">
              Envie uma mensagem com sua necessidade. Responderemos com um plano objetivo, cronograma e orçamento.
            </p>
            <ul className="mt-4 text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>Conformidade com Lei nº 14.133/2021</li>
              <li>Metodologia auditável e transparente</li>
              <li>Entrega ágil com padrão profissional</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-semibold">LicitaPro</p>
            <p className="mt-2 text-gray-600">
              Excelência técnica e segurança jurídica em licitações públicas.
            </p>
          </div>
          <div>
            <p className="font-semibold">Links</p>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a href="#servicos" className="hover:text-primary-700">Serviços</a></li>
              <li><a href="#processo" className="hover:text-primary-700">Como atuamos</a></li>
              <li><a href="#contato" className="hover:text-primary-700">Contato</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">Contato</p>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li><a href="mailto:contato@licitapro.pro">contato@licitapro.pro</a></li>
              <li>Brasil • Atendimento nacional</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-8">
          © {new Date().getFullYear()} LicitaPro. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
