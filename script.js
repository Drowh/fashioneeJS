const products = [
    {
        "id": 1,
        "name": "Textured turtleneck with zip",
        "price": 52.99,
        "oldPrice": 53.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Brown",
        "image": "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
    },
    {
        "id": 2,
        "name": "Spray wrap skirt",
        "price": 35.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Women"
        ],
        "color": "Red",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/061c4e0891851d157cbcf6984295b7ed.png/s/f1200x/a/534336/sc/111"
    },
    {
        "id": 3,
        "name": "Short shorts with straps",
        "price": 20.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Blue",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/b56c73f8da5404fddf58b7a5a540130f.png/s/f1200x/a/534336/sc/238"
    },
    {
        "id": 4,
        "name": "Fashionee - catton shirt",
        "price": 110.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/911e17505fb10478ce04f078943bf74e.png/s/f1200x/a/534336/sc/55"
    },
    {
        "id": 5,
        "name": "Warm casual sweater",
        "price": 80.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400"
    },
    {
        "id": 6,
        "name": "Retro style handbag",
        "price": 45.99,
        "oldPrice": 52.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100"
    },
    {
        "id": 7,
        "name": "Style Handbag",
        "price": 180.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Black",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/14e10d5f0aaf5e8405fad852e8344182.png/s/f1200x/a/534336/sc/138"
    },
    {
        "id": 8,
        "name": "Blouse with insert and ruffles",
        "price": 30.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women"
        ],
        "color": "Blue",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/2b269ee1c83fd5758f3763f9a45a5605.png/s/f1200x/a/534336/sc/116"
    },
    {
        "id": 9,
        "name": "Long oversized T-shirt",
        "price": 30.99,
        "oldPrice": 52.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Blue",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/92be8394b48b6911690745902643f92d.png/s/f1200x/a/534336/sc/439"
    },
    {
        "id": 10,
        "name": "Stylish and comfortable cap",
        "price": 40.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Accessories"
        ],
        "color": "White",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/aa0d17c1bd58fc6066aa1f602fe8ab59.png/s/f1200x/a/534336/sc/325"
    },
    {
        "id": 11,
        "name": "Shoulder bag",
        "price": 210.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Red",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/ad5a7f75f7e3463aaafec1149cd2bfbd.png/s/f1200x/a/534336/sc/477"
    },
    {
        "id": 12,
        "name": "High-heeled shoes",
        "price": 52.99,
        "oldPrice": 70.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Women"
        ],
        "color": "Black",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/b14b37c5f1fbd94505697d827305348b.png/s/f1200x/a/534336/sc/57"
    },
    {
        "id": 13,
        "name": "Textured turtleneck with zip (2)",
        "price": 45.99,
        "oldPrice": 53.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Brown",
        "image": "https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/54cdbf69f8e60ba13e2e795cd495567f.png/s/f1200x/a/534336/sc/265"
    },
    {
        "id": 14,
        "name": "Spray wrap skirt (2)",
        "price": 25.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Women"
        ],
        "color": "Red",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/061c4e0891851d157cbcf6984295b7ed.png/s/f1200x/a/534336/sc/111"
    },
    {
        "id": 15,
        "name": "Short shorts with straps (2)",
        "price": 30.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Blue",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/b56c73f8da5404fddf58b7a5a540130f.png/s/f1200x/a/534336/sc/238"
    },
    {
        "id": 16,
        "name": "Fashionee - catton shirt (2)",
        "price": 99.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/911e17505fb10478ce04f078943bf74e.png/s/f1200x/a/534336/sc/55"
    },
    {
        "id": 17,
        "name": "Warm casual sweater (2)",
        "price": 70.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/ec9bc0e735f3c75eab9d4d8c4f8630fe.png/s/f1200x/a/534336/sc/400"
    },
    {
        "id": 18,
        "name": "Retro style handbag (2)",
        "price": 35.99,
        "oldPrice": 52.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Brown",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/c3d454c3b46f6a62d4d036f928a56705.png/s/f1200x/a/534336/sc/100"
    },
    {
        "id": 19,
        "name": "Style Handbag (2)",
        "price": 170.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Black",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/14e10d5f0aaf5e8405fad852e8344182.png/s/f1200x/a/534336/sc/138"
    },
    {
        "id": 20,
        "name": "Blouse with insert and ruffles (2)",
        "price": 25.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women"
        ],
        "color": "Blue",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/2b269ee1c83fd5758f3763f9a45a5605.png/s/f1200x/a/534336/sc/116"
    },
    {
        "id": 21,
        "name": "Long oversized T-shirt (2)",
        "price": 25.99,
        "oldPrice": 52.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Men"
        ],
        "color": "Blue",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/92be8394b48b6911690745902643f92d.png/s/f1200x/a/534336/sc/439"
    },
    {
        "id": 22,
        "name": "Stylish and comfortable cap (3)",
        "price": 35.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": false,
        "categories": [
            "Accessories"
        ],
        "color": "White",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/aa0d17c1bd58fc6066aa1f602fe8ab59.png/s/f1200x/a/534336/sc/325"
    },
    {
        "id": 23,
        "name": "Shoulder bag (2)",
        "price": 200.99,
        "oldPrice": null,
        "isSale": false,
        "isNew": true,
        "categories": [
            "Women",
            "Accessories"
        ],
        "color": "Red",
        "image": "https://fs-thb02.getcourse.ru/fileservice/file/thumbnail/h/ad5a7f75f7e3463aaafec1149cd2bfbd.png/s/f1200x/a/534336/sc/477"
    },
    {
        "id": 24,
        "name": "High-heeled shoes (2)",
        "price": 45.99,
        "oldPrice": 70.99,
        "isSale": true,
        "isNew": false,
        "categories": [
            "Women"
        ],
        "color": "Black",
        "image": "https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/b14b37c5f1fbd94505697d827305348b.png/s/f1200x/a/534336/sc/57"
    }
]
const PRODUCT_IN_BASKET_KEY = 'product-in-counter'
const FAVORITE_PRODUCTS_KEY = 'favorites-counter'

