import React from 'react';
import { FaWhatsapp, FaCalendarAlt, FaShieldAlt, FaStar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './AutomotiveHero.css';

const AutomotiveHero: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de conhecer os serviços de estética automotiva premium. Poderia me enviar mais informações?';
    const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço. Por favor, me informe as opções disponíveis e horários. Obrigado!';
    const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="automotive-hero">
      <div className="container automotive-hero-container">
        <div className="automotive-hero-content">
          {/* Left Content */}
          <div className="automotive-hero-text">
            <div className="automotive-hero-badge">
              <FaStar />
              Desde 2017 • Curitiba - PR
            </div>
            
            <h1 className="automotive-hero-title">
              Os melhores serviços de{' '}
              <span className="highlight">estética automotiva</span>{' '}
              para seu veículo
            </h1>
            
            <p className="automotive-hero-description">
              Transformamos seu carro em uma obra de arte com técnicas profissionais, 
              produtos premium e atendimento personalizado. Experimente a diferença 
              da HL Car Detail.
            </p>
            
            <div className="automotive-hero-actions">
              <button 
                className="btn btn-primary btn-lg"
                onClick={handleScheduleClick}
              >
                <FaCalendarAlt />
                Agendar Serviço
              </button>
              
              <button 
                className="btn btn-secondary btn-lg"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp />
                Falar Conosco
              </button>
            </div>
            
            <div className="automotive-hero-stats">
              <div className="automotive-hero-stat">
                <span className="automotive-hero-stat-number">500+</span>
                <span className="automotive-hero-stat-label">Clientes Satisfeitos</span>
              </div>
              <div className="automotive-hero-stat">
                <span className="automotive-hero-stat-number">12+</span>
                <span className="automotive-hero-stat-label">Anos de Experiência</span>
              </div>
              <div className="automotive-hero-stat">
                <span className="automotive-hero-stat-number">100%</span>
                <span className="automotive-hero-stat-label">Garantia</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="automotive-hero-visual">
            <img
              src="/images/imagem-principal.jpg"
              alt="Carro de luxo - HL Car Detail"
              className="automotive-hero-image"
            />
            
            {/* Floating Elements */}
            <div className="automotive-hero-float automotive-hero-float-1">
              <div className="float-content">
                <div className="float-icon">
                  <FaShieldAlt />
                </div>
                <div>
                  <div className="float-text">Proteção Cerâmica</div>
                  <div className="float-subtext">Durabilidade garantida</div>
                </div>
              </div>
            </div>
            
            <div className="automotive-hero-float automotive-hero-float-2">
              <div className="float-content">
                <div className="float-icon">
                  <FaClock />
                </div>
                <div>
                  <div className="float-text">Serviço Rápido</div>
                  <div className="float-subtext">Agendamento flexível</div>
                </div>
              </div>
            </div>
            
            <div className="automotive-hero-float automotive-hero-float-3">
              <div className="float-content">
                <div className="float-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="float-text">Cristo Rei</div>
                  <div className="float-subtext">Curitiba - PR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveHero;
