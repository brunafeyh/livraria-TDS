import React from 'react';
import './footer.css';

// Footer demonstra uso de links para redes sociais, email e selos, com comentário explicativo.
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="social-links">
          <a href="https://www.facebook.com/brunadasilvafeyh/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://x.com/brufeyh" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com/brunadasilvafeyh/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
        <div className="contact-email">
          <a href="mailto:contato@livrarianoturna.com">Envie-nos um Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>@ Desenvolvido por TDS Bruna Feyh &amp; Andre Cano 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
