import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import './WhatsAppButton.css';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  showScheduleButton?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '+5541996003019',
  message = 'Olá! Vim através do site da HL Car Detail e gostaria de saber mais sobre os serviços de estética automotiva de luxo.',
  showScheduleButton = true
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show button after scrolling 100px or more
      setIsVisible(scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleScheduleWhatsApp = () => {
    const scheduleMessage = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço. Por favor, me informe as opções e horários disponíveis. 😊';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(scheduleMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsPopupOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClosePopup();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="whatsapp-float">
        <div className="whatsapp-tooltip">
          Fale conosco no WhatsApp
        </div>
        
        {showScheduleButton && (
          <button 
            className="schedule-button"
            onClick={handleScheduleClick}
            aria-label="Agendar serviço"
          >
            <FaCalendarAlt />
            Agendar Serviço
          </button>
        )}
        
        <button 
          className="whatsapp-button"
          onClick={handleWhatsAppClick}
          aria-label="Contato via WhatsApp"
        >
          <FaWhatsapp />
        </button>
      </div>

      <div 
        className={`popup-overlay ${isPopupOpen ? 'open' : ''}`}
        onClick={handleClosePopup}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <div 
          className="popup-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            className="popup-close"
            onClick={handleClosePopup}
            aria-label="Fechar popup"
          >
            <FaTimes />
          </button>
          
          <div className="popup-header">
            <h3 className="popup-title">Agendar Serviço</h3>
            <p className="popup-subtitle">
              Entre em contato conosco para agendar seu atendimento
            </p>
          </div>
          
          <div className="popup-message">
            <p>
              Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço. 
              Por favor, me informe as opções e horários disponíveis. 😊
            </p>
          </div>
          
          <div className="popup-actions">
            <button 
              className="popup-button primary"
              onClick={handleScheduleWhatsApp}
            >
              <FaWhatsapp />
              Enviar via WhatsApp
            </button>
            
            <button 
              className="popup-button secondary"
              onClick={handleClosePopup}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
