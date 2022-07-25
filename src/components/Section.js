export default class Section {
  // Отрисовка элементов на странице
  constructor({ renderer }, containerSelector) {
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
    this._renderer = renderer; // Функция создания карточки createCard
  }

  // Принимает DOM-элемент и добавляет его в контейнер
  addItem(card) {
    this._container.prepend(this._renderer(card));
  }

  // Отрисовка всех элементов
  renderItems(items) {
    items.forEach((item) => {
      this.addItem(item);
    });
  }
}
