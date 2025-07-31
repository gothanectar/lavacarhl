import React from 'react';
import type { Route } from "./+types/_index";
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import AutomotiveHero from '../components/hero/AutomotiveHero/AutomotiveHero';
import ServiceTables from '../components/services/ServiceTables/ServiceTables';
import ModernGallery from '../components/gallery/ModernGallery/ModernGallery';
import InstagramSection from '../components/social/InstagramSection/InstagramSection';
import ModernLocation from '../components/location/ModernLocation/ModernLocation';
import ModernContact from '../components/contact/ModernContact/ModernContact';
import WhatsAppButton from '../components/contact/WhatsAppButton/WhatsAppButton';

export const meta: Route.MetaFunction = () => {
  return [
    { title: "HL Car Detail - Estética Automotiva de Luxo em Curitiba | Lavagem Premium" },
    { 
      name: "description", 
      content: "HL Car Detail: Estética automotiva de luxo em Curitiba. Lavagem premium, polimento técnico, proteção cerâmica e detalhamento completo. Rua José de Alencar, 1550 - Cristo Rei. (41) 99603-3019" 
    },
    { 
      name: "keywords", 
      content: "estética automotiva, lavagem de carro, polimento, proteção cerâmica, detalhamento automotivo, Curitiba, Cristo Rei, lavagem premium, carro limpo, HL Car Detail" 
    },
    { name: "author", content: "HL Car Detail" },
    { name: "robots", content: "index, follow" },
    { property: "og:title", content: "HL Car Detail - Estética Automotiva de Luxo em Curitiba" },
    { property: "og:description", content: "Transformamos seu carro em uma obra de arte com técnicas profissionais, produtos premium e atendimento personalizado." },
    { property: "og:image", content: "https://lavacarhl.vercel.app/images/logo-hl-car-detail.png" },
    { property: "og:url", content: "https://lavacarhl.vercel.app/" },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "pt_BR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "HL Car Detail - Estética Automotiva de Luxo em Curitiba" },
    { name: "twitter:description", content: "Transformamos seu carro em uma obra de arte com técnicas profissionais, produtos premium e atendimento personalizado." },
    { name: "twitter:image", content: "https://lavacarhl.vercel.app/images/logo-hl-car-detail.png" },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <main>
        <AutomotiveHero />
        <ServiceTables />
        <ModernGallery />
        <InstagramSection />
        <ModernLocation />
        <ModernContact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
