import React from 'react';
import './contato.css';

// Contato demonstra um formulário com múltiplos tipos de inputs:
// text, email, password, number, select, textarea, file, checkbox, radio, datalist.
export const Contato = () => {
    return (
        <div className="content contato">
            <h2>Tem algumas dúvidas? Contate-nos</h2>
            <p>Entre em contato conosco para tirar suas dúvidas ou enviar feedback.</p>

            <div className="social-links">
                <a href="https://www.facebook.com/brunadasilvafeyh/" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                <a href="https://x.com/brufeyh" target="_blank" rel="noopener noreferrer">
                    X
                </a>
                <a href="https://www.instagram.com/brunadasilvafeyh/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
            </div>

            <div className="contact-form">
                <h3>Envie sua mensagem</h3>
                <form action="mailto:contato@livrarianoturna.com" method="post" encType="text/plain">
                    <label>
                        Seu Nome:
                        <input
                            type="text"
                            name="name"
                            required
                            onKeyDown={(e) => console.log("Tecla pressionada:", e.key)}
                        />
                    </label>

                    <label>
                        Seu Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Senha:
                        <input type="password" name="password" required />
                    </label>
                    <label>
                        Idade:
                        <input type="number" name="age" min="1" max="120" required />
                    </label>
                    <label>
                        Assunto:
                        <select name="subject" required>
                            <option value="">Selecione um assunto</option>
                            <option value="duvida">Dúvida</option>
                            <option value="feedback">Feedback</option>
                            <option value="suporte">Suporte</option>
                        </select>
                    </label>
                    <label>
                        Mensagem:
                        <textarea name="message" required></textarea>
                    </label>
                    <label>
                        Anexar arquivo:
                        <input type="file" name="attachment" />
                    </label>
                    <label>
                        Aceito os termos e condições:
                        <input type="checkbox" name="terms" required />
                    </label>
                    <div>
                        <p>Como você prefere ser contatado?</p>
                        <label>
                            <input type="radio" name="contactMethod" value="email" required /> Email
                        </label>
                        <label>
                            <input type="radio" name="contactMethod" value="phone" required /> Telefone
                        </label>
                    </div>
                    <label>
                        Sugestões:
                        <input list="suggestions" name="suggestions" />
                        <datalist id="suggestions">
                            <option value="Melhorar atendimento" />
                            <option value="Novos livros" />
                            <option value="Outros" />
                        </datalist>
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="email-link">
                <p>
                    Ou envie um email diretamente:{' '}
                    <a href="mailto:contato@livrarianoturna.com">contato@livrarianoturna.com</a>
                </p>
            </div>
        </div>
    );
};
