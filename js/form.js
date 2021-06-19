const mapFilters = [...document.forms[0]];
const fieldsets = [...document.forms[1]];
const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

const getBlockForms = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('ad-form--disabled');

  fieldsets.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  mapFilters.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const getActiveForms = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('ad-form--disabled');

  fieldsets.forEach((element) => {
    element.removeAttribute('disabled');
  });

  mapFilters.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

export { getBlockForms, getActiveForms };
