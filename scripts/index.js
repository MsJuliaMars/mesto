const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = popup.querySelector(".popup__close-button");
const formElement = document.querySelector(".popup__form");
const nameInput = document.getElementById("popup-name");
const jobInput = document.getElementById("popup-subtitle");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__subtitle");

const popupCard = document.querySelector(".popup_type_card");
const addButton = document.querySelector(".profile__add-button");
const closeButtonCard = document.querySelector(".popup__close-button_card");

const cardItems = document.querySelector(".cards__items");
const popupForm = document.querySelector(".popup__form_card");
const newCardPlaceOne = document.querySelector(".popup__text_place");
const newCardLinkOne = document.querySelector(".popup__text_link");

const popupPicture = document.querySelector(".popup_type_picture");
const closePictureButton = document.querySelector(".popup__picture-close");
const fullscreenImage = document.querySelector(".popup__image");
const fullscreenCaption = document.querySelector(".popupp__icture-title");
const clonCard = document.getElementById("card__template");
const image = popupPicture.querySelector(".popup__image");
const imageTitle = popupPicture.querySelector(".popup__picture-title");

function createCard(cardName, cardLink) {
  const card = clonCard.content.firstElementChild.cloneNode(true);
  const elementPhoto = card.querySelector(".card__image");

  card.querySelector(".card__title").textContent = cardName; // передает значения из поля название
  card.querySelector(".card__image").src = cardLink; // передает значение из поля ссылка
  card.querySelector(".card__image").alt = cardName;
  card.querySelector(".card__like-button").addEventListener("click", handleLikeButtonClick); //слушатель на лайки
  card.querySelector(".card__del-button").addEventListener("click", removeCard); //слушатель на корзину удаления

  elementPhoto.addEventListener("click", (evt) => {
    openPicture(cardName, cardLink);
  });

  return card;
}
function renderCard(cardName, cardLink, newCard) {
  newCard = createCard(cardName, cardLink);
  cardItems.prepend(newCard);
}

function openPicture(cardName, cardLink) {
  togglePopup(popupPicture);
  image.src = cardLink;
  imageTitle.textContent = cardName;
}

function addCard(evt) {
  evt.preventDefault();
  const newCardPlace = newCardPlaceOne.value;
  const newCardLink = newCardLinkOne.value;
  renderCard(newCardPlace, newCardLink);

  evt.currentTarget.reset();
  togglePopup(popupCard);
}

function removeCard(evt) {
  //удаление карточки
  const cardItem = evt.currentTarget.closest(".card").remove();
}

initialCards.forEach((card) => {
  renderCard(card.name, card.link);
});
function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("card__like-button_active");
}

function togglePopup(elementDom) {
  elementDom.classList.toggle("popup_opened");
}

function openProfilePopup() {
  togglePopup(popup);
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function sendFormProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  togglePopup(popup);
}

editButton.addEventListener("click", openProfilePopup);
closeButton.addEventListener("click", (evt) => {
  togglePopup(popup);
});

addButton.addEventListener("click", (evt) => {
  togglePopup(popupCard);
});
closeButtonCard.addEventListener("click", (evt) => {
  togglePopup(popupCard);
});

closePictureButton.addEventListener("click", (evt) => {
  togglePopup(popupPicture);
});

formElement.addEventListener("submit", sendFormProfile);
popupForm.addEventListener("submit", addCard);
