import '../../styles/styles.css';
import temperatureIconPath from '../../assets/icons/icons8-temperature.png';
import windIconPath from '../../assets/icons/icons8-wind.png';
import humidityIconPath from '../../assets/icons/icons8-humidity.png';
import pressureIconPath from '../../assets/icons/icons8-pressure.png';
import uvIndexIconPath from '../../assets/icons/icons8-uv.png';

export function createCurrentWeatherSection() {
    const currentWeatherDataContainer = document.createElement('div');

    const currentLocationDataContainer = document.createElement('div');
    const currentLocationContainer = document.createElement('div');
    const currentLocation = document.createElement('h2');
    const rightNowContainer = document.createElement('div');
    const rightNowParagraph = document.createElement('p');

    const currentWeatherIconContainer = document.createElement('div');
    const currentWeatherIcon = new Image();

    const currentConditionContainer = document.createElement('div');
    const currentConditionParagraph = document.createElement('p');

    const currentTemperatureContainer = document.createElement('div');
    const currentTemperatureIcon = new Image();
    const currentTemperatureValuesContainer = document.createElement('div');
    const currentTemperatureValueContainer = document.createElement('div');
    const currentTemperatureValueSpan = document.createElement('span');
    const currentTemperatureUnitSpan = document.createElement('span');
    const currentFeelsLikeContainer = document.createElement('div');
    const currentFeelsLikeValueSpan = document.createElement('span');
    const currentFeelsLikeUnitSpan = document.createElement('span');

    const currentAdditionalContainer = document.createElement('div');

    const currentWindContainer = document.createElement('div');
    const windIcon = document.createElement('img');
    const windDataContainer = document.createElement('div');
    const windParagraph = document.createElement('p');
    const windValueSpan = document.createElement('span');
    const windValueUnitSpan = document.createElement('span');

    const currentHumidityContainer = document.createElement('div');
    const humidityIcon = document.createElement('img');
    const humidityDataContainer = document.createElement('div');
    const humidityParagraph = document.createElement('p');
    const humidityValueSpan = document.createElement('span');
    const humidityValueUnitSpan = document.createElement('span');

    const currentPressureContainer = document.createElement('div');
    const pressureIcon = document.createElement('img');
    const pressureDataContainer = document.createElement('div');
    const pressureParagraph = document.createElement('p');
    const pressureValueSpan = document.createElement('span');
    const pressureValueUnitSpan = document.createElement('span');

    const currentUvIndexContainer = document.createElement('div');
    const uvIndexIcon = document.createElement('img');
    const uvIndexDataContainer = document.createElement('div');
    const uvIndexParagraph = document.createElement('p');
    const uvIndexValueSpan = document.createElement('span');

    //Assigning id selectors to current weather section elements
    currentWeatherDataContainer.id = 'current';
    currentLocationDataContainer.id = 'current-location-data-container';

    currentLocation.id = 'current-location';
    rightNowParagraph.id = 'right-now';

    currentWeatherIconContainer.id = 'current-weather-icon-container';
    currentWeatherIcon.id = 'current-weather-icon';

    currentConditionContainer.id = 'current-condition-container';
    currentConditionParagraph.id = 'current-condition';

    currentTemperatureContainer.id = 'current-temperature-container';
    currentTemperatureValuesContainer.id = 'current-temperature-values-container';
    currentTemperatureValueContainer.id = 'current-temperature-value-container';
    currentTemperatureValueSpan.id = 'current-temperature';
    currentTemperatureUnitSpan.id = 'current-temperature-unit';

    currentFeelsLikeContainer.id = 'current-feels-like-container';
    currentFeelsLikeValueSpan.id = 'current-feels-like';
    currentFeelsLikeUnitSpan.id = 'current-feels-like-unit';

    currentAdditionalContainer.id = 'current-additional';

    currentWindContainer.id = 'current-wind-container';
    windValueSpan.id = 'current-wind';
    windValueUnitSpan.id = 'current-wind-unit';

    currentHumidityContainer.id = 'current-humidity-container';
    humidityValueSpan.id = 'current-humidity';
    humidityValueUnitSpan.id = 'current-humidity-unit';

    currentPressureContainer.id = 'current-pressure-container';
    pressureValueSpan.id = 'current-pressure';
    pressureValueUnitSpan.id = 'current-pressure-unit';

    currentUvIndexContainer.id = 'current-uv-container';
    uvIndexValueSpan.id = 'current-uv';

    //Assigning class selectors to current weather section elements
    windParagraph.classList.add('additional-label');
    windValueSpan.classList.add('additional-value');
    windValueUnitSpan.classList.add('additional-value');

    humidityParagraph.classList.add('additional-label');
    humidityValueSpan.classList.add('additional-value');
    humidityValueUnitSpan.classList.add('additional-value');

    pressureParagraph.classList.add('additional-label');
    pressureValueSpan.classList.add('additional-value');
    pressureValueUnitSpan.classList.add('additional-value');

    uvIndexParagraph.classList.add('additional-label');
    uvIndexValueSpan.classList.add('additional-value');

    //Assigning property values to current weater section elements
    rightNowParagraph.textContent = 'Right Now';
    windParagraph.textContent = 'Wind';
    humidityParagraph.textContent = 'Humidity';
    pressureParagraph.textContent = 'Pressure';
    uvIndexParagraph.textContent = 'UV Index';
   
    currentTemperatureIcon.src = `${temperatureIconPath}`;
    windIcon.src = `${windIconPath}`;
    humidityIcon.src = `${humidityIconPath}`;
    pressureIcon.src = `${pressureIconPath}`;
    uvIndexIcon.src = `${uvIndexIconPath}`;

    //Creating the structure of the current weather section
    currentWeatherDataContainer.appendChild(currentLocationDataContainer);
    currentWeatherDataContainer.appendChild(currentWeatherIconContainer);
    currentWeatherDataContainer.appendChild(currentConditionContainer);
    currentWeatherDataContainer.appendChild(currentTemperatureContainer);
    currentWeatherDataContainer.appendChild(currentAdditionalContainer);

    currentLocationDataContainer.appendChild(currentLocationContainer);
    currentLocationDataContainer.appendChild(rightNowContainer);

    currentLocationContainer.appendChild(currentLocation);
    rightNowContainer.appendChild(rightNowParagraph);

    currentWeatherIconContainer.appendChild(currentWeatherIcon);
    currentConditionContainer.appendChild(currentConditionParagraph);

    currentTemperatureContainer.appendChild(currentTemperatureIcon);
    currentTemperatureContainer.appendChild(currentTemperatureValuesContainer);
    currentTemperatureValuesContainer.appendChild(currentTemperatureValueContainer);
    currentTemperatureValueContainer.appendChild(currentTemperatureValueSpan);
    currentTemperatureValueContainer.appendChild(currentTemperatureUnitSpan);
    currentTemperatureValuesContainer.appendChild(currentFeelsLikeContainer);
    currentFeelsLikeContainer.appendChild(currentFeelsLikeValueSpan);
    currentFeelsLikeContainer.appendChild(currentFeelsLikeUnitSpan);

    currentAdditionalContainer.appendChild(currentWindContainer);
    currentAdditionalContainer.appendChild(currentHumidityContainer);
    currentAdditionalContainer.appendChild(currentPressureContainer);
    currentAdditionalContainer.appendChild(currentUvIndexContainer);

    currentWindContainer.appendChild(windIcon);
    currentWindContainer.appendChild(windDataContainer);
    windDataContainer.appendChild(windParagraph);
    windDataContainer.appendChild(windValueSpan);
    windDataContainer.appendChild(windValueUnitSpan);

    currentHumidityContainer.appendChild(humidityIcon);
    currentHumidityContainer.appendChild(humidityDataContainer);
    humidityDataContainer.appendChild(humidityParagraph);
    humidityDataContainer.appendChild(humidityValueSpan);
    humidityDataContainer.appendChild(humidityValueUnitSpan);

    currentPressureContainer.appendChild(pressureIcon);
    currentPressureContainer.appendChild(pressureDataContainer);
    pressureDataContainer.appendChild(pressureParagraph);
    pressureDataContainer.appendChild(pressureValueSpan);
    pressureDataContainer.appendChild(pressureValueUnitSpan);

    currentUvIndexContainer.appendChild(uvIndexIcon);
    currentUvIndexContainer.appendChild(uvIndexDataContainer);
    uvIndexDataContainer.appendChild(uvIndexParagraph);
    uvIndexDataContainer.appendChild(uvIndexValueSpan);

    return currentWeatherDataContainer;
}

