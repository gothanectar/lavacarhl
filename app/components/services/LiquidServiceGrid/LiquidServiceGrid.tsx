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
import './LiquidServiceGrid.css';

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
        price: 'R$ 250',
        category: 'premium',
        features: [
            'Limpador bactericida interno',
            'Detalhamento de portas e cofre',
            'Limpeza detalhada de emblemas',
            'Selante de pintura premium',
            'Cristalizador de pinturas'
        ]
    },
    {
        id: '2',
        icon: FaCrown,
        title: 'Lavagem Super Gold',
        description: 'Nosso serviço mais completo: lavagem interna com limpador bactericida, detalhes de entradas de portas, cofre do motor, selante de pintura, cristalizador de parabrisa e higienização completa de bancos.',
        category: 'premium',
        features: [
            'Todos os itens da Lavagem Gold',
            'Cristalizador de parabrisa',
            'Higienização completa de bancos',
            'Tratamento anti-bacteriano',
            'Proteção UV avançada'
        ]
    },
    {
        id: '3',
        icon: FaChair,
        title: 'Higienização de Bancos',
        description: 'Limpeza profunda e especializada para bancos de couro e tecido, removendo manchas, odores e bactérias com produtos premium.',
        category: 'standard',
        features: [
            'Limpeza profunda especializada',
            'Remoção de manchas difíceis',
            'Eliminação de odores',
            'Tratamento antibacteriano'
        ]
    },
    {
        id: '4',
        icon: FaCar,
        title: 'Lavagem Detalhada',
        description: 'Lavagem completa e minuciosa do veículo, incluindo chassi e áreas de difícil acesso, para um resultado impecável.',
        category: 'standard',
        features: [
            'Lavagem externa completa',
            'Limpeza do chassi',
            'Áreas de difícil acesso',
            'Secagem profissional'
        ]
    },
    {
        id: '5',
        icon: FaPaintRoller,
        title: 'Polimento Profissional',
        description: 'Restauração completa da pintura do veículo, eliminando riscos, arranhões e imperfeições, devolvendo o brilho original.',
        category: 'premium',
        features: [
            'Remoção de riscos e arranhões',
            'Restauração do brilho original',
            'Técnicas profissionais avançadas',
            'Produtos premium importados'
        ]
    },
    {
        id: '6',
        icon: FaShieldAlt,
        title: 'Proteção Cerâmica',
        description: 'Aplicação de revestimento cerâmico de última geração para proteção duradoura da pintura contra intempéries e riscos.',
        category: 'premium',
        features: [
            'Revestimento cerâmico premium',
            'Proteção duradoura (2+ anos)',
            'Resistência a riscos',
            'Facilita limpeza futura'
        ]
    },
    {
        id: '7',
        icon: FaLightbulb,
        title: 'Restauro de Faróis',
        description: 'Restauração completa da transparência e funcionalidade dos faróis, melhorando a visibilidade e estética do veículo.',
        category: 'standard',
        features: [
            'Remoção de opacidade',
            'Restauração da transparência',
            'Melhoria da iluminação',
            'Proteção UV'
        ]
    },
    {
        id: '8',
        icon: FaTools,
        title: 'Tira Mossa',
        description: 'Remoção especializada de amassados e pequenas deformações sem danificar a pintura original do veículo.',
        category: 'standard',
        features: [
            'Técnica sem pintura',
            'Preservação da pintura original',
            'Remoção de pequenos amassados',
            'Resultado profissional'
        ]
    },
    {
        id: '9',
        icon: FaFilm,
        title: 'Aplicação de Vinil e PPF',
        description: 'Proteção e personalização com películas de vinil e PPF (Paint Protection Film) de alta qualidade e durabilidade.',
        category: 'premium',
        features: [
            'PPF de alta qualidade',
            'Proteção contra riscos',
            'Personalização visual',
            'Durabilidade garantida'
        ]
    },
    {
        id: '10',
        icon: FaTruck,
        title: 'Serviço Delivery',
        description: 'Máxima comodidade: buscamos e entregamos seu veículo onde você estiver, sem abrir mão da qualidade dos nossos serviços.',
        category: 'delivery',
        features: [
            'Busca e entrega gratuita',
            'Comodidade total',
            'Mesma qualidade dos serviços',
            'Agendamento flexível'
        ]
    }
];

