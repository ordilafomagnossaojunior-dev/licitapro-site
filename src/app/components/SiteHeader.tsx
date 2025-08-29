// src/app/components/SiteHeader.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#servicos", label: "Serviços" },
    { href: "/#diferenciais", label: "Diferenciais" },
    { href: "/#como-atuamos", label: "Como atuamos" },
    { href: "/#contato", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        {/* Logo + nome */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-[#173A8C] grid place-items-center font-bold text-white">
            LP
          </div>
          <div className="leading-5">
            <div className="font-semibold">LicitaPro</div>
            <div className="text-xs text-gray-500">
              Assessoria técnica e jurídica em licitações
            </div>
          </div>
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-primary-700"
            >
              {l.label}
            </Link>
          ))}

          {/* Link fixo para a página de Empresas */}
          <Link 
            href="/artigos" 
            className="hover:text-primary-700"
          >
            Artigos
          </Link>

          <Link
            href="/para-empresas"
            className="hover:text-primary-700 font-semibold"
          >
            Empresas
          </Link>

          <Link
            href="/#contato"
            className="rounded-2xl border px-5 py-2 text-sm hover:bg-gray-50"
          >
            Fale conosco
          </Link>
        </nav>

        {/* Botão hambúrguer (mobile) */}
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border"
        >
          <span className="i">☰</span>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {l.label}
              </Link>
            ))}

            <Link
              href="/para-empresas"
              onClick={() => setOpen(false)}
              className="py-2 font-semibold"
            >
              Empresas
            </Link>

            <Link
              href="/#contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-2xl border px-5 py-2 text-sm hover:bg-gray-50"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
