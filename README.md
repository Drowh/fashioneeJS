# FashioneeJS

## 💫 Live Demo

https://drowh.github.io/fashioneeJS/

## 📝 Описание проекта

FashioneeJS — это интерактивный веб-магазин модной одежды и аксессуаров, полностью реализованный на чистом JavaScript без использования фреймворков. Проект демонстрирует возможность создания современного интернет-магазина с полным функционалом покупок, фильтрации товаров и управления корзиной, используя только нативные веб-технологии.

Этот проект будет полезен:

- Начинающим веб-разработчикам для изучения организации кода и работы с DOM
- Дизайнерам для понимания принципов создания интерактивных интерфейсов
- Всем, кто интересуется разработкой e-commerce решений без использования тяжелых фреймворков

## 🛠️ Технологии и стек

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- LocalStorage для хранения данных корзины и избранных товаров
- SVG для графики и иконок
- Адаптивный дизайн

## ✨ Основные возможности

- **Каталог товаров**: просмотр всех доступных товаров с возможностью фильтрации
- **Фильтрация и сортировка**: поиск товаров по категориям, цене и цвету
- **Пагинация**: удобная навигация по страницам каталога
- **Корзина покупок**: добавление товаров, изменение количества, удаление
- **Избранное**: возможность добавлять товары в избранное
- **Применение промокодов**: система скидок (пример: DISCOUNT10)
- **Адаптивный дизайн**: корректное отображение на всех устройствах

## 🚀 Установка и запуск

Поскольку проект не требует сборки или установки зависимостей, вы можете запустить его локально следующим образом:

1. Клонируйте репозиторий:

```bash
git clone https://github.com/drowh/fashioneeJS.git
```

2. Откройте проект в вашем любимом редакторе кода

3. Запустите локальный сервер (например, используя расширение Live Server для VS Code или http-server)

```bash
# Если у вас установлен node.js, вы можете использовать http-server
npx http-server
```

4. Откройте сайт в браузере (обычно доступен по адресу http://localhost:8080 или подобному)

## 📁 Структура проекта

```
fashioneeJS/
  ├── icons/            # SVG иконки для интерфейса
  ├── images/           # Изображения для оформления сайта
  ├── styles/           # CSS стили
  │   ├── cart.css      # Стили для страницы корзины
  │   ├── commons.css   # Общие стили
  │   ├── footer.css    # Стили футера
  │   ├── header.css    # Стили хедера
  │   ├── reset.css     # Сброс стилей браузера
  │   └── shop.css      # Стили для страницы магазина
  ├── cart.html         # HTML страница корзины
  ├── cart.js           # JS логика для страницы корзины
  ├── index.html        # Главная HTML страница (каталог товаров)
  ├── script.js         # Основная логика магазина
  └── README.md         # Документация проекта
```

## 📋 Примеры использования

### Фильтрация товаров

Для фильтрации товаров по категориям, пользователю достаточно:

1. Выбрать категорию в списке (Men, Women, Accessories)
2. Указать диапазон цен
3. Выбрать нужные цвета
4. Нажать кнопку "Apply Filter"

### Добавление в корзину

Для добавления товара в корзину:

1. Нажмите кнопку "Buy Now" под нужным товаром
2. Переключитесь на страницу корзины через навигационное меню "Pages" -> "Cart"
3. Управляйте количеством с помощью "+" и "-"
4. Применяйте промокоды для получения скидок (например, "DISCOUNT10")

### Работа с избранным

Для добавления товара в избранное:

1. Нажмите на иконку сердечка на карточке товара
2. В правом верхнем углу будет отображаться количество товаров в избранном

## ❓ FAQ

### Как применить промокод?

Введите код "DISCOUNT10" в поле для промокода на странице корзины и нажмите кнопку применения.

### Где хранятся данные корзины?

Данные корзины и избранных товаров сохраняются в LocalStorage вашего браузера.

### Можно ли использовать проект для коммерческих целей?

Проект предназначен для демонстрации возможностей чистого JavaScript. Для коммерческого использования рекомендуется связаться с автором.

## 👤 Автор проекта

- **GitHub**: [@drowh](https://github.com/drowh)

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

Разработано с 💜 и чистым JavaScript.
