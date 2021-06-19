import { MocksConfig, createOffers } from './data.js';
import { getBlockForms, getActiveForms } from './form.js';
import './popup.js';

createOffers(MocksConfig.OFFERS_COUNT);
// console.log(createOffers(MocksConfig.OFFERS_COUNT));

// Активное состояние
getActiveForms();

// Неактивное состояние
getBlockForms();
