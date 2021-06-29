import { removeEmptyHtmlElements } from './util.js';
import { offerType } from './common.js';

const popup = document.querySelector('#card').content.querySelector('.popup');
const popupOfferPhoto = popup.querySelector('.popup__photo');

const offerTypeToReadable = {
  [offerType.BUNGALOW]: 'Бунгало',
  [offerType.FLAT]: 'Квартира',
  [offerType.HOTEL]: 'Отель',
  [offerType.HOUSE]: 'Дом',
  [offerType.PALACE]: 'Дворец',
};

const getOfferAddFeatures = (features) => {
  const fragment = document.createDocumentFragment();

  features.forEach((item) => {
    const li = document.createElement('li');
    li.className = `popup__feature popup__feature--${item}`;
    fragment.append(li);
  });

  return fragment;
};

const getOfferAddPhotos = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((item) => {
    const image = popupOfferPhoto.cloneNode(true);
    image.src = item;
    fragment.append(image);
  });

  return fragment;
};

const renderPopup = ({ avatar, offer }) => {
  const popupElement = popup.cloneNode(true);
  popupElement.querySelector('.popup__title').textContent = offer.title;
  popupElement.querySelector('.popup__text--address').textContent = offer.address;
  popupElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupElement.querySelector('.popup__type').textContent = offerTypeToReadable[offer.type];
  popupElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupElement.querySelector('.popup__features').innerHTML = '';
  popupElement.querySelector('.popup__features').append(getOfferAddFeatures(offer.features));
  popupElement.querySelector('.popup__description').textContent = offer.description;
  popupElement.querySelector('.popup__photos').innerHTML = '';
  popupElement.querySelector('.popup__photos').append(getOfferAddPhotos(offer.photos));
  popupElement.querySelector('.popup__avatar').src = avatar;

  removeEmptyHtmlElements(popupElement);
  return popupElement;
};

export { renderPopup };
