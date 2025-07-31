import React, { useState, useEffect } from 'react';
import { FaInstagram, FaHeart, FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './InstagramFeed.css';

interface InstagramPost {
  id: string;
  caption: string;
  media_url: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  permalink: string;
  timestamp: string;
  like_count?: number;
}

const InstagramFeed: React.FC = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Mock data for demonstration (replace with actual Instagram API)
  const mockPosts: InstagramPost[] = [
    {
      id: '1',
      caption: '✨ Resultado incrível! Proteção cerâmica aplicada neste BMW. O brilho e a proteção que seu carro merece! 🚗💎 #HLCarDetail #ProtecaoCeramica #BMW',
      media_url: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600',
      media_type: 'IMAGE',
      permalink: 'https://instagram.com/p/example1',
      timestamp: '2024-01-15T10:30:00Z',
      like_count: 127
    },
    {
      id: '2',
      caption: '🔥 Polimento profissional em ação! Veja como removemos riscos e devolvemos o brilho original. Processo completo no stories! #Polimento #Detailing',
      media_url: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600',
      media_type: 'VIDEO',
      permalink: 'https://instagram.com/p/example2',
      timestamp: '2024-01-14T15:45:00Z',
      like_count: 89
    },
    {
      id: '3',
      caption: '🚙 SUV completamente transformado! Lavagem premium + enceramento + higienização interna. Cliente satisfeito = nossa missão cumprida! ✅',
      media_url: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=600',
      media_type: 'IMAGE',
      permalink: 'https://instagram.com/p/example3',
      timestamp: '2024-01-13T09:20:00Z',
      like_count: 156
    },
    {
      id: '4',
      caption: '💫 Antes e depois impressionante! Restauração completa de faróis. A diferença é notável! Agende já o seu. 📱',
      media_url: 'https://images.pexels.com/photos/116477/pexels-photo-116477.jpeg?auto=compress&cs=tinysrgb&w=600',
      media_type: 'CAROUSEL_ALBUM',
      permalink: 'https://instagram.com/p/example4',
      timestamp: '2024-01-12T14:10:00Z',
      like_count: 203
    },
    {
      id: '5',
      caption: '🎬 Time-lapse do processo de aplicação de PPF! Proteção máxima para sua pintura. Vem conferir o resultado! #PPF #Paint Protection',
      media_url: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=600',
      media_type: 'VIDEO',
      permalink: 'https://instagram.com/p/example5',
      timestamp: '2024-01-11T11:30:00Z',
      like_count: 174
    },
    {
      id: '6',
      caption: '🏆 Mais um trabalho finalizado com excelência! Lavagem Gold + cristalização. Seu carro merece o melhor cuidado! ⭐',
      media_url: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=600',
      media_type: 'IMAGE',
      permalink: 'https://instagram.com/p/example6',
      timestamp: '2024-01-10T16:45:00Z',
      like_count: 98
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // In a real implementation, you would call the Instagram Basic Display API
        // const response = await fetch('/api/instagram-feed');
        // const data = await response.json();
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setPosts(mockPosts);
      } catch (err) {
        setError('Erro ao carregar posts do Instagram');
        console.error('Instagram API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    if (inView) {
      fetchPosts();
    }
  }, [inView]);

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'há 1 dia';
    if (diffDays < 7) return `há ${diffDays} dias`;
    if (diffDays < 30) return `há ${Math.ceil(diffDays / 7)} semanas`;
    return `há ${Math.ceil(diffDays / 30)} meses`;
  };

  const handlePostClick = (permalink: string) => {
    window.open(permalink, '_blank', 'noopener,noreferrer');
  };

  const handleFollowClick = () => {
    window.open('https://www.instagram.com/hlcardetail/', '_blank', 'noopener,noreferrer');
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
    <section className="instagram-section" ref={ref}>
      <div className="instagram-container">
        <motion.div 
          className="instagram-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="instagram-title">Nossos Trabalhos</h2>
          <p className="instagram-subtitle">
            Acompanhe nossos resultados incríveis e fique por dentro das 
            novidades da HL Car Detail no Instagram
          </p>
          <a 
            href="https://www.instagram.com/hlcardetail/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-handle"
          >
            <FaInstagram className="instagram-icon" />
            @hlcardetail
          </a>
        </motion.div>

        {loading ? (
          <div className="instagram-loading">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="instagram-skeleton">
                <div className="instagram-skeleton-image" />
                <div className="instagram-skeleton-content">
                  <div className="instagram-skeleton-line" />
                  <div className="instagram-skeleton-line" />
                  <div className="instagram-skeleton-line" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="instagram-error">
            <p>{error}</p>
          </div>
        ) : (
          <motion.div 
            className="instagram-grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {posts.map((post) => (
              <motion.div
                key={post.id}
                className="instagram-post"
                variants={itemVariants}
                onClick={() => handlePostClick(post.permalink)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={post.media_url}
                    alt={post.caption.substring(0, 100)}
                    className="instagram-post-image"
                    loading="lazy"
                  />
                  
                  {post.media_type === 'VIDEO' && (
                    <div className="instagram-video-indicator">
                      <FaPlay />
                      Vídeo
                    </div>
                  )}
                  
                  {post.media_type === 'CAROUSEL_ALBUM' && (
                    <div className="instagram-video-indicator">
                      📷 Múltiplas
                    </div>
                  )}
                  
                  <div className="instagram-post-overlay">
                    <FaExternalLinkAlt style={{ color: 'white', fontSize: '1.2rem' }} />
                  </div>
                </div>
                
                <div className="instagram-post-content">
                  <p className="instagram-post-caption">
                    {post.caption}
                  </p>
                  
                  <div className="instagram-post-meta">
                    <div className="instagram-post-likes">
                      <FaHeart style={{ color: '#e1306c' }} />
                      <span>{post.like_count}</span>
                    </div>
                    <span className="instagram-post-date">
                      {formatDate(post.timestamp)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div 
          className="instagram-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <button 
            className="instagram-follow-btn"
            onClick={handleFollowClick}
          >
            <FaInstagram />
            Seguir no Instagram
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;
