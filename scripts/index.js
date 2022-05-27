const popups = document.querySelector(".popup");
const cardEditButton = document.querySelector(".profile__edit-button");
const elementCloseButtons = popups.querySelector(".popup__close-button");
const nameInput = document.getElementById("popup-name");
const jobInput = document.getElementById("popup-subtitle");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__subtitle");
const elementSaveButtons = document.querySelector(".popup__save-button");

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

/* добавлении формы и ее полей*/
const forms = document.forms.popup;
const fullName = forms.elements.name;
const sublitle = forms.elements.sublitle;
const place = forms.elements.place;
const imageLink = forms.elements.image;

const formElements = document.querySelector(".popup__form");
const formInput = formElements.querySelector(".popup__text");
const formError = formElements.querySelector(`.${formInput.id}-error`);

//функция создания новой карточки
function createCard(cardName, cardLink) {
  const card = clonCard.content.firstElementChild.cloneNode(true);
  const elementPhoto = card.querySelector(".card__image");

  card.querySelector(".card__title").textContent = cardName; // передает значения из поля название
  elementPhoto.src = cardLink; // передает значение из поля ссылка
  elementPhoto.alt = cardName;
  card
    .querySelector(".card__like-button")
    .addEventListener("click", handleLikeButtonClick); //слушатель на лайки
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
  openPopup(popupPicture);
  image.src = cardLink;
  image.alt = cardName;
  imageTitle.textContent = cardName;
  closeAllPopup(popupPicture);
}

//добавление новой карточки
function addCard(evt) {
  evt.preventDefault();
  const newCardPlace = newCardPlaceOne.value;
  const newCardLink = newCardLinkOne.value;
  renderCard(newCardPlace, newCardLink);

  evt.currentTarget.reset();
  closePopup(popupCard);
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

function openPopup(popups) {
  popups.classList.add("popup_opened");
}
function closePopup(popups) {
  popups.classList.remove("popup_opened");
}

// редактирование аватара пользователя
function openProfilePopup() {
  fullName.value = nameProfile.textContent;
  sublitle.value = jobProfile.textContent;
  closeAllPopup(popups);
  
}
cardEditButton.addEventListener("click", openProfilePopup);
elementCloseButtons.addEventListener("click", (evt) => {
  closePopup(popups);
});

addButton.addEventListener("click", (evt) => {
  openPopup(popupCard);
});
closeButtonCard.addEventListener("click", (evt) => {
  closePopup(popupCard);
});

closePictureButton.addEventListener("click", (evt) => {
  closePopup(popupPicture);
});

popupForm.addEventListener("submit", addCard);
//все формы

forms.addEventListener("submit", function (evt) {
  //обработчик формы на кнопку передача данных и закрытие popup
  evt.preventDefault();

  nameProfile.textContent = fullName.value;
  jobProfile.textContent = sublitle.value;

  closePopup(popups);
});

// слушатель закрытия popup по overlay
const closePopupOverlay = (popup) => {
  closePopup(popup);
  popup.removeEventListener("click", handleOverlay);
};
//клик по overlay
const handleOverlay = (evt) => {
  const activePopup = document.querySelector(".popup_opened");
  if (
    evt.target.classList.contains("popup_overlay") ||
    evt.target.classList.contains("popup__picture-close") ||
    evt.target.classList.contains("popup_type_card") ||
    evt.target.classList.contains("popup__close-button_card") ||
    evt.target.classList.contains("popup")
  ) {
    closePopupOverlay(activePopup);
  }
};
//слушатель закрытия popup по esc
const closePopupEsc = (popup) => {
  popup.removeEventListener("keydown", handleEscUp);
  closePopup(popup);
};
const handleEscUp = (evt) => {
  const activePopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    closePopupEsc(activePopup);
  }
};

function closeAllPopup(popup) {
  openPopup(popup);
  document.addEventListener("keydown", handleEscUp);
  popup.addEventListener("click", handleOverlay);
}
