let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__edit-button");
let closePopup = popup.querySelector(".popup__close-button");
let formElement = document.querySelector(".popup__form");
let nameInput = document.getElementById("popup-name");
let jobInput = document.getElementById("popup-subtitle");
let nameProfile = document.querySelector(".profile__title");
let jobProfile = document.querySelector(".profile__subtitle");

function close() {
  popup.classList.remove("popup__opened");
}

function open() {
  popup.classList.add("popup__opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  close();
}

openPopup.addEventListener("click", open);
closePopup.addEventListener("click", close);
formElement.addEventListener("submit", formSubmitHandler);
