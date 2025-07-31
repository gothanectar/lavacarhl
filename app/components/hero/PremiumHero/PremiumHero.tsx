import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaChevronDown, FaPlay, FaPause } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './PremiumHero.css';

interface PremiumHeroProps {
  videoSrc?: string;
  posterImage?: string;
}

const PremiumHero: React.FC<PremiumHeroProps> = ({
  videoSrc = 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  posterImage = 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600'
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.play().catch(console.error);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    return () => video.removeEventListener('loadeddata', handleLoadedData);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de conhecer os serviços de estética automotiva de luxo. Poderia me enviar mais informações?';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço premium. Por favor, me informe as opções disponíveis e horários. Obrigado! 😊';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Premium Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
        staggerChildren: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        delay: 1.5
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="home" className="premium-hero">
      {/* Cinematic Video Background */}
      <video
        ref={videoRef}
        className="premium-hero-video"
        poster={posterImage}
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Cinematic Overlay */}
      <div className="premium-hero-overlay" />

      {/* Floating Luxury Elements */}
      <div className="premium-hero-float premium-hero-float-1" />
      <div className="premium-hero-float premium-hero-float-2" />
      <div className="premium-hero-float premium-hero-float-3" />

      {/* Main Content */}
      <motion.div 
        className="premium-hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="premium-hero-showcase">
          {/* Brand Identity */}
          <motion.div className="premium-hero-brand" variants={itemVariants}>
            <motion.img 
              src="https://i.imgur.com/placeholder.jpg" 
              alt="HL Car Detail Logo" 
              className="premium-hero-logo"
              variants={logoVariants}
            />
            <motion.p className="premium-hero-tagline" variants={itemVariants}>
              Since 2019
            </motion.p>
          </motion.div>
          
          {/* Premium Typography */}
          <motion.h1 className="premium-hero-title" variants={itemVariants}>
            HL Car Detail
          </motion.h1>
          
          <motion.h2 className="premium-hero-subtitle" variants={itemVariants}>
            Estética Automotiva de Luxo
          </motion.h2>
          
          <motion.p className="premium-hero-description" variants={itemVariants}>
            Transformamos seu veículo em uma obra de arte através de técnicas artesanais, 
            produtos premium importados e um atendimento exclusivo que redefine os padrões 
            de excelência em estética automotiva.
          </motion.p>
          
          {/* Premium Actions */}
          <motion.div className="premium-hero-actions" variants={itemVariants}>
            <motion.button 
              className="premium-hero-btn premium-hero-btn-primary"
              onClick={handleScheduleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt />
              Agendar Serviço Premium
            </motion.button>
            
            <motion.button 
              className="premium-hero-btn premium-hero-btn-secondary"
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              Consultoria Personalizada
            </motion.button>
          </motion.div>
          
          {/* Luxury Statistics */}
          <motion.div 
            className="premium-hero-stats"
            variants={statsVariants}
          >
            <motion.div className="premium-hero-stat" variants={statItemVariants}>
              <span className="premium-hero-stat-number">500+</span>
              <span className="premium-hero-stat-label">Clientes<br />Exclusivos</span>
            </motion.div>
            <motion.div className="premium-hero-stat" variants={statItemVariants}>
              <span className="premium-hero-stat-number">5+</span>
              <span className="premium-hero-stat-label">Anos de<br />Excelência</span>
            </motion.div>
            <motion.div className="premium-hero-stat" variants={statItemVariants}>
              <span className="premium-hero-stat-number">100%</span>
              <span className="premium-hero-stat-label">Garantia de<br />Satisfação</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Premium Scroll Indicator */}
      <motion.div 
        className="premium-hero-scroll"
        onClick={scrollToServices}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        whileHover={{ y: -8 }}
      >
        <span className="premium-hero-scroll-text">Descobrir</span>
        <FaChevronDown className="premium-hero-scroll-icon" />
      </motion.div>
    </section>
  );
};

export default PremiumHero;
