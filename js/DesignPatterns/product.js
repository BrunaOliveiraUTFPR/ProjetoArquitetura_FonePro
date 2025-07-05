export class Product {
  constructor(nome, preco, descricao) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
  }
}

export class ProductFactory {
  static create(nome, preco, descricao) {
    return { nome, preco, descricao };
  }
}
