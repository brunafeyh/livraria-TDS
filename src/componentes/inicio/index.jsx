import React, { useEffect, useState } from 'react';
import { bestSellers, comedyBooks, dramaBooks } from "../../data/books";
import Carousel from "../carousel";
import './inicio.css';

export const Inicio = ({ onSelectBook }) => {

    const [favoriteBooks, setFavoriteBooks] = useState([]);

    const shuffleArray = (array) => {
        const newArray = array.slice();
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const loadBestSellers = () => {
        const top10 = bestSellers.slice(0, 10);
        const randomTop10 = shuffleArray(top10);
        setFavoriteBooks(randomTop10);
    };

    useEffect(() => {
        loadBestSellers();
    }, []);

    return (
        <div className="content inicio">
            <h2>Bem-vindo(a) à Livraria Noturna</h2>
            <p>Explore nossos livros e encontre sua próxima leitura!</p>
            <Carousel
                title="Livros mais Vendidos"
                books={favoriteBooks}
                onSelectBook={onSelectBook}
            />
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
                title="Melhores Autores"
                books={comedyBooks}
                onSelectBook={onSelectBook}
            />
        </div>
    );
};
