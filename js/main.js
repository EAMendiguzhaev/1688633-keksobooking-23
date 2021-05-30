// Функция возвращающая случайное целое число из переданного диапазона включительно.

const randomInteger = function (min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
randomInteger(0, 100);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getFractionalNumber = function (min, max, fixed) {
  const randomNumber = Math.random() * (max + 1 - min) + min;
  return Number(randomNumber.toFixed(fixed));
};

getFractionalNumber(0, 100.777, 2);
