let popup = document.querySelector(".popup");
let openPopup = document.querySelector(".profile__edit-button");
let closePopup = popup.querySelector(".popup__close-button");
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__text_name");
let jobInput = document.querySelector(".popup__text_subtitle");
let nameProfile = document.querySelector(".profile__title");
let jobProfile = document.querySelector(".profile__subtitle");
let saveButton = document.querySelector(".popup__save-button");

openPopup.addEventListener("click", function () {
  popup.classList.add("popup__opened");
});
closePopup.addEventListener("click", function () {
  popup.classList.remove("popup__opened");
});
saveButton.addEventListener("click", function () {
  popup.classList.remove("popup__opened");
});

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
}

formElement.addEventListener("submit", formSubmitHandler);
