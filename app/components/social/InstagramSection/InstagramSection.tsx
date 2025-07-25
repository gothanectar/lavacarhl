import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { FaInstagram, FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';
import './InstagramSection.css';

const InstagramSection: React.FC = () => {
  // URLs dos posts do Instagram da HL Car Detail
  const instagramPosts = [
    'https://www.instagram.com/p/C51E7L4PRy6/',
    // Você pode adicionar mais URLs de posts aqui conforme necessário
    // 'https://www.instagram.com/p/OUTRO_POST_ID/',
  ];

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/p/C51E7L4PRy6/?utm_source=ig_web_copy_link', '_blank');
  };

  const handleWhatsAppFromInstagram = () => {
    const message = 'Olá! Vi vocês no Instagram e fiquei interessado nos serviços da HL Car Detail. Podem me passar mais informações?';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="instagram-section">
      <div className="container">
        <div className="instagram-header">
          <div className="instagram-title-wrapper">
            <div className="instagram-icon">
              <FaInstagram />
            </div>
            <h2 className="instagram-title">Siga-nos no Instagram</h2>
          </div>
          <p className="instagram-subtitle">
            Acompanhe nossos trabalhos e novidades nas redes sociais
          </p>
          <button className="instagram-follow-btn" onClick={handleInstagramClick}>
            <FaInstagram />
            Seguir no Instagram
            <FaExternalLinkAlt />
          </button>
        </div>

        <div className="instagram-content">
          <div className="instagram-posts">
            {instagramPosts.map((postUrl, index) => (
              <div key={index} className="instagram-post-wrapper">
                <InstagramEmbed 
                  url={postUrl}
                  width="100%"
                  height={540}
                  captioned
                />
              </div>
            ))}
          </div>

          <div className="instagram-info">
            <div className="instagram-info-card">
              <h3 className="instagram-info-title">
                <FaInstagram />
                @hlcardetail
              </h3>
              <p className="instagram-info-description">
                Acompanhe nossos trabalhos diários, dicas de cuidados automotivos 
                e os resultados incríveis que alcançamos com cada veículo.
              </p>
              
              <div className="instagram-features">
                <div className="instagram-feature">
                  <span className="instagram-feature-icon">📸</span>
                  <span>Antes e depois dos serviços</span>
                </div>
                <div className="instagram-feature">
                  <span className="instagram-feature-icon">💡</span>
                  <span>Dicas de manutenção</span>
                </div>
                <div className="instagram-feature">
                  <span className="instagram-feature-icon">🚗</span>
                  <span>Novidades em estética automotiva</span>
                </div>
                <div className="instagram-feature">
                  <span className="instagram-feature-icon">⭐</span>
                  <span>Depoimentos de clientes</span>
                </div>
              </div>

              <div className="instagram-cta">
                <p>Não perca nenhuma novidade!</p>
                <div className="instagram-cta-buttons">
                  <button className="instagram-cta-btn primary" onClick={handleInstagramClick}>
                    <FaInstagram />
                    Seguir Agora
                  </button>
                  <button className="instagram-cta-btn whatsapp" onClick={handleWhatsAppFromInstagram}>
                    <FaWhatsapp />
                    Falar Conosco
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;