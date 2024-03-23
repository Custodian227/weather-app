import '../../styles/styles.css';
import { createCurrentWeatherSection } from '../current-weather/current-weather-section';

export function createMainContent() {
    const main = document.createElement('main');
    main.id = 'main';

    main.appendChild(createCurrentWeatherSection());

    return main;
}

export function getMainContent() {
    return document.querySelector('#main');
}