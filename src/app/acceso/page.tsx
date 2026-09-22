import Link from "next/link";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Network, ShieldCheck, UserCheck, Users } from "lucide-react";
import { SiteHeader } from "@/components/zolven/SiteHeader";

const accessProducts = [
  {
    name: "ZOLVEN Opex",
    description: "Workforce Operations & Intelligence",
    href: "/productos/opex",
    icon: Users,
    accent: "bg-blue-600",
    soft: "bg-blue-500/10",
    text: "text-blue-300",
  },
  {
    name: "ZOLVEN Hire",
    description: "Recruiting Workspace",
    href: "/productos/hire",
    icon: UserCheck,
    accent: "bg-emerald-500",
    soft: "bg-emerald-500/10",
    text: "text-emerald-300",
  },
  {
    name: "ZOLVEN Jobs",
    description: "Talent Marketplace",
    href: "/productos/jobs",
    icon: BriefcaseBusiness,
    accent: "bg-violet-600",
    soft: "bg-violet-500/10",
    text: "text-violet-300",
  },
  {
    name: "ZOLVEN One",
    description: "Business Ecosystem Layer",
    href: "/productos/one",
    icon: Network,
    accent: "bg-gradient-to-br from-blue-400 to-blue-700",
    soft: "bg-blue-500/10",
    text: "text-blue-200",
  },
];

export default function AccessPage() {
  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      <div className="border-b border-white/[0.06] bg-[#0B0D11]">
        <SiteHeader dark />
      </div>

      <section className="mx-auto max-w-[1180px] px-5 py-14 sm:px-7 sm:py-20 lg:px-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[12px] text-zinc-500 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} /> Volver
        </Link>

        <div className="mt-10 max-w-[760px]">
          <p className="text-[10px] uppercase tracking-[0.28em] text-blue-300">ACCESO</p>
          <h1 className="mt-4 text-[42px] font-semibold leading-[.98] tracking-[-0.055em] sm:text-[56px]">
            Un punto de entrada para todo ZOLVEN.
          </h1>
          <p className="mt-5 max-w-[660px] text-[15px] leading-[1.6] text-zinc-400 sm:text-[17px]">
            Los entornos privados de producto se habilitarán durante la fase de implementación. Por ahora, este acceso centraliza la navegación hacia cada experiencia.
          </p>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {accessProducts.map(({ name, description, href, icon: Icon, accent, soft, text }) => (
            <Link
              key={name}
              href={href}
              className="group rounded-[24px] border border-white/[0.07] bg-white/[0.018] p-6 transition-colors hover:bg-white/[0.035]"
            >
              <div className="flex items-start justify-between">
                <div className={`grid size-10 place-items-center rounded-xl ${soft}`}>
                  <Icon size={18} className={text} />
                </div>
                <span className="rounded-full border border-white/[0.07] px-2.5 py-1 text-[7px] uppercase tracking-[0.18em] text-zinc-500">
                  Acceso en preparación
                </span>
              </div>

              <h2 className="mt-7 text-[24px] font-medium tracking-[-0.035em]">{name}</h2>
              <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-zinc-600">{description}</p>

              <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className={`text-[10px] font-medium ${text}`}>Ver producto</span>
                <ArrowRight size={14} className="text-zinc-600 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.015] p-4">
          <ShieldCheck size={17} className="mt-0.5 shrink-0 text-zinc-500" />
          <p className="text-[11px] leading-[1.6] text-zinc-500">
            No estamos habilitando autenticación real todavía porque la capa privada de producto aún está en desarrollo. Cuando esa fase comience, este será el punto de acceso unificado.
          </p>
        </div>
      </section>
    </main>
  );
}
