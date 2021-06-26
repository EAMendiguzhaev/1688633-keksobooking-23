const offerType = {
  BUNGALOW: 'bungalow',
  FLAT: 'flat',
  HOTEL: 'hotel',
  HOUSE: 'house',
  PALACE: 'palace',
};

const offerTypeToPrice = {
  [offerType.BUNGALOW]: 0,
  [offerType.FLAT]: 1000,
  [offerType.HOTEL]: 3000,
  [offerType.HOUSE]: 5000,
  [offerType.PALACE]: 10000,
};

export { offerType, offerTypeToPrice };
