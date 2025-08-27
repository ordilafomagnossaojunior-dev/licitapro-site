export default function DownloadCTA({
  href,
  label = "Baixar",
  subtitle,
}: { href: string; label?: string; subtitle?: string }) {
  return (
    <a
      href={href}
      className="mt-6 inline-flex items-center rounded-xl bg-primary-600 px-5 py-3 font-semibold text-white hover:bg-primary-700 transition"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
      {subtitle && <span className="ml-3 opacity-80 text-sm">{subtitle}</span>}
    </a>
  );
}

