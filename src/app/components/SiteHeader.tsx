import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#173A8C] text-white grid place-items-center font-bold">LP</div>
          <div className="leading-5">
            <div className="font-semibold">LicitaPro</div>
            <div className="text-xs text-gray-500">Assessoria técnica e jurídica em licitações</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/#servicos" className="hover:text-primary-700">Serviços</Link>
          <Link href="/#diferenciais" className="hover:text-primary-700">Diferenciais</Link>
          <Link href="/#como-atuamos" className="hover:text-primary-700">Como atuamos</Link>
          <Link href="/contact" className="hover:text-primary-700">Contato</Link>
          <Link href="/para-empresas" className="hover:text-primary-700 font-semibold">Empresas</Link>
        </nav>

        <Link
          href="/#contato"
          className="ml-6 rounded-2xl border px-4 py-2 text-sm font-semibold hover:bg-gray-50"
        >
          Fale conosco
        </Link>
      </div>
    </header>
  );
}