// Переменная для хранения значения поиска, которое будет вводиться пользователем.
let searchValue = ''


// Объект фильтра
const filter = {
    // category : 'ALL',  
    // price : {           
    //     min: 0,
    //     max: 999999
    // },
    // color: [],          
}

// Функция debounce позволяет избежать частых вызовов функции фильтрации при вводе текста.
// Она задерживает выполнение функции f на t миллисекунд с момента последнего ввода.
const debounce = (f, t) => {
    return function (args) {
        let previousCall = this.lastCall; // Запоминаем время последнего вызова функции.
        this.lastCall = Date.now(); // Фиксируем текущее время.
        if (previousCall && ((this.lastCall - previousCall) <= t)) {
            // Если с предыдущего вызова прошло меньше t миллисекунд, сбрасываем таймер.
            clearTimeout(this.lastCallTimer);
        }
        // Устанавливаем новый таймер для выполнения функции f.
        this.lastCallTimer = setTimeout(() => f(args), t);
    }
}


const getFromLS = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        console.log(e);
    }
}

const setToLS = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e);
    }
}


const updateHeaderInfo = () => {
    const basketCounter = document.getElementsByClassName('js-basket-counter')
    const favoriteCounter = document.getElementsByClassName('js-favorites-counter')

    if (!basketCounter.length && !favoriteCounter.length) {
        return false
    }


    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY)
    const favoriteProducts = getFromLS(FAVORITE_PRODUCTS_KEY)

    if (!productsInBasket && !favoriteProducts) {
        return false
    }

    let countInBasket = 0
    let countInFavorites = 0

    productsInBasket.forEach((product) => {
        countInBasket += product.quantity
    })

    favoriteProducts.forEach((product) => {
        countInFavorites += 1
    })

    basketCounter[0].innerHTML = countInBasket
    favoriteCounter[0].innerHTML = countInFavorites
}


