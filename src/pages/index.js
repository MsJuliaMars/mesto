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
} from "../utils/constants.js"; 

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";

import '../pages/index.css';

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
  formValidators[newPlaceFormName].resetValidation,
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
  formValidators[profileFormName].resetValidation,
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

cardsContainer.renderItems();
addCardButton.addEventListener("click", handleNewCardPopupOpen);
profileEditButton.addEventListener("click", handleProfilePopupOpen);
