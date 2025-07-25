import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSlider } from '../../../hooks/useSlider';
import GlassmorphismCard from '../GlassmorphismCard/GlassmorphismCard';
import './HeroSlider.css';

interface SlideData {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta?: {
    text: string;
    action: () => void;
  };
}

interface HeroSliderProps {
  slides?: SlideData[];
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
}

const defaultSlides: SlideData[] = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'HL Car Detail',
    subtitle: 'Estética Automotiva de Luxo',
    description: 'Cuidamos do seu veículo com exclusividade, precisão e sofisticação, elevando sua experiência automotiva ao mais alto nível.',
    cta: {
      text: 'Nossos Serviços',
      action: () => {
        const element = document.getElementById('services');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Proteção Cerâmica',
    subtitle: 'Tecnologia Avançada',
    description: 'Proteja seu investimento com nossa aplicação de revestimento cerâmico de última geração, garantindo brilho duradouro.',
    cta: {
      text: 'Saiba Mais',
      action: () => {
        const element = document.getElementById('services');
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  {
    id: '3',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Polimento Profissional',
    subtitle: 'Restauração Perfeita',
    description: 'Restauramos a pintura do seu veículo eliminando arranhões e imperfeições, devolvendo o brilho original.',
    cta: {
      text: 'Agendar Serviço',
      action: () => {
        window.open('https://wa.me/+554196003019?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço%20na%20HL%20Car%20Detail.', '_blank');
      }
    }
  },
  {
    id: '4',
    image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'Serviço Delivery',
    subtitle: 'Comodidade Total',
    description: 'Buscamos e entregamos seu veículo onde você estiver. Máxima comodidade sem abrir mão da qualidade.',
    cta: {
      text: 'Solicitar Delivery',
      action: () => {
        window.open('https://wa.me/+554196003019?text=Olá!%20Gostaria%20de%20solicitar%20o%20serviço%20delivery.', '_blank');
      }
    }
  }
];

const HeroSlider: React.FC<HeroSliderProps> = ({
  slides = defaultSlides,
  autoPlay = true,
  interval = 5000,
  showControls = true
}) => {
  const [progress, setProgress] = useState(0);
  const { currentSlide, nextSlide, prevSlide, goToSlide, pause, play, isPlaying } = useSlider({
    totalSlides: slides.length,
    autoPlay,
    interval
  });

  useEffect(() => {
    if (!isPlaying) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + (100 / (interval / 100));
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [isPlaying, interval, currentSlide]);

  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  const handleMouseEnter = () => {
    pause();
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      play();
    }
  };

  return (
    <section 
      id="home" 
      className="hero-slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <GlassmorphismCard className="slide-content">
              <img 
                src="https://i.imgur.com/placeholder.jpg" 
                alt="HL Car Detail Logo" 
                className="slide-logo"
              />
              <h1 className="slide-title">{slide.title}</h1>
              <h2 className="slide-subtitle">{slide.subtitle}</h2>
              <p className="slide-description">{slide.description}</p>
              {slide.cta && (
                <div className="slide-cta">
                  <button 
                    className="btn btn-luxury"
                    onClick={slide.cta.action}
                  >
                    {slide.cta.text}
                  </button>
                </div>
              )}
            </GlassmorphismCard>
          </div>
        ))}

        {showControls && (
          <>
            <button 
              className="slider-nav prev"
              onClick={prevSlide}
              aria-label="Slide anterior"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              className="slider-nav next"
              onClick={nextSlide}
              aria-label="Próximo slide"
            >
              <FaChevronRight />
            </button>

            <div className="slider-controls">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}

        <div 
          className="slider-progress" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </section>
  );
};

export default HeroSlider;