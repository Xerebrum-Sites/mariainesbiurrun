import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Inés Biurrun" },
      { name: "description", content: "Escribime para conversar sobre tu próximo proyecto de diseño o comunicación visual." },
      { property: "og:title", content: "Contacto — Inés Biurrun" },
      { property: "og:description", content: "Conversemos sobre tu próximo proyecto." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="py-24 lg:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-6">— Contacto</p>
          <h1 className="font-display font-extralight text-[clamp(2.5rem,7vw,6rem)] leading-[1] tracking-[-0.02em] text-brown-700">
            Conversemos sobre<br />
            <span className="italic text-brown-500">tu próximo proyecto.</span>
          </h1>
          <a
            href="mailto:hola@mariainesbiurrun.com.ar"
            className="inline-block mt-12 font-display text-xl lg:text-2xl text-brown-500 border-b border-brown-400 pb-2 hover:text-brown-700 transition-colors"
          >
            hola@mariainesbiurrun.com.ar
          </a>
          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>+54 341 260 4109</span>
            <span className="w-1 h-1 rounded-full bg-brown-400" />
            <span>Rosario, Santa Fe</span>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
