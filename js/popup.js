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

const renderPopup = ({ author, offer }) => {
  const popupNode = popup.cloneNode(true);
  popupNode.querySelector('.popup__title').textContent = offer.title;
  popupNode.querySelector('.popup__text--address').textContent = offer.address;
  popupNode.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  popupNode.querySelector('.popup__type').textContent = offerTypeToReadable[offer.type];
  popupNode.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  popupNode.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  popupNode.querySelector('.popup__features').innerHTML = '';
  if (offer.features) {
    popupNode.querySelector('.popup__features').append(getOfferAddFeatures(offer.features));
  }
  popupNode.querySelector('.popup__description').textContent = offer.description;
  if (offer.photos) {
    popupNode.querySelector('.popup__photos').innerHTML = '';
    popupNode.querySelector('.popup__photos').append(getOfferAddPhotos(offer.photos));
  }
  popupNode.querySelector('.popup__avatar').src = author.avatar;

  removeEmptyHtmlElements(popupNode);
  return popupNode;
};

export { renderPopup };
