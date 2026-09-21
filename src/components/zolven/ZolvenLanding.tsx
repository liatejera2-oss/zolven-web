"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/zolven/SiteHeader";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Contact,
  FolderKanban,
  Play,
  Search,
  ShoppingBag,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";

const products = [
  {
    key: "jobs",
    brand: "Jobs",
    href: "/productos/jobs",
    label: "OPORTUNIDADES SIN LÍMITES",
    title: "El talento que impulsa tu futuro.",
    description:
      "Explora oportunidades reales, conecta con empresas y da el siguiente paso en tu carrera.",
    primary: "Explorar empleos",
    secondary: "Crear perfil",
    note: "Más oportunidades para ti",
    gradient:
      "bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,.48),transparent_35%),linear-gradient(145deg,#160B25_5%,#24103D_55%,#12091E_100%)]",
    border: "border-violet-500/50",
    accent: "bg-violet-600",
  },
  {
    key: "hire",
    brand: "Hire",
    href: "/productos/hire",
    label: "GRANDES EQUIPOS EMPIEZAN AQUÍ",
    title: "Encuentra, evalúa, contrata.",
    description:
      "El software de reclutamiento que te ayuda a atraer, evaluar y contratar al mejor talento, más rápido y con mayor precisión.",
    primary: "Solicitar demo",
    secondary: "Ver tour",
    note: "Talento que hace crecer tu negocio",
    gradient:
      "bg-[radial-gradient(circle_at_80%_20%,rgba(5,150,105,.36),transparent_37%),linear-gradient(145deg,#061C18_0%,#07372B_55%,#061B17_100%)]",
    border: "border-emerald-400/60",
    accent: "bg-emerald-500",
  },
  {
    key: "opex",
    brand: "Opex",
    href: "/productos/opex",
    label: "OPERACIONES QUE IMPULSAN RESULTADOS",
    title: "Gestiona personas. Opera con claridad.",
    description:
      "Una plataforma completa para administrar personas, tiempo, nómina, ausencias, cumplimiento y más, todo en un mismo lugar.",
    primary: "Solicitar demo",
    secondary: "Ver tour",
    note: "Operaciones más fuertes",
    gradient:
      "bg-[radial-gradient(circle_at_83%_22%,rgba(37,99,235,.50),transparent_37%),linear-gradient(145deg,#06152C_0%,#082B61_55%,#07162D_100%)]",
    border: "border-blue-500/60",
    accent: "bg-blue-600",
  },
];

const ecosystem = [
  ["Opex", "Operaciones de personas", Users, "bg-blue-600"],
  ["Hire", "Reclutamiento", UserCheck, "bg-emerald-500"],
  ["Jobs", "Talento", BriefcaseBusiness, "bg-violet-600"],
  ["Finance", "Operaciones financieras", WalletCards, "bg-rose-500"],
  ["CRM", "Clientes", Contact, "bg-orange-500"],
  ["Projects", "Gestión de trabajo", FolderKanban, "bg-amber-500"],
  ["Analytics", "Inteligencia de negocio", BarChart3, "bg-cyan-500"],
  ["Commerce", "Comercio digital", ShoppingBag, "bg-sky-500"],
] as const;

