import { openPopup, popupPicture } from "./index.js";

const popupImage = document.querySelector(".popup__image");
const popupImageTitle = document.querySelector(".popup__picture-title");

class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();

    // Добавим данные
    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;

    this._delButton = this._element.querySelector(".card__del-button");
    this._likeButton = this._element.querySelector(".card__like-button");

    this._setEventListeners();
    return this._element;
  }

  _handleLikeButtonClick() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _openPicture() {
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupImageTitle.textContent = this._name;
    openPopup(popupPicture);
  }

  _removeCard = () => {
    this._element.remove();
  };

  // Слушатели на карточку
  _setEventListeners() {
    // Открытие попапа просмотра изображения кликом по изображению
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._openPicture();
      });

    // Установка лайка на карточке
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButtonClick();
    });
    // Удаление карточки
    this._delButton.addEventListener("click", this._removeCard);
  }
}

export default Card;
