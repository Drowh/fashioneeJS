document.addEventListener("DOMContentLoaded", function () {
  // Находим все заголовки сайдбара
  const sidebarTitles = document.querySelectorAll(
    ".shop .sidebar .sidebar-item .sidebar-title"
  );

  // Добавляем иконки и обработчики событий для каждого заголовка
  sidebarTitles.forEach((title) => {
    // Добавляем иконку
    const icon = document.createElement("span");
    icon.classList.add("accordion-icon");
    title.appendChild(icon);

    // Добавляем обработчик клика
    title.addEventListener("click", function () {
      // Находим родительский элемент
      const sidebarItem = this.closest(".sidebar-item");

      // Переключаем класс collapsed для родительского элемента
      sidebarItem.classList.toggle("collapsed");

      // Находим содержимое, которое нужно скрыть/показать
      const content = sidebarItem.querySelector(".sidebar-content");

      // Если элемент скрыт, показываем его, иначе скрываем
      if (sidebarItem.classList.contains("collapsed")) {
        content.style.maxHeight = "0";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

  // Инициализация: сворачиваем все элементы сайдбара при загрузке страницы
  document.querySelectorAll(".shop .sidebar .sidebar-item").forEach((item) => {
    // Сворачиваем все элементы
    item.classList.add("collapsed");
    const content = item.querySelector(".sidebar-content");
    if (content) {
      content.style.maxHeight = "0";
    }
  });
});
