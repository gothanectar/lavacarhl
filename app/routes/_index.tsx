import React from 'react';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer';
import AutomotiveHero from '../components/hero/AutomotiveHero/AutomotiveHero';
import ServiceTables from '../components/services/ServiceTables/ServiceTables';
import ModernGallery from '../components/gallery/ModernGallery/ModernGallery';
import InstagramSection from '../components/social/InstagramSection/InstagramSection';
import ModernLocation from '../components/location/ModernLocation/ModernLocation';
import ModernContact from '../components/contact/ModernContact/ModernContact';
import WhatsAppButton from '../components/contact/WhatsAppButton/WhatsAppButton';

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