export default class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  // Загрузка информации о пользователе с сервера
  uploadingUserInf() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    }).then(this._errorChecking);
  }

  // Загрузка карточек с сервера
  downloadingCards() {
    return fetch(`${this._url}/cards`, { headers: this._headers }).then(
      this._errorChecking
    );
  }

  // Добавление новой карточки
  setCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._errorChecking);
  }

  // Редактирование профиля
  editingProfile(data) {
    console.dir(data);
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        about: data.job,
      }),
    }).then(this._errorChecking);
  }

  // Редактирование аватара
  editAvatar(link) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: link }),
    }).then(this._errorChecking);
  }

  // Добавление новой карточки
  addingNewCard(card) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: card.name,
        link: card.link,
      }),
    }).then(this._errorChecking);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._errorChecking);
  }

  // Добавление лайка на карточку
  toggleLike(cardId, isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: isLiked ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(this._errorChecking);
  }

  _errorChecking(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Возникла ошибка моя: ${res.message}`);
  }
}
