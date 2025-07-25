import React, { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSlider } from '../../../hooks/useSlider';
import './ImageCarousel.css';

interface ImageData {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  thumbnail?: string;
}

interface ImageCarouselProps {
  images?: ImageData[];
  showThumbnails?: boolean;
  showIndicators?: boolean;
  showCounter?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

const defaultImages: ImageData[] = [
  {
    id: '1',
    src: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Carro de luxo preto',
    title: 'Resultado Excepcional',
    description: 'Transformação completa com nossos serviços premium'
  },
  {
    id: '2',
    src: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Carro esportivo vermelho',
    title: 'Polimento Profissional',
    description: 'Restauração da pintura com técnicas avançadas'
  },
  {
    id: '3',
    src: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Carro azul em movimento',
    title: 'Proteção Cerâmica',
    description: 'Brilho duradouro e proteção superior'
  },
  {
    id: '4',
    src: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Carro preto brilhante',
    title: 'Lavagem Premium',
    description: 'Limpeza detalhada e acabamento perfeito'
  },
  {
    id: '5',
    src: 'https://images.pexels.com/photos/116477/pexels-photo-116477.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Carro branco de luxo',
    title: 'Detalhamento Interno',
    description: 'Higienização completa e cuidado especial'
  },
  {
    id: '6',
    src: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1600',
    alt: 'Carro de luxo em ambiente urbano',
    title: 'Serviço Completo',
    description: 'Cuidado integral para seu veículo'
  }
];

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = defaultImages,
  showThumbnails = true,
  showIndicators = true,
  showCounter = true,
  autoPlay = true,
  interval = 4000
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  
  const { 
    currentSlide, 
    nextSlide, 
    prevSlide, 
    goToSlide, 
    pause, 
    play 
  } = useSlider({
    totalSlides: images.length,
    autoPlay,
    interval
  });

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      setIsLoading(true);
      const imagePromises = images.map(image => preloadImage(image.src));
      
      try {
        await Promise.all(imagePromises);
        setLoadedImages(new Set(images.map(img => img.id)));
      } catch (error) {
        console.error('Error loading images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, [images, preloadImage]);

  const handleMouseEnter = () => {
    pause();
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      play();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  if (isLoading) {
    return (
      <section id="gallery" className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-header">
            <h2 className="gallery-title">Galeria de Resultados</h2>
            <p className="gallery-subtitle">
              Confira alguns dos nossos trabalhos e veja a transformação 
              que podemos fazer no seu veículo.
            </p>
          </div>
          <div className="image-carousel">
            <div className="carousel-loading">
              Carregando galeria...
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Galeria de Resultados</h2>
          <p className="gallery-subtitle">
            Confira alguns dos nossos trabalhos e veja a transformação 
            que podemos fazer no seu veículo.
          </p>
        </div>

        <div 
          className="image-carousel"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="carousel-viewport">
            <div 
              className="carousel-track"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)` 
              }}
            >
              {images.map((image, index) => (
                <div key={image.id} className="carousel-slide">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="carousel-image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  {(image.title || image.description) && (
                    <div className="carousel-overlay">
                      {image.title && <h3>{image.title}</h3>}
                      {image.description && <p>{image.description}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button 
              className="carousel-controls prev"
              onClick={prevSlide}
              aria-label="Imagem anterior"
            >
              <FaChevronLeft />
            </button>
            
            <button 
              className="carousel-controls next"
              onClick={nextSlide}
              aria-label="Próxima imagem"
            >
              <FaChevronRight />
            </button>

            {showCounter && (
              <div className="carousel-counter">
                {currentSlide + 1} / {images.length}
              </div>
            )}
          </div>

          {showIndicators && (
            <div className="carousel-indicators">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          )}

          {showThumbnails && (
            <div className="carousel-thumbnails">
              {images.map((image, index) => (
                <div
                  key={image.id}
                  className={`carousel-thumbnail ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.alt}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;