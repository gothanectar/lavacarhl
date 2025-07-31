import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaChevronDown, FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './VideoHero.css';

interface VideoHeroProps {
  videoSrc?: string;
  posterImage?: string;
  autoPlay?: boolean;
  muted?: boolean;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc = 'https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761',
  posterImage = 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600',
  autoPlay = true,
  muted = true
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      if (autoPlay) {
        video.play().catch(console.error);
      }
    };

    video.addEventListener('loadeddata', handleLoadedData);
    return () => video.removeEventListener('loadeddata', handleLoadedData);
  }, [autoPlay]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

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
        duration: 1,
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="video-hero">
      <video
        ref={videoRef}
        className="video-background"
        poster={posterImage}
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
      >
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta vídeos HTML5.
      </video>
      
      <div className="video-overlay" />
      
      <motion.div 
        className="video-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img 
          src="https://i.imgur.com/placeholder.jpg" 
          alt="HL Car Detail Logo" 
          className="hero-logo"
          variants={logoVariants}
        />
        
        <motion.h1 className="hero-title" variants={itemVariants}>
          HL Car Detail
        </motion.h1>
        
        <motion.h2 className="hero-subtitle" variants={itemVariants}>
          Estética Automotiva de Luxo
        </motion.h2>
        
        <motion.p className="hero-description" variants={itemVariants}>
          Transformamos seu veículo em uma obra de arte. Com técnicas avançadas, 
          produtos premium e atendimento exclusivo, elevamos sua experiência 
          automotiva ao mais alto nível de sofisticação.
        </motion.p>
        
        <motion.div className="hero-actions" variants={itemVariants}>
          <button 
            className="hero-cta primary"
            onClick={handleScheduleClick}
          >
            <FaCalendarAlt />
            Agendar Serviço
          </button>
          
          <button 
            className="hero-cta secondary"
            onClick={handleWhatsAppClick}
          >
            <FaWhatsapp />
            Falar Conosco
          </button>
        </motion.div>
        
        <motion.div className="hero-stats" variants={itemVariants}>
          <div className="hero-stat">
            <span className="hero-stat-number">500+</span>
            <span className="hero-stat-label">Clientes</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">5</span>
            <span className="hero-stat-label">Anos</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">100%</span>
            <span className="hero-stat-label">Satisfação</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        onClick={scrollToServices}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="scroll-text">Descubra</span>
        <FaChevronDown className="scroll-arrow" />
      </motion.div>

      <div 
        className="video-controls"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <button 
          className="video-control-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        
        <button 
          className="video-control-btn"
          onClick={toggleMute}
          aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
    </section>
  );
};

export default VideoHero;
