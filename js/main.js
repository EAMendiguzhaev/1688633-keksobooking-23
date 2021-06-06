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
  TYPE: ['palace', 'flat', 'house', 'bungalow', 'hotel'],
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
    'https://assetshtmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
  LAT: {
    MIN: 35.65,
    MAX: 35.7,
  },
  LNG: {
    MIN: 35.65,
    MAX: 35.7,
  },
};

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

const getRandomLat = getRandomPositiveFloat(MocksConfig.LAT.MIN, MocksConfig.LAT.MAX, 5);
const getRandomLng = getRandomPositiveFloat(MocksConfig.LNG.MIN, MocksConfig.LNG.MAX, 5);

// Создает новый объект с рандомными свойствами
const createOffer = () => ({
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
    description: 'Комфортабельное и уютное помещение',
    photos: getRandomItems(MocksConfig.PHOTOS, getRandomPositiveInteger(1, MocksConfig.PHOTOS.length)),
  },
  location: {
    lat: getRandomLat,
    lng: getRandomLng,
  },
});

// Создает новые рандомные объекты
const createOffers = (count) => new Array(count).fill(null).map(() => createOffer());
createOffers(MocksConfig.OFFERS_COUNT);
