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
        <div className="relative mx-auto max-w-[1536px] px-7 py-20 lg:px-14 lg:py-24">
          <p className="text-[10px] uppercase tracking-[0.30em] text-blue-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-[850px] text-[48px] font-semibold leading-[.98] tracking-[-0.055em] lg:text-[64px]">
            {title}
          </h1>
          <p className="mt-5 max-w-[700px] text-[17px] leading-[1.6] text-zinc-400">{description}</p>
        </div>
      </section>

      {children}
    </main>
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
      <section className="mx-auto max-w-[1536px] px-7 py-16 lg:px-14">
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
    </Shell>
  );
}

const industries = [
  {
    icon: Building2,
    name: "Banca y servicios financieros",
    detail: "Control, trazabilidad y cumplimiento para operaciones con alta exigencia documental.",
  },
  {
    icon: HardHat,
    name: "Construcción",
    detail: "Personas, tiempo y operación distribuida entre proyectos, turnos y ubicaciones.",
  },
  {
    icon: HeartPulse,
    name: "Salud",
    detail: "Cobertura, asistencia y coordinación operativa para equipos con continuidad crítica.",
  },
  {
    icon: Store,
    name: "Retail",
    detail: "Visibilidad de personal, horarios y disponibilidad entre tiendas y equipos.",
  },
  {
    icon: Truck,
    name: "Logística",
    detail: "Seguimiento de jornadas, incidencias y operación de equipos móviles o distribuidos.",
  },
];

export function IndustriesPage() {
  return (
    <Shell
      eyebrow="INDUSTRIAS"
      title="Una base flexible para operaciones que no se parecen entre sí."
      description="ZOLVEN se adapta a estructuras, turnos, equipos y niveles de control diferentes sin perder una experiencia común."
    >
      <section className="mx-auto max-w-[1536px] px-7 py-16 lg:px-14">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
          {industries.map(({ icon: Icon, name, detail }, index) => (
            <div key={name} className="relative min-h-[300px] overflow-hidden rounded-[24px] border border-white/[0.07] bg-white/[0.018] p-5">
              <div className="absolute inset-x-0 bottom-0 h-36 bg-[radial-gradient(circle_at_50%_100%,rgba(53,92,255,.13),transparent_65%)]" />
              <div className="relative">
                <div className="grid size-10 place-items-center rounded-xl bg-blue-500/10">
                  <Icon size={18} className="text-blue-300" />
                </div>
                <p className="mt-10 text-[9px] uppercase tracking-[0.24em] text-zinc-600">0{index + 1}</p>
                <h2 className="mt-3 text-[20px] font-medium leading-[1.05] tracking-[-0.03em]">{name}</h2>
                <p className="mt-4 text-[12px] leading-[1.55] text-zinc-500">{detail}</p>
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
      <section className="mx-auto max-w-[1180px] px-7 py-16 lg:px-14">
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
      <section className="mx-auto max-w-[1180px] px-7 py-16 lg:px-14">
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
