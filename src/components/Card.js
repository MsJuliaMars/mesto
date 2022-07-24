class Card {
  constructor(
    { name, link, _id, likes, owner },
    cardSelector,
    userId,
    { handleOpenCallback, handleLikeCallback, handleDeleteCallback }
  ) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._id = _id; // Id карточки
    this._userId = userId; // Id пользователя

    this._isOwner = userId === owner._id; // Булевое значение, сравниваем id владельца карточки и пользователя
    this._likes = likes; //Лайки на карточках
    this._handleOpenView = handleOpenCallback; //openView
    this._handleTogglelike = handleLikeCallback; // Убрать лайк
    this._handleCardDelete = handleDeleteCallback;
    this.setLikes = this.setLikes.bind(this);
  }
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    this._cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return this._cardElement;
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
    this._likeCount = this._element.querySelector(".card__like-count"); // Счетчик лайков
    this._setEventListeners();

    this._renderLikes();
    return this._element;
  }

  // Лайкнул ли пользователь карточку
  _isLiked() {
    return this._likes.map((item) => item._id).includes(this._userId);
  }

  // Приватный метод, который рендорит поставленные лайки
  _renderLikes() {
    if (this._isLiked()) {
      this._likeButton.classList.add("card__like-button_active");
    } else {
      this._likeButton.classList.remove("card__like-button_active");
    }
    this._likeCount.textContent = this._likes.length;
  }

  // Получаем внутренние поля карточки
  setLikes(newLikes) {
    this._likes = newLikes;
    this._renderLikes();
  }

  _handleLikeButtonClick = () => {
    this._handleTogglelike(this._id, this._isLiked(), this.setLikes);
  };

  _handleImageClick = () => {
    this._handleOpenView({ name: this._name, link: this._link });
  };
  removeCard = () => {
    this._element.remove();
  };

  _handleDeleteClick = () => {
    this._handleCardDelete(this._id, this.removeCard);
  };

  // Слушатели на карточку
  _setEventListeners() {
    this._cardImage.addEventListener("click", this._handleImageClick);
    // Установка лайка на карточке
    this._likeButton.addEventListener("click", this._handleLikeButtonClick);

    if (this._isOwner) {
      this._delButton.addEventListener("click", this._handleDeleteClick);
    } else {
      this._delButton.remove();
    }
  }
}

export default Card;
