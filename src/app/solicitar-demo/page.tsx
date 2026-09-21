"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/zolven/SiteHeader";

export default function SolicitarDemoPage() {
  const [ready, setReady] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setReady(true);
  }

  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      <div className="border-b border-white/[0.06] bg-[#0B0D11]">
        <SiteHeader dark />
      </div>

      <section className="mx-auto grid max-w-[1280px] gap-14 px-7 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-14">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-[12px] text-zinc-500 hover:text-white">
            <ArrowLeft size={14} /> Volver
          </Link>
          <p className="mt-14 text-[10px] uppercase tracking-[0.28em] text-blue-300">SOLICITAR DEMO</p>
          <h1 className="mt-4 max-w-[500px] text-[52px] font-semibold leading-[.98] tracking-[-0.055em]">
            Conoce cómo ZOLVEN puede encajar en tu operación.
          </h1>
          <p className="mt-5 max-w-[500px] text-[16px] leading-[1.6] text-zinc-400">
            Cuéntanos qué quieres mejorar y qué producto te interesa. Usaremos esta información para preparar una conversación enfocada en tu contexto.
          </p>

          <div className="mt-10 space-y-3">
            {[
              "Recorrido enfocado en tu caso de uso",
              "Visión de Opex, Hire, Jobs y ZOLVEN One",
              "Siguiente paso definido según tus necesidades",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-[12px] text-zinc-400">
                <CheckCircle2 size={15} className="text-blue-300" /> {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7 lg:p-9">
          {ready ? (
            <div className="flex min-h-[470px] flex-col items-center justify-center text-center">
              <div className="grid size-12 place-items-center rounded-full bg-blue-500/10">
                <CheckCircle2 size={22} className="text-blue-300" />
              </div>
              <h2 className="mt-5 text-[24px] font-medium">Formulario preparado.</h2>
              <p className="mt-3 max-w-[420px] text-[13px] leading-[1.6] text-zinc-500">
                La interfaz ya está lista. El envío persistente se habilitará cuando conectemos este formulario con Supabase en la fase de backend.
              </p>
              <button
                onClick={() => setReady(false)}
                className="mt-6 rounded-full border border-white/15 px-5 py-2.5 text-[12px] text-zinc-300"
              >
                Volver al formulario
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-[11px] text-zinc-400">
                  Nombre
                  <input required name="name" className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-black/20 px-3 text-[13px] text-white outline-none focus:border-blue-400/40" />
                </label>
                <label className="text-[11px] text-zinc-400">
                  Empresa
                  <input required name="company" className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-black/20 px-3 text-[13px] text-white outline-none focus:border-blue-400/40" />
                </label>
                <label className="text-[11px] text-zinc-400">
                  Correo corporativo
                  <input required type="email" name="email" className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-black/20 px-3 text-[13px] text-white outline-none focus:border-blue-400/40" />
                </label>
                <label className="text-[11px] text-zinc-400">
                  Tamaño del equipo
                  <select name="teamSize" className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-[#0B0D11] px-3 text-[13px] text-white outline-none focus:border-blue-400/40">
                    <option>1–25</option>
                    <option>26–100</option>
                    <option>101–500</option>
                    <option>500+</option>
                  </select>
                </label>
              </div>

              <label className="mt-5 block text-[11px] text-zinc-400">
                Producto de interés
                <select name="product" className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-[#0B0D11] px-3 text-[13px] text-white outline-none focus:border-blue-400/40">
                  <option>ZOLVEN Opex</option>
                  <option>ZOLVEN Hire</option>
                  <option>ZOLVEN Jobs</option>
                  <option>ZOLVEN One</option>
                </select>
              </label>

              <label className="mt-5 block text-[11px] text-zinc-400">
                ¿Qué quieres mejorar?
                <textarea required name="context" rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/[0.08] bg-black/20 p-3 text-[13px] text-white outline-none focus:border-blue-400/40" />
              </label>

              <button type="submit" className="mt-6 flex h-11 w-full items-center justify-center gap-3 rounded-full bg-blue-600 text-[13px] font-medium">
                Continuar <ArrowRight size={15} />
              </button>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
