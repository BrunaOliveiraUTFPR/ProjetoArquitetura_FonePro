export class Cart {
  constructor() {
    this.products = [];
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  notify() {
    this.observers.forEach(obs => obs.update(this.products));
  }

  addProduct(product) {
    this.products.push(product);
    this.notify();
  }
}

export class CartObserver {
  update(products) {
    console.log("Carrinho atualizado:", products);
    alert(`Você tem ${products.length} item(ns) no carrinho.`);
  }
}
