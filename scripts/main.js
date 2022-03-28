const initialCards = [
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
let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__edit-button");
let closePopup = popup.querySelector(".popup__close-button");
let formElement = document.querySelector(".popup__form");
let nameInput = document.getElementById("popup-name");
let jobInput = document.getElementById("popup-subtitle");
let nameProfile = document.querySelector(".profile__title");
let jobProfile = document.querySelector(".profile__subtitle");

const PopupCard = document.querySelector(".popup_card");
const addButton = document.querySelector(".profile__add-button");
const closePopupCard = document.querySelector(".popup__close-button_card");

const cardItems = document.querySelector(".card__items");
const popupForm = document.querySelector(".popup__form_card");

const PopupPicture = document.querySelector(".popup-picture");
const closePictureButton = document.querySelector(
  ".popup-picture__close-button"
);
const fullscreenImage = document.querySelector(".popup-picture__image");
const fullscreenCaption = document.querySelector(".popup-picture__title");

function renderCard(cardName, cardLink) {
  const card = document
    .querySelector(".card__template")
    .content.firstElementChild.cloneNode(true);
  const elementPhoto = card.querySelector(".card__image");

  card.querySelector(".card__title").textContent = cardName; // передает значения из поля название
  card.querySelector(".card__image").src = cardLink; // передает значение из поля ссылка
  card.querySelector(".card__like-button").addEventListener("click", like); //слушатель на лайки
  card.querySelector(".card__del-button").addEventListener("click", removeCard); //слушатель на корзину удаления

  cardItems.prepend(card);
  elementPhoto.addEventListener("click", (evt) => {
    openPicture(cardName, cardLink);
  });
}

function openPicture(cardName, cardLink) {
  PopupPicture.classList.add("popup-picture_opened");
  PopupPicture.querySelector(".popup-picture__image").src = cardLink;
  PopupPicture.querySelector(".popup-picture__title").textContent = cardName;
}

function addCard(evt) {
  evt.preventDefault();
  const newCardPlace =
    evt.currentTarget.querySelector(".popup__text_place").value;
  const newCardLink =
    evt.currentTarget.querySelector(".popup__text_link").value;
  renderCard(newCardPlace, newCardLink);

  evt.currentTarget.reset();
  closeCard();
}

function removeCard(evt) {
  //удаление карточки
  const cardItem = evt.currentTarget.closest(".card__item");
  cardItem.remove();
}

initialCards.forEach((card) => {
  renderCard(card.name, card.link);
});
function like(evt) {
  evt.target.classList.toggle("card__like-button_active");
}

function close() {
  popup.classList.remove("popup_opened");
}

function open() {
  popup.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}
function closeCard() {
  PopupCard.classList.remove("popup_opened");
}

function openCard() {
  PopupCard.classList.add("popup_opened");
}

function closePicture() {
  PopupPicture.classList.remove("popup-picture_opened");
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  close();
}

openPopup.addEventListener("click", open);
closePopup.addEventListener("click", close);

addButton.addEventListener("click", openCard);
closePopupCard.addEventListener("click", closeCard);

closePictureButton.addEventListener("click", closePicture);

formElement.addEventListener("submit", formSubmitHandler);
popupForm.addEventListener("submit", addCard);
