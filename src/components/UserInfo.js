export default class UserInfo {
  // Отвечает за управление отображением информации о пользователе на странице
  constructor({ userNameSelector, jobSelector, avatarSelector }) {
    this._userNameSelector = userNameSelector;
    this._jobSelector = jobSelector;
    this._avatarSelector = avatarSelector;
    this._userNameElement = document.querySelector(
      `.${this._userNameSelector}`
    );
    this._jobElement = document.querySelector(`.${this._jobSelector}`);
    this._avatarElement = document.querySelector(`.${this._avatarSelector}`);
  }
  // возвращает объект с данными пользователя
  getUserInfo = () => {
    return {
      title: this._userNameElement.textContent,
      job: this._jobElement.textContent,
      avatar: this._avatarElement.src,
    };
  };

  // Принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(data) {
    this._userNameElement.textContent = data?.name || "";
    this._jobElement.textContent = data?.about || "";
    this._avatarElement.src = data?.avatar || "";
    this._name = data.name;
    this._about = data.about;
    this._avatar = data.avatar;
    this._id = data._id;
  }
  // Возвращает объект с аватаром пользователя
  getUserAvatar() {
    return {
      avatar: this._avatar,
    };
  }
  // Возвращает объект с ID пользователя
  get id() {
    return this._id;
  }
}
