import {
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
  editAvatarPopupSelector,
  editAvatarFormName,
  confirmPopupSelector,
  confirmButtonConfig,
  saveButtonConfig,
  newCardButtonConfig,
} from "../utils/constants.js";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import "../pages/index.css";
import Api from "../components/Api.js";

const profileEditButton = document.querySelector(".profile__edit-button");
const cardButtonAdd = document.querySelector(".profile__add-button");
const profileAvatarButton = document.querySelector(".profile__avarat-btn");

const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-45",
  headers: {
    authorization: "715ee43e-9fed-4d9c-98b6-32ed8625bba1",
    "Content-Type": "application/json",
  },
};
//API
const api = new Api({ url: options.url, headers: options.headers });

const viewPopup = new PopupWithImage(
  imagePopupSelector,
  popupConfiguration,
  viewPopupConfig
);
viewPopup.setEventListeners();

function handleLikeCard(cardId, isLiked, setLikesCallback) {
  api
    .toggleLike(cardId, isLiked)
    .then(({ likes }) => setLikesCallback(likes))
    .catch(console.log);
}

function handleDeleteCard(
  id,
  { toggleBtnCallback, removeCardCallback, closeConfirmCallback }
) {
  toggleBtnCallback(true);
  api
    .deleteCard(id)
    .then(() => {
      removeCardCallback();
      closeConfirmCallback();
    })
    .catch(console.log)
    .finally(() => {
      toggleBtnCallback(false);
    });
}

const popupConfirmDelete = new PopupWithConfirmation(
  confirmPopupSelector,
  popupConfiguration,
  formConfiguration.formSelector,
  formConfiguration.submitButtonSelector,
  handleDeleteCard,
  confirmButtonConfig
);
popupConfirmDelete.setEventListeners();

const newCardCallbacks = {
  handleOpenCallback: viewPopup.open,
  handleLikeCallback: handleLikeCard,
  handleDeleteCallback: popupConfirmDelete.open,
};
// функция создания новой карточки
function createCard(item) {
  const card = new Card(item, ".card__template", user.id, newCardCallbacks);
  const cardElement = card.generateCard();
  return cardElement;
}

//Создаем новый экземпляр класса Section
const cardsContainer = new Section(
  {
    renderer: createCard,
  },
  cardsContainerSelector
);

// обработчик добавление новой карточки / отправка формы место
function handleCardSubmit(item, toggleBtnCallback, closePopupCallback) {
  toggleBtnCallback(true);
  api
    .setCard(item)
    .then((card) => {
      cardsContainer.addItem(card);
      closePopupCallback();
    })
    .catch(console.log)
    .finally(() => {
      toggleBtnCallback(false);
    });
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
  handleCardSubmit,
  newCardButtonConfig
);
newCardPopup.setEventListeners();

const user = new UserInfo(profileConfiguration);

// Изменение аватара пользователя
const popupEditAvatar = new PopupWithForm(
  editAvatarPopupSelector,
  editAvatarFormName,
  popupConfiguration,
  formConfiguration,
  formValidators[editAvatarFormName].resetValidation,
  handleAvatarSubmit,
  saveButtonConfig
);
popupEditAvatar.setEventListeners();

// Обработчик отправки формы (редактирование аватара)
function handleAvatarSubmit(data, toggleBtnCallback, closePopupCallback) {
  toggleBtnCallback(true);
  api
    .editAvatar(data.links)
    .then((res) => {
      user.setUserInfo(res);
      closePopupCallback();
    })
    .catch(console.log)
    .finally(() => toggleBtnCallback(false));
}

// Обработчик отпраки формы (редактирования профиля)
function handleSubmitProfile(data, toggleBtnCallback, closePopupCallback) {
  toggleBtnCallback(true);
  api
    .editProfile(data)
    .then((data) => {
      user.setUserInfo(data);
      closePopupCallback();
    })
    .catch(console.log)
    .finally(() => toggleBtnCallback(false));
}
// Редактирование профиля
const profilePopup = new PopupWithForm(
  profilePopupSelector,
  profileFormName,
  popupConfiguration,
  formConfiguration,
  formValidators[profileFormName].resetValidation,
  handleSubmitProfile,
  saveButtonConfig,
  user.getUserInfo
);
profilePopup.setEventListeners();

const handleProfilePopupOpen = () => {
  profilePopup.open();
};

const handleNewCardPopupOpen = () => {
  newCardPopup.open();
};

const handleEditAvaPopupOpen = () => {
  popupEditAvatar.open();
};

cardButtonAdd.addEventListener("click", handleNewCardPopupOpen);
profileEditButton.addEventListener("click", handleProfilePopupOpen);
profileAvatarButton.addEventListener("click", handleEditAvaPopupOpen);

Promise.all([api.uploadingUserInf(), api.downloadingCards()]).then(
  ([userNew, cards]) => {
    user.setUserInfo(userNew);
    cardsContainer.renderItems(cards.reverse());
  }
);
