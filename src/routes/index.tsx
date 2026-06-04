import { createFileRoute } from "@tanstack/react-router";
import headshot from "@/assets/headshot.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inés Biurrun — Diseñadora Gráfica & Comunicación Visual" },
      { name: "description", content: "Portfolio de Inés Biurrun, diseñadora gráfica con 10+ años de experiencia en diseño visual, redes sociales y dirección creativa." },
      { property: "og:title", content: "Inés Biurrun — Diseñadora Gráfica" },
      { property: "og:description", content: "Portfolio de Inés Biurrun, diseñadora gráfica con 10+ años de experiencia en diseño visual." },
    ],
  }),
  component: Portfolio,
});

const experience = [
  { company: "Grupo Gamma", role: "Coordinadora de Comunicación & Eventos Médicos", years: "2025 — Presente", description: "Coordinación integral de ateneos y jornadas médicas, gestión de contenidos y sitio web institucional, redes sociales (LinkedIn, Facebook, Instagram), cobertura fotográfica y audiovisual, y soporte operativo a profesionales en actividades académicas y científicas." },
  { company: "The Stamp Factory", role: "Fundadora & Directora Creativa", years: "2020 — Presente", description: "Diseño de contenido para redes sociales, creación de flyers e invitaciones, banners y material visual. Gestión de identidad visual y consistencia de marca en todos los soportes." },
  { company: "Freelance", role: "Diseño Gráfico & Comunicación Visual", years: "2009 — Presente", description: "Diseño de contenido para redes sociales, piezas gráficas para publicidad online y offline, material impreso, adaptación de diseños a diferentes formatos." },
  { company: "Muy Churito", role: "Fundadora & Diseñadora", years: "2018 — 2020", description: "Diseño y producción integral de eventos, identidad visual." },
  { company: "Isadora", role: "Visual Merchandiser", years: "Feb — May 2018", description: "Diseño de vidrieras y exhibición de productos." },
  { company: "Grupo Emerger", role: "Asistente de Diseño Gráfico", years: "2017", description: "Producción de piezas gráficas institucionales." },
  { company: "John Deere Argentina", role: "Asistente Audiovisual", years: "2014 — 2015", description: "Gráficas institucionales y materiales de presentación." },
  { company: "Indusparquet", role: "Encargada de Diseño & Marketing", years: "2011 — 2013", description: "Piezas gráficas institucionales y material promocional." },
];

const works = [
  { title: "Country & Co.", category: "Identidad", image: work1, description: "Identidad visual y papelería para un estudio boutique. Sistema de marca minimalista con paleta nude y tipografía editorial." },
  { title: "Atelier Lina", category: "Redes Sociales", image: work2, description: "Dirección creativa y contenido para feed de Instagram de una marca de moda femenina. Grilla cohesiva y narrativa visual." },
  { title: "Bodas del Sur", category: "Print", image: work3, description: "Diseño de invitaciones y papelería para evento. Tipografía script combinada con sans neutra sobre papel de algodón." },
  { title: "Revista Mantra", category: "Editorial", image: work4, description: "Diagramación de spread editorial para revista independiente. Jerarquía tipográfica y ritmo visual entre imagen y texto." },
];

