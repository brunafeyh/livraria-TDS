import React, { useRef } from 'react';
import './carousel.css';

// Carousel demonstra uso de useRef, scrollBy e mapeamento de array (reutilização de componente)
const Carousel = ({ title, books, onSelectBook }) => {
  const containerRef = useRef(null);
  const scrollAmount = 300; // Valor de rolagem em pixels a cada clique

  const handlePrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="carousel-section">
      <h3>{title}</h3>
      <div className="carousel-wrapper">
        <button className="carousel-arrow left" onClick={handlePrev}>
          &#9664;
        </button>
        <div className="carousel-container" ref={containerRef}>
          {books.map((book) => (
            <div key={book.id} className="carousel-item" onClick={() => onSelectBook(book)}>
              <img src={book.cover} alt={book.title} />
              <p>{book.title}</p>
            </div>
          ))}
        </div>
        <button className="carousel-arrow right" onClick={handleNext}>
          &#9654;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
