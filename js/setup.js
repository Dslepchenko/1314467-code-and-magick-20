'use strict';

(function () {
  var setup = document.querySelector('.setup');

  setup.classList.remove('hidden');

  var wizard = setup.querySelector('.wizard');

  var wizardCoat = wizard.querySelector('.wizard-coat');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var wizardEyes = wizard.querySelector('.wizard-eyes');

  window.colorize(wizardCoat);
  window.colorize(fireball);
  window.colorize(wizardEyes);

})();
