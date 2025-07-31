import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaPhone, 
  FaRoute, 
  FaParking,
  FaWifi,
  FaCoffee,
  FaShieldAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './LocationMap.css';

const LocationMap: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const address = "Rua José de Alencar, 1550 - Cristo Rei - Curitiba - PR, 80040-070";
  const coordinates = { lat: -25.4284, lng: -49.2733 }; // Curitiba coordinates
  
  const handleDirections = () => {
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+554196003019';
  };

  const handleWhatsApp = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de saber como chegar até vocês.';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const features = [
    {
      icon: FaParking,
      title: 'Estacionamento',
      description: 'Vaga gratuita para clientes'
    },
    {
      icon: FaWifi,
      title: 'Wi-Fi Grátis',
      description: 'Internet liberada na espera'
    },
    {
      icon: FaCoffee,
      title: 'Área de Espera',
      description: 'Ambiente confortável'
    },
    {
      icon: FaShieldAlt,
      title: 'Local Seguro',
      description: 'Ambiente monitorado 24h'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="location-section" ref={ref}>
      <div className="location-container">
        <motion.div 
          className="location-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="location-title">Nossa Localização</h2>
          <p className="location-subtitle">
            Venha nos visitar em nosso novo espaço, projetado especialmente 
            para oferecer o melhor em estética automotiva
          </p>
        </motion.div>

        <motion.div 
          className="location-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="location-info">
            <motion.div className="location-card" variants={itemVariants}>
              <div className="location-card-content">
                <h3 className="location-card-title">
                  <FaMapMarkerAlt className="location-card-icon" />
                  Endereço
                </h3>
                <p className="location-address">
                  {address}
                </p>
                <div className="location-actions">
                  <button 
                    className="location-action-btn primary"
                    onClick={handleDirections}
                  >
                    <FaRoute />
                    Como Chegar
                  </button>
                  <button 
                    className="location-action-btn secondary"
                    onClick={handleWhatsApp}
                  >
                    <FaExternalLinkAlt />
                    Compartilhar
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div className="location-card" variants={itemVariants}>
              <div className="location-card-content">
                <h3 className="location-card-title">
                  <FaClock className="location-card-icon" />
                  Horário de Funcionamento
                </h3>
                <div className="location-details">
                  <div className="location-detail-item">
                    <FaClock className="location-detail-icon" />
                    <span>Segunda a Sábado: 8:00 - 18:00</span>
                  </div>
                  <div className="location-detail-item">
                    <FaClock className="location-detail-icon" />
                    <span>Domingo: Fechado</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="location-card" variants={itemVariants}>
              <div className="location-card-content">
                <h3 className="location-card-title">
                  <FaPhone className="location-card-icon" />
                  Contato Direto
                </h3>
                <div className="location-details">
                  <div className="location-detail-item">
                    <FaPhone className="location-detail-icon" />
                    <a 
                      href="tel:+554196003019" 
                      className="location-detail-link"
                    >
                      (41) 9 6003-0019
                    </a>
                  </div>
                </div>
                <div className="location-actions">
                  <button 
                    className="location-action-btn primary"
                    onClick={handleCall}
                  >
                    <FaPhone />
                    Ligar Agora
                  </button>
                  <button 
                    className="location-action-btn secondary"
                    onClick={handleWhatsApp}
                  >
                    <FaPhone />
                    WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="location-map-container"
            variants={itemVariants}
          >
            {!mapLoaded && (
              <div className="location-map-loading">
                Carregando mapa...
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
          </motion.div>
        </motion.div>

        <motion.div 
          className="location-features"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="location-features-title">Comodidades do Local</h3>
          <div className="location-features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="location-feature"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
              >
                <feature.icon className="location-feature-icon" />
                <h4 className="location-feature-title">{feature.title}</h4>
                <p className="location-feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
