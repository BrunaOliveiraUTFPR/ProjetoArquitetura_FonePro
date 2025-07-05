import { Cart } from "../DesignPatterns/cart.js";
import { ProductFactory } from "../DesignPatterns/product.js";

export const cartModel = new Cart();

export function createProduct(nome, preco, descricao) {
  return ProductFactory.create(nome, preco, descricao);
}
