import { adFormNode } from './form.js';
import { offerTypeToPrice } from './common.js';

const initFormValidation = () => {
  const priceNode = adFormNode.querySelector('#price');
  const typeNode = adFormNode.querySelector('#type');
  const roomNumberNode = document.querySelector('#room_number');
  const capacityNode = adFormNode.querySelector('#capacity');
  const roomsToCapacities = {
    1: [1],
    2: [1, 2],
    3: [1, 2, 3],
    100: [0],
  };
  const timeInNode = document.querySelector('#timein');
  const timeOutNode = document.querySelector('#timeout');

  adFormNode.addEventListener('change', (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      // Валидация типа жилья
      case typeNode.name: {
        const price = offerTypeToPrice[value];
        priceNode.min = price;
        priceNode.placeholder = price;
        break;
      }
      // Валидация цены комнат и гостей
      case roomNumberNode.name:
      case capacityNode.name: {
        const roomNumber = roomNumberNode.value;
        const capacityNumber = parseInt(capacityNode.value, 10);
        capacityNode.setCustomValidity(roomsToCapacities[roomNumber].includes(capacityNumber) ? '' : 'Количество гостей больше чем комнат');
        break;
      }
      // Валидация времени заеды и выезда
      case timeInNode.name:
      case timeOutNode.name: {
        timeInNode.value = value;
        timeOutNode.value = value;
        break;
      }
    }
  });
};

export { initFormValidation };
