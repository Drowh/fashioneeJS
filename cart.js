const PRODUCT_IN_BASKET_KEY = 'product-in-counter'
const FAVORITE_PRODUCTS_KEY = 'favorites-counter'

const getFromLS = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) {
        console.log(e)
        return []
    }
};

const setToLS = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e)
    }
};

const updateHeaderInfo = () => {
    const basketCounter = document.getElementsByClassName('js-basket-counter')
    const favoriteCounter = document.getElementsByClassName('js-favorites-counter')

    if (!basketCounter.length && !favoriteCounter.length) {
        return false
    }

    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY)
    const favoriteProducts = getFromLS(FAVORITE_PRODUCTS_KEY)

    let countInBasket = 0
    let countInFavorites = 0

    productsInBasket.forEach((product) => {
        countInBasket += product.quantity
    });

    favoriteProducts.forEach(() => {
        countInFavorites += 1
    });

    if (basketCounter[0]) basketCounter[0].innerHTML = countInBasket
    if (favoriteCounter[0]) favoriteCounter[0].innerHTML = countInFavorites
};


const removeProductFromBasket = (productId) => {
    let productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);
    productsInBasket = productsInBasket.filter(product => product.id !== productId); 
    setToLS(PRODUCT_IN_BASKET_KEY, productsInBasket); 
    updateHeaderInfo(); 
    displayCartItems(); 
};


const updateProductQuantity = (productId, change) => {
    let productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);
    const product = productsInBasket.find(product => product.id === productId);

    if (product) {
        product.quantity += change;
        if (product.quantity < 1) {
            product.quantity = 1;
        }
        setToLS(PRODUCT_IN_BASKET_KEY, productsInBasket);
        updateHeaderInfo();
        displayCartItems(); 
    }
};


const createProduct = (product) => {
    const orderWrapper = document.createElement("div");
    orderWrapper.classList.add("order-wrapper");

    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.classList.add("photo");

    productDiv.appendChild(productImage);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = product.name;

    const priceWrapper = document.createElement("div");
    priceWrapper.classList.add("price-wrapper");

    const priceAndQuantity = document.createElement("div");
    priceAndQuantity.classList.add("price-and-quantity");

    const price = document.createElement("div");
    price.classList.add("price");

    const currentPrice = document.createElement("div");
    currentPrice.classList.add("current-price");
    currentPrice.innerHTML = `$${product.price.toFixed(2)}`;

    price.appendChild(currentPrice);

    if (product.oldPrice) {
        const oldPrice = document.createElement("div");
        oldPrice.classList.add("old-price");
        oldPrice.innerHTML = `$${product.oldPrice.toFixed(2)}`;
        price.appendChild(oldPrice);
    }


    const quantityDiv = document.createElement("div");
    quantityDiv.classList.add("quantity");

    const minusButton = document.createElement("div");
    minusButton.classList.add("count-button");
    minusButton.innerHTML = "-";
    minusButton.addEventListener('click', () => updateProductQuantity(product.id, -1));

    const count = document.createElement("div");
    count.classList.add("count");
    count.innerHTML = product.quantity;

    const plusButton = document.createElement("div");
    plusButton.classList.add("count-button");
    plusButton.innerHTML = "+";
    plusButton.addEventListener('click', () => updateProductQuantity(product.id, 1));

    quantityDiv.appendChild(minusButton);
    quantityDiv.appendChild(count);
    quantityDiv.appendChild(plusButton);

    priceAndQuantity.appendChild(price);
    priceAndQuantity.appendChild(quantityDiv);

    const totalPrice = document.createElement("div");
    totalPrice.classList.add("total-price");
    totalPrice.innerHTML = `$${(product.price * product.quantity).toFixed(2)}`;

    priceWrapper.appendChild(priceAndQuantity);
    priceWrapper.appendChild(totalPrice);

    productInfo.appendChild(title);
    productInfo.appendChild(priceWrapper);

    // Кнопка удаления товара (крестик)
    const closeButton = document.createElement("div");
    closeButton.classList.add("close");
    closeButton.innerHTML = 'X';
    closeButton.addEventListener('click', () => removeProductFromBasket(product.id)); 

    productInfo.appendChild(closeButton);

    productDiv.appendChild(productInfo);
    orderWrapper.appendChild(productDiv);

    
    return orderWrapper;
};




const displayCartItems = () => {
    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);
    const cartContainer = document.querySelector('.js-products-list');

    cartContainer.innerHTML = '';

    if (productsInBasket.length === 0) {
        cartContainer.innerHTML = '<p>Корзина пуста</p>';
        return;
    }

    productsInBasket.forEach((product) => {
        const productElement = createProduct(product);
        cartContainer.appendChild(productElement);
    });
};

// Инициализация
updateHeaderInfo();
displayCartItems();
