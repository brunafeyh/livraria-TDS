import React from 'react';
import './bookModal.css';
import useAdvice from '../../hooks/use-advice';

// BookModal exibe as informações do livro e, no canto inferior direito, um "bilhete da sorte" com um conselho.
const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  // Utiliza o custom hook para buscar um conselho aleatório
  const { advice, loadingAdvice, errorAdvice, refetchAdvice } = useAdvice();

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img src={book.cover} alt={book.title} width={255} height={300} />
        <h2>{book.title}</h2>
        <p>{book.description}</p>

        {/* Bilhete da Sorte exibido no canto inferior direito */}
        <div className="lucky-note">
          <h4>Bilhete da Sorte:</h4>
          {loadingAdvice && <p>Carregando bilhete...</p>}
          {errorAdvice && <p>Erro ao carregar bilhete.</p>}
          {advice && <p>{advice.advice}</p>}
          <button onClick={refetchAdvice}>Novo Bilhete</button>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
