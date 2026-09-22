import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail, MessageSquareText } from "lucide-react";
import { SiteHeader } from "@/components/zolven/SiteHeader";
import { SiteFooter } from "@/components/zolven/SiteFooter";

export default function ContactPage() {
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

        <div className="mt-10 grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-blue-300">
              CONTACTO
            </p>
            <h1 className="mt-4 max-w-[560px] text-[42px] font-semibold leading-[.98] tracking-[-0.055em] sm:text-[56px]">
              Hablemos según lo que necesitas resolver.
            </h1>
            <p className="mt-5 max-w-[540px] text-[15px] leading-[1.6] text-zinc-400 sm:text-[17px]">
              Para soporte, consultas operativas o seguimiento, utiliza nuestro correo oficial. Para conocer la plataforma o evaluar una implementación, solicita una demo.
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href="mailto:soporte@zolven.com"
              className="group rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="grid size-10 place-items-center rounded-xl bg-blue-500/10">
                  <Mail size={18} className="text-blue-300" />
                </div>
                <ArrowRight
                  size={15}
                  className="mt-1 text-zinc-600 transition-transform group-hover:translate-x-1"
                />
              </div>

              <p className="mt-7 text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                SOPORTE Y CONTACTO GENERAL
              </p>
              <h2 className="mt-2 text-[24px] font-medium tracking-[-0.035em]">
                soporte@zolven.com
              </h2>
              <p className="mt-3 text-[12px] leading-[1.6] text-zinc-500">
                Consultas de soporte, seguimiento, acceso y coordinación general.
              </p>
            </a>

            <Link
              href="/solicitar-demo"
              className="group rounded-[24px] border border-white/[0.07] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="grid size-10 place-items-center rounded-xl bg-emerald-500/10">
                  <MessageSquareText size={18} className="text-emerald-300" />
                </div>
                <ArrowRight
                  size={15}
                  className="mt-1 text-zinc-600 transition-transform group-hover:translate-x-1"
                />
              </div>

              <p className="mt-7 text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                VENTAS Y DEMOSTRACIÓN
              </p>
              <h2 className="mt-2 text-[24px] font-medium tracking-[-0.035em]">
                Solicitar demo
              </h2>
              <p className="mt-3 text-[12px] leading-[1.6] text-zinc-500">
                Para evaluar ZOLVEN Opex, Hire, Jobs o One según tu operación.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
