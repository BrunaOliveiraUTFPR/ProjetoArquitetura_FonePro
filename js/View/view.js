export function renderProductList(produtos, cart) {
  const container = document.querySelector('.galeria');
  if (!container) return;

  container.innerHTML = '';

  produtos.forEach(prod => {
    const div = document.createElement('div');
    div.classList.add('produto');

    const imagem = prod.nome.includes('AirPods') ? 'AppleAirPodsPro2G.png'
                : prod.nome.includes('WH-1000') ? 'SonyWH.png'
                : prod.nome.includes('M50x') ? 'AudioTechnica.png'
                : prod.nome.includes('ZX310') ? 'SonyMDR.png'
                : prod.nome.includes('JBL') ? 'JBLEndurance.png'
                : 'GalaxyBuds2.png';

const descricao = getDescricao(prod.nome); 

const url = `produto.html?nome=${encodeURIComponent(prod.nome)}&preco=${prod.preco}&descricao=${encodeURIComponent(descricao)}&imagem=${imagem}`;
    
    div.innerHTML = `
      <a href="${url}" style="text-decoration: none; color: inherit;">
        <img src="imagens/${imagem}" alt="${prod.nome}" class="img-arredondada">
        <h3>${prod.nome}</h3>
        <p>${getDescricao(prod.nome)}<br><strong>R$ ${prod.preco}</strong></p>
      </a>
    `;

    container.appendChild(div);
  });
}

function getDescricao(nome) {
  if (nome.includes('AirPods')) return 'Excelente integração com os dispositivos da marca Apple.';
  if (nome.includes('WH-1000')) return 'Cancelamento de ruídos externos premium.';
  if (nome.includes('M50x')) return 'Referência em estúdios.';
  if (nome.includes('ZX310')) return 'Leve e com som equilibrado.';
  if (nome.includes('JBL')) return 'Ideal para esportes, com encaixe seguro e resistência à água.';
  if (nome.includes('Galaxy')) return 'Compatibilidade ideal com dispositivos Samsung e som equilibrado.';
  return 'Fone de ouvido de alta qualidade.';
}
