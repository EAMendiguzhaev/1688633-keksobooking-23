const OfferType = {
  BUNGALOW: 'bungalow',
  FLAT: 'flat',
  HOTEL: 'hotel',
  HOUSE: 'house',
  PALACE: 'palace',
};

const OfferTypeToPrice = {
  [OfferType.BUNGALOW]: 0,
  [OfferType.FLAT]: 1000,
  [OfferType.HOTEL]: 3000,
  [OfferType.HOUSE]: 5000,
  [OfferType.PALACE]: 10000,
};

export { OfferType, OfferTypeToPrice };
