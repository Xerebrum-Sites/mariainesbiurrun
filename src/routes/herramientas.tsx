import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { toolCategories, expertise, languages } from "@/lib/portfolio-data";

export const Route = createFileRoute("/herramientas")({
  head: () => ({
    meta: [
      { title: "Herramientas — Inés Biurrun" },
      { name: "description", content: "Software, habilidades técnicas, plataformas, especialidades e idiomas." },
      { property: "og:title", content: "Herramientas — Inés Biurrun" },
      { property: "og:description", content: "Recursos, especialidades e idiomas." },
    ],
  }),
  component: ToolsPage,
});

function ToolsPage() {
  return (
    <SiteLayout>
      <section className="py-20 lg:py-28 bg-nude-50 border-y border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-4">— Recursos & especialidades</p>
            <h1 className="font-display font-light text-4xl lg:text-5xl tracking-tight text-brown-700">
              Herramientas
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-base font-light text-muted-foreground">
              El stack creativo y técnico que uso para llevar adelante cada proyecto.
            </p>
          </div>

          {/* Categorías de herramientas en grilla */}
          <div className="grid sm:grid-cols-2 gap-6">
            {toolCategories.map((cat) => (
              <div
                key={cat.title}
                className="border border-border rounded-2xl bg-background overflow-hidden"
              >
                <div className="px-6 py-4 border-b border-border bg-nude-50/60">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-brown-500 font-medium">
                    {cat.title}
                  </p>
                </div>
                <ul>
                  {cat.items.map((t, i) => (
                    <li
                      key={t}
                      className={`px-6 py-3 flex items-center gap-3 ${
                        i < cat.items.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brown-400 shrink-0" />
                      <span className="text-sm text-brown-700">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Especialidades */}
          <div className="mt-16">
            <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-6 text-center">
              — Especialidades
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
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

          {/* Idiomas */}
          <div className="mt-16">
            <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-6 text-center">
              — Idiomas
            </p>
            <div className="max-w-md mx-auto border border-border rounded-2xl bg-background overflow-hidden">
              {languages.map((l, i) => (
                <div
                  key={l.name}
                  className={`px-6 py-3.5 flex items-baseline justify-between ${
                    i < languages.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-display text-base text-brown-700">{l.name}</span>
                  <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
