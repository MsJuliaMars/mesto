import { ESC_KEY } from "../utils/constants.js";
class Popup {
  constructor(popupSelector, popupConfig) {
    this._popupSelector = popupSelector;
    this._activeModifier = popupConfig.activeModifier;
    this._closeButtonSelector = popupConfig.closeButtonSelector;

    this._popup = document.querySelector(`.${this._popupSelector}`);

    this._popupCloseButton = this._popup.querySelector(
      `.${this._closeButtonSelector}`
    );
  }

  // Содержит логику закрытия попапа клавишей Esc
  _handleEscClose = (evt) => {
    if (evt.key === ESC_KEY) {
      this.close();
    }
  };
  // Содержит логику закрытия попапа кнопке крестик
  _handleCloseButClick = () => {
    this.close();
  };
  // Содержит логику закрытия попапа клавишей Overlay
  _handleCloseOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  };

  open() {
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.classList.add(this._activeModifier);
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.classList.remove(this._activeModifier);
  }

  // Добавляет слушатель клика иконке закрытия попапа
  setEventListeners() {
    this._popup.addEventListener("mousedown", this._handleCloseOverlayClick); // Слушатель закрытия по Overlay
    this._popupCloseButton.addEventListener("click", this._handleCloseButClick); // Слушатель закрытия по кнопке
  }
}

export default Popup;
