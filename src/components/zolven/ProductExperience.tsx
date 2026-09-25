"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Layers3,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  WalletCards,
} from "lucide-react";
import { SiteHeader } from "@/components/zolven/SiteHeader";
import { SiteFooter } from "@/components/zolven/SiteFooter";

type ProductKey = "opex" | "hire" | "jobs" | "one";

type Tab = {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  metrics: Array<[string, string]>;
};

type ProductDepth = {
  title: string;
  description: string;
  items: string[];
};

type ProductConfig = {
  brand: string;
  descriptor: string;
  claim: string;
  intro: string;
  accent: string;
  accentText: string;
  accentSoft: string;
  border: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  workflow: string[];
  depthTitle: string;
  depthIntro: string;
  depth: ProductDepth[];
  tabs: Tab[];
};

const configs: Record<ProductKey, ProductConfig> = {
  opex: {
    brand: "ZOLVEN Opex",
    descriptor: "Workforce Operations & Intelligence",
    claim: "Run operations with clarity.",
    intro:
      "Centraliza personas, tiempo, ausencias, nómina, cumplimiento y analítica operativa en una sola capa de trabajo.",
    accent: "bg-blue-600",
    accentText: "text-blue-300",
    accentSoft: "bg-blue-500/10",
    border: "border-blue-400/20",
    primaryLabel: "Solicitar demo",
    primaryHref: "/solicitar-demo",
    secondaryLabel: "Ver producto",
    secondaryHref: "#tour",
    workflow: ["People", "Time & Leave", "Payroll", "Compliance", "Analytics"],
    depthTitle: "La operación diaria, conectada de principio a fin.",
    depthIntro:
      "Opex no es un conjunto de pantallas aisladas. Cada capacidad comparte contexto para reducir reprocesos y mejorar la lectura operativa.",
    depth: [
      {
        title: "People & estructura",
        description: "La base de información para operar con contexto y trazabilidad.",
        items: [
          "Expedientes y datos laborales centralizados",
          "Estructura organizacional y movimientos",
          "Documentos y cambios con historial",
        ],
      },
      {
        title: "Time, Leave & Payroll",
        description: "Los eventos que afectan la jornada llegan al siguiente proceso sin volver a capturarse.",
        items: [
          "Asistencia, jornadas e incidencias",
          "Saldos, solicitudes y aprobaciones de ausencias",
          "Preparación de nómina con contexto operativo",
        ],
      },
      {
        title: "Compliance",
        description: "Controles visibles antes de convertirse en problemas operativos.",
        items: [
          "Documentos y vencimientos",
          "Alertas y seguimiento de pendientes",
          "Trazabilidad para revisión y auditoría",
        ],
      },
      {
        title: "Analytics & performance",
        description: "Una lectura ejecutiva común para detectar desviaciones y tomar decisiones.",
        items: [
          "Indicadores de personas y asistencia",
          "Tendencias de ausencias y operación",
          "Métricas de productividad y desempeño",
        ],
      },
    ],
    tabs: [
      {
        label: "People",
        eyebrow: "PERSONAS",
        title: "Una fuente operativa para tu equipo.",
        description:
          "Expedientes, estructura organizacional, movimientos y datos críticos de cada colaborador con trazabilidad.",
        metrics: [["248", "Personas activas"], ["4", "Altas este mes"], ["99%", "Perfiles completos"]],
      },
      {
        label: "Time",
        eyebrow: "TIEMPO",
        title: "Control de asistencia sin fricción.",
        description:
          "Visualiza presencia, incidencias, jornadas y horas trabajadas para actuar antes de que aparezcan desviaciones.",
        metrics: [["96%", "Asistencia"], ["7", "Incidencias"], ["238", "Presentes hoy"]],
      },
      {
        label: "Leave",
        eyebrow: "AUSENCIAS",
        title: "Ausencias visibles antes de afectar la operación.",
        description:
          "Solicitudes, aprobaciones, calendarios y disponibilidad del equipo en un flujo único.",
        metrics: [["5", "Próximas"], ["3", "Pendientes"], ["2", "Aprobadas hoy"]],
      },
      {
        label: "Payroll",
        eyebrow: "NÓMINA",
        title: "Preparación de nómina conectada con la operación.",
        description:
          "Consolida incidencias, tiempo y movimientos para reducir reprocesos antes del cierre.",
        metrics: [["28 SEP", "Próximo cierre"], ["248", "Personas"], ["7 días", "Restantes"]],
      },
      {
        label: "Compliance",
        eyebrow: "CUMPLIMIENTO",
        title: "Riesgos operativos visibles y accionables.",
        description:
          "Documentos, vencimientos y controles críticos organizados para mantener la operación al día.",
        metrics: [["3", "Por vencer"], ["0", "Críticos"], ["98%", "Registros al día"]],
      },
      {
        label: "Analytics",
        eyebrow: "ANALYTICS",
        title: "De datos dispersos a decisiones operativas.",
        description:
          "Indicadores de personas, asistencia, ausencias y productividad en una lectura ejecutiva común.",
        metrics: [["96%", "Asistencia"], ["12", "Alertas"], ["5", "Ausencias próximas"]],
      },
    ],
  },
  hire: {
    brand: "ZOLVEN Hire",
    descriptor: "Recruiting Workspace",
    claim: "Encuentra, evalúa, contrata.",
    intro:
      "Gestiona vacantes, candidatos, entrevistas y decisiones de contratación desde un pipeline compartido.",
    accent: "bg-emerald-500",
    accentText: "text-emerald-300",
    accentSoft: "bg-emerald-500/10",
    border: "border-emerald-400/20",
    primaryLabel: "Solicitar demo",
    primaryHref: "/solicitar-demo",
    secondaryLabel: "Ver producto",
    secondaryHref: "#tour",
    workflow: ["Requisición", "Publicación", "Screening", "Entrevistas", "Oferta", "Contratación", "Opex"],
    depthTitle: "Del requerimiento de talento a una contratación lista para operar.",
    depthIntro:
      "Hire organiza el proceso completo para que responsables, evaluadores y candidatos avancen con el mismo contexto.",
    depth: [
      {
        title: "Requisiciones y vacantes",
        description: "Empieza con una necesidad aprobada y una búsqueda claramente definida.",
        items: [
          "Solicitud y aprobación de posiciones",
          "Responsables, prioridad y requisitos",
          "Publicación y seguimiento del estado",
        ],
      },
      {
        title: "Screening & pipeline",
        description: "Cada candidato avanza por etapas visibles y comparables.",
        items: [
          "Pipeline configurable por vacante",
          "Notas, evaluaciones y criterios de match",
          "Historial de decisiones por candidato",
        ],
      },
      {
        title: "Entrevistas & scorecards",
        description: "El equipo evalúa sobre una estructura común, no sobre mensajes dispersos.",
        items: [
          "Coordinación de entrevistas",
          "Feedback estructurado y scorecards",
          "Visibilidad de pendientes y próximos pasos",
        ],
      },
      {
        title: "Oferta y transición",
        description: "La contratación cierra Hire y prepara la continuidad hacia Opex.",
        items: [
          "Estado de oferta y decisión final",
          "Registro de contratación",
          "Transferencia de contexto del candidato al empleado",
        ],
      },
    ],
    tabs: [
      {
        label: "Vacantes",
        eyebrow: "VACANTES",
        title: "Cada búsqueda empieza con claridad.",
        description:
          "Crea roles, define responsables y centraliza el estado de cada proceso de selección.",
        metrics: [["8", "Vacantes activas"], ["3", "Prioritarias"], ["2", "Nuevas"]],
      },
      {
        label: "Pipeline",
        eyebrow: "PIPELINE",
        title: "Ve quién avanza y por qué.",
        description:
          "Mueve candidatos por etapas y conserva contexto, evaluaciones y decisiones en un solo flujo.",
        metrics: [["48", "Candidatos"], ["12", "Screening"], ["3", "Finalistas"]],
      },
      {
        label: "Candidatos",
        eyebrow: "CANDIDATOS",
        title: "Perfiles comparables, decisiones más consistentes.",
        description:
          "Reúne experiencia, notas, evaluaciones y match con la vacante sin perder historial.",
        metrics: [["48", "En proceso"], ["6", "Entrevistas"], ["1", "Oferta"]],
      },
      {
        label: "Entrevistas",
        eyebrow: "ENTREVISTAS",
        title: "Coordinación sin cadenas de mensajes.",
        description:
          "Agenda, registra feedback y alinea al equipo de contratación sobre cada candidato.",
        metrics: [["6", "Programadas"], ["3", "Hoy"], ["0", "Sin feedback"]],
      },
    ],
  },
  jobs: {
    brand: "ZOLVEN Jobs",
    descriptor: "Talent Marketplace",
    claim: "El talento que impulsa tu futuro.",
    intro:
      "Una experiencia para descubrir oportunidades, organizar aplicaciones y construir un perfil profesional visible.",
    accent: "bg-violet-600",
    accentText: "text-violet-300",
    accentSoft: "bg-violet-500/10",
    border: "border-violet-400/20",
    primaryLabel: "Explorar oportunidades",
    primaryHref: "#tour",
    secondaryLabel: "Crear perfil",
    secondaryHref: "/acceso",
    workflow: ["Descubrir", "Guardar", "Aplicar", "Dar seguimiento", "Actualizar perfil"],
    depthTitle: "Una experiencia de búsqueda que mantiene el contexto del candidato.",
    depthIntro:
      "Jobs está diseñado para ayudar a descubrir oportunidades, actuar sobre ellas y conservar seguimiento sin convertir la experiencia en un directorio de vacantes.",
    depth: [
      {
        title: "Descubrimiento relevante",
        description: "La búsqueda parte del rol, modalidad, área y preferencias profesionales.",
        items: [
          "Búsqueda y filtros por contexto",
          "Oportunidades guardadas",
          "Recomendaciones basadas en preferencias",
        ],
      },
      {
        title: "Aplicaciones organizadas",
        description: "Cada proceso conserva su estado y próximos pasos.",
        items: [
          "Aplicaciones activas en un solo lugar",
          "Seguimiento de entrevistas y avances",
          "Historial de oportunidades consideradas",
        ],
      },
      {
        title: "Perfil profesional",
        description: "La información del candidato se mantiene lista para futuras oportunidades.",
        items: [
          "Experiencia y habilidades",
          "Preferencias de trabajo",
          "Perfil reutilizable dentro del ecosistema",
        ],
      },
    ],
    tabs: [
      {
        label: "Explorar",
        eyebrow: "DESCUBRIR",
        title: "Oportunidades relevantes, sin ruido.",
        description:
          "Busca por rol, modalidad y área para encontrar posiciones alineadas con tu perfil.",
        metrics: [["24", "Recomendadas"], ["8", "Nuevas hoy"], ["6", "Remotas"]],
      },
      {
        label: "Guardados",
        eyebrow: "GUARDADOS",
        title: "Organiza oportunidades antes de aplicar.",
        description:
          "Conserva vacantes de interés y compáralas cuando estés listo para dar el siguiente paso.",
        metrics: [["7", "Guardadas"], ["3", "Prioridad"], ["2", "Cierran pronto"]],
      },
      {
        label: "Aplicaciones",
        eyebrow: "APLICACIONES",
        title: "Sigue el estado de cada proceso.",
        description:
          "Visualiza tus aplicaciones activas y los próximos pasos sin perder seguimiento.",
        metrics: [["5", "Activas"], ["2", "Entrevistas"], ["1", "Finalista"]],
      },
      {
        label: "Perfil",
        eyebrow: "PERFIL",
        title: "Un perfil que trabaja contigo.",
        description:
          "Mantén experiencia, habilidades y preferencias actualizadas para mejorar tus coincidencias.",
        metrics: [["78%", "Completado"], ["12", "Habilidades"], ["4", "Preferencias"]],
      },
    ],
  },
  one: {
    brand: "ZOLVEN One",
    descriptor: "Business Ecosystem Layer",
    claim: "Todo tu negocio. Conectado.",
    intro:
      "La capa común que conecta identidad, datos, permisos e integraciones entre los productos de ZOLVEN.",
    accent: "bg-gradient-to-br from-blue-400 to-blue-700",
    accentText: "text-blue-200",
    accentSoft: "bg-blue-500/10",
    border: "border-blue-300/20",
    primaryLabel: "Solicitar demo",
    primaryHref: "/solicitar-demo",
    secondaryLabel: "Ver ecosistema",
    secondaryHref: "#tour",
    workflow: ["Identidad", "Roles", "Datos compartidos", "Integraciones", "Automatización"],
    depthTitle: "La infraestructura común detrás de cada producto ZOLVEN.",
    depthIntro:
      "One evita que cada solución funcione como una isla. Define cómo se conectan usuarios, organizaciones, datos y servicios dentro del ecosistema.",
    depth: [
      {
        title: "Identidad & acceso",
        description: "Una sola base para entrar al ecosistema y controlar quién puede hacer qué.",
        items: [
          "Cuenta e identidad compartidas",
          "Roles y permisos por organización",
          "Base preparada para acceso empresarial",
        ],
      },
      {
        title: "Datos & gobierno",
        description: "El contexto relevante puede viajar entre productos sin duplicar procesos.",
        items: [
          "Modelo común de organización y usuario",
          "Trazabilidad de cambios críticos",
          "Reglas para compartir información entre productos",
        ],
      },
      {
        title: "Integraciones",
        description: "Una capa preparada para conectar servicios externos y nuevas líneas de producto.",
        items: [
          "Arquitectura orientada a APIs",
          "Conectores e integraciones empresariales",
          "Expansión hacia Finance, CRM, Projects y más",
        ],
      },
      {
        title: "Workflows & automation",
        description: "La automatización se plantea como capacidad transversal, no como otro silo.",
        items: [
          "Triggers y condiciones",
          "Acciones entre productos",
          "Flujos multietapa con trazabilidad",
        ],
      },
    ],
    tabs: [
      {
        label: "Ecosistema",
        eyebrow: "ECOSISTEMA",
        title: "Una sola experiencia entre productos.",
        description:
          "Opex, Hire, Jobs y futuras soluciones comparten una arquitectura común para reducir silos.",
        metrics: [["3", "Productos activos"], ["1", "Cuenta"], ["1", "Capa común"]],
      },
      {
        label: "Identidad",
        eyebrow: "IDENTIDAD",
        title: "Acceso coherente para cada usuario.",
        description:
          "Roles, organizaciones y permisos compartidos para entrar al ecosistema con una experiencia consistente.",
        metrics: [["1", "Identidad"], ["4", "Roles base"], ["100%", "Trazable"]],
      },
      {
        label: "Datos",
        eyebrow: "DATOS",
        title: "Contexto que viaja con la operación.",
        description:
          "Conecta información relevante entre productos sin duplicar procesos ni volver a capturar datos.",
        metrics: [["1", "Modelo común"], ["0", "Duplicación objetivo"], ["24/7", "Disponible"]],
      },
      {
        label: "Integraciones",
        eyebrow: "INTEGRACIONES",
        title: "Preparado para conectar el resto de tu stack.",
        description:
          "Una arquitectura diseñada para incorporar servicios empresariales y nuevas líneas de producto.",
        metrics: [["API", "Preparada"], ["SSO", "Planificado"], ["∞", "Extensible"]],
      },
    ],
  },
};

