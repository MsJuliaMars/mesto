export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const config = {
  inputSelector: "popup__text",
  submitButtonSelector: "popup__save-button",
  inactiveButtonClass: "popup__save-button_disabled",
  inputErrorClass: "popup__text_type-error",
  errorClass: "popup__error_visible",
};

export const formConfiguration = {
  inputSelector: "popup__text",
  submitButtonSelector: "popup__save-button",
  formSelector: "popup__form",
};

export const popupConfiguration = {
  activeModifier: "popup_opened",
  closeButtonSelector: "popup__close",
};

export const profileConfiguration = {
  userNameSelector: "profile__title",
  jobSelector: "profile__subtitle",
};

export const viewPopupConfig = {
  imageSelector: "popup__image",
  captionSelector: "popup__picture-title",
};

export const ESC_KEY = "Escape";
export const cardsContainerSelector = "cards__items";
export const newPlacePopupSelector = "popup_type_card";
export const profilePopupSelector = "popup_type_profile";
export const imagePopupSelector = "popup_type_picture";
export const newPlaceFormName = "popup-mesto";
export const profileFormName = "popup-profile";
