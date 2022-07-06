class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(`.${this._inputSelector}`)
    );
    this._saveButton = this._form.querySelector(
      `.${this._submitButtonSelector}`
    );
  }

  _showInputError = (inputConfig) => {
    const { inputElement, errorMessage } = inputConfig;
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    errorElement.textContent = errorMessage;

    errorElement.classList.add(this._errorClass);
    inputElement.classList.add(this._inputErrorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);

    errorElement.classList.remove(this._errorClass);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      const errorMessage = inputElement.validationMessage;
      this._showInputError({ inputElement, errorMessage });
    } else {
      this._hideInputError(inputElement);
    }
  };
  _hasInvalidInput = (inputList) => {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (inputList, saveButton) => {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      saveButton.classList.add(this._inactiveButtonClass);
      // saveButton.setAttribute("disabled", true);
      saveButton.disabled = true;
    } else {
      // иначе сделай кнопку активной
      saveButton.classList.remove(this._inactiveButtonClass);
      // saveButton.removeAttribute("disabled");
      saveButton.disabled = false;
    }
  };

  enableValidation = () => {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._saveButton);
      });
    });
    this._toggleButtonState(this._inputList, this._saveButton);
  };

  resetValidation = () => {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState(this._inputList, this._saveButton);
  };
}

export default FormValidator;
