import '../../styles/styles.css';

export function createHeader() {
    const header = document.createElement('header');
    const headerContent = document.createElement('div');

    const titleContainer = document.createElement('div');
    const appLogo = document.createElement('div');
    const title = document.createElement('h1');

    const searchSection = document.createElement('div');
    const locationInput = document.createElement('input');
    const searchButton = document.createElement('button');

    //Assigning id's to header elements
    headerContent.id = 'header-content';
    titleContainer.id = 'title-container';
    appLogo.id = 'app-logo';
    searchSection.id = 'search-section';
    locationInput.id = 'location-input';
    searchButton.id = 'search-button';

    title.textContent = "WeatherApp";

    //Creating the structure of the header
    header.appendChild(headerContent);
    headerContent.appendChild(titleContainer);
    headerContent.appendChild(searchSection);

    titleContainer.appendChild(appLogo);
    titleContainer.appendChild(title);

    searchSection.appendChild(locationInput);
    searchSection.appendChild(searchButton);

    return header;
}

export function getLocationSearchField() {
    return document.querySelector('#location-input');
}

export function getSearchButton() {
    return document.querySelector('#search-button');
}