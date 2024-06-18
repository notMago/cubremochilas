import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

const products = [
  { id: 1, name: 'Cubremochila Negra', price: '$6.000' },
  { id: 2, name: 'Cubremochila Roja', price: '$5.000' },
  { id: 3, name: 'Cubremochila Verde', price: '$5.000' },
];

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a CubremochilApp</h1>
        <p>Encuentra aquí tus inventarios.</p>
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
