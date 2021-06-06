const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assetshtmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkins = ['12:00', '13:00', '14:00'];
const checkouts = ['12:00', '13:00', '14:00'];

const mocksConfig = {
  AVATAR: {
    MIN: 1,
    MAX: 8,
  },
  PRICE: {
    MIN: 1000,
    MAX: 10000,
  },
  ROOMS: {
    MIN: 1,
    MAX: 7,
  },
  QUESTS: {
    MIN: 1,
    MAX: 14,
  },
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

const getRandomLat = getRandomPositiveFloat(mocksConfig.LAT.MIN, mocksConfig.LAT.MAX, 5);
const getRandomLng = getRandomPositiveFloat(mocksConfig.LNG.MIN, mocksConfig.LNG.MAX, 5);

// Создает новый объект с рандомными свойствами
const createOffer = () => ({
  avatar: `img/avatars/user0${getRandomPositiveInteger(mocksConfig.AVATAR.MIN, mocksConfig.AVATAR.MAX)}.png`,
  offer: {
    title: 'Добро пожаловать',
    address: `${getRandomLat}, ${getRandomLng}`,
    price: getRandomPositiveInteger(mocksConfig.PRICE.MIN, mocksConfig.PRICE.MAX),
    type: getRandomItems(types, getRandomPositiveInteger(1, 1)),
    rooms: getRandomPositiveInteger(mocksConfig.ROOMS.MIN, mocksConfig.ROOMS.MAX),
    guests: getRandomPositiveInteger(mocksConfig.QUESTS.MIN, mocksConfig.QUESTS.MAX),
    checkin: getRandomItems(checkins, getRandomPositiveInteger(1, 1)),
    checkout: getRandomItems(checkouts, getRandomPositiveInteger(1, 1)),
    features: getRandomItems(features, getRandomPositiveInteger(0, features.length)),
    description: 'Комфортабельное и уютное помещение',
    photos: getRandomItems(photos, getRandomPositiveInteger(0, features.length)),
  },
  location: {
    lat: getRandomLat,
    lng: getRandomLng,
  },
});

// Создает новые рандомные объекты
const createOffers = (count) => new Array(count).fill(null).map(() => createOffer());
createOffers(14);
