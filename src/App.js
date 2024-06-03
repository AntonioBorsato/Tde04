import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card
        titulo="Timão"
        texto="Este é o texto do card. Clique para mudar a cor."
        imagem="https://logodetimes.com/wp-content/uploads/corinthians.png"/>
    </div>
  );
}

export default App;
