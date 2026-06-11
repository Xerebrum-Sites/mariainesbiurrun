import coverTsf from "@/assets/covers/tsf.png";
import coverTbsa from "@/assets/covers/tbsa.png";
import coverOnzas from "@/assets/covers/onzas.png";

// Magazine pages (auto-imported from /src/assets/<folder>/p-*.jpg)
const identidadModules = import.meta.glob("@/assets/identidad/p-*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;
const marcaModules = import.meta.glob("@/assets/marca/p-*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;
const tsfModules = import.meta.glob("@/assets/tsf/p-*.jpg", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const sortPages = (mods: Record<string, string>) =>
  Object.keys(mods)
    .sort()
    .map((k) => mods[k]);

export const identidadPages = sortPages(identidadModules);
export const marcaPages = sortPages(marcaModules);
export const tsfPages = sortPages(tsfModules);

export const experience = [
  { company: "Grupo Gamma", role: "Asistente de Comunicación", years: "2025 — Presente", description: "Gestión de contenidos para ateneos, jornadas y eventos médicos. Actualización del sitio institucional, coordinación con agencia, redes sociales (LinkedIn, Facebook, Instagram), cobertura fotográfica y audiovisual, y soporte operativo en actividades académicas y científicas." },
  { company: "The Stamp Factory", role: "Fundadora & Directora Creativa", years: "2020 — Presente", description: "Dirección creativa y diseño de producto. Contenido visual para redes (posts, stories, carruseles, campañas), piezas gráficas, material para plataformas digitales y gestión de identidad visual con foco en consistencia de marca." },
  { company: "Diseñadora Freelance", role: "Diseño Gráfico & Comunicación Visual", years: "2009 — Presente", description: "Proyectos de diseño para diversas marcas: contenido para redes y marketing digital, piezas para publicidad online y offline, material impreso y adaptación a múltiples formatos." },
  { company: "Muy Churito", role: "Fundadora & Diseñadora Gráfica", years: "2017 — 2023", description: "Diseño y producción integral de eventos: identidad visual, piezas personalizadas y dirección estética de ambientaciones para eventos corporativos y privados." },
  { company: "Isadora", role: "In Store Visual Merchandiser", years: "Feb — Jun 2018", description: "Diseño de vidrieras, exhibición de productos y cuidado de la estética en punto de venta." },
  { company: "Grupo Emerger", role: "Asistente de Diseño Gráfico", years: "Abr — May 2017", description: "Diseño de piezas gráficas institucionales y soporte en comunicación visual." },
  { company: "John Deere Argentina", role: "Asistente de Producción Audiovisual", years: "2014 — 2015", description: "Contenido gráfico y audiovisual institucional, edición de piezas y asistencia en ferias y eventos corporativos." },
  { company: "Indusparquet", role: "Encargada de Marketing & Diseño", years: "2011 — 2013", description: "Diseño de piezas gráficas para comunicación de marca y soporte en acciones de marketing." },
];

export type Work = {
  title: string;
  category: string;
  image: string;
  bg: string;
  description: string;
  pages?: string[];
};

export const works: Work[] = [
  {
    title: "The Stamp Factory",
    category: "The Stamp Factory",
    image: coverTsf,
    bg: "#D88B53",
    description: "Desarrollo y gestión de marca. Diseño de identidad visual, packaging, comunicación digital y estrategias de contenido.",
    pages: tsfPages,
  },
  {
    title: "TBSA",
    category: "TBSA",
    image: coverTbsa,
    bg: "#000000",
    description: "Diseño de identidad visual corporativa. Creación de sistema gráfico, lineamientos de marca y aplicaciones institucionales.",
    pages: identidadPages,
  },
  {
    title: "2 Onzas",
    category: "2 Onzas",
    image: coverOnzas,
    bg: "#F5F5F3",
    description: "Desarrollo de branding para empresa gastronómica. Construcción de identidad visual y aplicaciones de marca.",
    pages: marcaPages,
  },
];

export const workCategories = ["Todos", "The Stamp Factory", "TBSA", "2 Onzas"];

export const toolCategories = [
  { title: "Software", items: ["Illustrator", "Photoshop", "InDesign", "Figma", "Canva"] },
  { title: "Habilidades Técnicas", items: ["Diseño editorial", "Identidad visual", "Diagramación", "Retoque fotográfico", "Tipografía"] },
  { title: "Herramientas Digitales", items: ["Claude", "ChatGPT", "Gemini", "Google Workspace"] },
  { title: "Plataformas", items: ["Google Analytics", "Meta Business Suite", "LinkedIn", "Instagram", "Facebook"] },
];

export const expertise = ["Marketing Digital", "Email Marketing", "Social Ads", "Comunicación Visual", "Dirección Creativa", "Gestión de Redes Sociales"];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Avanzado" },
  { name: "Portugués", level: "Intermedio" },
  { name: "Italiano", level: "Básico" },
];
