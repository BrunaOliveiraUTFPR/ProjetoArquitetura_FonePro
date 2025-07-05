document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carrinho-container");
  const botaoConcluir = document.getElementById("concluir-compra-btn");

  const produtos = JSON.parse(localStorage.getItem("carrinho")) || [];

  function renderCarrinho() {
    container.innerHTML = "";

    if (produtos.length === 0) {
      container.innerHTML = "<p>O carrinho está vazio.</p>";
      return;
    }

    produtos.forEach((prod, index) => {
      const item = document.createElement("div");
      item.className = "carrinho-item";
      item.innerHTML = `
        <h3>${prod.nome}</h3>
        <p>${prod.descricao}</p>
        <p><strong>R$ ${prod.preco.toFixed(2)}</strong></p>
        <button onclick="removerProduto(${index})">Remover</button>
      `;
      container.appendChild(item);
    });
  }

  window.removerProduto = (index) => {
    produtos.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(produtos));
    renderCarrinho();
  };

  const total = produtos.reduce((acc, prod) => acc + prod.preco, 0);
  document.getElementById("valor-total").textContent = `Valor Total do Carrinho: R$ ${total.toFixed(2)}`;

  botaoConcluir.addEventListener("click", () => {
    if (produtos.length === 0) {
      alert("Seu carrinho está vazio!");
    } else {
      alert("Compra concluída com sucesso!");
      localStorage.removeItem("carrinho");
      renderCarrinho();
    }
  });

  renderCarrinho();
});
