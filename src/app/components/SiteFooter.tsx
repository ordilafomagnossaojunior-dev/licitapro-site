// src/app/components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-lg">LicitaPro</h3>
          <p className="mt-2 text-gray-600">
            Excelência técnica e segurança jurídica em licitações públicas.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="mt-2 space-y-2 text-gray-700">
            <li>
              <Link href="/#servicos" className="hover:text-primary-700">
                Serviços
              </Link>
            </li>
            <li>
              <Link href="/#como-atuamos" className="hover:text-primary-700">
                Como atuamos
              </Link>
            </li>
            <li>
              <Link href="/#contato" className="hover:text-primary-700">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/para-empresas" className="hover:text-primary-700">
                Empresas
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contato</h4>
          <p className="mt-2 text-gray-700">
            <a
              href="mailto:contato@licitapro.pro"
              className="hover:text-primary-700"
            >
              contato@licitapro.pro
            </a>
            <br />
            Brasil • Atendimento nacional
          </p>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LicitaPro. Todos os direitos reservados.
      </div>
    </footer>
  );
}
