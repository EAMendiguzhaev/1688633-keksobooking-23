const OfferType = {
  BUNGALOW: 'bungalow',
  FLAT: 'flat',
  HOTEL: 'hotel',
  HOUSE: 'house',
  PALACE: 'palace',
};

const offerTypeToPrice = {
  [OfferType.BUNGALOW]: 0,
  [OfferType.FLAT]: 1000,
  [OfferType.HOTEL]: 3000,
  [OfferType.HOUSE]: 5000,
  [OfferType.PALACE]: 10000,
};

const HttpMethod = {
  POST: 'POST',
};

const KeyboardKey = {
  ESCAPE: 'Escape',
};

export { OfferType, offerTypeToPrice, HttpMethod, KeyboardKey };
