export default class Section {
  // Отрисовка элементов на странице
  constructor({ items, renderer }, containerSelector) {
    this._containerSelector = containerSelector;
    this._container = document.querySelector(`.${this._containerSelector}`);
    this._items = items;
    this._renderer = renderer;
  }

  // Принимает DOM-элемент и добавляет его в контейнер
  addItem(item) {
    this._container.prepend(this._renderer(item.name, item.link));
  }

  // Отрисовка всех элементов
  renderingAll() {
    this._items.forEach((item) => {
      this.addItem(item);
    });
  }
}
