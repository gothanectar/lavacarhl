import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Lavagem Gold',
    'Lavagem Super Gold',
    'Higienização de Bancos',
    'Polimento',
    'Proteção Cerâmica',
    'Restauro de Faróis',
    'Aplicação de PPF'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="/images/logo-hl-car-detail.png" 
                alt="HL Car Detail Logo"
              />
              <span className="footer-logo-text">HL Car Detail</span>
            </div>
            <p className="footer-description">
              Estética Automotiva de Luxo - Cuidamos do seu veículo com exclusividade, 
              precisão e sofisticação.
            </p>
            <div className="social-links">
              <a 
                href="https://www.facebook.com/hllavacaresteticaautomotiva/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="https://wa.me/+5541996003019?text=Olá!%20Vim%20através%20do%20site%20da%20HL%20Car%20Detail%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20estética%20automotiva.%20Podem%20me%20ajudar?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a 
                href="https://www.instagram.com/p/C51E7L4PRy6/?utm_source=ig_web_copy_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3>Contato</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  Rua José de Alencar, 1550<br />
                  Cristo Rei - Curitiba - PR<br />
                  80040-070
                </span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+5541996003019">(41) 99603-3019</a>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="contact-icon" />
                <a href="https://wa.me/+5541996003019?text=Olá!%20Vim%20através%20do%20site%20da%20HL%20Car%20Detail%20e%20gostaria%20de%20entrar%20em%20contato%20para%20saber%20mais%20sobre%20os%20serviços.%20Vocês%20podem%20me%20atender?" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Nossos Serviços</h3>
            <ul className="services-list">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div className="footer-section">
            <h3>Informações</h3>
            <p>Horário de Funcionamento:</p>
            <p>Segunda a Sexta: 8:00 - 18:00<br />Sábado: 8:00 - 16:00</p>
            <p style={{ marginTop: 'var(--spacing-md)' }}>
              <strong>Aceitamos todos os cartões!</strong>
            </p>
            <p>Serviço de delivery disponível</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} HL Car Detail. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
