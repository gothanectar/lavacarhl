import React, { useState } from 'react';
import { 
  FaPhone, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaClock, 
  FaFacebook, 
  FaInstagram,
  FaEnvelope,
  FaCalendarAlt,
  FaCreditCard
} from 'react-icons/fa';
import './ModernContact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ModernContact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const services = [
    'Lavagem Simples',
    'Lavagem Completa',
    'Lavagem Premium',
    'Lavagem Master',
    'Tratamento Gold',
    'Polimento',
    'Proteção Cerâmica',
    'Pacote HL',
    'Outro'
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

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
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
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

  const handleWhatsAppClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de conversar sobre os serviços de estética automotiva. Vocês podem me atender agora?';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço de estética automotiva. Podem me informar os horários disponíveis e valores?';
    const whatsappUrl = `https://wa.me/+554196003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="modern-contact">
      <div className="container">
        <div className="modern-contact-header">
          <h2 className="modern-contact-title">Entre em Contato</h2>
          <p className="modern-contact-subtitle">
            Estamos prontos para cuidar do seu veículo com a excelência que você merece
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h3 className="contact-form-title">Envie sua Mensagem</h3>
            <p className="contact-form-description">
              Preencha o formulário abaixo e entraremos em contato em breve
            </p>

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
                  className="form-select"
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
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={isSubmitting}
              >
                <FaEnvelope />
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <FaMapMarkerAlt />
                </div>
                <h3 className="contact-info-title">Nossa Localização</h3>
              </div>
              <div className="contact-info-content">
                <p>
                  <strong>Rua José de Alencar, 1550</strong><br />
                  Cristo Rei - Curitiba - PR<br />
                  CEP: 80040-070
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <FaPhone />
                </div>
                <h3 className="contact-info-title">Contato Direto</h3>
              </div>
              <div className="contact-info-content">
                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <FaPhone className="contact-info-item-icon" />
                    <a href="tel:+554196003019">(41) 9 6003-0019</a>
                  </li>
                  <li className="contact-info-item">
                    <FaWhatsapp className="contact-info-item-icon" />
                    <a href="https://wa.me/+554196003019?text=Olá!%20Vim%20através%20do%20site%20da%20HL%20Car%20Detail%20e%20gostaria%20de%20falar%20diretamente%20com%20vocês.%20Podem%20me%20atender?" target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </li>
                </ul>
                
                <div className="social-links">
                  <a 
                    href="https://www.facebook.com/hllavacaresteticaautomotiva/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a 
                    href="https://wa.me/+554196003019?text=Olá!%20Vim%20através%20do%20site%20da%20HL%20Car%20Detail%20e%20gostaria%20de%20conversar%20com%20vocês%20sobre%20os%20serviços.%20Estão%20disponíveis?" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link whatsapp"
                  >
                    <FaWhatsapp />
                  </a>
                  <a 
                    href="https://www.instagram.com/p/C51E7L4PRy6/?utm_source=ig_web_copy_link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">
                  <FaClock />
                </div>
                <h3 className="contact-info-title">Horário de Funcionamento</h3>
              </div>
              <div className="contact-info-content">
                <ul className="contact-info-list">
                  <li className="contact-info-item">
                    <FaClock className="contact-info-item-icon" />
                    <span>Segunda a Sábado: 8:00 - 16:00</span>
                  </li>
                  <li className="contact-info-item">
                    <FaClock className="contact-info-item-icon" />
                    <span>Domingo: Fechado</span>
                  </li>
                  <li className="contact-info-item">
                    <FaCreditCard className="contact-info-item-icon" />
                    <span><strong>Aceitamos todos os cartões!</strong></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="quick-actions">
              <button className="quick-action-btn primary" onClick={handleScheduleClick}>
                <FaCalendarAlt />
                Agendar Serviço
              </button>
              <button className="quick-action-btn whatsapp" onClick={handleWhatsAppClick}>
                <FaWhatsapp />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;