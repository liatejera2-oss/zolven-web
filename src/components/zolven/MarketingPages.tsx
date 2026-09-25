import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Check,
  HardHat,
  HeartPulse,
  Layers3,
  ShieldCheck,
  Store,
  Truck,
  UserCheck,
  Users,
} from "lucide-react";
import { SiteHeader } from "@/components/zolven/SiteHeader";
import { SiteFooter } from "@/components/zolven/SiteFooter";

function Shell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      <div className="border-b border-white/[0.06] bg-[#0B0D11]">
        <SiteHeader dark />
      </div>

      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(53,92,255,.12),transparent_35%)]" />
        <div className="relative mx-auto max-w-[1536px] px-5 py-14 sm:px-7 sm:py-20 lg:px-14 lg:py-24">
          <p className="text-[10px] uppercase tracking-[0.30em] text-blue-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-[850px] text-[40px] font-semibold leading-[.98] tracking-[-0.055em] sm:text-[48px] lg:text-[64px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[700px] text-[17px] leading-[1.6] text-zinc-400">{description}</p>
        </div>
      </section>

      {children}
      <SiteFooter />
    </main>
  );
}

function NextStep({
  title = "¿Quieres verlo aplicado a tu operación?",
  description = "Cuéntanos qué necesitas resolver y revisamos qué parte del ecosistema ZOLVEN encaja mejor.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-12 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-14">
        <div>
          <p className="text-[9px] uppercase tracking-[0.24em] text-blue-300">PRÓXIMO PASO</p>
          <h2 className="mt-2 text-[26px] font-medium tracking-[-0.04em]">{title}</h2>
          <p className="mt-2 max-w-[620px] text-[12px] leading-[1.6] text-zinc-500">{description}</p>
        </div>
        <Link
          href="/solicitar-demo"
          className="inline-flex h-11 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 text-[12px] font-medium text-black"
        >
          Solicitar demo <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}

const solutionCards = [
  {
    icon: Users,
    title: "Operaciones de personas",
    description: "Tiempo, ausencias, nómina, cumplimiento y métricas operativas conectadas.",
    product: "ZOLVEN Opex",
    href: "/productos/opex",
    accent: "text-blue-300",
    soft: "bg-blue-500/10",
  },
  {
    icon: UserCheck,
    title: "Reclutamiento",
    description: "Vacantes, candidatos, entrevistas y decisiones en un pipeline compartido.",
    product: "ZOLVEN Hire",
    href: "/productos/hire",
    accent: "text-emerald-300",
    soft: "bg-emerald-500/10",
  },
  {
    icon: BriefcaseBusiness,
    title: "Atracción de talento",
    description: "Una experiencia de oportunidades, aplicaciones y perfil profesional para candidatos.",
    product: "ZOLVEN Jobs",
    href: "/productos/jobs",
    accent: "text-violet-300",
    soft: "bg-violet-500/10",
  },
  {
    icon: Layers3,
    title: "Ecosistema conectado",
    description: "Identidad, permisos, datos e integraciones compartidos entre productos.",
    product: "ZOLVEN One",
    href: "/productos/one",
    accent: "text-cyan-300",
    soft: "bg-cyan-500/10",
  },
];

export function SolutionsPage() {
  return (
    <Shell
      eyebrow="SOLUCIONES"
      title="Tecnología organizada alrededor de cómo opera tu empresa."
      description="Empieza por el problema que necesitas resolver y llega al producto adecuado sin recorrer un catálogo interminable."
    >
      <section className="mx-auto max-w-[1536px] px-5 py-14 sm:px-7 sm:py-16 lg:px-14">
        <div className="grid gap-3 md:grid-cols-2">
          {solutionCards.map(({ icon: Icon, title, description, product, href, accent, soft }) => (
            <Link
              key={title}
              href={href}
              className="group rounded-[24px] border border-white/[0.07] bg-white/[0.018] p-6 transition-colors hover:bg-white/[0.035]"
            >
              <div className={`grid size-10 place-items-center rounded-xl ${soft}`}>
                <Icon size={18} className={accent} />
              </div>
              <h2 className="mt-7 text-[24px] font-medium tracking-[-0.035em]">{title}</h2>
              <p className="mt-3 max-w-[520px] text-[13px] leading-[1.6] text-zinc-500">{description}</p>
              <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className={`text-[10px] font-medium ${accent}`}>{product}</span>
                <ArrowRight size={14} className="text-zinc-600 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-white/[0.06] bg-white/[0.012]">
        <div className="mx-auto max-w-[1536px] px-5 py-14 sm:px-7 sm:py-16 lg:px-14">
          <div className="max-w-[720px]">
            <p className="text-[10px] uppercase tracking-[0.28em] text-blue-300">UN SOLO RECORRIDO</p>
            <h2 className="mt-3 text-[32px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[40px]">
              Del talento a la operación, sin perder el contexto.
            </h2>
            <p className="mt-4 text-[14px] leading-[1.65] text-zinc-500">
              Cada producto resuelve una etapa diferente, pero la arquitectura está pensada para que la información pueda continuar con la persona y con la empresa.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["01", "ZOLVEN Jobs", "Descubrir oportunidades y construir un perfil.", "/productos/jobs", "text-violet-300"],
              ["02", "ZOLVEN Hire", "Convertir candidatos en decisiones de contratación.", "/productos/hire", "text-emerald-300"],
              ["03", "ZOLVEN Opex", "Operar al equipo contratado con claridad.", "/productos/opex", "text-blue-300"],
              ["04", "ZOLVEN One", "Conectar identidad, datos e integraciones.", "/productos/one", "text-cyan-300"],
            ].map(([number, name, text, href, accent]) => (
              <Link
                key={name}
                href={href}
                className="group rounded-[22px] border border-white/[0.065] bg-[#0B0D11] p-5 transition-colors hover:bg-white/[0.03]"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[8px] uppercase tracking-[0.22em] ${accent}`}>{number}</span>
                  <ArrowRight size={13} className="text-zinc-700 transition-transform group-hover:translate-x-1" />
                </div>
                <h3 className="mt-8 text-[18px] font-medium tracking-[-0.03em]">{name}</h3>
                <p className="mt-3 text-[11px] leading-[1.55] text-zinc-500">{text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NextStep />
    </Shell>
  );
}

const industries = [
  {
    icon: Building2,
    name: "Banca y servicios financieros",
    challenge:
      "Operaciones con alta exigencia de control, documentación y trazabilidad entre equipos.",
    needs: [
      "Expedientes y movimientos con historial",
      "Permisos, controles y seguimiento de vencimientos",
      "Indicadores operativos consolidados",
    ],
    products: ["Opex", "One"],
  },
  {
    icon: HardHat,
    name: "Construcción",
    challenge:
      "Personal distribuido entre proyectos, jornadas variables y múltiples ubicaciones.",
    needs: [
      "Asistencia e incidencias por proyecto o ubicación",
      "Ausencias y disponibilidad de cuadrillas",
      "Documentación y cumplimiento operativo",
    ],
    products: ["Opex", "Hire"],
  },
  {
    icon: HeartPulse,
    name: "Salud",
    challenge:
      "Continuidad crítica, cobertura por turnos y alta sensibilidad a ausencias e incidencias.",
    needs: [
      "Visibilidad de asistencia y cobertura",
      "Gestión de ausencias y disponibilidad",
      "Alertas y seguimiento de requisitos",
    ],
    products: ["Opex", "Hire"],
  },
  {
    icon: Store,
    name: "Retail",
    challenge:
      "Equipos distribuidos entre tiendas, horarios rotativos y necesidad de respuesta rápida.",
    needs: [
      "Asistencia y jornadas por ubicación",
      "Disponibilidad del personal",
      "Reclutamiento para posiciones de alta rotación",
    ],
    products: ["Opex", "Hire", "Jobs"],
  },
  {
    icon: Truck,
    name: "Logística",
    challenge:
      "Operación móvil, múltiples puntos de trabajo y alta dependencia de puntualidad y cobertura.",
    needs: [
      "Seguimiento de jornadas e incidencias",
      "Documentación y cumplimiento por colaborador",
      "Métricas para anticipar desviaciones operativas",
    ],
    products: ["Opex", "One"],
  },
];

export function IndustriesPage() {
  return (
    <Shell
      eyebrow="INDUSTRIAS"
      title="Una base flexible para operaciones que no se parecen entre sí."
      description="ZOLVEN se adapta a estructuras, turnos, equipos y niveles de control diferentes sin perder una experiencia común."
    >
      <section className="mx-auto max-w-[1536px] px-5 py-14 sm:px-7 sm:py-16 lg:px-14">
        <div className="max-w-[720px]">
          <p className="text-[10px] uppercase tracking-[0.28em] text-blue-300">DESDE EL PROBLEMA OPERATIVO</p>
          <h2 className="mt-3 text-[32px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[40px]">
            Cada industria cambia el contexto. La lógica operativa sigue conectada.
          </h2>
          <p className="mt-4 text-[14px] leading-[1.65] text-zinc-500">
            No presentamos la misma solución con otro nombre. Partimos de los puntos de fricción más habituales de cada operación y mostramos qué capacidades de ZOLVEN pueden intervenir.
          </p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {industries.map(({ icon: Icon, name, challenge, needs, products }, index) => (
            <div
              key={name}
              className="relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.018] p-6"
            >
              <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_50%_100%,rgba(53,92,255,.10),transparent_68%)]" />
              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div className="grid size-10 place-items-center rounded-xl bg-blue-500/10">
                    <Icon size={18} className="text-blue-300" />
                  </div>
                  <span className="text-[8px] uppercase tracking-[0.22em] text-zinc-700">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-7 text-[22px] font-medium leading-[1.05] tracking-[-0.03em]">{name}</h2>
                <p className="mt-3 text-[12px] leading-[1.6] text-zinc-500">{challenge}</p>

                <div className="mt-6 border-t border-white/[0.06] pt-5">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-600">QUÉ NECESITA CONTROLAR</p>
                  <div className="mt-3 space-y-2.5">
                    {needs.map((need) => (
                      <div key={need} className="flex items-start gap-2 text-[11px] leading-[1.5] text-zinc-400">
                        <Check size={12} className="mt-0.5 shrink-0 text-blue-300" />
                        <span>{need}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {products.map((product) => (
                    <span
                      key={product}
                      className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[8px] text-zinc-400"
                    >
                      ZOLVEN {product}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-5 rounded-[24px] border border-white/[0.07] bg-white/[0.018] p-6 md:flex-row md:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-blue-300">TU OPERACIÓN</p>
            <h3 className="mt-2 text-[24px] font-medium tracking-[-0.035em]">¿No ves tu industria?</h3>
            <p className="mt-2 text-[12px] text-zinc-500">La arquitectura de ZOLVEN no depende de una sola industria.</p>
          </div>
          <Link href="/solicitar-demo" className="inline-flex h-11 items-center gap-4 rounded-full bg-white px-6 text-[12px] font-medium text-black">
            Conversar con ZOLVEN <ArrowRight size={14} />
          </Link>
        </div>
      </section>
      <NextStep
        title="Lleva ZOLVEN a tu contexto operativo."
        description="Revisamos industria, estructura y necesidades para mostrarte una implementación relevante."
      />
    </Shell>
  );
}

const plans = [
  {
    name: "Essential",
    price: "$99",
    suffix: "/mes",
    description: "Base operativa para equipos que necesitan centralizar lo esencial.",
    features: ["People", "Time", "Leave", "Panel operativo"],
    featured: false,
  },
  {
    name: "Professional",
    price: "$299",
    suffix: "/mes",
    description: "Más control, automatización y analítica para operaciones en crecimiento.",
    features: ["Todo Essential", "Payroll", "Compliance", "Analytics"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "A medida",
    suffix: "",
    description: "Configuración, alcance e integración para organizaciones con mayor complejidad.",
    features: ["Todo Professional", "Configuración avanzada", "Integraciones", "Acompañamiento"],
    featured: false,
  },
];

export function PricingPage() {
  return (
    <Shell
      eyebrow="PRECIOS · ZOLVEN OPEX"
      title="Planes claros para empezar por la operación."
      description="Los precios mostrados corresponden a ZOLVEN Opex. Hire, Jobs y ZOLVEN One se incorporan según el alcance de cada implementación."
    >
      <section className="mx-auto max-w-[1180px] px-5 py-14 sm:px-7 sm:py-16 lg:px-14">
        <div className="grid gap-3 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[26px] border p-6 ${
                plan.featured
                  ? "border-blue-400/30 bg-blue-500/[0.07]"
                  : "border-white/[0.07] bg-white/[0.018]"
              }`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-medium">{plan.name}</p>
                {plan.featured && (
                  <span className="rounded-full bg-blue-500/15 px-2.5 py-1 text-[6px] uppercase tracking-[0.18em] text-blue-300">
                    Recomendado
                  </span>
                )}
              </div>
              <div className="mt-8 flex items-end gap-2">
                <strong className="text-[42px] font-medium tracking-[-0.05em]">{plan.price}</strong>
                {plan.suffix && <span className="pb-1.5 text-[11px] text-zinc-500">{plan.suffix}</span>}
              </div>
              <p className="mt-4 min-h-[62px] text-[12px] leading-[1.6] text-zinc-500">{plan.description}</p>
              <div className="mt-7 space-y-3 border-t border-white/[0.06] pt-6">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-[11px] text-zinc-400">
                    <Check size={13} className="text-blue-300" /> {feature}
                  </div>
                ))}
              </div>
              <Link
                href="/solicitar-demo"
                className={`mt-8 flex h-11 items-center justify-center gap-3 rounded-full text-[12px] font-medium ${
                  plan.featured ? "bg-blue-600 text-white" : "border border-white/15 text-zinc-300"
                }`}
              >
                Solicitar demo <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-[10px] text-zinc-600">
          Precios base. El alcance final puede variar según configuración, volumen e integraciones requeridas.
        </p>
      </section>
      <NextStep
        title="Compara el plan con tu operación."
        description="Los precios base sirven como punto de partida. La demo permite validar módulos, volumen y alcance."
      />
    </Shell>
  );
}

const resources = [
  {
    icon: BookOpen,
    title: "Guías operativas",
    text: "Contenido práctico sobre procesos, métricas y estructura operativa.",
  },
  {
    icon: BarChart3,
    title: "Insights",
    text: "Lecturas breves sobre workforce, recruiting y decisiones basadas en datos.",
  },
  {
    icon: ShieldCheck,
    title: "Centro de ayuda",
    text: "Documentación de producto y soporte para clientes cuando la plataforma entre en operación.",
  },
];

export function ResourcesPage() {
  return (
    <Shell
      eyebrow="RECURSOS"
      title="Información útil, sin convertir el sitio en una biblioteca."
      description="Este espacio se mantendrá deliberadamente ligero: guías, insights y ayuda cuando aporten valor real al usuario."
    >
      <section className="mx-auto max-w-[1180px] px-5 py-14 sm:px-7 sm:py-16 lg:px-14">
        <div className="grid gap-3 md:grid-cols-3">
          {resources.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[24px] border border-white/[0.07] bg-white/[0.018] p-6">
              <div className="grid size-10 place-items-center rounded-xl bg-white/[0.04]">
                <Icon size={18} className="text-zinc-300" />
              </div>
              <h2 className="mt-8 text-[20px] font-medium tracking-[-0.03em]">{title}</h2>
              <p className="mt-3 text-[12px] leading-[1.6] text-zinc-500">{text}</p>
              <p className="mt-8 text-[8px] uppercase tracking-[0.22em] text-zinc-700">EN PREPARACIÓN</p>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
