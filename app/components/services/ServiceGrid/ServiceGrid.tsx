import React, { useState } from 'react';
import { 
  FaStar, 
  FaCrown, 
  FaChair, 
  FaCar, 
  FaPaintRoller, 
  FaShieldAlt, 
  FaLightbulb, 
  FaTools, 
  FaFilm, 
  FaTruck,
  FaWhatsapp,
  FaMapMarkerAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '../ServiceCard/ServiceCard';
import './ServiceGrid.css';

interface Service {
  id: string;
  icon: React.ComponentType;
  title: string;
  description: string;
  price?: string;
  features?: string[];
  category: 'standard' | 'premium' | 'delivery';
}

const services: Service[] = [
  {
    id: '1',
    icon: FaStar,
    title: 'Lavagem Gold',
    description: 'Lavagem interna com limpador bactericida, detalhes de entradas de portas, cofre do motor, lavagem detalhada de emblemas e símbolos, selante de pintura + cristalizador de pinturas.',
    price: 'R$250',
    category: 'premium',
    features: [
      'Limpador bactericida interno',
      'Detalhamento de portas',
      'Limpeza do cofre do motor',
      'Selante de pintura',
      'Cristalizador de pinturas'
    ]
  },
  {
    id: '2',
    icon: FaCrown,
    title: 'Lavagem Super Gold',
    description: 'Lavagem interna com limpador bactericida, detalhes de entradas de portas, cofre do motor, lavagem detalhada de emblemas e símbolos, selante de pintura, cristalizador de parabrisa e higienização de bancos.',
    category: 'premium',
    features: [
      'Todos os itens da Lavagem Gold',
      'Cristalizador de parabrisa',
      'Higienização completa de bancos'
    ]
  },
  {
    id: '3',
    icon: FaChair,
    title: 'Higienização Interna de Bancos',
    description: 'Limpeza profunda para bancos, removendo manchas e odores com produtos especializados.',
    category: 'standard'
  },
  {
    id: '4',
    icon: FaCar,
    title: 'Lavagem Detalhada',
    description: 'Lavagem completa do veículo, incluindo chassi, para um brilho impecável.',
    category: 'standard'
  },
  {
    id: '5',
    icon: FaPaintRoller,
    title: 'Polimento',
    description: 'Restauração da pintura do veículo, eliminando arranhões e imperfeições.',
    category: 'premium'
  },
  {
    id: '6',
    icon: FaShieldAlt,
    title: 'Proteção Cerâmica',
    description: 'Aplicação de revestimento cerâmico para proteção duradoura da pintura.',
    category: 'premium'
  },
  {
    id: '7',
    icon: FaLightbulb,
    title: 'Restauro de Faróis',
    description: 'Restauração da transparência e funcionalidade dos faróis.',
    category: 'standard'
  },
  {
    id: '8',
    icon: FaTools,
    title: 'Tira Mossa',
    description: 'Remoção de amassados sem danificar a pintura original.',
    category: 'standard'
  },
  {
    id: '9',
    icon: FaFilm,
    title: 'Aplicação de Vinil e PPF',
    description: 'Proteção e personalização com películas de vinil e PPF de alta qualidade.',
    category: 'premium'
  },
  {
    id: '10',
    icon: FaTruck,
    title: 'Delivery',
    description: 'Serviço de entrega e retirada do veículo para sua comodidade.',
    category: 'delivery'
  }
];

const ServiceGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const filteredServices = services.filter(service => {
    if (activeFilter === 'all') return true;
    return service.category === activeFilter;
  });

  const filters = [
    { id: 'all', label: 'Todos os Serviços' },
    { id: 'standard', label: 'Serviços Padrão' },
    { id: 'premium', label: 'Serviços Premium' },
    { id: 'delivery', label: 'Delivery' }
  ];

  const handleWhatsAppContact = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de saber mais sobre os serviços.';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleService = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço. Por favor, me informe as opções e horários disponíveis. 😊';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="services" className="services-section" ref={ref}>
      <div className="services-container">
        <motion.div 
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="services-title">Nossos Serviços de Luxo</h2>
          <p className="services-subtitle">
            Oferecemos uma gama completa de serviços de estética automotiva, 
            utilizando produtos e técnicas de última geração para garantir 
            resultados excepcionais.
          </p>
        </motion.div>

        <div className="services-address">
          <h3 className="services-address-title">Novo Endereço</h3>
          <p className="services-address-subtitle">
            Visite nosso novo espaço projetado para oferecer o melhor em estética automotiva:
          </p>
          <p className="services-address-text">
            Rua José de Alencar, 1550 - Cristo Rei - Curitiba - PR, 80040-070
          </p>
        </div>

        <div className="services-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`services-filter-button ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredServices.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                price={service.price}
                features={service.features}
                category={service.category}
                animationDelay={index + 1}
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="services-highlight">
          <h3 className="services-highlight-title">Aceitamos todos os cartões!</h3>
          <p className="services-highlight-text">
            Facilitamos o pagamento para que você possa cuidar do seu veículo 
            com toda comodidade e segurança.
          </p>
        </div>

        <div className="services-cta">
          <p className="services-cta-text">
            Pronto para dar ao seu veículo o cuidado que ele merece?
          </p>
          <div className="services-cta-buttons">
            <button 
              className="services-cta-button primary"
              onClick={handleScheduleService}
            >
              <FaWhatsapp />
              Agendar Serviço
            </button>
            <button 
              className="services-cta-button secondary"
              onClick={handleWhatsAppContact}
            >
              <FaMapMarkerAlt />
              Falar Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
