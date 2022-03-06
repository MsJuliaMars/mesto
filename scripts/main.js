let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit-button');
let closePopup = popup.querySelector('.popup__close-button');
let savePopup = popup.querySelector('.popup__save-button');

function togglePopup() {
    popup.classList.toggle('popup__opened');
};
openPopup.addEventListener('click', togglePopup);
closePopup.addEventListener('click', togglePopup);


let formElement = document.querySelector('.popup__form');

let nameInput = document.querySelector('.popup__name'); 
let jobInput = document.querySelector('.popup__subtitle'); 
let nameProfile = document.querySelector('.profile__title');
let jobProfile = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

}
formElement.addEventListener('submit', formSubmitHandler); 
savePopup.addEventListener('click', togglePopup);

let like = document.querySelector('.card__like-button');
function showLikeClick() {
    like.classList.toggle('active');
  }

like.addEventListener('click', showLikeClick);