export function ZolvenLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#09090B] text-white">
      <Hero />
      <section id="products" className="grid grid-cols-1 lg:grid-cols-3">
        {products.map(({ key, ...product }) => (
          <ProductCard key={key} {...product} />
        ))}
      </section>
      <EcosystemBar />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[390px] overflow-hidden bg-[#F7F8FA] text-[#09090B] sm:min-h-[350px] lg:min-h-[313px]">
      <div className="absolute inset-y-0 left-[39%] right-[10%] hidden overflow-hidden bg-[#0A0B0E] lg:block [clip-path:polygon(19%_0,100%_0,80%_100%,0_100%)]">
        <Image
          src="/images/hero/hero-woman.webp"
          alt=""
          fill
          priority
          sizes="51vw"
          className="object-cover object-[58%_40%] opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,14,.92)_0%,rgba(10,11,14,.34)_34%,rgba(10,11,14,.08)_67%,rgba(10,11,14,.36)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_30%,rgba(53,92,255,.08),transparent_44%)]" />
      </div>

      <SiteHeader />

      <div className="relative z-20 mx-auto min-h-[314px] max-w-[1536px] px-5 pb-8 sm:min-h-[274px] sm:px-7 lg:h-[237px] lg:min-h-0 lg:px-14 lg:pb-0">
        <div className="max-w-[660px] pt-5 sm:pt-4">
          <h1 className="max-w-[640px] text-[36px] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-[42px] lg:text-[45px]">
            Personas, operaciones<br />y crecimiento conectados.
          </h1>

          <p className="mt-3 max-w-[470px] text-[16px] leading-[1.4] text-zinc-600 sm:text-[18px]">
            Tecnología para empresas que quieren operar mejor hoy y construir lo que viene.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 sm:mt-3">
            <button className="flex h-10 items-center gap-2 rounded-full bg-[#09090B] px-5 text-sm font-medium text-white">
              Conoce Zolven <ArrowRight size={16} />
            </button>
            <button className="flex h-10 items-center gap-3 rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-700">
              Ver video
              <span className="grid size-6 place-items-center rounded-full border border-zinc-300">
                <Play size={11} fill="currentColor" />
              </span>
            </button>
          </div>
        </div>

        <div className="absolute right-10 top-[98px] hidden items-center gap-8 lg:flex">
          <div className="text-[11px] uppercase leading-5 tracking-[0.32em] text-zinc-600">
            Simplify<br />Connect<br />Empower
          </div>
          <div className="h-14 w-px bg-zinc-300" />
          <div className="text-[11px] uppercase leading-5 tracking-[0.32em] text-zinc-600">
            A More<br />Human<br />Business
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  href,
  brand,
  label,
  title,
  description,
  primary,
  secondary,
  note,
  gradient,
  border,
  accent,
}: {
  href: string;
  brand: string;
  label: string;
  title: string;
  description: string;
  primary: string;
  secondary: string;
  note: string;
  gradient: string;
  border: string;
  accent: string;
}) {
  return (
    <article className={`relative min-h-[620px] overflow-hidden border sm:min-h-[600px] lg:min-h-[585px] ${border} ${gradient}`}>
      <div className="relative z-20 px-5 pt-6 sm:px-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`size-8 rounded-xl ${accent} shadow-lg`} />
            <Link href={href} className="text-[25px] font-semibold tracking-[-0.04em] transition-opacity hover:opacity-80"><span className="font-bold">ZOLVEN</span> <span className="font-light">{brand}</span></Link>
          </div>
          <div className="hidden max-w-[155px] text-right text-[8px] uppercase leading-[1.65] tracking-[0.32em] text-white/80 sm:block">{label}</div>
        </div>

        <Link href={href} className="mt-7 block max-w-[330px] text-[27px] font-medium sm:text-[29px] leading-[0.98] tracking-[-0.04em] transition-opacity hover:opacity-80">{title}</Link>
        <p className="mt-3 max-w-[320px] text-[13px] leading-[1.4] text-white/75">{description}</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link href={href} className={`flex h-9 items-center gap-5 rounded-full px-5 text-[11px] font-medium ${accent}`}>{primary}<ArrowRight size={13} /></Link>
          <Link href={`${href}#tour`} className="flex h-9 items-center rounded-full border border-white/45 px-5 text-[11px]">{secondary}</Link>
        </div>
      </div>

      <div className="absolute right-[-5px] top-[64px] z-10 hidden h-[200px] w-[48%] sm:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,.035),transparent_45%)]" />
        <span className="absolute bottom-2 right-4 rotate-[-7deg] max-w-[120px] text-right text-[10px] italic leading-tight text-white/90">{note}</span>
      </div>

      <DashboardPreview brand={brand} />
    </article>
  );
}

