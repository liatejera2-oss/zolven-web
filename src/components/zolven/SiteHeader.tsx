"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, Search, X } from "lucide-react";

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

const searchItems = [
  { label: "ZOLVEN Opex", detail: "Operaciones de personas", href: "/productos/opex" },
  { label: "ZOLVEN Hire", detail: "Reclutamiento", href: "/productos/hire" },
  { label: "ZOLVEN Jobs", detail: "Talento y oportunidades", href: "/productos/jobs" },
  { label: "ZOLVEN One", detail: "Ecosistema conectado", href: "/productos/one" },
  { label: "Soluciones", detail: "Explora por necesidad de negocio", href: "/soluciones" },
  { label: "Industrias", detail: "Casos por industria", href: "/industrias" },
  { label: "Precios", detail: "Planes de ZOLVEN Opex", href: "/precios" },
  { label: "Contacto", detail: "Consultas generales y comerciales", href: "/contacto" },
  { label: "Solicitar demo", detail: "Habla con ZOLVEN", href: "/solicitar-demo" },
];

export function SiteHeader({ dark = false }: { dark?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const baseText = dark ? "text-white" : "text-[#09090B]";
  const subtle = dark ? "text-zinc-400" : "text-zinc-600";
  const mobilePanel = dark
    ? "border-white/[0.08] bg-[#0B0D11] text-white"
    : "border-black/10 bg-white text-[#09090B]";

  const filteredItems = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchItems;
    return searchItems.filter((item) =>
      `${item.label} ${item.detail}`.toLowerCase().includes(normalized)
    );
  }, [query]);

  useEffect(() => {
    if (!searchOpen) return;

    function handleKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
      }
    }

    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [searchOpen]);

  return (
    <>
      <header className={`relative z-40 ${baseText}`}>
        <div className="mx-auto flex h-[76px] max-w-[1536px] items-center px-5 sm:px-7 lg:px-14">
          <Link
            href="/"
            className="text-[34px] font-black leading-none tracking-[-0.065em] sm:text-[40px]"
          >
            ZOLVEN
          </Link>

          <nav className="ml-14 hidden items-center gap-9 text-[13px] font-medium lg:flex">
            <div className="group relative flex h-[76px] items-center">
              <Link
                href="/#products"
                className="flex items-center gap-1.5 transition-opacity hover:opacity-60"
              >
                Productos <ChevronDown size={12} />
              </Link>

              <div className="pointer-events-none absolute left-[-18px] top-[58px] w-[310px] pt-[18px] opacity-0 transition-opacity duration-150 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,.18)]">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="flex items-center rounded-xl px-3 py-3 text-[#0B0D12] transition-colors hover:bg-zinc-100 focus:bg-zinc-100 focus:outline-none"
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
            </div>

            <Link href="/soluciones" className="transition-opacity hover:opacity-60">
              Soluciones
            </Link>
            <Link href="/industrias" className="transition-opacity hover:opacity-60">
              Industrias
            </Link>
            <Link href="/precios" className="transition-opacity hover:opacity-60">
              Precios
            </Link>
            <Link href="/contacto" className="transition-opacity hover:opacity-60">
              Contacto
            </Link>
          </nav>

          <div className="ml-auto hidden items-center gap-6 text-white lg:flex">
            <button
              type="button"
              aria-label="Buscar en ZOLVEN"
              onClick={() => setSearchOpen(true)}
              className="transition-opacity hover:opacity-60"
            >
              <Search size={18} strokeWidth={1.7} />
            </button>

            <div className="group relative flex h-[76px] items-center">
              <button className="flex items-center gap-1 text-[13px]">
                ES <ChevronDown size={13} />
              </button>
              <div className="pointer-events-none absolute right-[-10px] top-[58px] pt-[18px] opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="w-[150px] rounded-xl border border-black/10 bg-white p-2 text-[#0B0D12] shadow-[0_18px_50px_rgba(0,0,0,.16)]">
                  <div className="rounded-lg bg-zinc-100 px-3 py-2 text-[11px] font-medium">Español</div>
                  <div className="mt-1 px-3 py-2 text-[10px] text-zinc-400">English · Próximamente</div>
                </div>
              </div>
            </div>

            <Link href="/acceso" className="text-[13px] transition-opacity hover:opacity-60">
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

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className={`ml-auto grid size-10 place-items-center rounded-full border lg:hidden ${
              dark
                ? "border-white/15 bg-white/[0.04] text-white"
                : "border-black/10 bg-white/80 text-black"
            }`}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div
          className={`absolute left-3 right-3 top-[68px] overflow-hidden rounded-2xl border shadow-[0_24px_70px_rgba(0,0,0,.20)] transition-all duration-200 lg:hidden ${mobilePanel} ${
            mobileOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="p-3">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setSearchOpen(true);
              }}
              className={`mb-2 flex h-10 w-full items-center rounded-xl border px-3 text-left text-[11px] ${
                dark ? "border-white/[0.08] bg-white/[0.03] text-zinc-400" : "border-black/[0.08] bg-zinc-50 text-zinc-500"
              }`}
            >
              <Search size={14} className="mr-2" /> Buscar en ZOLVEN
            </button>

            <p className={`px-3 pb-2 pt-1 text-[9px] uppercase tracking-[0.22em] ${subtle}`}>
              Productos
            </p>

            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center rounded-xl px-3 py-3 transition-colors ${
                  dark ? "hover:bg-white/[0.05]" : "hover:bg-zinc-100"
                }`}
              >
                <span className={`mr-3 size-3 rounded-md ${product.dot}`} />
                <span>
                  <span className="block text-[12px] font-semibold">{product.name}</span>
                  <span className={`mt-0.5 block text-[9px] font-normal ${subtle}`}>
                    {product.description}
                  </span>
                </span>
                <ArrowRight size={13} className="ml-auto opacity-40" />
              </Link>
            ))}

            <div className={`my-2 h-px ${dark ? "bg-white/[0.07]" : "bg-black/[0.07]"}`} />

            {[
              ["Soluciones", "/soluciones"],
              ["Industrias", "/industrias"],
              ["Precios", "/precios"],
              ["Contacto", "/contacto"],
              ["Iniciar sesión", "/acceso"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center justify-between rounded-xl px-3 py-3 text-[12px] font-medium ${
                  dark ? "hover:bg-white/[0.05]" : "hover:bg-zinc-100"
                }`}
              >
                {label}
                <ArrowRight size={13} className="opacity-40" />
              </Link>
            ))}

            <Link
              href="/solicitar-demo"
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex h-11 items-center justify-center gap-3 rounded-full bg-[#09090B] text-[12px] font-medium text-white"
            >
              Solicitar demo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/55 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              setSearchOpen(false);
              setQuery("");
            }
          }}
        >
          <div className="mx-auto mt-[8vh] w-full max-w-[620px] overflow-hidden rounded-2xl border border-white/10 bg-[#0B0D11] shadow-[0_30px_100px_rgba(0,0,0,.45)]">
            <div className="flex h-14 items-center border-b border-white/[0.07] px-4">
              <Search size={17} className="text-zinc-500" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar productos, soluciones o páginas..."
                className="ml-3 flex-1 bg-transparent text-[13px] text-white outline-none placeholder:text-zinc-600"
              />
              <button
                type="button"
                aria-label="Cerrar búsqueda"
                onClick={() => {
                  setSearchOpen(false);
                  setQuery("");
                }}
                className="grid size-8 place-items-center rounded-lg text-zinc-500 hover:bg-white/[0.05] hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            <div className="max-h-[440px] overflow-y-auto p-2">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setSearchOpen(false);
                      setQuery("");
                    }}
                    className="flex items-center rounded-xl px-3 py-3 transition-colors hover:bg-white/[0.05]"
                  >
                    <div>
                      <p className="text-[12px] font-medium text-white">{item.label}</p>
                      <p className="mt-0.5 text-[10px] text-zinc-500">{item.detail}</p>
                    </div>
                    <ArrowRight size={14} className="ml-auto text-zinc-600" />
                  </Link>
                ))
              ) : (
                <div className="px-3 py-10 text-center text-[11px] text-zinc-600">
                  No encontramos resultados para “{query}”.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
