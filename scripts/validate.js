const config = {
  formSelector: "popup__form",
  inputSelector: "popup__text",
  submitButtonSelector: "popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__text_type-error",
  errorClass: "popup__error_visible",
};

const showInputError = (inputConfig) => {
  const {
    formElement,
    inputElement,
    errorMessage,
    inputErrorModifier,
    errorSelector,
  } = inputConfig;
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  errorElement.textContent = errorMessage;

  errorElement.classList.add(errorSelector);
  inputElement.classList.add(inputErrorModifier);
};

const hideInputError = (
  formElement,
  inputElement,
  inputErrorModifier,
  errorSelector
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  errorElement.classList.remove(errorSelector);
  inputElement.classList.remove(inputErrorModifier);
  errorElement.textContent = "";
};

const checkInputValidity = (
  formElement,
  inputElement,
  inputErrorModifier,
  errorSelector
) => {
  if (!inputElement.validity.valid) {
    const errorMessage = inputElement.validationMessage;
    showInputError({
      formElement,
      inputElement,
      errorMessage,
      inputErrorModifier,
      errorSelector,
    });
  } else {
    hideInputError(
      formElement,
      inputElement,
      inputErrorModifier,
      errorSelector
    );
  }
};

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, saveButton, disabledSelector) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    saveButton.classList.add(disabledSelector);
    // saveButton.setAttribute("disabled", true);
    saveButton.disabled = true;
  } else {
    // иначе сделай кнопку активной
    saveButton.classList.remove(disabledSelector);
    // saveButton.removeAttribute("disabled");
    saveButton.disabled = false;
  }
};

const setEventListeners = (formElement, validElement) => {
  const {
    inputSelector,
    submitButtonSelector,
    errorClass,
    inputErrorClass,
    inactiveButtonClass,
  } = validElement;
  const inputList = Array.from(
    formElement.querySelectorAll(`.${inputSelector}`)
  );
  const saveButton = formElement.querySelector(`.${submitButtonSelector}`);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(inputList, saveButton, inactiveButtonClass);
    });
  });
  toggleButtonState(inputList, saveButton, inactiveButtonClass);
};


const enableValidation = (validConfiguration) => {
  const { formSelector } = validConfiguration;
  const formList = Array.from(document.querySelectorAll(`.${formSelector}`));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validConfiguration);
  });
};

enableValidation(config);
