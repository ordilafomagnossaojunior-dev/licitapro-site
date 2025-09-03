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
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-brand-800 dark:bg-brand-900/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Logo + nome */}
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-[#173A8C] font-bold text-white">
            LP
          </div>
          <div className="leading-5">
            <div className="font-semibold text-gray-900 dark:text-gray-100">LicitaPro</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Assessoria técnica e jurídica em licitações
            </div>
          </div>
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-900 transition-colors hover:text-primary-700 dark:text-gray-100 dark:hover:text-primary-300"
            >
              {l.label}
            </Link>
          ))}

          <Link
            href="/artigos"
            className="text-gray-900 transition-colors hover:text-primary-700 dark:text-gray-100 dark:hover:text-primary-300"
          >
            Artigos
          </Link>

          <Link
            href="/para-empresas"
            className="font-semibold text-gray-900 transition-colors hover:text-primary-700 dark:text-gray-100 dark:hover:text-primary-300"
          >
            Empresas
          </Link>

          <Link
            href="/#contato"
            className="rounded-2xl border border-gray-300 px-5 py-2 text-sm text-gray-900 transition-colors hover:bg-gray-50 dark:border-brand-700 dark:text-gray-100 dark:hover:bg-brand-800"
          >
            Fale conosco
          </Link>
        </nav>

        {/* Botão hambúrguer (mobile) */}
        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((s) => !s)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-900 md:hidden dark:border-brand-700 dark:text-gray-100"
        >
          <span aria-hidden>☰</span>
        </button>
      </div>

      {/* Menu mobile (FORÇANDO texto escuro no claro) */}
      {open && (
  <div className="md:hidden border-t border-gray-200 bg-white dark:border-brand-800 dark:bg-brand-900">
    {/* 🔽 FORÇA cor base em TODO o conteúdo do menu */}
    <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-gray-900 dark:text-gray-100">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          onClick={() => setOpen(false)}
          className="py-2 text-base font-medium hover:text-primary-700 dark:hover:text-primary-300"
        >
          {l.label}
        </Link>
      ))}

      <Link
        href="/artigos"
        onClick={() => setOpen(false)}
        className="py-2 text-base font-medium hover:text-primary-700 dark:hover:text-primary-300"
      >
        Artigos
      </Link>

      <Link
        href="/para-empresas"
        onClick={() => setOpen(false)}
        className="py-2 text-base font-semibold hover:text-primary-700 dark:hover:text-primary-300"
      >
        Empresas
      </Link>

      <Link
        href="/#contato"
        onClick={() => setOpen(false)}
        className="mt-2 inline-block rounded-2xl border border-gray-300 px-5 py-2 text-sm font-semibold hover:bg-gray-50 dark:border-brand-700 dark:hover:bg-brand-800"
      >
        Fale conosco
      </Link>
    </nav>
  </div>
)}
    </header>
  );
}
