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
        "color": "Blue",
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
        "color": "Blue",
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
// Переменная для хранения выбранного значения сортировки
let sort = ''


// Объекты фильтра
let oldFilter = {
    category: 'ALL',
    price: {
        min: 0,
        max: 999999
    },
    color: [],
}

const currentFilter = {
    category: 'ALL',
    price: {
        min: 0,
        max: 999999
    },
    color: [],
}

const paginationInfo = {
    activePage: 0,
    perPage: 12
}

// Функция debounce позволяет избежать частых вызовов функции фильтрации при вводе текста.
// Она задерживает выполнение функции f на t миллисекунд с момента последнего ввода.
const debounce = (f, t) => {
    return function (args) {
        let previousCall = this.lastCall // Запоминаем время последнего вызова функции.
        this.lastCall = Date.now() // Фиксируем текущее время.
        if (previousCall && ((this.lastCall - previousCall) <= t)) {
            // Если с предыдущего вызова прошло меньше t миллисекунд, сбрасываем таймер.
            clearTimeout(this.lastCallTimer)
        }
        // Устанавливаем новый таймер для выполнения функции f.
        this.lastCallTimer = setTimeout(() => f(args), t)
    }
}


const getFromLS = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (e) {
        console.log(e)
    }
}

const setToLS = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        console.log(e)
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
    const favoriteProducts = getFromLS(FAVORITE_PRODUCTS_KEY) || []
    favoriteIcon.src = favoriteProducts.includes(product.id) ? "./icons/heart-red.svg" : "./icons/heart.svg"

    favoriteIcon.alt = "Favorite Icon"
    favoriteIcon.style.cursor = "pointer"

    favoriteIcon.addEventListener("click", (event) => {
        toggleFavorite(product.id)

        const updatedFavoriteProducts = getFromLS(FAVORITE_PRODUCTS_KEY) || []
        favoriteIcon.src = updatedFavoriteProducts.includes(product.id) ? "./icons/heart-red.svg" : "./icons/heart.svg"
    })

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

const createPagination = (productsCount) => {
    const jsPages = document.getElementsByClassName("js-pages")
    const pagination = document.getElementById("pagination")

    if (!productsCount) {
        pagination.classList.add('hide')

        return
    }

    if (!jsPages.length) {
        return
    }

    pagination.classList.remove('hide')


    const jsPagesContainer = jsPages[0]

    jsPagesContainer.innerHTML = ""

    const pageCount = Math.ceil(productsCount / paginationInfo.perPage)

    for (let i = 0; i < pageCount; i++) {

        const page = document.createElement("div")
        page.classList.add("page")

        if (i === paginationInfo.activePage) {
            page.classList.add("active")
        }

        page.innerHTML = i + 1
        page.dataset.index = i

        page.addEventListener("click", (e) => {
            const currentElement = e.target

            const alreadyActive = document.querySelectorAll(".page.active")

            if (alreadyActive?.length) {
                alreadyActive[0].classList.remove("active")
            }

            currentElement.classList.add("active")

            paginationInfo.activePage = parseInt(currentElement.dataset.index)

            const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo)

            createProductList(filteredProducts, productsCount)

            updateProductsCount(productsCount) // Обновляем количество товаров
            updatePaginationButtons(productsCount) // Передаем актуальное количество товаров
        })

        jsPagesContainer.appendChild(page)

    }
}

// Обработчик события для кнопки "влево"
const leftButtonHandler = () => {
    // Проверяем, не на первой ли странице
    if (paginationInfo.activePage > 0) {
        paginationInfo.activePage-- // Уменьшаем номер активной страницы
        updateProductList() // Обновляем список товаров
    }
}

// Обработчик события для кнопки "вправо"
const rightButtonHandler = () => {
    // Проверяем, не на последней ли странице
    const pageCount = Math.ceil(products.length / paginationInfo.perPage)
    if (paginationInfo.activePage < pageCount - 1) {
        paginationInfo.activePage++ // Увеличиваем номер активной страницы
        updateProductList() // Обновляем список товаров
    }
}

// Функция для обновления списка товаров
const updateProductList = () => {
    const { filteredProducts, productsCount } = filterProducts(searchValue, currentFilter, sort, paginationInfo)
    createProductList(filteredProducts, productsCount) // Обновляем список товаров
    updateProductsCount(productsCount) // Обновляем количество товаров
    updatePaginationButtons(productsCount) // Передаем актуальное количество товаров
}


// Функция для управления видимостью кнопок пагинации
const updatePaginationButtons = (productsCount) => {

    const pageCount = Math.ceil(productsCount / paginationInfo.perPage)
    

    // Проверяем, есть ли предыдущая страница
    leftButton.style.display = paginationInfo.activePage === 0 ? 'none' : 'block'

    // Проверяем, есть ли следующая страница
    rightButton.style.display = paginationInfo.activePage >= pageCount - 1 ? 'none' : 'block' 

    //Скрываем кнопки пагинации, когда на странице остается 12 или меньше товаров
    if (productsCount <= paginationInfo.perPage) {
        leftButton.style.display = 'none'
        rightButton.style.display = 'none'
    }

}


