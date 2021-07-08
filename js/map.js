import { adFormNode, toggleFormStatus } from './form.js';
import { renderPopup } from './popup.js';
import { showAlert, listenerCloneNodes, debounce } from './util.js';
import { getData, sendData } from './create-fetch.js';
import { getFilteredOffers, filterNode } from './filter.js';
import { resetImage } from './avatar.js';

const resetButton = document.querySelector('.ad-form__reset');
const address = document.querySelector('#address');
const succes = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');
const localOffers = [];

const MapSetting = {
  LAT: 35.68951,
  LNG: 139.69171,
  ZOOM: 10,
  OSM_URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  OSM_ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  ICON_URL: {
    MAIN: '../img/main-pin.svg',
    REGULAR: '../img/pin.svg',
  },
  ICON_SIZE_MAIN: {
    WIDTH: 52,
    HEIGHT: 52,
  },
  ICON_SIZE_REGULAR: {
    WIDTH: 40,
    HEIGHT: 40,
  },
  COUNT_OFFERS: 10,
  MESSAGE_ALERT: 'Не удалось получить данные от сервера. Попробуйте позже.',
  MESSAGE_COLOR: '#ff5635',
};

const initMap = () => {
  const map = L.map('map-canvas')
    .on('load', () => {
      toggleFormStatus(true);
    })
    .setView(
      {
        lat: MapSetting.LAT,
        lng: MapSetting.LNG,
      },
      MapSetting.ZOOM,
    );

  const mapLayer = L.tileLayer(MapSetting.OSM_URL, { attribution: MapSetting.OSM_ATTRIBUTION });
  const markers = L.layerGroup().addTo(map);

  // Функция генерации Иконок
  const getPinIcon = (url, width, heigth) => {
    const icons = L.icon({
      iconUrl: url,
      iconSize: [width, heigth],
      iconAnchor: [width / 2, heigth],
    });
    return icons;
  };

  // Функция генерации Маркеров
  const getPinMarker = (lat, lng, boolean, icons) => {
    const pinMarker = L.marker(
      {
        lat: lat,
        lng: lng,
      },
      {
        draggable: boolean,
        icon: icons,
      },
    );

    return pinMarker;
  };

  // Стили для главного Маркера
  const mainMarker = getPinMarker(
    MapSetting.LAT,
    MapSetting.LNG,
    true,
    getPinIcon(MapSetting.ICON_URL.MAIN, MapSetting.ICON_SIZE_MAIN.WIDTH, MapSetting.ICON_SIZE_MAIN.HEIGHT),
  );

  // Слушатель на главный Маркер
  mainMarker.on('move', (evt) => {
    address.readOnly = true;
    address.value = `${mainMarker._latlng.lat}, ${mainMarker._latlng.lng}`;
    const { lat, lng } = evt.target.getLatLng();
    address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });

  // Сброс Маркера в исходное состояние
  const resetMarker = () => {
    mainMarker.setLatLng({
      lat: MapSetting.LAT,
      lng: MapSetting.LNG,
    });

    map.setView(
      {
        lat: MapSetting.LAT,
        lng: MapSetting.LNG,
      },
      MapSetting.ZOOM,
    );
  };

  // Функция рендора объектов в попапе
  const renderOffers = (offers) => {
    offers.forEach((item) => {
      const { lat, lng } = item.location;
      const createCustomPopup = renderPopup(item);

      const regularMarker = getPinMarker(
        lat,
        lng,
        false,
        getPinIcon(MapSetting.ICON_URL.REGULAR, MapSetting.ICON_SIZE_REGULAR.WIDTH, MapSetting.ICON_SIZE_REGULAR.HEIGHT),
      );

      regularMarker.addTo(markers).bindPopup(createCustomPopup, {
        keepInView: true,
      });
    });
  };

  // Функция отправки данных на сервер
  const sendNewOffer = (node) => {
    node.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const formData = new FormData(node);

      sendData(
        () => {
          listenerCloneNodes(succes), node.reset();
        },
        () => listenerCloneNodes(error),
        formData,
      );
    });
  };

  // Функиця  очистки/фильтрации/отрисовки полученных объектов
  const updateOffers = (offers) => {
    markers.clearLayers(); // Очистка маркеров
    const filteredOffers = getFilteredOffers(offers).slice(0, MapSetting.COUNT_OFFERS);
    renderOffers(filteredOffers); // Отрисовка
  };

  // Получение объектов с сервера
  getData(
    (offers) => {
      localOffers.push(...offers);
      updateOffers(localOffers);
    },
    () => showAlert(MapSetting.MESSAGE_ALERT, MapSetting.MESSAGE_COLOR),
  );

  filterNode.addEventListener(
    'change',
    debounce(() => {
      updateOffers(localOffers);
    }),
  );

  // Кнопка "Очистить"
  resetButton.addEventListener('click', () => {
    resetMarker();
    filterNode.reset();
    resetImage();
  });

  sendNewOffer(adFormNode);
  mapLayer.addTo(map);
  mainMarker.addTo(map);
};

export { initMap };
