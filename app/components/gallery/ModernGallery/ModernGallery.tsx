import React, { useState } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaEye, FaHeart, FaShare } from 'react-icons/fa';
import './ModernGallery.css';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  featured?: boolean;
}

const ModernGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { id: 'todos', label: 'Todos os Trabalhos' },
    { id: 'lavagem', label: 'Lavagens' },
    { id: 'polimento', label: 'Polimento' },
    { id: 'ceramica', label: 'Proteção Cerâmica' },
    { id: 'detalhamento', label: 'Detalhamento' }
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: '1',
      src: '/images/close-na-lavagem-cuidado-carro.jpg',
      alt: 'Close na lavagem e cuidado do carro',
      title: 'Lavagem Detalhada',
      description: 'Cuidado minucioso em cada detalhe do seu veículo',
      category: 'lavagem',
      featured: true
    },
    {
      id: '2',
      src: '/images/lindo-carro-no-servico-de-lavagem.jpg',
      alt: 'Lindo carro no serviço de lavagem',
      title: 'Serviço Premium',
      description: 'Resultado excepcional com nosso serviço premium',
      category: 'lavagem'
    },
    {
      id: '3',
      src: '/images/andre-tan-pRppMPh4Zho-unsplash.jpg',
      alt: 'Carro esportivo após polimento',
      title: 'Polimento Técnico',
      description: 'Polimento profissional com acabamento perfeito',
      category: 'polimento'
    },
    {
      id: '4',
      src: '/images/andres-leal-ze_L46_GOaw-unsplash.jpg',
      alt: 'Carro de luxo detalhado',
      title: 'Detalhamento Completo',
      description: 'Higienização interna e externa completa',
      category: 'detalhamento'
    },
    {
      id: '5',
      src: '/images/andrew-pons-Os7C4iw2rDc-unsplash.jpg',
      alt: 'Carro clássico restaurado',
      title: 'Proteção Cerâmica',
      description: 'Aplicação de coating cerâmico para proteção duradoura',
      category: 'ceramica'
    },
    {
      id: '6',
      src: '/images/brian-lundquist-bhRTtuNTHCE-unsplash.jpg',
      alt: 'Carro moderno após tratamento',
      title: 'Tratamento Gold',
      description: 'Nosso tratamento mais completo e sofisticado',
      category: 'detalhamento'
    },
    {
      id: '7',
      src: '/images/clement-m-Ng3xrviPrhk-unsplash.jpg',
      alt: 'Carro esportivo brilhante',
      title: 'Lavagem Master',
      description: 'Resultado da lavagem master com selante',
      category: 'lavagem'
    },
    {
      id: '8',
      src: '/images/elly-johnson-G1WBNNhsn20-unsplash.jpg',
      alt: 'Carro vintage cuidado',
      title: 'Cuidado Especial',
      description: 'Tratamento especializado para veículos clássicos',
      category: 'detalhamento'
    },
    {
      id: '9',
      src: '/images/eugene-chystiakov-rbXzG9aAxVA-unsplash.jpg',
      alt: 'Carro de alta performance',
      title: 'Performance Care',
      description: 'Cuidado especializado para carros de alta performance',
      category: 'polimento'
    },
    {
      id: '10',
      src: '/images/joey-banks-YApiWyp0lqo-unsplash.jpg',
      alt: 'Carro urbano moderno',
      title: 'Lavagem Urbana',
      description: 'Perfeito para o dia a dia da cidade',
      category: 'lavagem'
    },
    {
      id: '11',
      src: '/images/severin-demchuk-RYkZRwbmc1U-unsplash.jpg',
      alt: 'Carro de luxo premium',
      title: 'Luxo Premium',
      description: 'Tratamento premium para veículos de luxo',
      category: 'ceramica'
    },
    {
      id: '12',
      src: '/images/zulfahmi-khani-9iH_6JO7Ufs-unsplash.jpg',
      alt: 'Carro esportivo finalizado',
      title: 'Acabamento Perfeito',
      description: 'Resultado final com acabamento impecável',
      category: 'polimento'
    }
  ];

  const filteredImages = activeCategory === 'todos' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const handleWhatsAppClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e fiquei impressionado com os trabalhos na galeria. Gostaria de saber mais sobre os serviços.';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço após ver os resultados na galeria.';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="gallery" className="modern-gallery">
      <div className="container">
        <div className="modern-gallery-header">
          <h2 className="modern-gallery-title">Galeria</h2>
          <p className="modern-gallery-subtitle">
            Confira alguns dos nossos trabalhos realizados
          </p>
        </div>

        {/* Category Filter */}
        <div className="gallery-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`gallery-category ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`gallery-item ${image.featured ? 'featured' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-item-image"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="gallery-item-overlay">
                <div className="gallery-item-content">
                  <h3 className="gallery-item-title">{image.title}</h3>
                  <p className="gallery-item-description">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="gallery-cta">
          <h3 className="gallery-cta-title">Gostou dos resultados?</h3>
          <p className="gallery-cta-text">
            Entre em contato conosco e transforme seu veículo com a mesma qualidade e cuidado
          </p>
          <div className="gallery-cta-buttons">
            <button className="btn btn-primary btn-lg" onClick={handleScheduleClick}>
              <FaCalendarAlt />
              Agendar Meu Serviço
            </button>
            <button className="btn btn-secondary btn-lg" onClick={handleWhatsAppClick}>
              <FaWhatsapp />
              Ver Mais no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernGallery;