import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'services', 'gallery', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de saber mais sobre os serviços.';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'gallery', label: 'Galeria' },
    { id: 'contact', label: 'Contato' }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Logo */}
        <a
          href="#home"
          className="header-logo"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <img
            src="/images/logo-hl-car-detail.png"
            alt="HL Car Detail Logo"
            className="header-logo-image"
          />
          <div>
            <div className="header-logo-text">HL Car Detail</div>
            <div className="header-logo-subtitle">Estética Automotiva</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="header-nav">
          <ul className="header-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`header-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className="header-contact">
            <a
              href="tel:+554196003019"
              className="header-phone"
            >
              <FaPhone className="header-phone-icon" />
              (41) 9 6003-0019
            </a>
          </div>

          {/* CTA Button */}
          <div className="header-cta">
            <button
              className="btn btn-primary"
              onClick={handleWhatsAppClick}
            >
              <FaWhatsapp />
              WhatsApp
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="header-mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`header-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="header-mobile-nav">
            <ul className="header-mobile-nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`header-mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="header-mobile-contact">
              <a
                href="tel:+554196003019"
                className="header-mobile-phone"
              >
                <FaPhone />
                (41) 9 6003-0019
              </a>

              <button
                className="btn btn-primary header-mobile-cta"
                onClick={handleWhatsAppClick}
              >
                <FaWhatsapp />
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;