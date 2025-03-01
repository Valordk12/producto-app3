document.addEventListener("DOMContentLoaded", function() {
  const productList = document.getElementById("product-list");

  // Datos de ejemplo (mock data)
  const products = [
    { name: "Producto 1", price: "$10" },
    { name: "Producto 2", price: "$15" },
    { name: "Producto 3", price: "$20" },
  ];

  // Mostrar los productos en el HTML
  products.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - ${product.price}`;
    productList.appendChild(li);
  });
});
