import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  { rel: "canonical", href: "https://lavacarhl.vercel.app" },
  { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
  { rel: "robots", href: "/robots.txt" },
  { rel: "manifest", href: "/manifest.json" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* SEO Meta Tags */}
        <title>HL Car Detail - Estética Automotiva de Luxo em Curitiba | Lavagem Premium</title>
        <meta name="description" content="HL Car Detail: Estética automotiva de luxo em Curitiba. Lavagem premium, polimento técnico, proteção cerâmica e detalhamento completo. Rua José de Alencar, 1550 - Cristo Rei. (41) 9 6003-0019" />
        <meta name="keywords" content="estética automotiva, lavagem de carro, polimento, proteção cerâmica, detalhamento automotivo, Curitiba, Cristo Rei, lavagem premium, carro limpo, HL Car Detail" />
        <meta name="author" content="HL Car Detail" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lavacarhl.vercel.app/" />
        <meta property="og:title" content="HL Car Detail - Estética Automotiva de Luxo em Curitiba" />
        <meta property="og:description" content="Transformamos seu carro em uma obra de arte com técnicas profissionais, produtos premium e atendimento personalizado. Experimente a diferença da HL Car Detail." />
        <meta property="og:image" content="https://lavacarhl.vercel.app/images/logo-hl-car-detail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="HL Car Detail" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lavacarhl.vercel.app/" />
        <meta property="twitter:title" content="HL Car Detail - Estética Automotiva de Luxo em Curitiba" />
        <meta property="twitter:description" content="Transformamos seu carro em uma obra de arte com técnicas profissionais, produtos premium e atendimento personalizado." />
        <meta property="twitter:image" content="https://lavacarhl.vercel.app/images/logo-hl-car-detail.png" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HL Car Detail",
            "description": "Estética automotiva de luxo especializada em lavagem premium, polimento técnico, proteção cerâmica e detalhamento completo",
            "url": "https://lavacarhl.vercel.app",
            "telephone": "+55-41-96003-0019",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua José de Alencar, 1550",
              "addressLocality": "Curitiba",
              "addressRegion": "PR",
              "postalCode": "80040-070",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -25.4284,
              "longitude": -49.2733
            },
            "openingHours": [
              "Mo-Sa 08:00-18:00"
            ],
            "priceRange": "$$",
            "image": "https://lavacarhl.vercel.app/images/logo-hl-car-detail.png",
            "logo": "https://lavacarhl.vercel.app/images/logo-hl-car-detail.png",
            "sameAs": [
              "https://www.facebook.com/hllavacaresteticaautomotiva/",
              "https://www.instagram.com/p/C51E7L4PRy6/",
              "https://wa.me/+554196003019"
            ],
            "serviceArea": {
              "@type": "City",
              "name": "Curitiba"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Estética Automotiva",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Lavagem Premium",
                    "description": "Lavagem completa com produtos premium"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Polimento Técnico",
                    "description": "Polimento profissional para restaurar o brilho"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Proteção Cerâmica",
                    "description": "Aplicação de coating cerâmico para proteção duradoura"
                  }
                }
              ]
            }
          })}
        </script>
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/logo-hl-car-detail.png" />
        
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