const tools = ["Illustrator", "Photoshop", "InDesign", "Figma", "Canva", "Google Analytics", "Email Marketing", "Social Ads", "Marketing Digital", "Google Workspace", "Claude", "ChatGPT", "Gemini"];
const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Avanzado" },
  { name: "Portugués", level: "Intermedio" },
  { name: "Italiano", level: "Básico" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <a href="#top" className="font-display text-sm tracking-[0.2em] uppercase text-brown-500">
            Inés Biurrun
          </a>
          <ul className="hidden md:flex items-center gap-10 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            <li><a href="#about" className="hover:text-brown-500 transition-colors">Sobre mí</a></li>
            <li><a href="#trabajos" className="hover:text-brown-500 transition-colors">Trabajos</a></li>
            <li><a href="#experience" className="hover:text-brown-500 transition-colors">Experiencia</a></li>
            <li><a href="#tools" className="hover:text-brown-500 transition-colors">Herramientas</a></li>
            <li><a href="#contact" className="hover:text-brown-500 transition-colors">Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header id="top" className="pt-36 pb-20 lg:pt-44 lg:pb-28">
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
              <a
                href="#trabajos"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-brown-500 text-primary-foreground text-xs tracking-[0.2em] uppercase hover:bg-brown-700 transition-colors"
              >
                Ver trabajos
              </a>
              <a href="#contact" className="text-xs tracking-[0.2em] uppercase text-brown-500 border-b border-brown-400 pb-1 hover:text-brown-700 transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-24 lg:py-32 bg-nude-50 border-y border-border">
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
              <h2 className="font-display font-light text-3xl lg:text-4xl tracking-tight text-brown-700 leading-tight">
                Inés Biurrun, diseñadora gráfica con más de una década creando identidades visuales y experiencias de marca.
              </h2>
              <p className="text-lg font-light leading-relaxed text-foreground/80">
                Especialista en contenido para redes sociales, material impreso y
                diseño web. Combino el dominio técnico de Adobe Suite con
                herramientas de IA contemporáneas para entregar piezas con
                coherencia de marca y mirada editorial.
              </p>
              <p className="text-lg font-light leading-relaxed text-foreground/80">
                Experiencia en gestión de contenido digital, cobertura de eventos
                y dirección creativa — siempre buscando equilibrio entre la elegancia
                visual y la claridad del mensaje.
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

      {/* Trabajos */}
      <section id="trabajos" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-4">— Selección</p>
              <h2 className="font-display font-light text-4xl lg:text-5xl tracking-tight text-brown-700">
                Trabajos
              </h2>
            </div>
            <p className="hidden md:block text-sm text-muted-foreground font-light">
              Proyectos recientes
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-16 lg:gap-y-20">
            {works.map((w) => (
              <article key={w.title} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-nude-100 mb-5">
                  <img
                    src={w.image}
                    alt={w.title}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-light text-brown-700">{w.title}</h3>
                  <span className="text-xs tracking-[0.2em] uppercase text-brown-400 shrink-0">{w.category}</span>
                </div>
                <p className="mt-2 text-base font-light leading-relaxed text-muted-foreground">
                  {w.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* Experience */}
      <section id="experience" className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-4">— Trayectoria</p>
              <h2 className="font-display font-light text-4xl lg:text-5xl tracking-tight text-brown-700">
                Experiencia
              </h2>
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
        </div>
      </section>

      {/* Tools & Education */}
      <section id="tools" className="py-24 lg:py-32 bg-nude-50 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-4">— Caja de herramientas</p>
            <h2 className="font-display font-light text-4xl lg:text-5xl tracking-tight text-brown-700 mb-10">
              Herramientas
            </h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((t) => (
                <span
                  key={t}
                  className="px-5 py-2.5 rounded-full border border-brown-400/40 text-sm text-brown-500 bg-background hover:bg-nude-100 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-16">
              <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-6">— Idiomas</p>
              <ul className="space-y-3">
                {languages.map((l) => (
                  <li key={l.name} className="flex items-baseline justify-between border-b border-border pb-3">
                    <span className="font-display text-lg text-brown-700">{l.name}</span>
                    <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

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
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 lg:py-40">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-brown-400 mb-6">— Contacto</p>
          <h2 className="font-display font-extralight text-[clamp(2.5rem,7vw,6rem)] leading-[1] tracking-[-0.02em] text-brown-700">
            Conversemos sobre<br />
            <span className="italic text-brown-500">tu próximo proyecto.</span>
          </h2>
          <a
            href="mailto:biurrunmariaines@gmail.com"
            className="inline-block mt-12 font-display text-xl lg:text-2xl text-brown-500 border-b border-brown-400 pb-2 hover:text-brown-700 transition-colors"
          >
            biurrunmariaines@gmail.com
          </a>
          <div className="mt-10 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <span>+54 341 260 4109</span>
            <span className="w-1 h-1 rounded-full bg-brown-400" />
            <span>Rosario, Santa Fe</span>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <p>© 2026 Inés Biurrun</p>
          <p>Diseñado & desarrollado con cuidado</p>
        </div>
      </footer>
    </div>
  );
}