const buyProduct = (product) => {
    const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY)

    if (!productsInBasket) {
        setToLS(PRODUCT_IN_BASKET_KEY, [{ ...product, quantity: 1 }])
        updateHeaderInfo()

        return true
    }

    let hasProductsInBasket = false

    const unpdateProducts = productsInBasket.map((productsInBasket) => {
        if (productsInBasket.id === product.id) {
            hasProductsInBasket = true

            return {
                ...productsInBasket,
                quantity: productsInBasket.quantity + 1
            }
        }
        return productsInBasket
    })

    if (hasProductsInBasket) {
        setToLS(PRODUCT_IN_BASKET_KEY, unpdateProducts)
        updateHeaderInfo()

        return true
    }

    productsInBasket.push({ ...product, quantity: 1 })

    setToLS(PRODUCT_IN_BASKET_KEY, productsInBasket)
    updateHeaderInfo()
}


const toggleFavorite = (product) => {
    let favoriteProducts = getFromLS(FAVORITE_PRODUCTS_KEY) || []

    if (favoriteProducts.includes(product)) {
        favoriteProducts = favoriteProducts.filter((id) => id !== product)
    } else {
        favoriteProducts.push(product)
    }

    setToLS(FAVORITE_PRODUCTS_KEY, favoriteProducts)
    updateHeaderInfo()
}




const createProduct = (product) => {
    const productWrapper = document.createElement("div")
    productWrapper.classList.add("product")

    const photo = document.createElement("div")
    photo.classList.add("photo")

    const topBar = document.createElement("div")
    topBar.classList.add("top-bar")

    const labels = document.createElement("div")
    labels.classList.add("labels")



    if (product.isSale) {
        const label = document.createElement("div")
        label.classList.add("label")

        label.classList.add("sale")
        label.innerHTML = "Sale"

        labels.appendChild(label)
    }

    if (product.isNew) {
        const label = document.createElement("div")
        label.classList.add("label")

        label.classList.add("new")
        label.innerHTML = "New"

        labels.appendChild(label)
    }

    const favorites = document.createElement("div")
    topBar.classList.add("favorites")

    const favoriteIcon = document.createElement("img")
    const favoriteProducts = getFromLS(FAVORITE_PRODUCTS_KEY) || [];
    favoriteIcon.src = favoriteProducts.includes(product.id) ? "./icons/heart-red.svg" : "./icons/heart.svg"

    favoriteIcon.alt = "Favorite Icon"
    favoriteIcon.style.cursor = "pointer"

    favoriteIcon.addEventListener("click", (event) => {
        toggleFavorite(product.id)

        const updatedFavoriteProducts = getFromLS(FAVORITE_PRODUCTS_KEY) || []
        favoriteIcon.src = updatedFavoriteProducts.includes(product.id) ? "./icons/heart-red.svg" : "./icons/heart.svg"
    });

    favorites.appendChild(favoriteIcon)



    topBar.appendChild(labels)
    topBar.appendChild(favorites)

    const productImage = document.createElement("img")
    productImage.src = product.image
    productImage.classList.add("product-image")

    photo.appendChild(topBar)
    photo.appendChild(productImage)

    const info = document.createElement("div")
    info.classList.add("info")

    const name = document.createElement("div")
    name.classList.add("name")
    name.innerHTML = product.name

    const price = document.createElement("div")
    price.classList.add("price")

    const currentPrice = document.createElement("div")
    currentPrice.classList.add("current-price")
    currentPrice.innerHTML = `$${product.price}`

    price.appendChild(currentPrice)

    if (product.oldPrice) {
        const oldPrice = document.createElement("div")
        oldPrice.classList.add("old-price")
        oldPrice.innerHTML = `$${product.oldPrice}`

        price.appendChild(oldPrice)
    }

    info.appendChild(name)
    info.appendChild(price)

    const buyButton = document.createElement("button")
    buyButton.classList.add("buy-btn")
    buyButton.innerHTML = "Buy Now"
    buyButton.style.cursor = "pointer"
    buyButton.addEventListener("click", (event) => {
        buyProduct(product)


    })

    productWrapper.appendChild(photo)
    productWrapper.appendChild(info)
    productWrapper.appendChild(buyButton)

    return productWrapper
}


const createProductList = (products) => {
    const jsProducts = document.getElementsByClassName("js-products")

    if (jsProducts.length) {
        jsProducts[0].innerHTML = ""
        for (const product of products) {
            const createdProduct = createProduct(product)
            jsProducts[0].appendChild(createdProduct)
        }
    }
}

