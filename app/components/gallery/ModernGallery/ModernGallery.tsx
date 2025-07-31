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
      src: '/images/IMG_0030.jpg',
      alt: 'Trabalho realizado pela HL Car Detail',
      title: 'Lavagem Premium',
      description: 'Resultado excepcional dos nossos serviços de lavagem premium',
      category: 'lavagem',
      featured: true
    },
    {
      id: '2',
      src: '/images/IMG_0043.jpg',
      alt: 'Serviço de detalhamento HL Car Detail',
      title: 'Detalhamento Completo',
      description: 'Cuidado minucioso em cada detalhe do seu veículo',
      category: 'detalhamento'
    },
    {
      id: '3',
      src: '/images/IMG_0099.jpg',
      alt: 'Polimento técnico HL Car Detail',
      title: 'Polimento Técnico',
      description: 'Polimento profissional com acabamento perfeito',
      category: 'polimento'
    },
    {
      id: '4',
      src: '/images/IMG_0139.jpg',
      alt: 'Proteção cerâmica aplicada pela HL Car Detail',
      title: 'Proteção Cerâmica',
      description: 'Aplicação de coating cerâmico para proteção duradoura',
      category: 'ceramica'
    },
    {
      id: '5',
      src: '/images/IMG_0161.jpg',
      alt: 'Tratamento Gold HL Car Detail',
      title: 'Tratamento Gold',
      description: 'Nosso tratamento mais completo e sofisticado',
      category: 'detalhamento'
    },
    {
      id: '6',
      src: '/images/IMG_0242.jpg',
      alt: 'Lavagem Master HL Car Detail',
      title: 'Lavagem Master',
      description: 'Resultado da lavagem master com selante',
      category: 'lavagem'
    },
    {
      id: '7',
      src: '/images/IMG_0247.jpg',
      alt: 'Serviço especializado HL Car Detail',
      title: 'Cuidado Especial',
      description: 'Tratamento especializado para cada tipo de veículo',
      category: 'detalhamento'
    },
    {
      id: '8',
      src: '/images/IMG_0248.jpg',
      alt: 'Acabamento perfeito HL Car Detail',
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