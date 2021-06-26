import { MocksConfig, createOffers } from './data.js';
import { toggleFormStatus } from './form.js';
import { initFormValidation } from './validate-inputs.js';
import './popup.js';
import './common.js';

// Генерация объекта
createOffers(MocksConfig.OFFERS_COUNT);

// Переключает состояние Form (true - активное, false - неактивное)
toggleFormStatus(true);

// Включение валидации полей
initFormValidation();
