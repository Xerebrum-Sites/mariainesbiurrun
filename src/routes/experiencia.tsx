import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { experience } from "@/lib/portfolio-data";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiencia — Inés Biurrun" },
      { name: "description", content: "Trayectoria profesional de Inés Biurrun: Grupo Gamma, The Stamp Factory, John Deere y más." },
      { property: "og:title", content: "Experiencia — Inés Biurrun" },
      { property: "og:description", content: "Trayectoria profesional desde 2009 hasta hoy." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <SiteLayout>
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-4">— Trayectoria</p>
              <h1 className="font-display font-light text-4xl lg:text-5xl tracking-tight text-brown-700">
                Experiencia
              </h1>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground font-light">
              2009 — Presente
            </p>
          </div>

          <ol className="divide-y divide-border border-y border-border">
            {experience.map((job) => (
              <li key={job.company + job.years} className="group grid grid-cols-12 gap-6 py-8 lg:py-10 hover:bg-nude-50/60 transition-colors px-2">
                <div className="col-span-12 lg:col-span-3">
                  <p className="text-xs tracking-[0.2em] uppercase text-brown-400">{job.years}</p>
                </div>
                <div className="col-span-12 lg:col-span-4">
                  <h3 className="font-display text-2xl font-light text-brown-700 leading-tight">{job.company}</h3>
                  <p className="text-sm text-brown-500 mt-1 italic">{job.role}</p>
                </div>
                <div className="col-span-12 lg:col-span-5">
                  <p className="text-base font-light text-foreground/75 leading-relaxed">{job.description}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Educación */}
          <div className="mt-24 lg:mt-32">
            <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-4">— Formación</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl tracking-tight text-brown-700 mb-12">
              Educación
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="border-l-2 border-brown-400 pl-6">
                <p className="text-xs tracking-[0.2em] uppercase text-brown-400">2004 — 2012</p>
                <h3 className="font-display text-2xl font-light text-brown-700 mt-2">Licenciatura en Diseño Gráfico</h3>
                <p className="text-sm text-muted-foreground mt-1 italic">UE Siglo 21, Córdoba</p>
              </div>
              <div className="border-l-2 border-nude-300 pl-6">
                <p className="text-xs tracking-[0.2em] uppercase text-brown-400">2009</p>
                <h3 className="font-display text-2xl font-light text-brown-700 mt-2">
                  Diplomatura en Investigación de Mercados & Opinión Pública
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
