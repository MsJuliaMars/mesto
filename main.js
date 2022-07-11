(()=>{"use strict";var e={inputSelector:"popup__text",submitButtonSelector:"popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__text_type-error",errorClass:"popup__error_visible"},t={inputSelector:"popup__text",submitButtonSelector:"popup__save-button",formSelector:"popup__form"},n={activeModifier:"popup_opened",closeButtonSelector:"popup__close"},r="popup-profile";function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=i((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c(this,"_showInputError",(function(e){var t=e.inputElement,n=e.errorMessage,o=r._form.querySelector(".".concat(t.id,"-error"));o.textContent=n,o.classList.add(r._errorClass),t.classList.add(r._inputErrorClass)})),c(this,"_hideInputError",(function(e){var t=r._form.querySelector(".".concat(e.id,"-error"));t.classList.remove(r._errorClass),e.classList.remove(r._inputErrorClass),t.textContent=""})),c(this,"_checkInputValidity",(function(e){if(e.validity.valid)r._hideInputError(e);else{var t=e.validationMessage;r._showInputError({inputElement:e,errorMessage:t})}})),c(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),c(this,"_toggleButtonState",(function(e,t){r._hasInvalidInput(e)?(t.classList.add(r._inactiveButtonClass),t.disabled=!0):(t.classList.remove(r._inactiveButtonClass),t.disabled=!1)})),c(this,"enableValidation",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState(r._inputList,r._saveButton)}))})),r._toggleButtonState(r._inputList,r._saveButton)})),c(this,"resetValidation",(function(){r._inputList.forEach((function(e){r._hideInputError(e)})),r._toggleButtonState(r._inputList,r._saveButton)})),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(".".concat(this._inputSelector))),this._saveButton=this._form.querySelector(".".concat(this._submitButtonSelector))}));const l=a;function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const p=function(){function e(t,n,r,o){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleLikeButtonClick",(function(){i._likeButton.classList.toggle("card__like-button_active")})),s(this,"_handleImageClick",(function(){i._handleCardClick({name:i._name,link:i._link})})),s(this,"_removeCard",(function(){i._element.remove()})),this._name=t,this._link=n,this._cardSelector=r,this._handleCardClick=o}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._element.querySelector(".card__title").textContent=this._name,this._cardImage=this._element.querySelector(".card__image"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._delButton=this._element.querySelector(".card__del-button"),this._likeButton=this._element.querySelector(".card__like-button"),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){this._cardImage.addEventListener("click",this._handleImageClick),this._likeButton.addEventListener("click",this._handleLikeButtonClick),this._delButton.addEventListener("click",this._removeCard)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_handleEscClose",(function(e){"Escape"===e.key&&r.close()})),_(this,"_handleCloseButClick",(function(){r.close()})),_(this,"_handleCloseOverlayClick",(function(e){e.target===e.currentTarget&&r.close()})),this._popupSelector=t,this._activeModifier=n.activeModifier,this._closeButtonSelector=n.closeButtonSelector,this._popup=document.querySelector(".".concat(this._popupSelector)),this._popupCloseButton=this._popup.querySelector(".".concat(this._closeButtonSelector))}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add(this._activeModifier)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove(this._activeModifier)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleCloseOverlayClick),this._popupCloseButton.addEventListener("click",this._handleCloseButClick)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=v(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function v(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function S(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function c(e,t,n,r,o,a){var l,u=r.inputSelector,s=r.submitButtonSelector,p=r.formSelector,f=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return y(this,c),w(k(l=i.call(this,e,n)),"_handleSubmit",(function(e){e.preventDefault(),l._submitCallBack(l._getInputValues()),l.close()})),l._submitCallBack=a,l._formName=t,l._inputSelector=u,l._submitButtonSelector=s,l._formSelector=p,l._getCallback=f,l._clearErrorCallback=o,l._formElement=document.forms[l._formName],l._inputList=Array.from(l._formElement.querySelectorAll(".".concat(l._inputSelector))),l._submitButton=l._formElement.querySelector(".".concat(l._submitButtonSelector)),l}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){e[t.id.slice(6)]=t.value})),e}},{key:"_setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.id.slice(6)]}))}},{key:"setEventListeners",value:function(){b(E(c.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleSubmit)}},{key:"open",value:function(){this._getCallback?this._setInputValues(this._getCallback()):this._formElement.reset(),this._clearErrorCallback(),b(E(c.prototype),"open",this).call(this)}},{key:"close",value:function(){b(E(c.prototype),"close",this).call(this),this._formElement.reset()}}])&&m(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(d);function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._containerSelector=n,this._container=document.querySelector(".".concat(this._containerSelector)),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(this._renderer(e.name,e.link))}},{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e.addItem(t)}))}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n,r,o=this,i=t.userNameSelector,c=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){return{title:o._userNameElement.textContent,job:o._jobElement.textContent}},(n="getUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._userNameSelector=i,this._jobSelector=c,this._userNameElement=document.querySelector(".".concat(this._userNameSelector)),this._jobElement=document.querySelector(".".concat(this._jobSelector))}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._userNameElement.textContent=(null==e?void 0:e.title)||"",this._jobElement.textContent=(null==e?void 0:e.job)||""}}])&&B(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=N(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return V(e)}function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(o){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function c(e,t,n){var r,o=n.imageSelector,a=n.captionSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,e,t))._imageSelector=o,r._captionSelector=a,r._imageElement=document.querySelector(".".concat(r._imageSelector)),r._captionElement=document.querySelector(".".concat(r._captionSelector)),r.open=r.open.bind(V(r)),r}return t=c,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._imageElement.src=n,this._imageElement.alt=t,this._captionElement.textContent=t,q(N(c.prototype),"open",this).call(this)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(d),A=document.querySelector(".profile__edit-button"),D=document.querySelector(".profile__add-button"),U=new M("popup_type_picture",n,{imageSelector:"popup__image",captionSelector:"popup__picture-title"});U.setEventListeners();var z=new O({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].reverse(),renderer:function(e,t){return new p(e,t,".card__template",U.open).generateCard()}},"cards__items"),F={};Array.from(document.forms).forEach((function(t){F[t.name]=new l(e,t),F[t.name].enableValidation()}));var G=new C("popup_type_card","popup-mesto",n,t,F["popup-mesto"].resetValidation,(function(e){z.addItem(e)}));G.setEventListeners();var H=new L({userNameSelector:"profile__title",jobSelector:"profile__subtitle"}),J=new C("popup_type_profile",r,n,t,F[r].resetValidation,(function(e){H.setUserInfo(e)}),H.getUserInfo);J.setEventListeners(),z.renderItems(),D.addEventListener("click",(function(){G.open()})),A.addEventListener("click",(function(){J.open()}))})();