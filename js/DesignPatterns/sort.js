export const sortByName = {
  sort: products => [...products].sort((a, b) => a.nome.localeCompare(b.nome))
};

export const sortByPriceAsc = {
  sort: products => [...products].sort((a, b) => a.preco - b.preco)
};

export const sortByPriceDesc = {
  sort: products => [...products].sort((a, b) => b.preco - a.preco)
};

export function sortProducts(products, method) {
  return method.sort(products);
}