//Current Weather UI Element Getters
//Getters for elements that display data values
export function getCurrentLocationElement() {
    return document.querySelector('#current-location');
}

export function getCurrentWeatherIconElement() {
    return document.querySelector('#current-weather-icon');
}

export function getCurrentConditionElement() {
    return document.querySelector('#current-condition');
}

export function getCurrentTemperatureElement() {
    return document.querySelector('#current-temperature');
}

export function getCurrentFeelsLikeElement() {
    return document.querySelector('#current-feels-like');
}

export function getCurrentWindElement() {
    return document.querySelector('#current-wind');
}

export function getCurrentHumidityElement() {
    return document.querySelector('#current-humidity');
}

export function getCurrentPressureElement() {
    return document.querySelector('#current-pressure');
}

export function getCurrentUvIndexElement() {
    return document.querySelector('#current-uv');
}

//Getters for elements that display data units
export function getCurrentTemperatureUnitElement() {
    return document.querySelector('#current-temperature-unit');
}

export function getCurrentFeelsLikeUnitElement() {
    return document.querySelector('#current-feels-like-unit');
}

export function getCurrentWindUnitElement() {
    return document.querySelector('#current-wind-unit');
}

export function getCurrentHumidityUnitElement() {
    return document.querySelector('#current-humidity-unit');
}

export function getCurrentPressureUnitElement() {
    return document.querySelector('#current-pressure-unit');
}