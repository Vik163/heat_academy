import { LngLat } from '@yandex/ymaps3-types';
import { Coords } from '../types/maps';

export const phoneHeader = '8 846 391-84-49';
export const phoneContacts = '8 800 333-36-62';
export const address = 'ул. Дыбенко, 30';

export const mainCoordinates = [49.93243299617288, 53.117814287091264] as LngLat;
// важна очередность, чтобы иконки были по порядку (верхняя - нижний слой -- / -- нижняя - верхний слой)
export const coordsStores: Coords = {
   'Гудок, Красноармейская, 131, секция 188': [49.93164299117288, 53.117814287091264],
};
export const coordCar = [50.218688, 53.2067] as LngLat;
export const mainZoom = 16;
