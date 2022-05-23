const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const closeButton = popup.querySelector(".popup__close-button");
const nameInput = document.getElementById("popup-name");
const jobInput = document.getElementById("popup-subtitle");
const nameProfile = document.querySelector(".profile__title");
const jobProfile = document.querySelector(".profile__subtitle");
const saveButton = document.querySelector(".popup__save-button");

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
const form = document.forms.popup;
const fullName = form.elements.name;
const sublitle = form.elements.sublitle;
const place = form.elements.place;
const imageLink = form.elements.image;

const formElement = document.querySelector(".popup__form");
const formInput = formElement.querySelector(".popup__text");
const formError = formElement.querySelector(`.${formInput.id}-error`);

//функция создания новой карточки
function createCard(cardName, cardLink) {
  const card = clonCard.content.firstElementChild.cloneNode(true);
  const elementPhoto = card.querySelector(".card__image");

  card.querySelector(".card__title").textContent = cardName; // передает значения из поля название
  card.querySelector(".card__image").src = cardLink; // передает значение из поля ссылка
  card.querySelector(".card__image").alt = cardName;
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
  togglePopup(popupPicture);
  image.src = cardLink;
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

// редактирование аватара пользователя
function openProfilePopup() {
  togglePopup(popup);
  fullName.value = nameProfile.textContent;
  sublitle.value = jobProfile.textContent;
  closeAllPopup(popup);
}
editButton.addEventListener("click", openProfilePopup);
closeButton.addEventListener("click", (evt) => {
  togglePopup(popup);
});

addButton.addEventListener("click", (evt) => {
  togglePopup(popupCard);
  closeAllPopup(popupCard);
});
closeButtonCard.addEventListener("click", (evt) => {
  togglePopup(popupCard);
});

closePictureButton.addEventListener("click", (evt) => {
  togglePopup(popupPicture);
});

popupForm.addEventListener("submit", addCard);
//все формы

form.addEventListener("submit", function (evt) {
  //обработчик формы на кнопку передача данных и закрытие popup
  evt.preventDefault();

  nameProfile.textContent = fullName.value;
  jobProfile.textContent = sublitle.value;

  togglePopup(popup);
});

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   // inputElement.classList.add('popup__text_type-error');
//   errorElement.textContent = errorMessage;
  
//   errorElement.classList.add('popup__text_type-error');
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   // inputElement.classList.remove('popup__text_type-error');
//   errorElement.classList.remove('popup__text_type-error');
//   errorElement.textContent = '';
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   })
// }; 

// const toggleButtonState = (inputList, saveButton) => {
//   // Если есть хотя бы один невалидный инпут
//   if (hasInvalidInput(inputList)) {
//     // сделай кнопку неактивной
//     saveButton.classList.add('popup__save-button_disabled');
//     saveButton.setAttribute("disabled", true);
//   } else {
//     // иначе сделай кнопку активной
//     saveButton.classList.remove('popup__save-button_disabled');
//     saveButton.removeAttribute("disabled");
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.popup__text'));
//   const saveButton = formElement.querySelector('.popup__save-button');
//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener('input', function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, saveButton);
//     });
//   });
// };
// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.popup__form'));
//   formList.forEach((formElement) => {
//     formElement.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//      });
//   setEventListeners(formElement);
//   });
// };
// enableValidation();

// слушатель закрытия popup по overlay
const closePopupOverlay = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener("click", handleOverlay);
};
//клик по overlay
const handleOverlay = (evt) => {
  const activePopup = document.querySelector(".popup_opened");
  if (
    evt.target.classList.contains("popup_overlay") ||
    evt.target.classList.contains("popup__picture-close") ||
    evt.target.classList.contains("popup_type_card") ||
    evt.target.classList.contains("popup__close-button_card") ||
    evt.target.classList.contains("popup") ||
    evt.target.classList.contains("popup__close-button")
  ) {
    closePopupOverlay(activePopup);
  }
};
//слушатель закрытия popup по esc
const closePopupEsc = (popup) => {
  document.removeEventListener("keydown", handleEscUp);
  popup.classList.remove("popup_opened");
};
const handleEscUp = (evt) => {
  const activePopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    closePopupEsc(activePopup);
  }
};

function closeAllPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscUp);
  document.addEventListener("click", handleOverlay);
}

// включение валидации вызовом enableValidation
// все настройки передаются при вызове

// enableValidation({
//   formInput: ".popup__form",
//   inputSelector: ".popup__text",
//   saveButton: ".popup__save-button",
//   formError: `.${formInput.id}-error`,
// });
