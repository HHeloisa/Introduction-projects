function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

/* function cartItemClickListener(event) {
  // coloque seu código aqui
}7
 */

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;

  // li.addEventListener('click', cartItemClickListener);
  return li;
}

// Requisito 2
// função que faz nova requisição conforme ID
const cartItemFunc = async (getIdItem) => {
const doFetch = await fetch(`https://api.mercadolibre.com/items/${getIdItem}`);
const data = await doFetch.json();
const specificProductData = data;
const specificData = {
  sku: specificProductData.id,
  name: specificProductData.title,
  salePrice: specificProductData.price,
};
document.querySelector('.cart__items').appendChild(createCartItemElement(specificData));
};

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// Insere escutador aos botoes "Adicionar ao carrinho"
  // criar variavel que armazena todos os botoes
const allButonsAddCart = document.querySelectorAll('.item__add');
  // inserir a cada botão o addEventListner
  const liteningToAllButtuns = () => {
    allButonsAddCart.forEach((button) => {
      button.addEventListener('click', (e) => {
        // identificar o id do botão de origem do evento
        const event = e.target.parentElement;
        const getIdItem = getSkuFromProductItem(event);
        // enviar para função que envia para o carrinho
        cartItemFunc(getIdItem);
      });
    });
  };

  function createProductItemElement({ sku, name, image }) {
    const section = document.createElement('section');
    section.className = 'item';
  
    const sectionItems = document.querySelector('.items');
    sectionItems.appendChild(section);

    section.appendChild(createCustomElement('span', 'item__sku', sku));
    section.appendChild(createCustomElement('span', 'item__title', name));
    section.appendChild(createProductImageElement(image));
    section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  
    return section;
  }
  // Requisito 1 // Parte 2
  const insertAllProducts = (allProducts) => {
    allProducts.forEach((product) => {
      const { id: sku, title: name, thumbnail: image } = product;
      createProductItemElement({ sku, name, image });
    });
    liteningToAllButtuns();
  };

    // Requisito 1 // Parte 1
  function productList() {
    return fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador')
      .then((response) => {
        response.json().then((data) => {
          const allProducts = data.results;
          insertAllProducts(allProducts);
      });
    });
  }

window.onload = function onload() { 
  productList();
  liteningToAllButtuns();
  // cartItemFunc();
};
