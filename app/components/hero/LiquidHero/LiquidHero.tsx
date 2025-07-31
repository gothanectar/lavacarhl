import React, { useState, useRef, useEffect } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaChevronDown, FaPlay, FaPause } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './LiquidHero.css';

interface LiquidHeroProps {
  videoSrc?: string;
  posterImage?: string;
}

const LiquidHero: React.FC<LiquidHeroProps> = ({
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
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de saber mais sobre os serviços de estética automotiva de luxo.';
    const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço. Por favor, me informe as opções e horários disponíveis. 😊';
    const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
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

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        delay: 1
      }
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <section id="home" className="liquid-hero">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="liquid-hero-video"
        poster={posterImage}
        loop
        muted
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Liquid Overlay */}
      <div className="liquid-hero-overlay" />

      {/* Floating Elements */}
      <div className="liquid-hero-float liquid-hero-float-1" />
      <div className="liquid-hero-float liquid-hero-float-2" />
      <div className="liquid-hero-float liquid-hero-float-3" />

      {/* Main Content */}
      <motion.div 
        className="liquid-hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="liquid-hero-card">
          <motion.img 
            src="https://i.imgur.com/placeholder.jpg" 
            alt="HL Car Detail Logo" 
            className="liquid-hero-logo"
            variants={logoVariants}
          />
          
          <motion.h1 className="liquid-hero-title" variants={itemVariants}>
            HL Car Detail
          </motion.h1>
          
          <motion.h2 className="liquid-hero-subtitle" variants={itemVariants}>
            Estética Automotiva de Luxo
          </motion.h2>
          
          <motion.p className="liquid-hero-description" variants={itemVariants}>
            Transformamos seu veículo em uma obra de arte através de técnicas avançadas, 
            produtos premium e atendimento exclusivo. Experimente o mais alto nível de 
            sofisticação em estética automotiva.
          </motion.p>
          
          <motion.div className="liquid-hero-actions" variants={itemVariants}>
            <motion.button 
              className="liquid-hero-btn liquid-hero-btn-primary"
              onClick={handleScheduleClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaCalendarAlt />
              Agendar Serviço
            </motion.button>
            
            <motion.button 
              className="liquid-hero-btn liquid-hero-btn-secondary"
              onClick={handleWhatsAppClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp />
              Falar Conosco
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="liquid-hero-stats"
            variants={statsVariants}
          >
            <motion.div className="liquid-hero-stat" variants={statItemVariants}>
              <span className="liquid-hero-stat-number">500+</span>
              <span className="liquid-hero-stat-label">Clientes Satisfeitos</span>
            </motion.div>
            <motion.div className="liquid-hero-stat" variants={statItemVariants}>
              <span className="liquid-hero-stat-number">5+</span>
              <span className="liquid-hero-stat-label">Anos de Experiência</span>
            </motion.div>
            <motion.div className="liquid-hero-stat" variants={statItemVariants}>
              <span className="liquid-hero-stat-number">100%</span>
              <span className="liquid-hero-stat-label">Garantia de Qualidade</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="liquid-hero-scroll"
        onClick={scrollToServices}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        whileHover={{ y: -5 }}
      >
        <span className="liquid-hero-scroll-text">Descubra</span>
        <FaChevronDown className="liquid-hero-scroll-icon" />
      </motion.div>
    </section>
  );
};

export default LiquidHero;
