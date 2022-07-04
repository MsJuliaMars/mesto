import {
  initialCards,
  config,
  formConfiguration,
  popupConfiguration,
  cardsContainerSelector,
  newPlacePopupSelector,
  newPlaceFormName,
  profileFormName,
  profileConfiguration,
  profilePopupSelector,
  imagePopupSelector,
  viewPopupConfig,
} from "./scripts/constants.js";

import FormValidator from "./scripts/FormValidator.js";
import Card from "./scripts/Card.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import Section from "./scripts/Section.js";
import UserInfo from "./scripts/UserInfo.js";
import PopupWithImage from "./scripts/PopupWithImage.js";

import './pages/index.css';
const profileEditButton = document.querySelector(".profile__edit-button");
const addCardButton = document.querySelector(".profile__add-button");

const viewPopup = new PopupWithImage(
  imagePopupSelector,
  popupConfiguration,
  viewPopupConfig
);
viewPopup.setEventListeners();

// функция создания новой карточки
function createCard(inpNmae, inpLink) {
  const card = new Card(inpNmae, inpLink, ".card__template", viewPopup.open);
  const cardElement = card.generateCard();
  return cardElement;
}

// Создаем новый экземпляр класса Section
const cardsContainer = new Section(
  {
    items: initialCards.reverse(),
    renderer: createCard,
  },
  cardsContainerSelector
);

//добавление новой карточки / отправка формы место
function handleCardSubmit(item) {
  cardsContainer.addItem(item);
}

const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

// Добавление новой карточки
const newCardPopup = new PopupWithForm(
  newPlacePopupSelector,
  newPlaceFormName,
  popupConfiguration,
  formConfiguration,
  formValidators[newPlaceFormName].clearForm,
  handleCardSubmit
);
newCardPopup.setEventListeners();
const user = new UserInfo(profileConfiguration);

// Обработчик отпраки формы
function handleSubmitProfile(data) {
  user.setUserInfo(data);
}

const profilePopup = new PopupWithForm(
  profilePopupSelector,
  profileFormName,
  popupConfiguration,
  formConfiguration,
  formValidators[profileFormName].clearForm,
  handleSubmitProfile,
  user.getUserInfo
);
profilePopup.setEventListeners();

const handleProfilePopupOpen = () => {
  profilePopup.open();
};
const handleNewCardPopupOpen = () => {
  newCardPopup.open();
};

cardsContainer.renderingAll();
addCardButton.addEventListener("click", handleNewCardPopupOpen);
profileEditButton.addEventListener("click", handleProfilePopupOpen);