function DashboardPreview({ brand }: { brand: string }) {
  if (brand === "Jobs") {
    const jobs = [
      ["Product Designer", "Remote · Product", "Hace 2 h"],
      ["Operations Analyst", "Panamá · Operaciones", "Hace 5 h"],
      ["Customer Success Specialist", "Híbrido · Customer Success", "Hoy"],
    ];

    return (
      <div className="absolute bottom-0 left-3 right-3 z-30 h-[290px] overflow-hidden rounded-t-[18px] border border-violet-300/20 bg-[#0A0B10]/95 shadow-2xl backdrop-blur-xl">
        <div className="flex h-10 items-center border-b border-white/[0.06] px-4">
          <div className="flex items-center gap-2 text-[10px] font-semibold">
            <div className="size-4 rounded-md bg-violet-600" />
            ZOLVEN <span className="font-normal text-zinc-400">Jobs</span>
          </div>
          <div className="ml-auto flex items-center gap-3 text-[7px] text-zinc-500">
            <span>Oportunidades</span>
            <span>Guardados</span>
            <span>Perfil</span>
          </div>
        </div>

        <div className="grid h-[250px] grid-cols-[76px_1fr] sm:grid-cols-[92px_1fr]">
          <aside className="border-r border-white/[0.06] p-2 text-[7px] text-zinc-500">
            <div className="mb-1 rounded-md bg-violet-500/15 px-2 py-1.5 text-violet-300">
              Para ti
            </div>
            {["Explorar", "Empresas", "Guardados", "Aplicaciones"].map((item) => (
              <div key={item} className="mb-1 rounded-md px-2 py-1.5">
                {item}
              </div>
            ))}
            <div className="mt-4 border-t border-white/[0.05] pt-3">
              <p className="px-2 text-[6px] uppercase tracking-[0.18em] text-zinc-600">Tu perfil</p>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <div className="h-full w-[78%] rounded-full bg-violet-500" />
              </div>
              <p className="mt-1 px-2 text-[6px] text-zinc-600">78% completo</p>
            </div>
          </aside>

          <div className="p-3">
            <div className="flex h-8 items-center rounded-lg border border-white/[0.07] bg-white/[0.035] px-3">
              <Search size={11} className="text-zinc-500" />
              <span className="ml-2 text-[7px] text-zinc-500">Cargo, empresa o palabra clave</span>
              <span className="ml-auto rounded-md bg-violet-500/15 px-2 py-1 text-[6px] text-violet-300">
                Buscar
              </span>
            </div>

            <div className="mt-2 flex gap-1.5">
              {["Remoto", "Tecnología", "Tiempo completo"].map((filter) => (
                <span
                  key={filter}
                  className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2 py-1 text-[6px] text-zinc-400"
                >
                  {filter}
                </span>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between">
              <p className="text-[11px] font-medium">Empleos recomendados</p>
              <span className="text-[6px] text-violet-300">Ver todos</span>
            </div>

            <div className="mt-2 space-y-1.5">
              {jobs.map(([title, meta, time], index) => (
                <div
                  key={title}
                  className="flex items-center rounded-lg border border-white/[0.05] bg-white/[0.025] px-2.5 py-2"
                >
                  <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-violet-500/15">
                    <BriefcaseBusiness size={11} className="text-violet-300" />
                  </div>
                  <div className="ml-2 min-w-0">
                    <p className="truncate text-[8px] font-medium text-white">{title}</p>
                    <p className="mt-0.5 text-[6px] text-zinc-500">{meta}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-[6px] text-zinc-600">{time}</p>
                    <span className={`mt-1 inline-block size-1.5 rounded-full ${index === 0 ? "bg-violet-400" : "bg-white/20"}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (brand === "Hire") {
    const funnel = [
      ["48", "Candidatos"],
      ["12", "Screening"],
      ["6", "Entrevistas"],
      ["3", "Finalistas"],
      ["1", "Oferta"],
    ];

    const columns = [
      {
        title: "Screening",
        count: "12",
        candidate: ["AL", "Ana López", "92%", "Portfolio revisado"],
      },
      {
        title: "Entrevistas",
        count: "6",
        candidate: ["CM", "Carlos Méndez", "88%", "Entrevista técnica"],
      },
      {
        title: "Finalistas",
        count: "3",
        candidate: ["LS", "Laura Santos", "95%", "Lista para decisión"],
      },
    ];

    return (
      <div className="absolute bottom-0 left-3 right-3 z-30 h-[290px] overflow-hidden rounded-t-[18px] border border-emerald-300/20 bg-[#07100D]/95 shadow-2xl backdrop-blur-xl">
        <div className="flex h-10 items-center border-b border-white/[0.06] px-4">
          <div className="flex items-center gap-2 text-[10px] font-semibold">
            <div className="size-4 rounded-md bg-emerald-500" />
            ZOLVEN <span className="font-normal text-zinc-400">Hire</span>
          </div>
          <div className="ml-auto flex items-center gap-3 text-[7px] text-zinc-500">
            <span>Vacantes</span>
            <span>Candidatos</span>
            <span>Entrevistas</span>
          </div>
        </div>

        <div className="h-[250px] p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-medium text-white">Pipeline · Product Designer</p>
              <p className="mt-0.5 text-[6px] text-zinc-500">Vacante activa · 48 candidatos</p>
            </div>
            <span className="rounded-full bg-emerald-500/12 px-2.5 py-1 text-[6px] text-emerald-300">
              + Candidato
            </span>
          </div>

          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {funnel.map(([value, label], index) => (
              <div
                key={label}
                className={`relative rounded-lg border px-2 py-1.5 ${
                  index === 0
                    ? "border-emerald-400/20 bg-emerald-500/10"
                    : "border-white/[0.05] bg-white/[0.025]"
                }`}
              >
                <strong className="text-[10px] font-medium text-white">{value}</strong>
                <p className="mt-0.5 text-[5.5px] text-zinc-500">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {columns.map(({ title, count, candidate }, index) => (
              <div
                key={title}
                className="rounded-xl border border-white/[0.055] bg-white/[0.018] p-2"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[7px] font-medium text-zinc-300">{title}</p>
                  <span className="rounded-full bg-white/[0.04] px-1.5 py-0.5 text-[5.5px] text-zinc-500">
                    {count}
                  </span>
                </div>

                <div className="mt-2 rounded-lg border border-white/[0.055] bg-[#0B1713] p-2">
                  <div className="flex items-center">
                    <div className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-[7px] font-semibold text-emerald-300">
                      {candidate[0]}
                    </div>
                    <div className="ml-2 min-w-0">
                      <p className="truncate text-[7.5px] font-medium text-white">{candidate[1]}</p>
                      <p className="mt-0.5 text-[5.5px] text-zinc-500">Product Designer</p>
                    </div>
                    <p className={`ml-auto text-[7px] font-medium ${index === 2 ? "text-emerald-300" : "text-zinc-300"}`}>
                      {candidate[2]}
                    </p>
                  </div>

                  <div className="mt-2 border-t border-white/[0.05] pt-1.5">
                    <p className="text-[5.5px] text-zinc-500">{candidate[3]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const attendance = [78, 92, 88, 96, 90, 97, 94];

  return (
    <div className="absolute bottom-0 left-3 right-3 z-30 h-[290px] overflow-hidden rounded-t-[18px] border border-blue-300/20 bg-[#08111F]/95 shadow-2xl backdrop-blur-xl">
      <div className="flex h-10 items-center border-b border-white/[0.06] px-4">
        <div className="flex items-center gap-2 text-[10px] font-semibold">
          <div className="size-4 rounded-md bg-blue-600" />
          ZOLVEN <span className="font-normal text-zinc-400">Opex</span>
        </div>
        <div className="ml-auto flex items-center gap-3 text-[7px] text-zinc-500">
          <span>Personas</span>
          <span>Tiempo</span>
          <span>Nómina</span>
        </div>
      </div>

      <div className="grid h-[250px] grid-cols-[76px_1fr] sm:grid-cols-[92px_1fr]">
        <aside className="border-r border-white/[0.06] p-2 text-[7px] text-zinc-500">
          <div className="mb-1 rounded-md bg-blue-500/15 px-2 py-1.5 text-blue-300">
            Resumen
          </div>
          {["Personas", "Tiempo", "Ausencias", "Nómina", "Cumplimiento"].map((item) => (
            <div key={item} className="mb-1 rounded-md px-2 py-1.5">
              {item}
            </div>
          ))}
          <div className="mt-3 border-t border-white/[0.05] pt-3">
            <p className="px-2 text-[6px] uppercase tracking-[0.18em] text-zinc-600">
              Cierre de nómina
            </p>
            <p className="mt-1.5 px-2 text-[7px] font-medium text-zinc-300">28 sep</p>
            <p className="mt-0.5 px-2 text-[6px] text-blue-300">7 días restantes</p>
          </div>
        </aside>

        <div className="p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[12px] font-medium text-white">Hola, María</p>
              <p className="mt-0.5 text-[6px] text-zinc-500">Resumen operativo · Hoy</p>
            </div>
            <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-[6px] text-blue-300">
              Operación estable
            </span>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[
              ["248", "Personas activas", "+4 este mes"],
              ["96%", "Asistencia hoy", "238 presentes"],
              ["12", "Alertas abiertas", "3 prioritarias"],
            ].map(([value, label, detail], index) => (
              <div
                key={label}
                className={`rounded-lg border px-2 py-2 ${
                  index === 1
                    ? "border-blue-400/20 bg-blue-500/10"
                    : "border-white/[0.05] bg-white/[0.025]"
                }`}
              >
                <strong className="text-[11px] font-medium text-white">{value}</strong>
                <p className="mt-0.5 text-[5.8px] text-zinc-400">{label}</p>
                <p className="mt-1 text-[5.2px] text-zinc-600">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[1.15fr_.85fr] gap-2">
            <div className="rounded-xl border border-white/[0.055] bg-white/[0.02] p-2">
              <div className="flex items-center justify-between">
                <p className="text-[7px] font-medium text-zinc-300">Asistencia · últimos 7 días</p>
                <span className="text-[5.5px] text-blue-300">Prom. 91%</span>
              </div>
              <div className="mt-2 flex h-[54px] items-end gap-1.5">
                {attendance.map((value, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center justify-end">
                    <div className="flex h-[42px] w-full items-end rounded-sm bg-white/[0.025]">
                      <div
                        className="w-full rounded-sm bg-blue-500/70"
                        style={{ height: `${Math.max(18, Math.round(value * 0.42))}px` }}
                      />
                    </div>
                    <span className="mt-1 text-[4.8px] text-zinc-600">
                      {["L", "M", "X", "J", "V", "S", "D"][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="rounded-xl border border-white/[0.055] bg-white/[0.02] p-2">
                <div className="flex items-center justify-between">
                  <p className="text-[7px] font-medium text-zinc-300">Próximas ausencias</p>
                  <span className="text-[5.5px] text-blue-300">5 esta semana</span>
                </div>
                <div className="mt-2 space-y-1.5">
                  {[
                    ["LT", "Lia Tejera", "23–24 sep"],
                    ["AM", "Ana Méndez", "26 sep"],
                  ].map(([initials, name, date]) => (
                    <div key={name} className="flex items-center">
                      <div className="grid size-5 place-items-center rounded-full bg-blue-500/15 text-[5.5px] font-semibold text-blue-300">
                        {initials}
                      </div>
                      <div className="ml-1.5 min-w-0">
                        <p className="truncate text-[6px] text-zinc-300">{name}</p>
                        <p className="text-[5px] text-zinc-600">{date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-amber-300/10 bg-amber-400/[0.04] px-2 py-1.5">
                <div>
                  <p className="text-[5.8px] font-medium text-zinc-300">Cumplimiento</p>
                  <p className="mt-0.5 text-[5px] text-zinc-600">3 documentos por vencer</p>
                </div>
                <span className="text-[6px] text-amber-300">Revisar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EcosystemBar() {
  return (
    <section className="border-t border-white/[0.06] bg-[#090B0E]">
      <div className="mx-auto flex max-w-[1536px] flex-col px-9 py-5 xl:flex-row xl:items-center">
        <div className="flex min-w-[280px] items-center gap-5 xl:border-r xl:border-white/20 xl:pr-9">
          <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-blue-300 to-blue-700"><div className="size-2 rounded-full bg-white" /></div>
          <div><h3 className="text-[26px] font-semibold tracking-[-0.04em]">ZOLVEN <span className="font-light">ONE</span></h3><p className="text-[10px] text-zinc-400">Todo tu negocio. Conectado.</p></div>
        </div>

        <div className="mt-5 grid flex-1 grid-cols-4 gap-5 xl:mt-0 xl:grid-cols-8 xl:px-8">
          {ecosystem.map(([label, description, Icon, color]) => (
            <div key={label} className="text-center">
              <div className={`mx-auto grid size-7 place-items-center rounded-lg ${color}`}><Icon size={14} /></div>
              <p className="mt-1 text-[9px] font-medium">{label}</p>
              <p className="text-[7px] leading-tight text-zinc-500">{description}</p>
            </div>
          ))}
        </div>

        <div className="hidden border-l border-white/20 pl-9 xl:block"><p className="w-[155px] text-[9px] uppercase leading-[1.8] tracking-[0.3em] text-zinc-300">Un ecosistema<br />para lo que viene.</p></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07090B]">
      <div className="mx-auto grid h-11 max-w-[1536px] grid-cols-[1fr_auto] items-center px-5 sm:grid-cols-3 sm:px-10">
        <span className="text-[14px] font-bold tracking-[-0.04em]">ZOLVEN</span>
        <span className="hidden text-center text-[7px] uppercase tracking-[0.48em] text-zinc-500 sm:block">Simplify · Connect · Empower</span>
        <span className="text-right text-[7px] uppercase tracking-[0.34em] text-zinc-500">Zolven.com</span>
      </div>
    </footer>
  );
}
