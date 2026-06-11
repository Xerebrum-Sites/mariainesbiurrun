import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { works, workCategories, type Work } from "@/lib/portfolio-data";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/trabajos")({
  head: () => ({
    meta: [
      { title: "Trabajos Realizados — Inés Biurrun" },
      { name: "description", content: "Selección de proyectos de branding, identidad visual y comunicación: The Stamp Factory, TBSA y 2 Onzas." },
      { property: "og:title", content: "Trabajos Realizados — Inés Biurrun" },
      { property: "og:description", content: "Proyectos de branding e identidad visual." },
    ],
  }),
  component: WorksPage,
});

function WorksPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [openWork, setOpenWork] = useState<Work | null>(null);
  const filteredWorks =
    activeCategory === "Todos" ? works : works.filter((w) => w.category === activeCategory);

  return (
    <SiteLayout>
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-4">— Selección</p>
            <h1 className="font-display font-light text-4xl lg:text-5xl tracking-tight text-brown-700">
              Trabajos Realizados
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-base font-light text-muted-foreground">
              Una selección de proyectos que reflejan mi experiencia en diseño gráfico y comunicación visual.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {workCategories.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm transition-colors border ${
                    active
                      ? "bg-brown-700 text-primary-foreground border-brown-700"
                      : "bg-background text-brown-500 border-brown-400/40 hover:bg-nude-100"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-20">
            {filteredWorks.map((w) => {
              const hasPages = !!w.pages?.length;
              const Wrapper: React.ElementType = hasPages ? "button" : "article";
              return (
                <Wrapper
                  key={w.title}
                  onClick={hasPages ? () => setOpenWork(w) : undefined}
                  className={`group text-left w-full ${hasPages ? "cursor-pointer" : ""}`}
                >
                  <div
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-5"
                    style={{ backgroundColor: w.bg }}
                  >
                    <img
                      src={w.image}
                      alt={w.title}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    {hasPages && (
                      <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-brown-700/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <span className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/95 text-brown-700 text-xs tracking-[0.2em] uppercase">
                          Hojear manual
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl font-light text-brown-700">{w.title}</h3>
                    <span className="text-xs tracking-[0.2em] uppercase text-brown-400 shrink-0">{w.category}</span>
                  </div>
                  <p className="mt-2 text-base font-light leading-relaxed text-muted-foreground">
                    {w.description}
                  </p>
                  {hasPages && (
                    <span className="mt-4 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-brown-500 border-b border-brown-400 pb-1">
                      Ver manual · {w.pages?.length} pág.
                    </span>
                  )}
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      <Dialog open={!!openWork} onOpenChange={(o) => !o && setOpenWork(null)}>
        <DialogContent className="max-w-6xl w-[95vw] p-0 bg-nude-50 border-brown-400/30 overflow-hidden">
          <DialogTitle className="sr-only">{openWork?.title}</DialogTitle>
          <DialogDescription className="sr-only">{openWork?.description}</DialogDescription>
          <div className="px-6 pt-6 pb-2 flex items-baseline justify-between gap-4">
            <div>
              <p className="text-[10px] tracking-[0.3em] uppercase text-brown-400">— {openWork?.category}</p>
              <h3 className="font-display text-2xl lg:text-3xl font-light text-brown-700 mt-1">{openWork?.title}</h3>
            </div>
          </div>
          {openWork?.pages && (
            <div className="px-6 pb-8 pt-2">
              <Carousel opts={{ loop: false }} className="w-full">
                <CarouselContent>
                  {openWork.pages.map((src, i) => (
                    <CarouselItem key={src} className="basis-full">
                      <div className="relative bg-background rounded-xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(94,69,55,0.45)]">
                        <img
                          src={src}
                          alt={`${openWork.title} — página ${i + 1}`}
                          className="w-full h-auto max-h-[78vh] object-contain bg-white"
                          loading="lazy"
                        />
                        <span className="absolute bottom-3 right-4 text-[10px] tracking-[0.25em] uppercase text-brown-400 bg-background/80 backdrop-blur px-3 py-1 rounded-full">
                          {String(i + 1).padStart(2, "0")} / {String(openWork.pages!.length).padStart(2, "0")}
                        </span>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 lg:-left-4 bg-background/90 border-brown-400/40 text-brown-700 hover:bg-background" />
                <CarouselNext className="right-2 lg:-right-4 bg-background/90 border-brown-400/40 text-brown-700 hover:bg-background" />
              </Carousel>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </SiteLayout>
  );
}
