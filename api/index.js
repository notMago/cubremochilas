const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Configurar la conexión a la base de datos
const db = mysql.createConnection({
  host: 'mysql', // Este debe ser el nombre del servicio MySQL en tu docker-compose.yml
  user: 'root',
  password: 'yazmin',
  database: 'cubremochilas'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Definir una ruta para obtener los productos
app.get('/api/products', (req, res) => {
  const query = 'SELECT id, nombre, color, precio, stock FROM productos'; // Asegúrate de que tu tabla se llame 'productos'
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      res.status(500).send('Internal server error');
      return;
    }
    res.json(results);
  });
});

// Definir una ruta para consultar el stock
app.get('/api/stock', (req, res) => {
    const query = 'SELECT id, nombre, color, stock FROM productos';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        res.status(500).send('Internal server error');
        return;
      }
      res.json(results);
    });
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
