import '../../styles/styles.css';
import { measurementSystem, setMeasurementSystem } from '../../units/measurement-sistem';

export function createHeader() {
    const header = document.createElement('header');
    const headerContent = document.createElement('div');

    const titleContainer = document.createElement('div');
    const appLogo = document.createElement('div');
    const title = document.createElement('h1');

    const searchSection = document.createElement('div');
    const locationInput = document.createElement('input');
    const searchButton = document.createElement('button');

    const measurementSystemSection = document.createElement('div');
    const metricSystemButton = document.createElement('button');
    const imperialSystemButton = document.createElement('button');

    //Assigning id's to header elements
    headerContent.id = 'header-content';
    titleContainer.id = 'title-container';
    appLogo.id = 'app-logo';

    searchSection.id = 'search-section';
    locationInput.id = 'location-input';
    searchButton.id = 'search-button';

    measurementSystemSection.id = 'measurement-system-section';
    metricSystemButton.id = 'metric-system-button';
    imperialSystemButton.id = 'imperial-system-button';

    //Assigning property values to header elemennts
    title.textContent = "WeatherApp";
    metricSystemButton.textContent = 'Metric';
    imperialSystemButton.textContent = 'Imperial';

    //Creating the structure of the header
    header.appendChild(headerContent);
    headerContent.appendChild(titleContainer);
    headerContent.appendChild(searchSection);
    headerContent.appendChild(measurementSystemSection);

    titleContainer.appendChild(appLogo);
    titleContainer.appendChild(title);

    searchSection.appendChild(locationInput);
    searchSection.appendChild(searchButton);

    measurementSystemSection.appendChild(metricSystemButton);
    measurementSystemSection.appendChild(imperialSystemButton);

    return header;
}

export function getLocationSearchField() {
    return document.querySelector('#location-input');
}

export function getSearchButton() {
    return document.querySelector('#search-button');
}

export function getMetricSystemButton() {
    return document.querySelector('#metric-system-button');
}

export function getImperialSystemButton() {
    return document.querySelector('#imperial-system-button');
}