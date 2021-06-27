const adFormNode = document.querySelector('.ad-form');
const adFormFieldsetsNodes = adFormNode.querySelectorAll('fieldset');
const mapFormNode = document.querySelector('.map__filters');
const mapFormSelectsNodes = mapFormNode.querySelectorAll('.map__filter');

const toggleNodesDisabled = (nodes, isDisabled) => {
  nodes.forEach((item) => {
    item.disabled = isDisabled;
  });
};

const toggleFormStatus = (isActive) => {
  adFormNode.classList.toggle('ad-form--disabled', !isActive);
  mapFormNode.classList.toggle('ad-form--disabled', !isActive);

  toggleNodesDisabled(adFormFieldsetsNodes, !isActive);
  toggleNodesDisabled(mapFormSelectsNodes, !isActive);
};

export { toggleFormStatus, adFormNode };
