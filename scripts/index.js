const popupProfile = document.querySelector(".popup_type_profile");
const profileForm = popupProfile.querySelector('.popup__form');
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

const popupPicture = document.querySelector(".popup_type_picture");
const closePictureButton = document.querySelector(".popup__picture-close");
const fullscreenImage = document.querySelector(".popup__image");
const fullscreenCaption = document.querySelector(".popupp__icture-title");
const clonCard = document.getElementById("card__template");
const image = popupPicture.querySelector(".popup__image");
const imageTitle = popupPicture.querySelector(".popup__picture-title");

//функция создания новой карточки
function createCard(card) {
  const { name, link } = card;
  const cardElement = clonCard.content.firstElementChild.cloneNode(true);
  const elementPhoto = cardElement.querySelector(".card__image");

  cardElement.querySelector(".card__title").textContent = name; // передает значения из поля название
  elementPhoto.src = link; // передает значение из поля ссылка
  elementPhoto.alt = name;
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", handleLikeButtonClick); //слушатель на лайки
  cardElement.querySelector(".card__del-button").addEventListener("click", removeCard); //слушатель на корзину удаления

  elementPhoto.addEventListener("click", (evt) => {
    openPicture(name, link);
  });

  return cardElement;
}
function renderCard(cardElement) {
  cardItems.prepend(cardElement);
}

function openPicture(cardName, cardLink) {
  image.src = cardLink;
  image.alt = cardName;
  imageTitle.textContent = cardName;
  openPopup(popupPicture);
}

//добавление новой карточки
function addCard(evt) {
  evt.preventDefault();
  renderCard(createCard({ name: placeInput.value, link: linkInput.value }));

  evt.target.reset();
  closePopup(popupCard);
}

function removeCard(evt) {
  //удаление карточки
  const cardItem = evt.currentTarget.closest(".card").remove();
}

initialCards.reverse().forEach((card) => {
  renderCard(createCard(card));
});
function handleLikeButtonClick(evt) {
  evt.target.classList.toggle("card__like-button_active");
}

function openPopup(popup) {
  document.addEventListener("keydown", handleEscUp);
  popup.addEventListener("click", handleOverlay);
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscUp);
  popup.removeEventListener("click", handleOverlay);
}

// проверка кнопки на ее активность
function makeButtonInactive(elementSaveButton) {
  elementSaveButton.classList.add("popup__save-button_disabled");
  elementSaveButton.disabled = true;
}

// редактирование аватара пользователя
function openProfilePopup() {
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  openPopup(popupProfile);
}
cardEditButton.addEventListener("click", openProfilePopup);
buttonCloseProfile.addEventListener("click", (evt) => {
  closePopup(popupProfile);
});

addButton.addEventListener("click", (evt) => {
  addCardForm.reset();
  makeButtonInactive(elementSaveButton);
  openPopup(popupCard);
});

buttonCloseCard.addEventListener("click", (evt) => {
  closePopup(popupCard);
});

addCardForm.addEventListener("submit", addCard);
//все формы

 function handleSubmitProfile (evt) {
  //обработчик формы на кнопку передача данных и закрытие popup
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup(popupProfile);
};
profileForm.addEventListener('submit', handleSubmitProfile);

//клик по overlay
const handleOverlay = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
};

closePictureButton.addEventListener("click", (evt) => {
  closePopup(popupPicture);
});
const ESC_KEY = 'Escape';
const handleEscUp = (evt) => {
  if (evt.key === ESC_KEY) {
    closePopup(
      popups.find((popup) => 
     popup.classList.contains("popup_opened")
      )
    );
  }
};
