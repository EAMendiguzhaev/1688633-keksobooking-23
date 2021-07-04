import { KeyboardKey } from './common.js';

const ALERT_SHOW_TIME = 3000;

const getRandomPositiveInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (min, max, digits = 1) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

// Функция копирует, затем перемешивает массив в случайном порядке
const getShuffledItems = (items) => items.slice().sort(() => Math.random() - 0.5);

// Функция возвращает перемешенный массив до заданной длины массива
const getRandomItems = (items, count) => {
  const shuffledItems = getShuffledItems(items);
  return shuffledItems.slice(0, count);
};

const removeEmptyHtmlElements = (data) => {
  const elements = Array.from(data.children);
  elements.forEach((element) => {
    if (element.src === '' || (element.innerHTML === '' && element.tagName.toLowerCase() !== 'img')) {
      element.remove();
    }
  });
};

const showAlert = (message, color) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = color;

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const listenerCloneNodes = (node) => {
  const cloneNode = node.cloneNode(true);
  const buttonNode = cloneNode.querySelector('.error__button');
  document.body.insertAdjacentElement('beforeend', cloneNode);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === KeyboardKey.ESCAPE && cloneNode) {
      cloneNode.remove();
    }
  });

  document.addEventListener('click', (evt) => {
    if (evt.target === cloneNode) {
      cloneNode.remove();
    } else if (buttonNode) {
      cloneNode.remove();
    }
  });
};

export { getRandomPositiveInteger, getRandomPositiveFloat, getRandomItems, removeEmptyHtmlElements, showAlert, listenerCloneNodes };
