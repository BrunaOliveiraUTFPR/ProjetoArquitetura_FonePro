import { createProduct, cartModel } from "../Model/model.js";
import { CartObserver } from "../DesignPatterns/cart.js";

const params = new URLSearchParams(window.location.search);
const nome = params.get("nome");
const preco = parseFloat(params.get("preco"));
const descricao = params.get("descricao");
const imagem = params.get("imagem");

const product = createProduct(nome, preco, descricao);

const container = document.getElementById('produto-detalhe');
if (container) {
  container.innerHTML = `
    <h2>${product.nome}</h2>
    <p>Preço: <strong>R$ ${product.preco.toFixed(2)}</strong></p>
    <p id="descricao-produto">${descricao}</p>
  `;
}

cartModel.subscribe(new CartObserver());

document.getElementById("add-cart-btn").addEventListener("click", () => {
  cartModel.addProduct(product);

  const produtoParaSalvar = {
    nome: product.nome,
    preco: product.preco,
    descricao: descricao,
    imagem: imagem
  };

  let carrinhoLS = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinhoLS.push(produtoParaSalvar);
  localStorage.setItem('carrinho', JSON.stringify(carrinhoLS));

  const msg = document.getElementById("mensagem-carrinho");
  msg.textContent = "Produto adicionado ao carrinho!";
});

const botaoFechar = document.getElementById("fechar-popup");
if (botaoFechar) {
  botaoFechar.addEventListener("click", () => {
    window.location.href = "produtos.html";
  });
}

const iconeCarrinho = document.getElementById("icone-carrinho");
if (iconeCarrinho) {
  iconeCarrinho.addEventListener("click", () => {
    window.location.href = "carrinho.html";
  });
}