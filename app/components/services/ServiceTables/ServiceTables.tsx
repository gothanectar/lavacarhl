import React, { useState } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaCar, FaStar, FaShieldAlt, FaGem, FaTools, FaWater } from 'react-icons/fa';
import './ServiceTables.css';

const ServiceTables: React.FC = () => {
  const [activeTab, setActiveTab] = useState('essenciais');

  const handleWhatsAppClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de saber mais sobre os serviços e preços.';
    const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleScheduleClick = () => {
    const message = 'Olá! Vim através do site da HL Car Detail e gostaria de agendar um serviço. Por favor, me informe as opções disponíveis.';
    const whatsappUrl = `https://wa.me/+5541996003019?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const tabs = [
    { id: 'essenciais', label: 'Lavagens Essenciais', icon: FaCar },
    { id: 'premium', label: 'Premium', icon: FaStar },
    { id: 'especiais', label: 'Tratamentos', icon: FaGem },
    { id: 'pacotes', label: 'Pacotes', icon: FaShieldAlt },
    { id: 'polimento', label: 'Polimento', icon: FaTools },
    { id: 'adicionais', label: 'Adicionais', icon: FaWater }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'essenciais':
        return renderEssenciaisTab();
      case 'premium':
        return renderPremiumTab();
      case 'especiais':
        return renderEspeciaisTab();
      case 'pacotes':
        return renderPacotesTab();
      case 'polimento':
        return renderPolimentoTab();
      case 'adicionais':
        return renderAdicionaisTab();
      default:
        return renderEssenciaisTab();
    }
  };

  const renderEssenciaisTab = () => (
    <div className="service-category">
      <div className="service-table essenciais">
        <div className="service-table-header">
          <h4 className="service-table-name">Lavagem Simples</h4>
          <p className="service-table-description">Limpeza básica completa do seu veículo</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Lavagem Externa (com Shampoo Automotivo)</li>
              <li>Limpeza de Painel + Entradas de Portas (Forrações)</li>
              <li>Aspiração completa (Remoção de Pelos sob consulta)</li>
              <li>Limpeza dos Vidros</li>
              <li>Pretinho dos Pneus</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">Pequeno</div>
                <div className="service-price-value">R$ 60</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Médio</div>
                <div className="service-price-value">R$ 70</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Grande</div>
                <div className="service-price-value">R$ 80</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-table essenciais">
        <div className="service-table-header">
          <h4 className="service-table-name">Lavagem Completa</h4>
          <p className="service-table-description">Inclui cera em pasta com 60 dias de duração</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Lavagem Externa (com Shampoo Automotivo)</li>
              <li>Limpeza de Painel + Entradas de Portas (Forrações)</li>
              <li>Aspiração completa (Remoção de Pelos sob consulta)</li>
              <li>Pretinho dos Pneus</li>
              <li>Cera em Pasta (Duração 60 DIAS)</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">Pequeno</div>
                <div className="service-price-value">R$ 90</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Médio</div>
                <div className="service-price-value">R$ 100</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Grande</div>
                <div className="service-price-value">R$ 110</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-table essenciais">
        <div className="service-table-header">
          <h4 className="service-table-name">Lavagem Completa 2</h4>
          <p className="service-table-description">Com selante de pintura de longa duração</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Lavagem Externa (com Shampoo Automotivo)</li>
              <li>Limpeza de Painel + Entradas de Portas (Forrações)</li>
              <li>Aspiração completa (Remoção de Pelos sob consulta)</li>
              <li>Pretinho dos Pneus</li>
              <li>Selante de Pintura (Duração de 60 a 120 dias)</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">Pequeno</div>
                <div className="service-price-value">R$ 100</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Médio</div>
                <div className="service-price-value">R$ 110</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Grande</div>
                <div className="service-price-value">R$ 130</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPremiumTab = () => (
    <div className="service-category">
      <div className="service-table premium">
        <div className="service-table-header">
          <h4 className="service-table-name">Lavagem Premium</h4>
          <p className="service-table-description">Serviço profissional com selante SIO2-PRO</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Pré Lavagem profunda</li>
              <li>Descontaminação Química</li>
              <li>Limpeza profunda de Painéis e Laterais</li>
              <li>Limpeza de Vidros</li>
              <li>Limpeza detalhada de Cantos, Emblemas e Frisos</li>
              <li>Condicionamento de Plásticos internos e externos</li>
              <li>Selagem dos Pneus</li>
              <li>Selante de pintura SIO2-PRO (até 4 meses)</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">Pequeno</div>
                <div className="service-price-value">R$ 290</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Médio</div>
                <div className="service-price-value">R$ 290</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Grande</div>
                <div className="service-price-value">R$ 340</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-table master">
        <div className="service-table-header">
          <h4 className="service-table-name">Lavagem Master</h4>
          <p className="service-table-description">Nosso serviço mais completo com selante MOTHERS CMX</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Pré Lavagem profunda</li>
              <li>Descontaminação Química</li>
              <li>Limpeza profunda de Painéis e Laterais</li>
              <li>Limpeza de Vidros</li>
              <li>Limpeza detalhada de Cantos, Emblemas e Frisos</li>
              <li>Condicionamento de Plásticos internos e externos</li>
              <li>Selagem dos Pneus</li>
              <li>Selante MOTHERS CMX (até 6 meses)</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">Pequeno</div>
                <div className="service-price-value">R$ 360</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Médio</div>
                <div className="service-price-value">R$ 360</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Grande</div>
                <div className="service-price-value">R$ 400</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderEspeciaisTab = () => (
    <div className="service-category">
      <div className="service-table tratamentos">
        <div className="service-table-header">
          <h4 className="service-table-name">Tratamento Gold</h4>
          <p className="service-table-description">Higienização Full + Lavagem Técnica</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Limpeza técnica externa</li>
              <li>Descontaminação Ferrosa das Rodas</li>
              <li>Limpeza dos Plásticos Internos com Bactericida</li>
              <li>Revitalização dos Plásticos Internos e Externos</li>
              <li>Hidratação do Couro (Se possuir)</li>
              <li>Cristalização Pára-brisas (até 3 meses)</li>
              <li>Lavagem do Cofre do Motor</li>
              <li>Higienização Full no interior</li>
              <li>Oxi-Sanitização com Ozônio (Sob Consulta)</li>
              <li>Selante MOTHERS CMX (6 meses)</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">Pequeno</div>
                <div className="service-price-value">R$ 1.390</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Médio</div>
                <div className="service-price-value">R$ 1.390</div>
              </div>
              <div className="service-price">
                <div className="service-price-label">Grande</div>
                <div className="service-price-value">R$ 1.590</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPacotesTab = () => (
    <div className="service-category">
      <div className="service-table pacotes master">
        <div className="service-table-header">
          <h4 className="service-table-name">Pacote HL</h4>
          <p className="service-table-description">Tratamento completo + Lavagem Master</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Lavagem técnica</li>
              <li>Tratamento do Motor + Verniz de Proteção</li>
              <li>Tratamento do Chassis + Verniz de Proteção</li>
              <li>Remoção de Rodas</li>
              <li>Tratamento das Caixas e Suspensão</li>
              <li>+ LAVAGEM MASTER</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">P/M</div>
                <div className="service-price-value">R$ 1.590</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-table master">
        <div className="service-table-header">
          <h4 className="service-table-name">Pacote LH Plus</h4>
          <p className="service-table-description">Carros pequenos e médios - Serviço completo</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Lavagem técnica</li>
              <li>Tratamento do Motor + Verniz de Proteção</li>
              <li>Tratamento do Chassis + Verniz de Proteção</li>
              <li>Remoção de Rodas</li>
              <li>Tratamento das Caixas e Suspensão</li>
              <li>HIGIENIZAÇÃO FULL do interno</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">P/M</div>
                <div className="service-price-value">R$ 2.590</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPolimentoTab = () => (
    <div className="service-category">
      <div className="service-table polimento">
        <div className="service-table-header">
          <h4 className="service-table-name">Carros Pequenos e Médios</h4>
          <p className="service-table-description">Polimento técnico com diferentes níveis de proteção</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Polimento Técnico Profissional</li>
              <li>Selante MOTHERS CMX (Duração: 6 meses)</li>
              <li>Polimento Técnico + Revestimento Cerâmico - R$ 1.500 (12 meses)</li>
              <li>Polimento Técnico + Revestimento Cerâmico - R$ 2.500 (36 meses)</li>
              <li>Camada Adicional de Coating Cerâmico - R$ 500</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">A partir de</div>
                <div className="service-price-value">R$ 650</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-table premium">
        <div className="service-table-header">
          <h4 className="service-table-name">Carros Grandes</h4>
          <p className="service-table-description">Polimento técnico para veículos grandes</p>
        </div>
        <div className="service-table-body">
          <div className="service-table-content">
            <ul className="service-features">
              <li>Polimento Técnico + Selante MOTHERS CMX - R$ 1.200 (6 meses)</li>
              <li>Polimento Técnico + Revestimento Cerâmico - R$ 2.000 (12 meses)</li>
              <li>Polimento Técnico + Revestimento Cerâmico - R$ 3.500 (36 meses)</li>
            </ul>
            <div className="service-pricing">
              <div className="service-price">
                <div className="service-price-label">A partir de</div>
                <div className="service-price-value">R$ 1.200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAdicionaisTab = () => (
    <div className="service-category">
      <h4 style={{ textAlign: 'center', marginBottom: 'var(--space-6)', color: 'var(--color-gray-700)' }}>
        Serviços Adicionais
      </h4>
      <div className="additional-services">
        <div className="additional-service">
          <div className="additional-service-name">Lavagem dos Bancos de Tecido</div>
          <div className="additional-service-price">R$ 350</div>
        </div>
        <div className="additional-service">
          <div className="additional-service-name">Limpeza e Hidratação do Couro</div>
          <div className="additional-service-price">R$ 250</div>
        </div>
        <div className="additional-service">
          <div className="additional-service-name">Restauração do Farol</div>
          <div className="additional-service-price">R$ 290</div>
        </div>
        <div className="additional-service">
          <div className="additional-service-name">Revitalização de Lanterna</div>
          <div className="additional-service-price">R$ 140</div>
        </div>
        <div className="additional-service">
          <div className="additional-service-name">Lavagem do Motor com Verniz</div>
          <div className="additional-service-price">R$ 100</div>
        </div>
      </div>

      <h4 style={{ textAlign: 'center', margin: 'var(--space-8) 0 var(--space-6)', color: 'var(--color-gray-700)' }}>
        Serviços para Jetski
      </h4>
      <div className="additional-services">
        <div className="additional-service">
          <div className="additional-service-name">Lavagem Completa</div>
          <div className="additional-service-price">R$ 200</div>
        </div>
        <div className="additional-service">
          <div className="additional-service-name">Polimento Técnico</div>
          <div className="additional-service-price">R$ 200</div>
        </div>
        <div className="additional-service">
          <div className="additional-service-name">Vitrificação Completa (3 anos)</div>
          <div className="additional-service-price">R$ 200</div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="services" className="services-tables">
      <div className="container">
        <div className="services-tables-header">
          <h2 className="services-tables-title">Nossos Serviços</h2>
          <p className="services-tables-subtitle">
            Conheça nossa tabela completa de serviços com preços transparentes
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="services-tabs">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                className={`services-tab ${activeTab === tab.id ? 'active' : ''}`}
                data-category={tab.id}
                onClick={() => setActiveTab(tab.id)}
              >
                <IconComponent className="services-tab-icon" />
                <span className="services-tab-label">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="services-tab-content">{renderTabContent()}</div>

        {/* CTA */}
        <div className="services-cta">
          <h3 className="services-cta-title">Pronto para cuidar do seu veículo?</h3>
          <p className="services-cta-text">
            Entre em contato conosco para agendar seu serviço ou tirar dúvidas sobre nossos preços
          </p>
          <div className="services-cta-buttons">
            <button className="btn btn-primary btn-lg" onClick={handleScheduleClick}>
              <FaCalendarAlt />
              Agendar Serviço
            </button>
            <button className="btn btn-secondary btn-lg" onClick={handleWhatsAppClick}>
              <FaWhatsapp />
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTables;
