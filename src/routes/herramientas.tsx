import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { toolCategories, expertise, languages } from "@/lib/portfolio-data";

export const Route = createFileRoute("/herramientas")({
  head: () => ({
    meta: [
      { title: "Herramientas & Formación — Inés Biurrun" },
      { name: "description", content: "Formación académica, software, habilidades técnicas, plataformas e idiomas." },
      { property: "og:title", content: "Herramientas & Formación — Inés Biurrun" },
      { property: "og:description", content: "Educación, software y especialidades." },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <SiteLayout>
      <section className="py-20 lg:py-28 bg-nude-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Educación — primero para equilibrar */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-4">— Formación</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl tracking-tight text-brown-700 mb-10">
              Educación
            </h2>
            <div className="space-y-10">
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

          {/* Herramientas */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-4">— Recursos & especialidades</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl tracking-tight text-brown-700 mb-10">
              Herramientas
            </h2>
            <div className="border border-border rounded-xl bg-background overflow-hidden">
              {toolCategories.map((cat, catIdx) => (
                <div key={cat.title}>
                  <div className={`px-5 py-2.5 ${catIdx > 0 ? "border-t border-border" : ""}`}>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-brown-500 font-medium">{cat.title}</p>
                  </div>
                  {cat.items.map((t, i) => (
                    <div
                      key={t}
                      className={`px-5 py-3 flex items-center gap-3 ${i < cat.items.length - 1 ? "border-b border-border" : ""} ${catIdx < toolCategories.length - 1 && i === cat.items.length - 1 ? "border-b border-border" : ""}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brown-400 shrink-0" />
                      <span className="text-sm text-brown-700">{t}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <p className="text-xs tracking-[0.2em] uppercase text-brown-400 mb-3">Especialidades</p>
              <div className="flex flex-wrap gap-2.5">
                {expertise.map((e) => (
                  <span
                    key={e}
                    className="px-4 py-2 rounded-full bg-brown-500 text-primary-foreground text-sm hover:bg-brown-700 transition-colors"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-6">— Idiomas</p>
              <div className="border border-border rounded-xl bg-background overflow-hidden">
                {languages.map((l, i) => (
                  <div
                    key={l.name}
                    className={`px-5 py-3 flex items-baseline justify-between ${i < languages.length - 1 ? "border-b border-border" : ""}`}
                  >
                    <span className="font-display text-base text-brown-700">{l.name}</span>
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{l.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
