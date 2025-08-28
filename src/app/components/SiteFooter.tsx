export default function SiteFooter() {
  const email = "contato@licitapro.pro"; // <- atualizado

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold text-lg">LicitaPro</div>
          <p className="mt-2 text-gray-600">
            Excelência técnica e segurança jurídica em licitações públicas.
          </p>
        </div>

        <div>
          <div className="font-semibold">Links</div>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li><a href="/#servicos" className="hover:underline">Serviços</a></li>
            <li><a href="/#como-atuamos" className="hover:underline">Como atuamos</a></li>
            <li><a href="/contact" className="hover:underline">Contato</a></li>
            <li><a href="/para-empresas" className="hover:underline">Empresas</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold">Contato</div>
          <p className="mt-2 text-gray-700">{email}</p>
          <p className="text-gray-700">Brasil • Atendimento nacional</p>
        </div>
      </div>
    </footer>
  );
}
