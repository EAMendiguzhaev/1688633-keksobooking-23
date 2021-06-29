import { toggleFormStatus } from './form.js';
import { initFormValidation } from './validate-inputs.js';
import './popup.js';
import './common.js';
import { initMap } from './map.js';

// Переключает состояние Form (true - активное, false - неактивное)
toggleFormStatus(false);

// Загрузка карты
initMap();

// Включение валидации полей
initFormValidation();
