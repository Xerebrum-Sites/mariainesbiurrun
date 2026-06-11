import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const navLinks = [
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/trabajos", label: "Trabajos" },
  { to: "/experiencia", label: "Experiencia" },
  { to: "/herramientas", label: "Herramientas" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased flex flex-col">
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-sm tracking-[0.2em] uppercase text-brown-500 transition-opacity hover:opacity-70"
          >
            Inés Biurrun
          </Link>
          <ul className="hidden md:flex items-center gap-10 text-xs tracking-[0.18em] uppercase text-muted-foreground">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="relative inline-block py-1 text-muted-foreground transition-colors duration-300 hover:text-brown-700 data-[status=active]:text-brown-700 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brown-500 after:transition-transform after:duration-300 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
                  activeOptions={{ exact: true }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="flex-1 pt-20">{children}</main>

      <footer className="border-t border-border py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-center text-xs tracking-[0.2em] uppercase text-muted-foreground">
          <p>© 2026 Inés Biurrun</p>
        </div>
      </footer>
    </div>
  );
}
