import { getRandomPositiveInteger, getRandomPositiveFloat, getRandomItems } from './util.js';
import { offerType } from './common.js';

const MocksConfig = {
  OFFERS_COUNT: 14,
  AVATAR: {
    MIN: 1,
    MAX: 8,
  },
  PRICE: {
    MIN: 1000,
    MAX: 10000,
  },
  TYPE: Object.values(offerType),
  ROOMS: {
    MIN: 1,
    MAX: 7,
  },
  QUESTS: {
    MIN: 1,
    MAX: 14,
  },
  CHECKIN: ['12:00', '13:00', '14:00'],
  CHECKOUT: ['12:00', '13:00', '14:00'],
  FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
  PHOTOS: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
  LAT: {
    MIN: 35.65,
    MAX: 35.7,
  },
  LNG: {
    MIN: 139.7,
    MAX: 139.8,
  },
};

// Создает новый объект с рандомными свойствами
const createOffer = () => {
  const getRandomLat = getRandomPositiveFloat(MocksConfig.LAT.MIN, MocksConfig.LAT.MAX, 5);
  const getRandomLng = getRandomPositiveFloat(MocksConfig.LNG.MIN, MocksConfig.LNG.MAX, 5);

  return {
    avatar: `img/avatars/user0${getRandomPositiveInteger(MocksConfig.AVATAR.MIN, MocksConfig.AVATAR.MAX)}.png`,
    offer: {
      title: 'Добро пожаловать',
      address: `${getRandomLat}, ${getRandomLng}`,
      price: getRandomPositiveInteger(MocksConfig.PRICE.MIN, MocksConfig.PRICE.MAX),
      type: getRandomItems(MocksConfig.TYPE, getRandomPositiveInteger(1, 1)),
      rooms: getRandomPositiveInteger(MocksConfig.ROOMS.MIN, MocksConfig.ROOMS.MAX),
      guests: getRandomPositiveInteger(MocksConfig.QUESTS.MIN, MocksConfig.QUESTS.MAX),
      checkin: getRandomItems(MocksConfig.CHECKIN, getRandomPositiveInteger(1, 1)),
      checkout: getRandomItems(MocksConfig.CHECKOUT, getRandomPositiveInteger(1, 1)),
      features: getRandomItems(MocksConfig.FEATURES, getRandomPositiveInteger(0, MocksConfig.FEATURES.length)),
      description: 'Комфортабельное и уютное жилье в центре Токио.',
      photos: getRandomItems(MocksConfig.PHOTOS, getRandomPositiveInteger(1, MocksConfig.PHOTOS.length)),
    },
    location: {
      lat: getRandomLat,
      lng: getRandomLng,
    },
  };
};

// Создает новые рандомные объекты
const createOffers = (count) => new Array(count).fill(null).map(() => createOffer());

export { MocksConfig, createOffers, createOffer };
