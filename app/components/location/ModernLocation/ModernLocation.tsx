import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaRoute, 
  FaParking,
  FaWifi,
  FaShieldAlt,
  FaCoffee,
  FaPhone,
  FaWhatsapp
} from 'react-icons/fa';
import './ModernLocation.css';

const ModernLocation: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const address = "Rua José de Alencar, 1550 - Cristo Rei - Curitiba - PR, 80040-070";
  
  const handleDirections = () => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+554196003019';
  };

  const handleWhatsApp = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de saber como chegar até vocês. Podem me ajudar com as direções?';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <section className="modern-location">
      <div className="container">
        <div className="modern-location-header">
          <h2 className="modern-location-title">Nossa Localização</h2>
          <p className="modern-location-subtitle">
            Venha nos visitar em nosso espaço projetado para oferecer o melhor em estética automotiva
          </p>
        </div>

        <div className="location-content">
          {/* Location Info */}
          <div className="location-info">
            <div className="location-card">
              <div className="location-card-header">
                <div className="location-card-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="location-card-title">Endereço</h3>
              </div>
              <div className="location-card-content">
                <p className="location-address">
                  Rua José de Alencar, 1550<br />
                  Cristo Rei - Curitiba - PR<br />
                  CEP: 80040-070
                </p>
                <p>
                  Nosso novo espaço foi projetado especialmente para oferecer 
                  o melhor em estética automotiva, com instalações modernas e 
                  ambiente confortável para nossos clientes.
                </p>
                
                <div className="location-features">
                  <div className="location-feature">
                    <FaParking className="location-feature-icon" />
                    <span>Estacionamento gratuito</span>
                  </div>
                  <div className="location-feature">
                    <FaWifi className="location-feature-icon" />
                    <span>Wi-Fi liberado</span>
                  </div>
                  <div className="location-feature">
                    <FaCoffee className="location-feature-icon" />
                    <span>Área de espera</span>
                  </div>
                  <div className="location-feature">
                    <FaShieldAlt className="location-feature-icon" />
                    <span>Local seguro</span>
                  </div>
                </div>

                <div className="location-actions">
                  <button 
                    className="location-action-btn primary"
                    onClick={handleDirections}
                  >
                    <FaRoute />
                    Como Chegar
                  </button>
                  <button 
                    className="location-action-btn"
                    onClick={handleCall}
                  >
                    <FaPhone />
                    Ligar
                  </button>
                </div>
              </div>
            </div>

            <div className="location-card">
              <div className="location-card-header">
                <div className="location-card-icon">
                  <FaClock />
                </div>
                <h3 className="location-card-title">Horário de Funcionamento</h3>
              </div>
              <div className="location-card-content">
                <p><strong>Segunda a Sábado:</strong> 8:00 - 18:00</p>
                <p><strong>Domingo:</strong> Fechado</p>
                <p style={{ marginTop: 'var(--space-4)', color: 'var(--color-blue)', fontWeight: '600' }}>
                  Aceitamos todos os cartões de crédito e débito!
                </p>
                
                <div className="location-actions">
                  <button 
                    className="location-action-btn whatsapp"
                    onClick={handleWhatsApp}
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </button>
                  <button 
                    className="location-action-btn"
                    onClick={handleCall}
                  >
                    <FaPhone />
                    (41) 9 6003-0019
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="location-map-section">
            <div className="location-map-container">
              {!mapLoaded && (
                <div className="location-map-loading">
                  <div className="location-map-loading-spinner"></div>
                  <span>Carregando mapa...</span>
                </div>
              )}
              <iframe
                className="location-map"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.9147!2d-49.2733!3d-25.4284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4c8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2sRua%20Jos%C3%A9%20de%20Alencar%2C%201550%20-%20Cristo%20Rei%2C%20Curitiba%20-%20PR%2C%2080040-070!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr`}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização HL Car Detail"
                onLoad={handleMapLoad}
              />
              <div className="location-map-overlay" />
            </div>

            <div className="directions-card">
              <h3 className="directions-card-title">Precisa de Direções?</h3>
              <p className="directions-card-text">
                Clique no botão abaixo para abrir as direções no Google Maps
              </p>
              <button className="directions-btn" onClick={handleDirections}>
                <FaRoute />
                Abrir no Google Maps
              </button>
            </div>
          </div>
        </div>

        {/* Location Stats */}
        <div className="location-stats">
          <div className="location-stat">
            <div className="location-stat-icon">
              <FaMapMarkerAlt />
            </div>
            <h4 className="location-stat-title">Localização Privilegiada</h4>
            <p className="location-stat-description">
              No coração do Cristo Rei, fácil acesso e estacionamento
            </p>
          </div>
          <div className="location-stat">
            <div className="location-stat-icon">
              <FaShieldAlt />
            </div>
            <h4 className="location-stat-title">Ambiente Seguro</h4>
            <p className="location-stat-description">
              Local monitorado 24h com total segurança para seu veículo
            </p>
          </div>
          <div className="location-stat">
            <div className="location-stat-icon">
              <FaCoffee />
            </div>
            <h4 className="location-stat-title">Conforto Total</h4>
            <p className="location-stat-description">
              Área de espera confortável com Wi-Fi e comodidades
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernLocation;