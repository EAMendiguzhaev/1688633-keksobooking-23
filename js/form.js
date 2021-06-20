const adForm = document.querySelector('.ad-form');
const mapForm = document.querySelector('.map__filters');

const arrAdForm = [...adForm];
const arrMapForm = [...mapForm];

const blockForms = () => {
  adForm.classList.add('ad-form--disabled');
  mapForm.classList.add('ad-form--disabled');

  arrAdForm.forEach((element) => {
    element.disabled = true;
  });

  arrMapForm.forEach((element) => {
    element.disabled = true;
  });
};

const activeForms = () => {
  adForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('ad-form--disabled');

  arrAdForm.forEach((element) => {
    element.disabled = false;
  });

  arrMapForm.forEach((element) => {
    element.disabled = false;
  });
};

export { blockForms, activeForms };