const leftButton = document.querySelector('#pagination .left')
const rightButton = document.querySelector('#pagination .right')

// Привязываем обработчики событий к кнопкам
leftButton.addEventListener('click', leftButtonHandler)
rightButton.addEventListener('click', rightButtonHandler)


const createProductList = (products, productsCount) => {
    const jsProducts = document.getElementsByClassName("js-products")

    if (!jsProducts.length) {
        return
    }
    jsProducts[0].innerHTML = ""

    for (const product of products) {
        const createdProduct = createProduct(product)
        jsProducts[0].appendChild(createdProduct)
    }


    createPagination(productsCount)
}

const filterBySearchValue = (products, value) => {
    return products.filter((product) => {
        return product.name.toLowerCase().includes(value.toLowerCase())
    })
}

const filterProductsByFilterInfo = (products, filter) => {
    let filteredProducts = products


    if (filter.category !== 'ALL') {
        filteredProducts = products.filter(product => {
            return product.categories.includes(filter.category)
        })
    }

    return filteredProducts
}

const sortProducts = (products, sort) => {
    // Если значение сортировки установлено, сортируем товары
    products.sort((a, b) => {
        if (sort === "ASC") { // Сортировка по возрастанию (от A до Z)
            if (a.name > b.name) return 1
            if (a.name === b.name) return 0
            if (a.name < b.name) return -1
        }
        // Сортировка по убыванию (от Z до A)
        if (a.name > b.name) return -1
        if (a.name === b.name) return 0
        if (a.name < b.name) return 1
    })

}

const paginateProducts = (products, paginInfo) => {
    const productsCount = products.length

    const { perPage, activePage } = paginInfo

    const firstIndex = activePage * perPage
    const paginatedProducts = products.slice(firstIndex, ((activePage + 1) * perPage))

    return {
        productsCount,
        paginatedProducts
    }
}

// Функция для фильтрации списка товаров по поисковому запросу, фильтрам, сортировке и пагинации.
const filterProducts = (searchValue, filter, sort, pagination) => {
    // Создаем копию массива товаров, чтобы не изменять оригинальный массив.
    let filteredProducts = [...products]

    // Если введено значение для поиска, фильтруем товары по имени.
    if (searchValue) {
        filteredProducts = filterBySearchValue(filteredProducts, searchValue)
    }

    filteredProducts = filterProductsByFilterInfo(filteredProducts, filter)

    // Фильтрация по цене
    if (filter.price && (filter.price.min || filter.price.max)) {
        filteredProducts = filteredProducts.filter((product) => {
            const minPrice = filter.price.min ? filter.price.min : 0 // если значение не указано (ввод пустой),  по умолчанию используется значение 0
            const maxPrice = filter.price.max ? filter.price.max : Infinity // если ввод очищен, он не будет отфильтровывать продукты без необходимости

            return product.price >= minPrice && product.price <= maxPrice
        })
    }


    // Фильтрация по цвету
    if (filter.color.length) {
        filteredProducts = filteredProducts.filter((product) => {
            return filter.color.some(color => product.color.includes(color))
        })
    }


    if (sort) {
        sortProducts(filteredProducts, sort)
    }

    const { paginatedProducts, productsCount } = paginateProducts(filteredProducts, pagination)



    return {
        filteredProducts: paginatedProducts,
        productsCount
    }
}

// Функция для обновления числа товаров, отображаемого на странице.
const updateProductsCount = (count) => {
    // Изменяем текст элемента с ID "products-count", чтобы отобразить количество товаров.
    document.getElementById("products-count").innerHTML = count
}


const toggleBlockFilterBtn = () => {
    const applyFilter = document.getElementById("apply-filter")

    if (currentFilter.category ||
        currentFilter.price.min ||
        currentFilter.price.max ||
        currentFilter.color.length !==
        oldFilter.category) {
        applyFilter.removeAttribute("disabled")
    } else {
        applyFilter.setAttribute("disabled", "disabled")
    }
}


// Добавляем обработчик событий на поле ввода для поиска товаров.
// Используем debounce, чтобы отсрочить вызов фильтрации на 500 миллисекунд.
document.getElementById("search-row").addEventListener("keyup", debounce((e) => {
    searchValue = e.target.value // Сохраняем введенное значение поиска.

    paginationInfo.activePage = 0
    // Фильтруем товары по значению поиска и активным фильтрам.
    const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo)

    createProductList(filteredProducts, productsCount) // Обновляем список товаров на странице.
    updateProductsCount(productsCount) // Обновляем количество товаров.
}, 500))

// На каждый клик по категории обновляем фильтр и обновляем состояние кнопки Apply Filter
const categoryItems = document.getElementsByClassName("js-category")

