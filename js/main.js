import { MocksConfig, createOffers } from './data.js';
import { blockForms, activeForms } from './form.js';
import { formValidate } from './validateInputs.js';
import './popup.js';

// Генерация объекта
createOffers(MocksConfig.OFFERS_COUNT);

// Включение валидации полей
formValidate();

// Неактивное состояние
blockForms();

// Активное состояние
activeForms();
