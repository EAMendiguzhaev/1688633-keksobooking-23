import { MocksConfig, createOffers } from './data.js';
import { blockForms, activeForms } from './form.js';
import './popup.js';

createOffers(MocksConfig.OFFERS_COUNT);
// console.log(createOffers(MocksConfig.OFFERS_COUNT));

// Активное состояние
activeForms();

// Неактивное состояние
blockForms();
