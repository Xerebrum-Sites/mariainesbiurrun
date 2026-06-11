import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inés Biurrun — Diseñadora Gráfica & Comunicación Visual" },
      { name: "description", content: "Portfolio de Inés Biurrun, diseñadora gráfica con 10+ años de experiencia en diseño visual, redes sociales y dirección creativa." },
      { property: "og:title", content: "Inés Biurrun — Diseñadora Gráfica" },
      { property: "og:description", content: "Portfolio de Inés Biurrun, diseñadora gráfica con 10+ años de experiencia en diseño visual." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <header className="pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-8">
            Portfolio · 2026
          </p>
          <h1 className="font-display font-extralight text-[clamp(3.5rem,12vw,11rem)] leading-[0.92] tracking-[-0.04em] text-brown-700">
            Inés <span className="italic font-light text-brown-500">Biurrun</span>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="max-w-lg text-base font-light leading-relaxed text-muted-foreground">
              Diseñadora gráfica & comunicación visual — Rosario, Argentina.
            </p>
            <div className="flex items-center gap-8">
              <Link
                to="/trabajos"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-brown-500 text-primary-foreground text-xs tracking-[0.2em] uppercase hover:bg-brown-700 transition-colors"
              >
                Ver trabajos
              </Link>
              <Link
                to="/contacto"
                className="text-xs tracking-[0.2em] uppercase text-brown-500 border-b border-brown-400 pb-1 hover:text-brown-700 transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Propuesta de valor */}
      <section className="py-20 lg:py-28 bg-nude-50 border-y border-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-6">— Propuesta de valor</p>
          <p className="font-display font-light text-2xl md:text-3xl lg:text-4xl tracking-tight text-brown-700 leading-snug">
            Diseño identidades visuales y contenidos digitales que comunican con claridad, coherencia y carácter. Acompaño a marcas y equipos para traducir su esencia en piezas que generan impacto, construyen confianza y sostienen el vínculo con su audiencia.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-8 border-t border-border pt-10">
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-brown-500 mb-2">Identidad</p>
              <p className="text-sm font-light leading-relaxed text-foreground/75">
                Sistemas visuales sólidos, consistentes y reconocibles en todos los puntos de contacto.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-brown-500 mb-2">Contenido</p>
              <p className="text-sm font-light leading-relaxed text-foreground/75">
                Piezas para redes, campañas y plataformas digitales pensadas para conectar y convertir.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.25em] uppercase text-brown-500 mb-2">Dirección creativa</p>
              <p className="text-sm font-light leading-relaxed text-foreground/75">
                Una mirada estratégica que ordena el proceso y alinea el diseño con los objetivos de cada marca.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
