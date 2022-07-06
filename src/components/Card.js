class Card {
  constructor(name, link, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    this._cardImage = this._element.querySelector(".card__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;

    this._delButton = this._element.querySelector(".card__del-button");
    this._likeButton = this._element.querySelector(".card__like-button");

    this._setEventListeners();
    return this._element;
  }

  _handleLikeButtonClick = () => {
    this._likeButton.classList.toggle("card__like-button_active");
  };

  _handleImageClick = () => {
    this._handleCardClick({ name: this._name, link: this._link });
  };
  _removeCard = () => {
    this._element.remove();
  };

  // Слушатели на карточку
  _setEventListeners() {
    // Открытие попапа просмотра изображения кликом по изображению
    this._cardImage.addEventListener("click", this._handleImageClick);

    // Установка лайка на карточке
    this._likeButton.addEventListener("click", this._handleLikeButtonClick);

    // Удаление карточки
    this._delButton.addEventListener("click", this._removeCard);
  }
}

export default Card;
