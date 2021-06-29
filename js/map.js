import { toggleFormStatus } from './form.js';
import { MocksConfig, createOffers } from './data.js';
import { createOffer } from './data.js';
import { renderPopup } from './popup.js';

const resetButton = document.querySelector('.ad-form__reset');
const address = document.querySelector('#address');
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

  const mainMarker = getPinMarker(
    MapSetting.LAT,
    MapSetting.LNG,
    true,
    getPinIcon(MapSetting.ICON_URL.MAIN, MapSetting.ICON_SIZE_MAIN.WIDTH, MapSetting.ICON_SIZE_MAIN.HEIGHT),
  );

  // Слушатель на Красный Маркер
  mainMarker.on('move', (evt) => {
    address.readOnly = true;
    address.value = `${mainMarker._latlng.lat}, ${mainMarker._latlng.lng}`;
    const { lat, lng } = evt.target.getLatLng();
    address.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
  });

  // Выводит объекты на карте
  const points = createOffers(MocksConfig.OFFERS_COUNT);
  points.forEach((item) => {
    const { lat, lng } = item.location;
    const createCustomPopup = renderPopup(createOffer());

    const regularMarker = getPinMarker(
      lat,
      lng,
      true,
      getPinIcon(MapSetting.ICON_URL.REGULAR, MapSetting.ICON_SIZE_REGULAR.WIDTH, MapSetting.ICON_SIZE_REGULAR.HEIGHT),
    );

    const marker = regularMarker;
    marker.addTo(map).bindPopup(createCustomPopup, {
      keepInView: true,
    });
  });

  // Кнопка "Очистить"
  resetButton.addEventListener('click', () => {
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
  });

  mapLayer.addTo(map);
  mainMarker.addTo(map);
};

export { initMap };
