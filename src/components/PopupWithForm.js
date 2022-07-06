import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(
    popupSelector,
    formName,
    popupConfig,
    { inputSelector, submitButtonSelector, formSelector },
    clearErrorCallback,
    submitCallback,
    getCallback = null
  ) {
    super(popupSelector, popupConfig);
    this._submitCallBack = submitCallback; // Отправка формы
    this._formName = formName;
    this._inputSelector = inputSelector;

    this._submitButtonSelector = submitButtonSelector;
    this._formSelector = formSelector;
    this._getCallback = getCallback;
    this._clearErrorCallback = clearErrorCallback;
    this._formElement = document.forms[this._formName]; // Находим саму форму

    this._inputList = Array.from(
      this._formElement.querySelectorAll(`.${this._inputSelector}`)
    ); // Формируем массив input-о

    this._submitButton = this._formElement.querySelector(
      `.${this._submitButtonSelector}`
    );
  }

  // Метод собирает данные всех полей формы
  _getInputValues() {
    const values = {};
    this._inputList.forEach((inputElement) => {
      values[inputElement.id.slice(6)] = inputElement.value;
    });
    return values;
  }

  //
  _setInputValues(values) {
    this._inputList.forEach((inputElement) => {
      inputElement.value = values[inputElement.id.slice(6)];
    });
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();

    this._submitCallBack(this._getInputValues());

    this.close();
  };

  // Добавляет слушатель клика иконке закрытия попапа
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", this._handleSubmit);
  }

  open() {
    if (this._getCallback) {
      this._setInputValues(this._getCallback());
    } else {
      this._formElement.reset();
    }
    this._clearErrorCallback();
    super.open();
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}
