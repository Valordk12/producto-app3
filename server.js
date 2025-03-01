const express = require('express');
const app = express();
const PORT = 3000;

// Datos de ejemplo (mock data)
let products = [
  { id: 1, name: "Producto 1", price: "$10" },
  { id: 2, name: "Producto 2", price: "$15" },
  { id: 3, name: "Producto 3", price: "$20" },
];

// Middleware para parsear JSON
app.use(express.json());

// Ruta para obtener todos los productos
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Ruta para agregar un nuevo producto
app.post('/api/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
