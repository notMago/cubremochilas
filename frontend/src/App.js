import React from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Cubremochila Negra', price: '$5.000' },
  { id: 2, name: 'Cubremochila Roja', price: '$5.000' },
  { id: 3, name: 'Cubremochila Verde', price: '$5.000' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a Cubremochilas</h1>
        <p>Encuentra la mejor protección para tus mochilas aquí.</p>
      </header>
      <main>
        <h2>Productos</h2>
        <ul className="product-list">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>Precio: {product.price}</p>
              <button>Comprar</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
