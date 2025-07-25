import React from 'react';
import './ServiceCard.css';

interface ServiceCardProps {
  icon: React.ComponentType;
  title: string;
  description: string;
  price?: string;
  features?: string[];
  category?: 'standard' | 'premium' | 'delivery';
  animationDelay?: number;
  onClick?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  price,
  features,
  category = 'standard',
  animationDelay = 0,
  onClick
}) => {
  const cardClasses = [
    'service-card',
    category,
    animationDelay > 0 ? `delay-${Math.min(animationDelay, 10)}` : ''
  ].filter(Boolean).join(' ');

  const handleCardClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default action: scroll to contact or open WhatsApp
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Olá! Gostaria de saber mais sobre o serviço: ${title}`;
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className={cardClasses} onClick={handleCardClick}>
      <div className="service-card-content">
        <Icon className="service-icon" />
        
        <h3 className="service-title">
          {title}
          {price && <span className="service-price"> - {price}</span>}
        </h3>
        
        <p className="service-description">
          {description}
        </p>
        
        {features && features.length > 0 && (
          <ul className="service-features">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        
        <div className="service-cta">
          <button 
            className="service-cta-button"
            onClick={handleCtaClick}
          >
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;