import React from 'react';
import styles from './App.module.css'; // Importa como objeto
import Home from './pages/home';

function App() {
  return (
    <div className={styles.app}> {/* Usa a classe a partir do objeto */}
      <Home />
    </div>
  );
}

export default App;
