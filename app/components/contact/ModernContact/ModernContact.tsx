import React from 'react';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaInstagram,
  FaCalendarAlt,
  FaCreditCard
} from 'react-icons/fa';
import './ModernContact.css';

const ModernContact: React.FC = () => {

  const handleWhatsAppClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de conversar sobre os serviços de estética automotiva. Vocês podem me atender agora?';
    const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço de estética automotiva. Podem me informar os horários disponíveis e valores?';
    const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="modern-contact">
      <div className="container">
        <div className="modern-contact-header">
          <h2 className="modern-contact-title">Entre em Contato</h2>
          <p className="modern-contact-subtitle">
            Estamos prontos para cuidar do seu veículo com a excelência que você merece
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="contact-info-title">Nossa Localização</h3>
              </div>
              <div className="contact-info-content">
                <p>
                  <strong>Rua José de Alencar, 1550</strong><br />
                  Cristo Rei - Curitiba - PR<br />
                  CEP: 80040-070
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <FaPhone />
                </div>
                <h3 className="contact-info-title">Contato Direto</h3>
              </div>
              <div className="contact-info-content">
                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <FaPhone className="contact-info-item-icon" />
                    <a href="tel:+5541996003019">(41) 99603-3019</a>
                  </li>
                  <li className="contact-info-item">
                    <FaWhatsapp className="contact-info-item-icon" />
                    <a href="https://wa.me/+5541996003019?text=Olá!%20Vim%20através%20do%20site%20da%20HL%20Car%20Detail%20e%20gostaria%20de%20falar%20diretamente%20com%20vocês.%20Podem%20me%20atender?" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </li>
                </ul>
                
                <div className="social-links">
                  <a 
                    href="https://www.facebook.com/hllavacaresteticaautomotiva/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href="https://wa.me/+5541996003019?text=Olá!%20Vim%20através%20do%20site%20da%20HL%20Car%20Detail%20e%20gostaria%20de%20conversar%20com%20vocês%20sobre%20os%20serviços.%20Estão%20disponíveis?" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link whatsapp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a 
                    href="https://www.instagram.com/p/C51E7L4PRy6/?utm_source=ig_web_copy_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <FaClock />
                </div>
                <h3 className="contact-info-title">Horário de Funcionamento</h3>
              </div>
              <div className="contact-info-content">
                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <FaClock className="contact-info-item-icon" />
                    <span>Segunda a Sexta: 8:00 - 18:00</span>
                  </li>
                  <li className="contact-info-item">
                    <FaClock className="contact-info-item-icon" />
                    <span>Sábado: 8:00 - 16:00</span>
                  </li>
                  <li className="contact-info-item">
                    <FaClock className="contact-info-item-icon" />
                    <span>Domingo: Fechado</span>
                  </li>
                  <li className="contact-info-item">
                    <FaCreditCard className="contact-info-item-icon" />
                    <span><strong>Aceitamos todos os cartões!</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="quick-actions">
              <button className="quick-action-btn primary" onClick={handleScheduleClick}>
                <FaCalendarAlt />
                Agendar Serviço
              </button>
              <button className="quick-action-btn whatsapp" onClick={handleWhatsAppClick}>
                <FaWhatsapp />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;
