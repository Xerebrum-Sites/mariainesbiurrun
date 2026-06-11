import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import headshot from "@/assets/headshot.jpg";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Inés Biurrun" },
      { name: "description", content: "Diseñadora gráfica con más de 10 años de experiencia en identidad visual, contenidos digitales y comunicación de marca." },
      { property: "og:title", content: "Sobre mí — Inés Biurrun" },
      { property: "og:description", content: "Perfil profesional de Inés Biurrun, diseñadora gráfica." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="py-20 lg:py-28 bg-nude-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-8">— Perfil</p>
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
            <div className="shrink-0 w-44 sm:w-52 md:w-56 lg:w-64">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-nude-100">
                <img
                  src={headshot}
                  alt="Retrato de Inés Biurrun, diseñadora gráfica"
                  width={560}
                  height={700}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h1 className="font-display font-light text-3xl lg:text-4xl tracking-tight text-brown-700 leading-tight">
                Diseñadora gráfica con más de 10 años de experiencia creando identidades visuales, contenidos digitales y experiencias de marca.
              </h1>
              <p className="text-lg font-light leading-relaxed text-foreground/80">
                Especializada en comunicación visual para entornos corporativos
                y de salud, desarrollo contenido para redes sociales, piezas
                editoriales, material impreso y plataformas digitales. Combino
                un sólido dominio de Adobe Creative Suite con herramientas de
                inteligencia artificial para optimizar procesos creativos y
                potenciar resultados.
              </p>
              <p className="text-lg font-light leading-relaxed text-foreground/80">
                Cuento con experiencia en gestión de contenido digital,
                coordinación y cobertura de eventos, comunicación institucional
                y dirección creativa, siempre enfocada en construir mensajes
                claros, visualmente atractivos y alineados con los objetivos de
                cada marca.
              </p>
              <div className="pt-8 grid grid-cols-2 gap-8 border-t border-border">
                <div>
                  <p className="font-display text-3xl text-brown-500 font-light">10+</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Años en diseño</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-brown-500 font-light">40+</p>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-2">Marcas & proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
