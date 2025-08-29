// src/app/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        {/* Coluna 1 – Marca */}
        <div>
          {/* ✅ para rotas internas use Link */}
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#173A8C] grid place-items-center font-bold text-white">
              LP
            </div>
            <div>
              <div className="font-semibold">LicitaPro</div>
              <div className="text-sm text-gray-600">
                Excelência técnica e segurança jurídica em licitações públicas.
              </div>
            </div>
          </Link>
        </div>

        {/* Coluna 2 – Links */}
        <nav className="text-gray-800">
          <div className="font-semibold mb-2">Links</div>
          <ul className="space-y-2">
            <li>
              <Link href="/#servicos" className="hover:underline">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/#como-atuamos" className="hover:underline">
                Como atuamos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/para-empresas" className="hover:underline">
                Para empresas
              </Link>
            </li>
          </ul>
        </nav>

        {/* Coluna 3 – Contato */}
        <div>
          <div className="font-semibold mb-2">Contato</div>
          <div className="space-y-2 text-gray-800">
            {/* Para e-mail/telefone pode usar <a> normalmente */}
            <a href="mailto:contato@licitapro.pro" className="hover:underline">
              contato@licitapro.pro
            </a>
            <div>Brasil • Atendimento nacional</div>
          </div>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-gray-600">
        © {year} LicitaPro. Todos os direitos reservados.
      </div>
    </footer>
  );
}
