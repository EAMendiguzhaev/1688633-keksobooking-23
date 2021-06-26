const adFormNode = document.querySelector('.ad-form');
const adFormFieldsetsNodes = adFormNode.querySelectorAll('fieldset');

const toggleNodesDisabled = (nodes, isDisabled) => {
  nodes.forEach((item) => {
    item.disabled = isDisabled;
  });
};

const toggleFormStatus = (isActive) => {
  adFormNode.classList.toggle('ad-form--disabled', !isActive);

  toggleNodesDisabled(adFormFieldsetsNodes, !isActive);
};

export { toggleFormStatus, adFormNode };
