import '../../styles/styles.css';
import { createCurrentWeatherSection } from '../current-weather/current-weather-section';
import { createForecastSection } from '../forecast/forecast-section';

export function createMainContent() {
    const main = document.createElement('main');
    main.id = 'main';

    const header = document.createElement('h3');
    header.classList.add('daily-forecast-header');
    header.textContent = 'THREE DAY FORECAST';

    main.appendChild(createCurrentWeatherSection());
    main.appendChild(header);
    main.appendChild(createForecastSection());

    return main;
}

export function getMainContent() {
    return document.querySelector('#main');
}