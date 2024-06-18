import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/productos')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  const handleStockClick = () => {
    axios.get('http://localhost:5000/api/stock')
      .then(response => {
        setStock(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the stock!', error);
      });
  };

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
              <button className="buy-button">Comprar</button>
            </li>
          ))}
        </ul>
        <button className="stock-button" onClick={handleStockClick}>Consultar Stock</button>
        <h2>Stock de Productos</h2>
        <ul className="stock-list">
          {stock.map(item => (
            <li key={item.id} className="stock-item">
              <h3>{item.name}</h3>
              <p>Stock: {item.stock}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
