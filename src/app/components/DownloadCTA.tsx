"use client";

import Link from "next/link";

type Props = {
  href: string;
};

export default function DownloadCTA({ href }: Props) {
  return (
    <div className="rounded-2xl border bg-gray-50 p-6 text-center shadow-sm">
      <h3 className="text-lg font-semibold">
        📥 Baixe o Checklist da Lei 14.133/21
      </h3>
      <p className="mt-2 text-sm text-gray-600">
        Tenha sempre à mão os pontos essenciais para não errar nas licitações.
      </p>
      <Link
        href={href}
        className="mt-4 inline-block rounded-xl bg-primary-600 px-5 py-3 text-white font-semibold hover:bg-primary-700 transition"
      >
        Baixar agora
      </Link>
    </div>
  );
}
