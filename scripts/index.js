import { initialCards, config } from "./constants.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

const popupProfile = document.querySelector(".popup_type_profile");
const profileForm = popupProfile.querySelector(".popup__form");
const cardEditButton = document.querySelector(".profile__edit-button");
const buttonCloseProfile = popupProfile.querySelector(".popup__close-button");
const nameInput = document.getElementById("popup-name");
const jobInput = document.getElementById("popup-subtitle");

const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__subtitle");

const popups = Array.from(document.querySelectorAll(".popup"));

const popupCard = document.querySelector(".popup_type_card");
const addButton = document.querySelector(".profile__add-button");
const buttonCloseCard = popupCard.querySelector(".popup__close-button_card");
const elementSaveButton = popupCard.querySelector(".popup__save-button");
const addCardForm = popupCard.querySelector(".popup__form_card");
const placeInput = addCardForm.querySelector(".popup__text_place");
const linkInput = addCardForm.querySelector(".popup__text_link");

const cardItems = document.querySelector(".cards__items");

export const popupPicture = document.querySelector(".popup_type_picture");
const closePictureButton = document.querySelector(".popup__picture-close");
const fullscreenImage = document.querySelector(".popup__image");
const fullscreenCaption = document.querySelector(".popupp__icture-title");
const clonCard = document.getElementById("card__template");
const image = popupPicture.querySelector(".popup__image");
const imageTitle = popupPicture.querySelector(".popup__picture-title");
const closeButtons = document.querySelectorAll(".popup__close");

const inpNmae = document.querySelector(".popup__text_place");
const inpLink = document.querySelector(".popup__text_link");

// функция создания новой карточки
function createCard(inpNmae, inpLink) {
  const card = new Card(inpNmae, inpLink, ".card__template");
  const cardElement = card.generateCard();
  return cardElement;
}

//добавление новой карточки / отправка формы место
function addCard(evt) {
  evt.preventDefault(); // отмена стандартного поведения
  const card = createCard(inpNmae.value, inpLink.value);
  cardItems.prepend(card);

  evt.target.reset();
  closePopup(popupCard);
}

initialCards.forEach((initialCard) => {
  const card = createCard(initialCard.name, initialCard.link);
  cardItems.append(card);
});

export function openPopup(popup) {
  document.addEventListener("keydown", handleEscUp);
  popup.addEventListener("mousedown", handleOverlay);
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscUp);
  popup.removeEventListener("mousedown", handleOverlay);
}

// редактирование аватара пользователя
function openProfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile);
}
cardEditButton.addEventListener("click", openProfilePopup);

closeButtons.forEach((button) => {
  // находим 1 раз ближайший к крестику попап
  const popup = button.closest(".popup");
  // устанавливаем обработчик закрытия на крестик
  button.addEventListener("click", () => closePopup(popup));
});

const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(config, formElement);
  formValidators[formElement.name].enableValidation();
});

addButton.addEventListener("click", (evt) => {
  addCardForm.reset();
  formValidators[addCardForm.name].clearForm();
  openPopup(popupCard);
});

addCardForm.addEventListener("submit", addCard);
//все формы

function handleSubmitProfile(evt) {
  //обработчик формы на кнопку передача данных и закрытие popup
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
}
profileForm.addEventListener("submit", handleSubmitProfile);

//клик по overlay
const handleOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};

const ESC_KEY = "Escape";
const handleEscUp = (evt) => {
  if (evt.key === ESC_KEY) {
    closePopup(
      popups.find((popup) => popup.classList.contains("popup_opened"))
    );
  }
};