for (let i = 0; i < categoryItems.length; i++) {
    categoryItems[i].addEventListener("click", (e) => {
        // Добавляем выбранную категорию в фильтр.
        currentFilter["category"] = e.target.dataset.category
        // Если категория уже активна, отключаем её и выбираем категорию "Все".
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active")
            categoryItems[0].classList.add("active") // Активируем категорию "Все".

            toggleBlockFilterBtn() // Обновляем состояние кнопки фильтра.

            return
        }

        // Убираем активный класс с других элементов, если другая категория выбрана.
        const alreadyActive = document.querySelectorAll(".js-category.active")

        if (alreadyActive?.length) {
            alreadyActive[0].classList.remove("active")
        }

        e.target.classList.add("active") // Делаем текущую категорию активной.


        toggleBlockFilterBtn() // Обновляем состояние кнопки фильтра.
    })
}

// Обработка кликов по чекбоксам для фильтрации по цвету
const colorCheckboxes = document.getElementsByClassName("js-color")

for (let i = 0; i < colorCheckboxes.length; i++) {
    colorCheckboxes[i].addEventListener("change", (e) => {
        const selectedColor = e.target.value

        if (e.target.checked) {
            // Если чекбокс выбран, добавляем цвет в фильтр
            if (!currentFilter.color.includes(selectedColor)) {
                currentFilter.color.push(selectedColor)
            }
        } else {
            // Если чекбокс снят, удаляем цвет из фильтра
            currentFilter.color = currentFilter.color.filter(color => color !== selectedColor)
        }

        toggleBlockFilterBtn()
    })
}

// Обрабатываем изменение минимальной и максимальной цены
document.getElementById("min-price").addEventListener("input", (e) => {
    currentFilter.price.min = e.target.value
    toggleBlockFilterBtn()
})

document.getElementById("max-price").addEventListener("input", (e) => {
    currentFilter.price.max = e.target.value
    toggleBlockFilterBtn()
})


// Обработчик для кнопки "Применить фильтр", который фильтрует товары при клике на кнопку.
document.getElementById("apply-filter").addEventListener("click", (e) => {
    paginationInfo.activePage = 0
    // Фильтруем товары по текущему значению поиска и активным фильтрам.
    const { filteredProducts, productsCount } = filterProducts(searchValue, currentFilter, sort, paginationInfo)
    createProductList(filteredProducts, productsCount) // Обновляем список товаров на странице.
    updateProductsCount(productsCount) // Обновляем количество товаров.

    e.target.setAttribute("disabled", "disabled")


    oldFilter = { ...currentFilter }
})

document.getElementById("sort").addEventListener("change", (e) => {
    sort = e.target.value // Получаем новое значение сортировки из выпадающего списка
    const { filteredProducts, productsCount } = filterProducts(searchValue, oldFilter, sort, paginationInfo)
    // Фильтруем товары с учетом сортировки

    createProductList(filteredProducts, productsCount)
    updateProductsCount(productsCount)
})


const getRandomProducts = (products, count) => {
    // Создаем копию массива товаров, чтобы избежать изменения исходного массива
    const newProducts = [...products]
    const randProducts = [] // Массив для хранения случайно выбранных товаров

    do {
        // Генерируем случайное число от 0 до длины нового массива товаров
        const randomNumber = Math.floor(Math.random() * newProducts.length)

        // Удаляем один элемент из нового массива и добавляем его в массив случайных товаров
        randProducts[randProducts.length] = newProducts.splice(randomNumber, 1)[0]
    } while (randProducts.length < count) // Повторяем, пока количество случайных товаров не достигнет нужного значения

    return randProducts // Возвращаем массив случайных товаров
}


const createRandomProduct = (product) => {
    const productWrapper = document.createElement("div")
    productWrapper.classList.add("product")

    const photo = document.createElement("div")
    photo.classList.add("image")

    const productImage = document.createElement("img")
    productImage.src = product.image
    productImage.classList.add("product-image")

    photo.appendChild(productImage)
    productWrapper.appendChild(photo)

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

    productWrapper.appendChild(info)

    return productWrapper

}


const generateReviewedByYouProducts = () => {
    // Получаем три случайных товара из общего списка
    const randomProducts = getRandomProducts(products, 3)

    // Находим контейнер для отображения случайных товаров
    const container = document.getElementsByClassName('js-reviewed-products')[0]

    container.innerHTML = "" // Очищаем содержимое контейнера перед добавлением новых товаров

    // Для каждого случайного товара создаем элемент и добавляем его в контейнер
    randomProducts.forEach(product => {
        const randomProduct = createRandomProduct(product) // Функция для создания элемента товара
        container.appendChild(randomProduct) // Добавляем созданный элемент в контейнер
    })
}

const { paginatedProducts, productsCount } = paginateProducts(products, paginationInfo)

generateReviewedByYouProducts()
// Начальная загрузка товаров
createProductList(paginatedProducts, productsCount) // Создаем список товаров
updateHeaderInfo() // Обновляем информацию в заголовке
updateProductsCount(products.length) // Обновляем количество товаров
updatePaginationButtons(productsCount) // Устанавливаем начальное состояние кнопок пагинации