import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logo from "@/assets/neuropathway-logo.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Neuro Pathway | R.E.S.T Sessions by Shetall" },
      { name: "description", content: "Rapid Evolve Self Transformation (R.E.S.T) sessions combining Clinical Hypnosis, Regression, NLP, CBT and Neuro Science to resolve deep-rooted patterns." },
      { name: "author", content: "Shetall" },
      { property: "og:title", content: "Neuro Pathway | R.E.S.T Sessions by Shetall" },
      { property: "og:description", content: "Rapid Evolve Self Transformation (R.E.S.T) sessions combining Clinical Hypnosis, Regression, NLP, CBT and Neuro Science to resolve deep-rooted patterns." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@NeuroPathway" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const WHATSAPP_URL = "https://wa.me/971585914324";

type NavItem = { label: string; href?: string; to?: string; children?: NavItem[] };

const NAV: NavItem[] = [
  {
    label: "Home",
    href: "/#home",
    children: [
      { label: "About Me", href: "/#about" },
      { label: "My Philosophy", href: "/#philosophy" },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "R.E.S.T Sessions", to: "/rest-sessions" },
      { label: "Numero Cosmic Code", to: "/numerology" },
      { label: "Graphology", to: "/graphology" },
    ],
  },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
  { label: "Shop", to: "/shop" },
];

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  const linkClass =
    "block rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary";
  const subClass =
    "block rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary";

  return (
    <div className="flex h-full flex-col">
      <a href="/#home" onClick={onNavigate} className="flex items-center gap-3 px-3 py-6">
        <img src={logo} alt="Neuro Pathway logo" width={48} height={48} className="h-12 w-12 object-contain" />
        <span
          className="whitespace-nowrap text-lg font-semibold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Neuro Pathway
        </span>
      </a>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-6">
        {NAV.map((item) => (
          <div key={item.label} className="pb-1">
            {item.to ? (
              <Link to={item.to} onClick={onNavigate} className={linkClass} activeProps={{ className: `${linkClass} text-primary` }}>
                {item.label}
              </Link>
            ) : (
              <a href={item.href} onClick={onNavigate} className={linkClass}>
                {item.label}
              </a>
            )}
            {item.children && (
              <div className="ml-3 mt-1 space-y-0.5 border-l border-border pl-3">
                {item.children.map((child) =>
                  child.to ? (
                    <Link
                      key={child.label}
                      to={child.to}
                      onClick={onNavigate}
                      className={subClass}
                      activeProps={{ className: `${subClass} text-primary` }}
                    >
                      {child.label}
                    </Link>
                  ) : (
                    <a key={child.label} href={child.href} onClick={onNavigate} className={subClass}>
                      {child.label}
                    </a>
                  ),
                )}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-3">
        <a
          href="/#contact"
          onClick={onNavigate}
          className="block rounded-full bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Book a Free Call
        </a>
      </div>
    </div>
  );
}

function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen lg:pl-64">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-border bg-background lg:block">
        <SidebarNav />
      </aside>

      {/* Mobile top bar */}
      <div className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur lg:hidden">
        <a href="/#home" className="flex items-center gap-2">
          <img src={logo} alt="Neuro Pathway logo" width={36} height={36} className="h-9 w-9 object-contain" />
          <span className="text-base font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Neuro Pathway
          </span>
        </a>
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-foreground hover:bg-secondary"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setOpen(false)} />
          <div className="absolute inset-y-0 left-0 w-72 bg-background shadow-xl">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 rounded-md p-2 text-foreground hover:bg-secondary"
            >
              <X className="h-5 w-5" />
            </button>
            <SidebarNav onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      {children}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-white">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.25 8.24z" />
        </svg>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container-tight flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-lg font-medium text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
            Neuro Pathway
          </p>
          <p className="text-sm text-muted-foreground">
            R.E.S.T Sessions by Shetall — Changing Your Reality
          </p>
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="/#home" className="hover:text-foreground">Home</a>
          <a href="/#about" className="hover:text-foreground">About</a>
          <a href="/#services" className="hover:text-foreground">Services</a>
          <a href="/#contact" className="hover:text-foreground">Contact</a>
        </div>
      </div>
      <div className="container-tight mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Neuro Pathway. All rights reserved.
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Shell>
        <Outlet />
        <Footer />
      </Shell>
    </QueryClientProvider>
  );
}
