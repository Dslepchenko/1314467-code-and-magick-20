'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILY_NAMES = ['Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var NUMBER_PERSONS = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

function random(arr) {
  return Math.floor(Math.random() * arr.length);
}

function getPersons() {
  var persons = [];
  for (var i = 0; i < NUMBER_PERSONS; i++) {
    persons.push({
      name: WIZARD_NAMES[random(WIZARD_NAMES)] + ' ' + WIZARD_FAMILY_NAMES[random(WIZARD_FAMILY_NAMES)],
      coatColor: COAT_COLOR[random(COAT_COLOR)],
      eyesColor: EYES_COLOR[random(EYES_COLOR)]
    });
  }
  return persons;
}

var wizards = getPersons();

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