const productIcons: Record<ProductKey, typeof Users> = {
  opex: Users,
  hire: UserCheck,
  jobs: BriefcaseBusiness,
  one: Network,
};

const featureIcons = [Users, Clock3, CalendarDays, WalletCards, ShieldCheck, BarChart3];

export function ProductExperience({ product }: { product: ProductKey }) {
  const config = configs[product];
  const [active, setActive] = useState(0);
  const current = config.tabs[active];
  const ProductIcon = productIcons[product];

  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      <div className="border-b border-white/[0.06] bg-[#0B0D11]">
        <SiteHeader dark />
      </div>

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(53,92,255,.16),transparent_35%)]" />
        <div className="relative mx-auto grid max-w-[1536px] gap-10 px-5 py-14 sm:px-7 sm:py-20 lg:grid-cols-[.88fr_1.12fr] lg:gap-12 lg:px-14 lg:py-24">
          <div>
            <Link href="/#products" className="inline-flex items-center gap-2 text-[12px] text-zinc-500 transition-colors hover:text-white">
              <ArrowLeft size={14} /> Volver a productos
            </Link>

            <div className="mt-9 flex items-center gap-3 sm:mt-12">
              <div className={`grid size-11 place-items-center rounded-2xl ${config.accent}`}>
                <ProductIcon size={20} />
              </div>
              <div>
                <p className="text-[24px] font-semibold tracking-[-0.045em] sm:text-[28px]">{config.brand}</p>
                <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-500 sm:text-[11px] sm:tracking-[0.22em]">{config.descriptor}</p>
              </div>
            </div>

            <h1 className="mt-7 max-w-[590px] text-[42px] font-semibold leading-[.98] tracking-[-0.055em] sm:mt-9 sm:text-[52px] lg:text-[64px]">
              {config.claim}
            </h1>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.55] text-zinc-400 sm:text-[18px]">
              {config.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={config.primaryHref} className={`inline-flex h-11 items-center gap-4 rounded-full px-6 text-[13px] font-medium ${config.accent}`}>
                {config.primaryLabel} <ArrowRight size={15} />
              </Link>
              <Link href={config.secondaryHref} className="inline-flex h-11 items-center rounded-full border border-white/15 px-6 text-[13px] text-zinc-300">
                {config.secondaryLabel}
              </Link>
            </div>
          </div>

          <div id="tour" className={`self-end overflow-hidden rounded-[28px] border ${config.border} bg-[#0D1117] shadow-[0_32px_100px_rgba(0,0,0,.4)]`}>
            <div className="flex h-12 items-center border-b border-white/[0.06] px-5">
              <div className={`size-3 rounded-md ${config.accent}`} />
              <span className="ml-2 text-[10px] font-semibold">{config.brand}</span>
              <div className="ml-auto flex items-center gap-4 text-[8px] text-zinc-600">
                <Search size={13} />
                <span>LT</span>
              </div>
            </div>

            <div className="min-h-[365px] md:grid md:grid-cols-[126px_1fr]">
              <aside className="flex gap-1 overflow-x-auto border-b border-white/[0.06] p-3 md:block md:border-b-0 md:border-r">
                <p className="hidden px-2 text-[7px] uppercase tracking-[0.22em] text-zinc-600 md:block">Workspace</p>
                {config.tabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    onClick={() => setActive(index)}
                    className={`block whitespace-nowrap rounded-lg px-2.5 py-2 text-left text-[8px] transition-colors md:mt-1.5 md:w-full ${
                      active === index ? `${config.accentSoft} ${config.accentText}` : "text-zinc-500 hover:bg-white/[0.03]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </aside>

              <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className={`text-[7px] uppercase tracking-[0.22em] ${config.accentText}`}>{current.eyebrow}</p>
                    <h2 className="mt-2 max-w-[420px] text-[24px] font-medium leading-[1.05] tracking-[-0.035em]">
                      {current.title}
                    </h2>
                    <p className="mt-2 max-w-[470px] text-[9px] leading-[1.5] text-zinc-500">{current.description}</p>
                  </div>
                  <span className={`rounded-full px-2.5 py-1 text-[6px] ${config.accentSoft} ${config.accentText}`}>
                    En vivo
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {current.metrics.map(([value, label]) => (
                    <div key={label} className="rounded-xl border border-white/[0.055] bg-white/[0.025] p-3">
                      <strong className="text-[18px] font-medium">{value}</strong>
                      <p className="mt-1 text-[7px] text-zinc-500">{label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[1.15fr_.85fr]">
                  <div className="rounded-xl border border-white/[0.055] bg-white/[0.018] p-3">
                    <div className="flex items-center justify-between">
                      <p className="text-[8px] font-medium text-zinc-300">Actividad operativa</p>
                      <BarChart3 size={12} className={config.accentText} />
                    </div>
                    <div className="mt-4 flex h-[86px] items-end gap-2">
                      {[42, 68, 55, 84, 63, 92, 76].map((height, index) => (
                        <div key={index} className="flex flex-1 items-end rounded-md bg-white/[0.025]" style={{ height: "100%" }}>
                          <div className={`w-full rounded-md ${config.accent}`} style={{ height: `${height}%`, opacity: 0.72 }} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {[CheckCircle2, FileCheck2, Sparkles].map((Icon, index) => (
                      <div key={index} className="flex items-center rounded-xl border border-white/[0.055] bg-white/[0.018] p-2.5">
                        <div className={`grid size-7 place-items-center rounded-lg ${config.accentSoft}`}>
                          <Icon size={12} className={config.accentText} />
                        </div>
                        <div className="ml-2">
                          <p className="text-[7px] text-zinc-300">
                            {["Flujo actualizado", "Información centralizada", "Acción recomendada"][index]}
                          </p>
                          <p className="mt-0.5 text-[5.5px] text-zinc-600">
                            {["Sin pendientes críticos", "Datos disponibles", "Revisar siguiente paso"][index]}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1536px] px-5 py-14 sm:px-7 sm:py-20 lg:px-14">
        <div className="max-w-[620px]">
          <p className={`text-[10px] uppercase tracking-[0.28em] ${config.accentText}`}>PRODUCTO</p>
          <h2 className="mt-3 text-[32px] font-medium tracking-[-0.045em] sm:text-[38px]">Explora la plataforma por capacidad.</h2>
          <p className="mt-3 text-[15px] leading-[1.6] text-zinc-500">
            Cada capacidad resuelve una parte concreta del flujo. Selecciona un módulo para entender qué información organiza y cómo se conecta con el resto del producto.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {config.tabs.map((tab, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <button
                key={tab.label}
                onClick={() => {
                  setActive(index);
                  document.getElementById("tour")?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
                className={`group rounded-2xl border p-5 text-left transition-all ${
                  active === index ? `${config.border} ${config.accentSoft}` : "border-white/[0.06] bg-white/[0.015] hover:bg-white/[0.03]"
                }`}
              >
                <Icon size={18} className={active === index ? config.accentText : "text-zinc-600"} />
                <p className="mt-7 text-[15px] font-medium">{tab.label}</p>
                <p className="mt-2 text-[11px] leading-[1.5] text-zinc-500">{tab.description}</p>
                <span className={`mt-5 inline-flex items-center gap-2 text-[9px] ${active === index ? config.accentText : "text-zinc-600"}`}>
                  Ver módulo <ArrowRight size={11} />
                </span>
              </button>
            );
          })}
        </div>
      </section>


      <section className="border-t border-white/[0.06] bg-white/[0.012]">
        <div className="mx-auto max-w-[1536px] px-5 py-14 sm:px-7 sm:py-20 lg:px-14">
          <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-14">
            <div>
              <p className={`text-[10px] uppercase tracking-[0.28em] ${config.accentText}`}>CÓMO FUNCIONA</p>
              <h2 className="mt-3 max-w-[520px] text-[32px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[40px]">
                Un flujo continuo, no módulos desconectados.
              </h2>
              <p className="mt-4 max-w-[520px] text-[14px] leading-[1.65] text-zinc-500">
                El valor aparece cuando la información avanza con el proceso. ZOLVEN conserva contexto entre etapas para reducir trabajo manual y puntos ciegos.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {config.workflow.map((step, index) => (
                <div
                  key={step}
                  className="relative rounded-2xl border border-white/[0.06] bg-[#0B0D11] p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[8px] uppercase tracking-[0.2em] ${config.accentText}`}>
                      0{index + 1}
                    </span>
                    {index < config.workflow.length - 1 && (
                      <ArrowRight size={12} className="text-zinc-700" />
                    )}
                  </div>
                  <p className="mt-5 text-[13px] font-medium text-zinc-200">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-[1536px] px-5 py-14 sm:px-7 sm:py-20 lg:px-14">
          <div className="max-w-[720px]">
            <p className={`text-[10px] uppercase tracking-[0.28em] ${config.accentText}`}>CAPACIDADES</p>
            <h2 className="mt-3 text-[32px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[40px]">
              {config.depthTitle}
            </h2>
            <p className="mt-4 text-[14px] leading-[1.65] text-zinc-500">{config.depthIntro}</p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {config.depth.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/[0.065] bg-white/[0.018] p-6"
              >
                <h3 className="text-[20px] font-medium tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-3 max-w-[560px] text-[12px] leading-[1.6] text-zinc-500">
                  {item.description}
                </p>
                <div className="mt-6 space-y-3 border-t border-white/[0.06] pt-5">
                  {item.items.map((point) => (
                    <div key={point} className="flex items-start gap-2.5 text-[11px] leading-[1.5] text-zinc-400">
                      <CheckCircle2 size={13} className={`mt-0.5 shrink-0 ${config.accentText}`} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-white/[0.012]">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-14">
          <div>
            <p className={`text-[9px] uppercase tracking-[0.24em] ${config.accentText}`}>PRÓXIMO PASO</p>
            <h2 className="mt-2 text-[26px] font-medium tracking-[-0.04em]">
              Lleva {config.brand} a un caso real.
            </h2>
            <p className="mt-2 max-w-[620px] text-[12px] leading-[1.6] text-zinc-500">
              Revisa el producto en el contexto de tu operación y define qué capacidades tienen sentido para tu implementación.
            </p>
          </div>
          <Link
            href={config.primaryHref}
            className={`inline-flex h-11 shrink-0 items-center justify-center gap-3 rounded-full px-6 text-[12px] font-medium ${config.accent}`}
          >
            {config.primaryLabel} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
