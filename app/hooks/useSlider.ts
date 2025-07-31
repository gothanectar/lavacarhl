import { useState, useEffect, useCallback } from 'react';

interface UseSliderProps {
  totalSlides: number;
  autoPlay?: boolean;
  interval?: number;
}

export const useSlider = ({ totalSlides, autoPlay = true, interval = 5000 }: UseSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const pauseSlider = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const playSlider = useCallback(() => {
    setIsPlaying(true);
  }, []);

  useEffect(() => {
    if (!isPlaying || !autoPlay) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, autoPlay, interval, nextSlide]);

  return {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    pauseSlider,
    playSlider,
    isPlaying
  };
};
