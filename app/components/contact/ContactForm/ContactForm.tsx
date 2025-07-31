import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaWhatsapp, 
  FaFacebook, 
  FaInstagram,
  FaClock,
  FaCreditCard,
  FaEnvelope
} from 'react-icons/fa';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Lavagem Gold',
    'Lavagem Super Gold',
    'Higienização de Bancos',
    'Polimento',
    'Proteção Cerâmica',
    'Restauro de Faróis',
    'Aplicação de PPF',
    'Delivery',
    'Outro'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefone é obrigatório';
    } else if (!/^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.phone)) {
      newErrors.phone = 'Formato: (11) 99999-9999';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (value: string): string => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      const formattedPhone = formatPhone(value);
      setFormData(prev => ({ ...prev, [name]: formattedPhone }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const message = `Olá! Meu nome é ${formData.name || '[Nome]'}. Gostaria de mais informações sobre os serviços da HL Car Detail.`;
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Entre em Contato</h2>
          <p className="contact-subtitle">
            Agende seu atendimento ou tire suas dúvidas. Estamos prontos para 
            cuidar do seu veículo com a excelência que você merece.
          </p>
          <div className="contact-address">
            <p className="contact-address-text">
              Rua José de Alencar, 1550 - Cristo Rei - Curitiba - PR, 80040-070
            </p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            {isSubmitted && (
              <div className="form-success">
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nome *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Seu nome completo"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="seu@email.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Telefone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="(11) 99999-9999"
                  maxLength={15}
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">Serviço de Interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Descreva como podemos ajudá-lo..."
                  rows={4}
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-info-card">
              <h3 className="contact-info-title">
                <FaMapMarkerAlt className="contact-info-icon" />
                Localização
              </h3>
              <div className="contact-info-item">
                <FaMapMarkerAlt className="contact-info-item-icon" />
                <span>
                  Rua José de Alencar, 1550<br />
                  Cristo Rei - Curitiba - PR<br />
                  80040-070
                </span>
              </div>
            </div>

            <div className="contact-info-card">
              <h3 className="contact-info-title">
                <FaPhone className="contact-info-icon" />
                Contato
              </h3>
              <div className="contact-info-item">
                <FaPhone className="contact-info-item-icon" />
                <a href="tel:+554196003019" className="contact-info-link">
                  (41) 9 6003-0019
                </a>
              </div>
              <div className="contact-info-item">
                <FaWhatsapp className="contact-info-item-icon" />
                <a 
                  href="https://wa.me/+554196003019" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-info-link"
                >
                  WhatsApp
                </a>
              </div>
              <div className="social-links">
                <a 
                  href="https://www.facebook.com/hllavacaresteticaautomotiva/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a 
                  href="https://wa.me/+554196003019" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a 
                  href="#" 
                  className="social-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <h3 className="contact-info-title">
                <FaClock className="contact-info-icon" />
                Funcionamento
              </h3>
              <div className="contact-info-item">
                <FaClock className="contact-info-item-icon" />
                <span>Segunda a Sábado<br />8:00 - 18:00</span>
              </div>
              <div className="contact-info-item">
                <FaCreditCard className="contact-info-item-icon" />
                <span>Aceitamos todos os cartões!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-cta">
          <p className="contact-cta-text">
            Prefere falar diretamente conosco? Entre em contato via WhatsApp!
          </p>
          <button 
            className="contact-cta-button"
            onClick={handleWhatsAppContact}
          >
            <FaWhatsapp />
            Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
