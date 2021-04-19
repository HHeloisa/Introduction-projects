// Requisito 4
const fetchMyCartContainer = () => document.querySelector('ol.cart__items');

const saveCart = () => {
  const cartItemsContent = fetchMyCartContainer();
  if (cartItemsContent !== null) {
  localStorage.setItem('shopCart', cartItemsContent.innerHTML);
  }
};
const recoverCart = () => {
  const myShopCart = localStorage.getItem('shopCart');
  if (myShopCart !== null) {
  const meuCarrinhoDeCompras = fetchMyCartContainer();
  meuCarrinhoDeCompras.innerHTML = localStorage.getItem('shopCart');
  }
};

// Requisito 6 - Crie um botão para limpar carrinho de compras
const clearCart = () => {
  const eachProduct = document.querySelectorAll('.cart__item');
  if (eachProduct !== null) {
      eachProduct.forEach((product) => product.remove());
      saveCart();
    } if (eachProduct.length === 0) {
      alert('Não é possível remover produtos do carrinho se não há produtos no carrinho.');
    }
};

const funClearCartButton = () => {
  const clearAllCart = document.querySelector('.empty-cart');
  clearAllCart.addEventListener('click', clearCart);
};

// Requisito 7 - Colocar loading durante a api - ter a classe loading.
const insertLoading = () => {
  const newDiv = document.createElement('div');
  newDiv.className = 'loading';
  newDiv.innerHTML = 'loading';
  const theContainer = document.querySelector('.items');
  theContainer.appendChild(newDiv);
};

// Requisito 7 - parte 2 - remover loading
const removeLoading = () => {
  const divLoading = document.querySelector('.loading');
  divLoading.remove();
};

// Cria imagem do produto
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

// Cria elemento customizado
function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
// Requisito 3
function cartItemClickListener(event) {
  event.target.remove();
  saveCart();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;

  li.addEventListener('click', cartItemClickListener);
  return li;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// Requisito 2 //
const cartItemFunc = () => {
  const locListCart = document.querySelector('.cart__items');
  const locSectionItems = document.querySelector('.items');
  locSectionItems.addEventListener('click', async (e) => {
    insertLoading();
    const getIdItem = getSkuFromProductItem(e.target.parentElement);
    const doFetch = await fetch(`https://api.mercadolibre.com/items/${getIdItem}`);
    const data = await doFetch.json();
    const { id: sku, title: name, price: salePrice } = data;
    removeLoading();
    locListCart.appendChild(createCartItemElement({ sku, name, salePrice }));
    saveCart();
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
    removeLoading();
    allProducts.forEach((product) => {
      const { id: sku, title: name, thumbnail: image } = product;
      createProductItemElement({ sku, name, image });
    });
  };
    // Requisito 1 // Parte 1
  async function productList() {
    insertLoading();
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
  cartItemFunc();
  recoverCart();
  funClearCartButton();
};

/* Referências:
Beatriz Estebanez: https://github.com/tryber/sd-010-a-project-shopping-cart/pull/52/files
Carolina Vasconcelos: https://github.com/tryber/sd-010-a-project-shopping-cart/pull/53
Ana Ventura: https://github.com/tryber/sd-010-a-project-shopping-cart/pull/27/files
Marília: https://github.com/tryber/sd-010-a-project-shopping-cart/pull/21/files
Nathi Zebral: https://github.com/tryber/sd-010-a-project-shopping-cart/pull/84/files

Trabalho conjunto e explicações:
Agradecimento especial à: 
Pollyana Oliveira: https://github.com/tryber/sd-010-a-project-shopping-cart/pull/26/files
pela ajuda no desfecho do requisito 2, e nas dicas para resolução do requisito 4, mas principalmente pela atenção e disopsição <3
Thalita Ceciller: https://github.com/tryber/sd-010-a-project-shopping-cart/pull/61
Bia Zidiotti: */