const LiquidServiceGrid: React.FC = () => {
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
        { id: 'standard', label: 'Serviços Essenciais' },
        { id: 'premium', label: 'Serviços Premium' },
        { id: 'delivery', label: 'Delivery' }
    ];

    const handleWhatsAppContact = () => {
        const message = 'Olá! Vim através do site da HL Car Detail e gostaria de saber mais sobre os serviços de estética automotiva.';
        const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleScheduleService = () => {
        const message = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço. Por favor, me informe as opções e horários disponíveis. 😊';
        const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleServiceClick = (service: Service) => {
        const message = `Olá! Vim através do site da HL Car Detail e gostaria de saber mais sobre o serviço: ${service.title}`;
        const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
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
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <section id="services" className="liquid-services" ref={ref}>
            <div className="container liquid-services-container">
                <motion.div
                    className="liquid-services-header"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="liquid-services-title">Serviços de Excelência</h2>
                    <p className="liquid-services-subtitle">
                        Oferecemos uma gama completa de serviços de estética automotiva premium,
                        utilizando as mais avançadas técnicas e produtos de última geração para
                        garantir resultados excepcionais que superam suas expectativas.
                    </p>
                </motion.div>

                <motion.div
                    className="liquid-services-address"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="liquid-services-address-title">Nosso Novo Espaço</h3>
                    <p className="liquid-services-address-subtitle">
                        Visite nosso novo espaço, projetado especialmente para oferecer o melhor em estética automotiva
                    </p>
                    <p className="liquid-services-address-text">
                        Rua José de Alencar, 1550 - Cristo Rei - Curitiba - PR, 80040-070
                    </p>
                </motion.div>

                <motion.div
                    className="liquid-services-filters"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {filters.map(filter => (
                        <motion.button
                            key={filter.id}
                            className={`liquid-services-filter ${activeFilter === filter.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {filter.label}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    className="liquid-services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {filteredServices.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <motion.div
                                key={service.id}
                                className={`liquid-service-card ${service.category}`}
                                variants={itemVariants}
                                onClick={() => handleServiceClick(service)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <IconComponent className="liquid-service-icon" />

                                <h3 className="liquid-service-title">
                                    {service.title}
                                    {service.price && <span className="liquid-service-price">{service.price}</span>}
                                </h3>

                                <p className="liquid-service-description">
                                    {service.description}
                                </p>

                                {service.features && service.features.length > 0 && (
                                    <ul className="liquid-service-features">
                                        {service.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                )}

                                <div className="liquid-service-cta">
                                    <button className="liquid-service-cta-btn">
                                        Solicitar Orçamento
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    className="liquid-services-highlight"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <h3 className="liquid-services-highlight-title">Aceitamos Todos os Cartões!</h3>
                    <p className="liquid-services-highlight-text">
                        Facilitamos o pagamento para que você possa cuidar do seu veículo
                        com toda comodidade e segurança. Parcelamento disponível.
                    </p>
                </motion.div>

                <motion.div
                    className="liquid-services-cta"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p className="liquid-services-cta-text">
                        Pronto para transformar seu veículo em uma obra de arte?
                    </p>
                    <div className="liquid-services-cta-buttons">
                        <motion.button
                            className="liquid-services-cta-btn primary"
                            onClick={handleScheduleService}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaWhatsapp />
                            Agendar Serviço
                        </motion.button>
                        <motion.button
                            className="liquid-services-cta-btn secondary"
                            onClick={handleWhatsAppContact}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaMapMarkerAlt />
                            Falar Conosco
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default LiquidServiceGrid;
