import React, { useState } from 'react';
import Header from '../../componentes/header';
import { Inicio } from '../../componentes/inicio';
import { Categorias } from '../../componentes/categorias';
import { Contato } from '../../componentes/contato';
import BookModal from '../../componentes/box-modal';
import Footer from '../../componentes/footer';
import LuckyNote from '../../componentes/lucky-node';

const Home = () => {
  const [currentTab, setCurrentTab] = useState('inicio');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <>
      <Header currentTab={currentTab} onTabChange={handleTabChange} />
      {currentTab === 'inicio' && <Inicio onSelectBook={handleSelectBook} />}
      {currentTab === 'categorias' && <Categorias onSelectBook={handleSelectBook} />}
      {currentTab === 'contato' && <Contato />}
      <BookModal book={selectedBook} onClose={handleCloseModal} />
      <Footer />
      {/* Renderiza o bilhete da sorte fixo no canto da tela */}
      <LuckyNote />
    </>
  );
};

export default Home;
