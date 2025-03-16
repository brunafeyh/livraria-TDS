import React from 'react';
import './header.css';

// Header demonstra: 
// - Uso de props (variáveis comuns, função de mudança de aba)
// - Interpolação de variáveis para aplicar classe "active"
// - Importação de imagem para o logo
const Header = ({ currentTab, onTabChange }) => {
  return (
    <header className="header">
      <div className="logo">
        <img src="src/assets/logo-livraria.png" width={250} height={60} alt="Logo Livraria" />
      </div>
      <nav className="nav">
        <ul>
          <li className={currentTab === 'inicio' ? 'active' : ''} onClick={() => onTabChange('inicio')}>
            Início
          </li>
          <li className={currentTab === 'categorias' ? 'active' : ''} onClick={() => onTabChange('categorias')}>
            Categorias
          </li>
          <li className={currentTab === 'contato' ? 'active' : ''} onClick={() => onTabChange('contato')}>
            Contato
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
