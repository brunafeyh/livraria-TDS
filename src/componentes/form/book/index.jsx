import React, { useState } from 'react';
import useHttp from '../../../hooks/use-advice';

const POST_API = 'https://jsonplaceholder.typicode.com/posts'; // API para simulação de POST

const BookForm = ({ addBook }) => {
  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    email: '',
    price: '',
    description: '',
    adminPassword: '',
    format: 'hardcover', // radio
    available: false, // checkbox
    cover: null // file
  });

  // Custom hook para requisição POST
  const { httpRequest } = useHttp(POST_API, { method: 'POST' });

  // Evento de mudança de input
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    let fieldValue = type === 'checkbox' ? checked : (type === 'file' ? files[0] : value);
    setFormData((prev) => ({ ...prev, [name]: fieldValue }));
  };

  // Evento de teclado (exemplo: log de tecla pressionada no campo título)
  const handleKeyDown = (e) => {
    console.log(`Tecla pressionada no input título: ${e.key}`);
  };

  // Envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Aqui, você pode realizar validações
    // Realiza requisição POST (simulada)
    const response = await httpRequest(formData);
    console.log('Resposta da API (simulada):', response);

    // Adiciona o novo livro à lista
    addBook(formData);

    // Reseta o formulário
    setFormData({
      title: '',
      author: '',
      email: '',
      price: '',
      description: '',
      adminPassword: '',
      format: 'hardcover',
      available: false,
      cover: null
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h3>Adicionar Novo Livro</h3>
      
      {/* Input de texto */}
      <label>
        Título:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          required
        />
      </label>
      
      {/* Input de texto para autor */}
      <label>
        Autor:
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </label>
      
      {/* Input de email */}
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      
      {/* Input de número */}
      <label>
        Preço:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </label>
      
      <label>
        Descrição:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </label>
      
      <label>
        Senha Admin:
        <input
          type="password"
          name="adminPassword"
          value={formData.adminPassword}
          onChange={handleChange}
          required
        />
      </label>
      <fieldset>
        <legend>Formato:</legend>
        <label>
          <input
            type="radio"
            name="format"
            value="hardcover"
            checked={formData.format === 'hardcover'}
            onChange={handleChange}
          />
          Hardcover
        </label>
        <label>
          <input
            type="radio"
            name="format"
            value="paperback"
            checked={formData.format === 'paperback'}
            onChange={handleChange}
          />
          Paperback
        </label>
        <label>
          <input
            type="radio"
            name="format"
            value="ebook"
            checked={formData.format === 'ebook'}
            onChange={handleChange}
          />
          Ebook
        </label>
      </fieldset>
      
      <label>
        Disponível:
        <input
          type="checkbox"
          name="available"
          checked={formData.available}
          onChange={handleChange}
        />
      </label>
      <label>
        Capa:
        <input
          type="file"
          name="cover"
          onChange={handleChange}
        />
      </label>
      
      <button type="submit">Cadastrar Livro</button>
    </form>
  )
}

export default BookForm
