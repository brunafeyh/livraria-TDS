import React from 'react';
import { comedyBooks } from "../../data/books";
import Carousel from "../carousel";
import './categorias.css';

export const Categorias = ({ onSelectBook }) => {
    return (
        <div className="content inicio">
            <h2>Busque o seu livro por Categoria!</h2>
            <p>Explore nossos livros e encontre sua próxima leitura!</p>
            <Carousel
                title="Livros Brasileiros"
                books={comedyBooks}
                onSelectBook={onSelectBook}
            />
            <Carousel
                title="AutoAjuda"
                books={comedyBooks}
                onSelectBook={onSelectBook}
            />
            <Carousel
                title="Comédia"
                books={comedyBooks}
                onSelectBook={onSelectBook}
            />
            <Carousel
                title="Drama"
                books={comedyBooks}
                onSelectBook={onSelectBook}
            />
        </div>
    );
};
