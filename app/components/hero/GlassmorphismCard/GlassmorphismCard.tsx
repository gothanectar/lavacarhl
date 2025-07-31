import React from 'react';
import './GlassmorphismCard.css';

interface GlassmorphismCardProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'hero';
  blur?: 'light' | 'medium' | 'strong' | 'extreme';
  opacity?: 'light' | 'medium' | 'strong';
  size?: 'compact' | 'normal' | 'large';
  interactive?: boolean;
  animate?: boolean;
  className?: string;
  onClick?: () => void;
}

const GlassmorphismCard: React.FC<GlassmorphismCardProps> = ({
  children,
  variant = 'primary',
  blur = 'medium',
  opacity = 'medium',
  size = 'normal',
  interactive = false,
  animate = false,
  className = '',
  onClick
}) => {
  const cardClasses = [
    'glassmorphism-card',
    variant,
    `blur-${blur}`,
    `opacity-${opacity}`,
    size !== 'normal' ? size : '',
    interactive ? 'interactive' : '',
    animate ? 'animate-in' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={cardClasses}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={interactive ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      } : undefined}
    >
      {children}
    </div>
  );
};

export default GlassmorphismCard;
