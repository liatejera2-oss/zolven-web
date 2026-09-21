"use client";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronDown,
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
      <section className="grid grid-cols-1 lg:grid-cols-3">
        {products.map(({ key, ...product }) => (
          <ProductCard key={key} {...product} />
        ))}
      </section>
      <EcosystemBar />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="relative z-30 text-[#09090B]">
      <div className="mx-auto flex h-[76px] max-w-[1536px] items-center px-7 lg:px-14">
        <a href="#" className="text-[40px] font-black tracking-[-0.065em] leading-none">
          ZOLVEN
        </a>

        <nav className="ml-14 hidden items-center gap-9 text-[13px] font-medium lg:flex">
          {["Productos", "Soluciones", "Industrias", "Recursos", "Precios"].map((item) => (
            <a key={item} href="#" className="transition-opacity hover:opacity-50">
              {item}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-6 text-white lg:flex">
          <Search size={18} strokeWidth={1.7} />
          <button className="flex items-center gap-1 text-[13px]">
            ES <ChevronDown size={13} />
          </button>
          <a href="#" className="text-[13px]">
            Iniciar sesión
          </a>
          <button className="flex h-10 items-center gap-2 rounded-full border border-white/20 bg-black/45 px-5 text-[12px] text-white backdrop-blur-sm">
            Solicitar demo <ArrowRight size={14} />
          </button>
        </div>

        <div className="ml-9 hidden pl-8 xl:block">
          <p className="text-[9px] uppercase leading-[1.8] tracking-[0.36em] text-zinc-600">
            Business<br />Technology<br />For A Brighter<br />Tomorrow
          </p>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[313px] overflow-hidden bg-[#F7F8FA] text-[#09090B]">
      <div className="absolute inset-y-0 left-[39%] right-[10%] hidden overflow-hidden bg-[#0A0B0E] lg:block [clip-path:polygon(19%_0,100%_0,80%_100%,0_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(59,130,246,0.10),transparent_42%)]" />
        <div className="absolute inset-0 grid place-items-center text-[10px] uppercase tracking-[0.30em] text-white/20">
          /images/hero/hero-woman.webp
        </div>
      </div>

      <Header />

      <div className="relative z-20 mx-auto h-[237px] max-w-[1536px] px-7 lg:px-14">
        <div className="max-w-[660px] pt-4">
          <h1 className="max-w-[640px] text-[42px] font-semibold leading-[0.98] tracking-[-0.045em] lg:text-[45px]">
            Personas, operaciones<br />y crecimiento conectados.
          </h1>

          <p className="mt-2 max-w-[470px] text-[18px] leading-[1.35] text-zinc-600">
            Tecnología para empresas que quieren operar mejor hoy y construir lo que viene.
          </p>

          <div className="mt-3 flex flex-wrap gap-3">
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
    <article className={`relative min-h-[585px] overflow-hidden border ${border} ${gradient}`}>
      <div className="relative z-20 px-7 pt-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`size-8 rounded-xl ${accent} shadow-lg`} />
            <div className="text-[25px] font-semibold tracking-[-0.04em]"><span className="font-bold">ZOLVEN</span> <span className="font-light">{brand}</span></div>
          </div>
          <div className="max-w-[155px] text-right text-[8px] uppercase leading-[1.65] tracking-[0.32em] text-white/80">{label}</div>
        </div>

        <h2 className="mt-7 max-w-[330px] text-[29px] font-medium leading-[0.98] tracking-[-0.04em]">{title}</h2>
        <p className="mt-3 max-w-[320px] text-[13px] leading-[1.4] text-white/75">{description}</p>

        <div className="mt-4 flex gap-3">
          <button className={`flex h-9 items-center gap-5 rounded-full px-5 text-[11px] font-medium ${accent}`}>{primary}<ArrowRight size={13} /></button>
          <button className="h-9 rounded-full border border-white/45 px-5 text-[11px]">{secondary}</button>
        </div>
      </div>

      <div className="absolute right-[-5px] top-[58px] z-10 h-[290px] w-[48%]">
        <div className="absolute inset-0 grid place-items-center text-[7px] uppercase tracking-[0.24em] text-white/10">{brand.toLowerCase()}-person.webp</div>
        <span className="absolute bottom-8 right-4 rotate-[-8deg] max-w-[120px] text-right text-[11px] italic leading-tight">{note}</span>
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
      <div className="absolute bottom-0 left-3 right-3 z-30 overflow-hidden rounded-t-[18px] border border-violet-300/20 bg-[#0A0B10]/95 shadow-2xl backdrop-blur-xl">
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

        <div className="grid min-h-[214px] grid-cols-[92px_1fr]">
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
    const stages = [
      ["48", "Candidatos"],
      ["12", "Screening"],
      ["6", "Entrevistas"],
      ["3", "Finalistas"],
      ["1", "Oferta"],
    ];

    const candidates = [
      ["AL", "Ana López", "Screening", "92%"],
      ["CM", "Carlos Méndez", "Entrevista", "88%"],
      ["LS", "Laura Santos", "Finalista", "95%"],
    ];

    return (
      <div className="absolute bottom-0 left-3 right-3 z-30 overflow-hidden rounded-t-[18px] border border-emerald-300/20 bg-[#08110E]/95 shadow-2xl backdrop-blur-xl">
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

        <div className="min-h-[214px] p-3">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[12px] font-medium text-white">Product Designer</p>
              <p className="mt-0.5 text-[6.5px] text-zinc-500">Pipeline de contratación · 48 candidatos</p>
            </div>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[6px] text-emerald-300">
              Vacante activa
            </span>
          </div>

          <div className="mt-3 grid grid-cols-5 gap-1.5">
            {stages.map(([value, label], index) => (
              <div
                key={label}
                className={`relative rounded-lg border px-2 py-2 ${
                  index === 0
                    ? "border-emerald-400/20 bg-emerald-500/10"
                    : "border-white/[0.05] bg-white/[0.025]"
                }`}
              >
                <strong className="text-[12px] font-medium text-white">{value}</strong>
                <p className="mt-0.5 text-[6px] text-zinc-500">{label}</p>
                {index < stages.length - 1 && (
                  <span className="absolute -right-1 top-1/2 h-px w-1.5 bg-emerald-400/20" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            {candidates.map(([initials, name, stage, score], index) => (
              <div
                key={name}
                className="rounded-xl border border-white/[0.055] bg-white/[0.025] p-2.5"
              >
                <div className="flex items-center">
                  <div className="grid size-7 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-[7px] font-semibold text-emerald-300">
                    {initials}
                  </div>
                  <div className="ml-2 min-w-0">
                    <p className="truncate text-[8px] font-medium text-white">{name}</p>
                    <p className="mt-0.5 text-[6px] text-zinc-500">Product Designer</p>
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between border-t border-white/[0.05] pt-2">
                  <span className="rounded-full bg-white/[0.04] px-2 py-1 text-[5.5px] text-zinc-400">
                    {stage}
                  </span>
                  <div className="text-right">
                    <p className={`text-[8px] font-medium ${index === 2 ? "text-emerald-300" : "text-zinc-300"}`}>
                      {score}
                    </p>
                    <p className="text-[5px] text-zinc-600">match</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute bottom-0 left-3 right-3 z-30 overflow-hidden rounded-t-2xl border border-white/20 bg-[#0B0E12]/95 shadow-2xl backdrop-blur-xl">
      <div className="flex h-10 items-center border-b border-white/[0.05] px-4">
        <div className="flex items-center gap-2 text-[10px] font-semibold">
          <div className="size-4 rounded-md bg-blue-600" />
          ZOLVEN <span className="font-normal text-zinc-400">{brand}</span>
        </div>
        <div className="ml-auto">
          <Search size={11} className="text-zinc-500" />
        </div>
      </div>
      <div className="grid min-h-[180px] grid-cols-[88px_1fr]">
        <aside className="border-r border-white/[0.06] p-2 text-[7px] text-zinc-400">
          {["Inicio", "Personas", "Tiempo", "Reportes", "Configuración"].map((item, index) => (
            <div
              key={item}
              className={`mb-1 rounded-md px-2 py-1.5 ${index === 0 ? "bg-blue-500/20 text-blue-300" : ""}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="p-3">
          <p className="text-[12px] font-medium">
            {brand === "Opex" ? "Hola, María" : "Pipeline · Product Designer"}
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[["248", "Personas"], ["96%", "Asistencia"], ["12", "Alertas"]].map(([value, label]) => (
              <div key={label} className="rounded-lg bg-white/[0.045] p-2">
                <strong className="text-[13px] font-medium">{value}</strong>
                <p className="text-[7px] text-zinc-500">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 h-[58px] rounded-xl bg-white/[0.035]" />
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
      <div className="mx-auto grid h-11 max-w-[1536px] grid-cols-3 items-center px-10">
        <span className="text-[14px] font-bold tracking-[-0.04em]">ZOLVEN</span>
        <span className="text-center text-[7px] uppercase tracking-[0.48em] text-zinc-500">Simplify · Connect · Empower</span>
        <span className="text-right text-[7px] uppercase tracking-[0.34em] text-zinc-500">Zolven.com</span>
      </div>
    </footer>
  );
}