// Функция для фильтрации списка товаров по поисковому запросу, фильтрам, сортировке и пагинации.
const filterProducts = (searchValue, filter, sort, pagination) => {
    // Создаем копию массива товаров, чтобы не изменять оригинальный массив.
    let filteredProducts = [...products]

    // Если введено значение для поиска, фильтруем товары по имени.
    if (searchValue) {
        filteredProducts = filteredProducts.filter((product) => {
            return product.name.toLowerCase().includes(searchValue.toLowerCase())
        })
    }

    // Если фильтр содержит параметры, проверяем их.
    if (Object.keys(filter).length) {
        if (filter.category) {
            // Фильтруем товары по категории, если она выбрана.
            filteredProducts = filteredProducts.filter((product) => {
                return product.categories.includes(filter.category)
            })
        }
    }

    // Подсчитываем количество отфильтрованных товаров.
    const productsCount = filteredProducts.length
    // Возвращаем отфильтрованные товары и их количество.
    return {
        filteredProducts,
        productsCount
    }
}

// Функция для обновления числа товаров, отображаемого на странице.
const updateProductsCount = (count) => {
    // Изменяем текст элемента с ID "products-count", чтобы отобразить количество товаров.
    document.getElementById("products-count").innerHTML = count
}


const toogleBlockFilterBtn = () => {
    // TODO: сделай рабочую кнопку, Проблема в том, что если мы нажмем на категорию, применим, потом на жмем на ALL, то кнопка закроется а списаок товаров не обновится
    //     const applyFilter = document.getElementById("apply-filter")

    //     if (!Object.keys(filter).length) {
    //         applyFilter.setAttribute("disabled", "disabled")
    //         return

    //     }

    //     applyFilter.removeAttribute("disabled")
}


// Добавляем обработчик событий на поле ввода для поиска товаров.
// Используем debounce, чтобы отсрочить вызов фильтрации на 500 миллисекунд.
document.getElementById("search-row").addEventListener("keyup", debounce((e) => {
    searchValue = e.target.value // Сохраняем введенное значение поиска.
    // Фильтруем товары по значению поиска и активным фильтрам.
    const { filteredProducts, productsCount } = filterProducts(searchValue, filter)
    createProductList(filteredProducts) // Обновляем список товаров на странице.
    updateProductsCount(productsCount) // Обновляем количество товаров.
}, 500))

// На каждый клик по категории обновляем фильтр и обновляем состояние кнопки Apply Filter
const categoryItems = document.getElementsByClassName("js-category")

for (let i = 0; i < categoryItems.length; i++) {
    categoryItems[i].addEventListener("click", (e) => {
        // Если категория уже активна, отключаем её и выбираем категорию "Все".
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active")
            categoryItems[0].classList.add("active") // Активируем категорию "Все".
            delete filter["category"] // Удаляем фильтр по категории.
            toogleBlockFilterBtn() // Обновляем состояние кнопки фильтра.
            return
        }

        // Убираем активный класс с других элементов, если другая категория выбрана.
        const alreadyActive = document.querySelectorAll(".js-category.active")
        if (alreadyActive?.length) {
            alreadyActive[0].classList.remove("active")
        }

        e.target.classList.add("active") // Делаем текущую категорию активной.

        // Если выбрана категория "Все", удаляем фильтр по категории.
        if (e.target.dataset.category === "ALL") {
            delete filter["category"]
        } else {
            // Добавляем выбранную категорию в фильтр.
            filter["category"] = e.target.dataset.category
        }

        toogleBlockFilterBtn() // Обновляем состояние кнопки фильтра.
    })
}

// Обработчик для кнопки "Применить фильтр", который фильтрует товары при клике на кнопку.
document.getElementById("apply-filter").addEventListener("click", () => {
    // Фильтруем товары по текущему значению поиска и активным фильтрам.
    const { filteredProducts, productsCount } = filterProducts(searchValue, filter)
    createProductList(filteredProducts) // Обновляем список товаров на странице.
    updateProductsCount(productsCount) // Обновляем количество товаров.
})

// Начальная загрузка товаров.
createProductList(products) // Создаем список товаров.
updateHeaderInfo() // Обновляем информацию в заголовке (например, количество товаров).