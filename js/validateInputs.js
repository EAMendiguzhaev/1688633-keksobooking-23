import { adForm } from './form.js';

const formValidate = () => {
  const titleFormOffer = adForm.querySelector('#title');
  const priceFormOffer = adForm.querySelector('#price');
  const roomNumberSelect = document.querySelector('#room_number');
  const capacitySelect = adForm.querySelector('#capacity');
  const ROOM_CAPACITY = {
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
    100: [0],
  };

  document.addEventListener('change', (event) => {
    const target = event.target;

    if (target.id === 'title') {
      const MIN_TITLE_LENGTH = 30;
      const MAX_TITLE_LENGTH = 100;

      if (target.value.length < MIN_TITLE_LENGTH) {
        titleFormOffer.setCustomValidity(`Введите ещё ${MIN_TITLE_LENGTH - target.value.length} симв.`);
      } else if (target.value.length > MAX_TITLE_LENGTH) {
        titleFormOffer.setCustomValidity(`Необходимо удалить лишние ${target.value.length - MAX_TITLE_LENGTH} симв.`);
      } else {
        titleFormOffer.setCustomValidity('');
      }
    }

    if (target.id === 'price') {
      target.min = 1000;
      target.max = 1000000;

      if (target.validity.rangeUnderflow) {
        priceFormOffer.setCustomValidity('Жильё не может стоить меньше 1000 руб.');
      } else if (target.validity.rangeOverflow) {
        priceFormOffer.setCustomValidity('Жилье не может стоить больше 1 000 000 руб.');
      } else {
        priceFormOffer.setCustomValidity('');
      }
    }

    priceFormOffer.reportValidity();
    titleFormOffer.reportValidity();
  });

  const validateRoomsAndGuests = () => {
    const roomNumber = roomNumberSelect.value;
    const capacityNumber = parseInt(capacitySelect.value, 10);
    capacitySelect.setCustomValidity(ROOM_CAPACITY[roomNumber].includes(capacityNumber) ? '' : 'Количество гостей больше чем комнат');
  };

  validateRoomsAndGuests();
  roomNumberSelect.addEventListener('change', validateRoomsAndGuests);
  capacitySelect.addEventListener('change', validateRoomsAndGuests);
};

export { formValidate };
