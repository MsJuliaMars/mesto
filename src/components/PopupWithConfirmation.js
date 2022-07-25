import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(
    popupSelector,
    popupConfig,
    formSelector,
    submitButtonSelector,
    handleSubmitCallback,
    { captionNormal, captionActive }
  ) {
    super(popupSelector, popupConfig);
    this._formSelector = formSelector;
    this._handleConfirm = handleSubmitCallback;
    this._formElement = this._popup.querySelector(this._formSelector);

    this._captionNormal = captionNormal;
    this._captionActive = captionActive;
    this.toggleSubmitBtnCaption = this.toggleSubmitBtnCaption.bind(this);
    this._submitButton = this._popup.querySelector(submitButtonSelector);

    this._submitCallbacks = {
      toggleBtnCallback: this.toggleSubmitBtnCaption,
      removeCardCallback: () => {},
      closeConfirmCallback: this.close,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  toggleSubmitBtnCaption(state)  {
    this._submitButton.textContent = state
      ? this._captionActive
      : this._captionNormal;
  }

  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleConfirm(this._id, this._submitCallbacks);
  };

  open(id, deleteCardCallback) {
    this._id = id;
    this._submitCallbacks.removeCardCallback = deleteCardCallback;
    super.open();
  }

  close() {
    super.close();
    this._id = null;
    this._submitCallbacks.removeCardCallback = () => {};
  }

  // Добавление слушателей
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', this._handleSubmit);
  }
}

export default PopupWithConfirmation;
