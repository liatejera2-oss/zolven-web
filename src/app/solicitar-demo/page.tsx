"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";
import { SiteHeader } from "@/components/zolven/SiteHeader";
import { SiteFooter } from "@/components/zolven/SiteFooter";
import { supabase } from "@/lib/supabase/client";

export default function SolicitarDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (String(formData.get("website") ?? "").trim()) {
      setSubmitted(true);
      return;
    }

    setSubmitting(true);
    setErrorMessage(null);

    const { error } = await supabase.from("demo_requests").insert({
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim().toLowerCase(),
      team_size: String(formData.get("teamSize") ?? ""),
      product: String(formData.get("product") ?? ""),
      context: String(formData.get("context") ?? "").trim(),
    });

    if (error) {
      console.error("Demo request submission failed", error);
      setErrorMessage(
        "No pudimos enviar la solicitud en este momento. Intenta nuevamente."
      );
      setSubmitting(false);
      return;
    }

    form.reset();
    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#080A0D] text-white">
      <div className="border-b border-white/[0.06] bg-[#0B0D11]">
        <SiteHeader dark />
      </div>

      <section className="mx-auto grid max-w-[1280px] gap-12 px-5 py-14 sm:px-7 sm:py-20 lg:grid-cols-[.8fr_1.2fr] lg:gap-14 lg:px-14">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[12px] text-zinc-500 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} /> Volver
          </Link>

          <p className="mt-10 text-[10px] uppercase tracking-[0.28em] text-blue-300 sm:mt-14">
            SOLICITAR DEMO
          </p>

          <h1 className="mt-4 max-w-[500px] text-[40px] font-semibold leading-[.98] tracking-[-0.055em] sm:text-[52px]">
            Conoce cómo ZOLVEN puede encajar en tu operación.
          </h1>

          <p className="mt-5 max-w-[500px] text-[15px] leading-[1.6] text-zinc-400 sm:text-[16px]">
            Cuéntanos qué quieres mejorar y qué producto te interesa. Usaremos esta información para preparar una conversación enfocada en tu contexto.
          </p>

          <div className="mt-10 space-y-3">
            {[
              "Recorrido enfocado en tu caso de uso",
              "Visión de Opex, Hire, Jobs y ZOLVEN One",
              "Siguiente paso definido según tus necesidades",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[12px] text-zinc-400"
              >
                <CheckCircle2 size={15} className="text-blue-300" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-5 sm:p-7 lg:p-9">
          {submitted ? (
            <div className="flex min-h-[470px] flex-col items-center justify-center text-center">
              <div className="grid size-12 place-items-center rounded-full bg-blue-500/10">
                <CheckCircle2 size={22} className="text-blue-300" />
              </div>

              <h2 className="mt-5 text-[24px] font-medium">
                Solicitud recibida.
              </h2>

              <p className="mt-3 max-w-[420px] text-[13px] leading-[1.6] text-zinc-500">
                La información fue registrada correctamente. El equipo podrá revisar el contexto enviado antes del siguiente contacto.
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-white/15 px-5 py-2.5 text-[12px] text-zinc-300 transition-colors hover:border-white/30"
              >
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="sr-only" aria-hidden="true">
                <label>
                  Sitio web
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-[11px] text-zinc-400">
                  Nombre
                  <input
                    required
                    minLength={2}
                    maxLength={120}
                    name="name"
                    autoComplete="name"
                    className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-black/20 px-3 text-[13px] text-white outline-none transition-colors focus:border-blue-400/40"
                  />
                </label>

                <label className="text-[11px] text-zinc-400">
                  Empresa
                  <input
                    required
                    minLength={2}
                    maxLength={160}
                    name="company"
                    autoComplete="organization"
                    className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-black/20 px-3 text-[13px] text-white outline-none transition-colors focus:border-blue-400/40"
                  />
                </label>

                <label className="text-[11px] text-zinc-400">
                  Correo corporativo
                  <input
                    required
                    type="email"
                    maxLength={254}
                    name="email"
                    autoComplete="email"
                    className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-black/20 px-3 text-[13px] text-white outline-none transition-colors focus:border-blue-400/40"
                  />
                </label>

                <label className="text-[11px] text-zinc-400">
                  Tamaño del equipo
                  <select
                    required
                    name="teamSize"
                    className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-[#0B0D11] px-3 text-[13px] text-white outline-none transition-colors focus:border-blue-400/40"
                  >
                    <option value="1–25">1–25</option>
                    <option value="26–100">26–100</option>
                    <option value="101–500">101–500</option>
                    <option value="500+">500+</option>
                  </select>
                </label>
              </div>

              <label className="mt-5 block text-[11px] text-zinc-400">
                Producto de interés
                <select
                  required
                  name="product"
                  className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-[#0B0D11] px-3 text-[13px] text-white outline-none transition-colors focus:border-blue-400/40"
                >
                  <option value="ZOLVEN Opex">ZOLVEN Opex</option>
                  <option value="ZOLVEN Hire">ZOLVEN Hire</option>
                  <option value="ZOLVEN Jobs">ZOLVEN Jobs</option>
                  <option value="ZOLVEN One">ZOLVEN One</option>
                </select>
              </label>

              <label className="mt-5 block text-[11px] text-zinc-400">
                ¿Qué quieres mejorar?
                <textarea
                  required
                  minLength={5}
                  maxLength={3000}
                  name="context"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/[0.08] bg-black/20 p-3 text-[13px] text-white outline-none transition-colors focus:border-blue-400/40"
                />
              </label>

              {errorMessage && (
                <p
                  role="alert"
                  className="mt-4 rounded-xl border border-red-400/15 bg-red-400/[0.05] px-3 py-2.5 text-[11px] text-red-200"
                >
                  {errorMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 flex h-11 w-full items-center justify-center gap-3 rounded-full bg-blue-600 text-[13px] font-medium transition-opacity disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? (
                  <>
                    Enviando
                    <LoaderCircle size={15} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Solicitar demo
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
