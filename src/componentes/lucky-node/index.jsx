import React, { useState, useEffect } from 'react';
import './lucky.css';
import useAdvice from '../../hooks/use-advice';

const LuckyNote = () => {
  // Usa o custom hook para buscar um conselho aleatório
  const { advice, loadingAdvice, errorAdvice, refetchAdvice } = useAdvice();
  // Estado para controlar a visibilidade do bilhete
  const [visible, setVisible] = useState(true);

  // useEffect para ocultar o bilhete após 10 segundos (10000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    // Limpa o timer caso o componente seja desmontado ou a visibilidade seja alterada
    return () => clearTimeout(timer);
  }, []);

  // Se não estiver visível, não renderiza nada
  if (!visible) return null;

  return (
    <div className="lucky-note">
      {/* Botão para fechar manualmente */}
      <button className="close-note" onClick={() => setVisible(false)}>X</button>
      <h4>Bilhete da Sorte:</h4>
      {loadingAdvice && <p>Carregando bilhete...</p>}
      {errorAdvice && <p>Erro ao carregar bilhete.</p>}
      {advice && <p>{advice.advice}</p>}
      <button onClick={refetchAdvice}>Obter Novo Bilhete</button>
    </div>
  );
};

export default LuckyNote;
