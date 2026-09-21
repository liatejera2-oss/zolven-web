import Link from "next/link";
import { ArrowRight, ChevronDown, Search } from "lucide-react";

const products = [
  {
    name: "ZOLVEN Opex",
    description: "Workforce Operations & Intelligence",
    href: "/productos/opex",
    dot: "bg-blue-600",
  },
  {
    name: "ZOLVEN Hire",
    description: "Recruiting workspace",
    href: "/productos/hire",
    dot: "bg-emerald-500",
  },
  {
    name: "ZOLVEN Jobs",
    description: "Talent marketplace",
    href: "/productos/jobs",
    dot: "bg-violet-600",
  },
  {
    name: "ZOLVEN One",
    description: "Business ecosystem layer",
    href: "/productos/one",
    dot: "bg-gradient-to-br from-blue-300 to-blue-700",
  },
];

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const baseText = dark ? "text-white" : "text-[#09090B]";
  const subtle = dark ? "text-zinc-400" : "text-zinc-600";

  return (
    <header className={`relative z-40 ${baseText}`}>
      <div className="mx-auto flex h-[76px] max-w-[1536px] items-center px-7 lg:px-14">
        <Link href="/" className="text-[40px] font-black leading-none tracking-[-0.065em]">
          ZOLVEN
        </Link>

        <nav className="ml-14 hidden items-center gap-9 text-[13px] font-medium lg:flex">
          <div className="group relative">
            <Link
              href="/#products"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-60"
            >
              Productos <ChevronDown size={12} />
            </Link>

            <div className="pointer-events-none absolute left-[-18px] top-[28px] w-[310px] translate-y-1 rounded-2xl border border-black/10 bg-white p-2 opacity-0 shadow-[0_24px_70px_rgba(0,0,0,.18)] transition-all duration-150 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="flex items-center rounded-xl px-3 py-3 text-[#0B0D12] transition-colors hover:bg-zinc-100"
                >
                  <span className={`mr-3 size-3 rounded-md ${product.dot}`} />
                  <span>
                    <span className="block text-[12px] font-semibold">{product.name}</span>
                    <span className="mt-0.5 block text-[10px] font-normal text-zinc-500">
                      {product.description}
                    </span>
                  </span>
                  <ArrowRight size={13} className="ml-auto text-zinc-400" />
                </Link>
              ))}
            </div>
          </div>

          <Link href="/#solutions" className="transition-opacity hover:opacity-60">
            Soluciones
          </Link>
          <Link href="/#industries" className="transition-opacity hover:opacity-60">
            Industrias
          </Link>
          <Link href="/#resources" className="transition-opacity hover:opacity-60">
            Recursos
          </Link>
          <Link href="/#pricing" className="transition-opacity hover:opacity-60">
            Precios
          </Link>
        </nav>

        <div className={`ml-auto hidden items-center gap-6 lg:flex ${dark ? "text-white" : "text-white"}`}>
          <button aria-label="Buscar">
            <Search size={18} strokeWidth={1.7} />
          </button>
          <button className="flex items-center gap-1 text-[13px]">
            ES <ChevronDown size={13} />
          </button>
          <Link href="/#login" className="text-[13px]">
            Iniciar sesión
          </Link>
          <Link
            href="/solicitar-demo"
            className="flex h-10 items-center gap-2 rounded-full border border-white/20 bg-black/45 px-5 text-[12px] text-white backdrop-blur-sm"
          >
            Solicitar demo <ArrowRight size={14} />
          </Link>
        </div>

        <div className="ml-9 hidden pl-8 xl:block">
          <p className={`text-[9px] uppercase leading-[1.8] tracking-[0.36em] ${subtle}`}>
            Business<br />Technology<br />For A Brighter<br />Tomorrow
          </p>
        </div>
      </div>
    </header>
  );
}
