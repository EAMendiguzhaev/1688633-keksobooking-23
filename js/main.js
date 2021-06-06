"use strict";

const features = [
  "wifi",
  "dishwasher",
  "parking",
  "washer",
  "elevator",
  "conditioner",
];
const photos = [
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg",
  "https://assetshtmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg",
  "https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg",
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

// Функция копирует, затем перемешивает массив в случайном порядке
const getShuffledItems = (items) => {
  return items.slice().sort(() => {
    return Math.random() - 0.5;
  });
};

// Функция возвращает перемешенный массив до заданной длины массива
const getRandomItems = (items, count) => {
  const shuffledItems = getShuffledItems(items);
  return shuffledItems.slice(0, count);
};

const getRandomLat = getRandomPositiveFloat(35.65, 35.7, 5);
const getRandomLng = getRandomPositiveFloat(35.65, 35.7, 5);

// Создает новый объект с рандомными свойствами
const createAuthor = () => {
  return {
    avatar: `img/avatars/user0${getRandomPositiveInteger(1, 8)}.png`,
    offer: {
      title: "Добро пожаловать",
      address: `${getRandomLat}, ${getRandomLng}`,
      price: getRandomPositiveInteger(1000, 10000),
      type: "house",
      rooms: getRandomPositiveInteger(1, 7),
      guests: getRandomPositiveInteger(1, 14),
      checkout: "14:00",
      features: getRandomItems(
        features,
        getRandomPositiveInteger(0, features.length)
      ),
      description: "Комфортабельное и уютное помещение",
      photos: getRandomItems(
        photos,
        getRandomPositiveInteger(0, features.length)
      ),
    },
    location: {
      lat: getRandomLat,
      lng: getRandomLng,
    },
  };
};

// Создает новые рандомные объекты
const createAuthors = (count) => {
  return new Array(count).fill(null).map(() => createAuthor());
};

console.log(createAuthors(14));
