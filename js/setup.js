'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILY_NAMES = ['Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_WIZARDS = 4;
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var MIN_NAME_LENGTH = 2;
var MAX_NAME_LENGTH = 25;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

function getRandomValueFromArr(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getWizards() {
  var persons = [];
  for (var i = 0; i < NUMBER_WIZARDS; i++) {
    persons.push({
      name: WIZARD_NAMES[getRandomValueFromArr(WIZARD_NAMES)] + ' ' + WIZARD_FAMILY_NAMES[getRandomValueFromArr(WIZARD_FAMILY_NAMES)],
      coatColor: COAT_COLOR[getRandomValueFromArr(COAT_COLOR)],
      eyesColor: EYES_COLOR[getRandomValueFromArr(EYES_COLOR)]
    });
  }
  return persons;
}

var wizards = getWizards();

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
}

function renderListOfWizard() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
}

renderListOfWizard();

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

var userNameInput = document.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function () {
  var valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) + ' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) + ' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var wizard = setup.querySelector('.wizard');

var wizardCoat = wizard.querySelector('.wizard-coat');
var fireball = setup.querySelector('.setup-fireball-wrap');
var wizardEyes = setup.querySelector('.wizard-eyes');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COAT_COLOR[Math.floor(COAT_COLOR.length * Math.random())];
});

fireball.addEventListener('click', function () {
  fireball.style.backgroundColor = FIREBALL_COLORS[Math.floor(FIREBALL_COLORS.length * Math.random())];
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYES_COLOR[Math.floor(EYES_COLOR.length * Math.random())];
});
