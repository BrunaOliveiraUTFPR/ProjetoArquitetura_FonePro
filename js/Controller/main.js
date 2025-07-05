import { ProductFactory } from '../DesignPatterns/product.js';
import { Cart, CartObserver } from '../DesignPatterns/cart.js';
import { renderProductList } from '../View/view.js';
import {sortByName, sortByPriceAsc, sortByPriceDesc, sortProducts} from '../DesignPatterns/sort.js';

  document.addEventListener("DOMContentLoaded", () => {
  const cart = new Cart();
  const observer = new CartObserver();
  cart.subscribe(observer);

  const produtos = [
    ProductFactory.create('Apple AirPods Pro (2ª geração)', 2339, 'Excelente integração com os dispositivos da marca Apple.'),
    ProductFactory.create('Sony WH-1000XM4', 1799, 'Cancelamento de ruídos externos premium.'),
    ProductFactory.create('Audio-Technica ATH-M50x', 513, 'Referência em estúdios.'),
    ProductFactory.create('Sony MDR-ZX310AP', 165, 'Leve e com som equilibrado.'),
    ProductFactory.create('JBL Endurance Peak 3', 489, 'Ideal para esportes, com encaixe seguro e resistência à água.'),
    ProductFactory.create('Samsung Galaxy Buds2 Pro', 513, 'Som imersivo e design premium.'),
  ];

  renderProductList(produtos, cart);

function getSortMethod(value) {
    if (value === "nome") return sortByName;
    if (value === "preco-asc") return sortByPriceAsc;
    if (value === "preco-desc") return sortByPriceDesc;
    return sortByName;
  }

document.getElementById("ordenar").addEventListener("change", e => {
    const metodo = getSortMethod(e.target.value);
    const ordenados = sortProducts(produtos, metodo);
    renderProductList(ordenados);
  });
  
});