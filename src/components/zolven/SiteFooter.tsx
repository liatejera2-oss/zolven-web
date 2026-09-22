import Link from "next/link";
import { ArrowRight, MessageSquareText } from "lucide-react";

const products = [
  ["ZOLVEN Opex", "/productos/opex"],
  ["ZOLVEN Hire", "/productos/hire"],
  ["ZOLVEN Jobs", "/productos/jobs"],
  ["ZOLVEN One", "/productos/one"],
];

const company = [
  ["Soluciones", "/soluciones"],
  ["Industrias", "/industrias"],
  ["Precios", "/precios"],
  ["Contacto", "/contacto"],
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07090B] text-white">
      <div className="mx-auto max-w-[1536px] px-5 py-12 sm:px-7 lg:px-14">
        <div className="grid gap-10 md:grid-cols-[1.25fr_.75fr_.75fr]">
          <div>
            <Link
              href="/"
              className="text-[30px] font-black leading-none tracking-[-0.065em]"
            >
              ZOLVEN
            </Link>
            <p className="mt-4 max-w-[360px] text-[12px] leading-[1.6] text-zinc-500">
              Business Technology para conectar personas, operaciones y crecimiento.
            </p>

            <Link
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 text-[12px] text-zinc-300 transition-colors hover:text-white"
            >
              <MessageSquareText size={14} />
              Contactar a ZOLVEN
            </Link>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-600">
              Productos
            </p>
            <div className="mt-4 space-y-3">
              {products.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-[11px] text-zinc-400 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-600">
              ZOLVEN
            </p>
            <div className="mt-4 space-y-3">
              {company.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-[11px] text-zinc-400 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>

            <Link
              href="/solicitar-demo"
              className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium text-white"
            >
              Solicitar demo <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-5 text-[8px] uppercase tracking-[0.24em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ZOLVEN</span>
          <span>Simplify · Connect · Empower</span>
          <span>ZOLVEN.COM</span>
        </div>
      </div>
    </footer>
  );
}
