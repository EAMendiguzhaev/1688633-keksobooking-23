import { HttpMethod } from './common.js';

const API_URL = 'https://23.javascript.pages.academy/keksobooking';

const checkStatus = (response) => {
  const { status, statusText } = response;
  if (!response.ok) {
    throw new Error(`${status} - ${statusText}`);
  }

  return response;
};

const getData = (successHandler, errorHandler) => {
  fetch(`${API_URL}/data`)
    .then(checkStatus)
    .then((response) => response.json())
    .then((data) => successHandler(data))
    .catch(errorHandler);
};

const sendData = (successHandler, errorHandler, body) => {
  fetch(API_URL, {
    method: HttpMethod.POST,
    body,
  })
    .then(checkStatus)
    .then(successHandler)
    .catch(errorHandler);
};

export { getData, sendData };
