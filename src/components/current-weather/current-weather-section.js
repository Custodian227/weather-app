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
    const WindValueParagraph = document.createElement('p');

    const currentHumidityContainer = document.createElement('div');
    const humidityIcon = document.createElement('img');
    const humidityDataContainer = document.createElement('div');
    const humidityParagraph = document.createElement('p');
    const humidityValueParagraph = document.createElement('p');

    const currentPressureContainer = document.createElement('div');
    const pressureIcon = document.createElement('img');
    const pressureDataContainer = document.createElement('div');
    const pressureParagraph = document.createElement('p');
    const pressureValueParagraph = document.createElement('p');

    const currentUvIndexContainer = document.createElement('div');
    const uvIndexIcon = document.createElement('img');
    const uvIndexDataContainer = document.createElement('div');
    const uvIndexParagraph = document.createElement('p');
    const uvIndexValueParagraph = document.createElement('p');

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
    WindValueParagraph.id = 'current-wind';
    currentHumidityContainer.id = 'current-humidity-container';
    humidityValueParagraph.id = 'current-humidity';
    currentPressureContainer.id = 'current-pressure-container';
    pressureValueParagraph.id = 'current-pressure';
    currentUvIndexContainer.id = 'current-uv-container';
    uvIndexValueParagraph.id = 'current-uv';

    //Assigning class selectors to current weather section elements
    windParagraph.classList.add('additional-label');
    WindValueParagraph.classList.add('additional-value');
    humidityParagraph.classList.add('additional-label');
    humidityValueParagraph.classList.add('additional-value');
    pressureParagraph.classList.add('additional-label');
    pressureValueParagraph.classList.add('additional-value');
    uvIndexParagraph.classList.add('additional-label');
    uvIndexValueParagraph.classList.add('additional-value');

    //Assigning property values to current weater section elements
    rightNowParagraph.textContent = 'Currently';
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
    windDataContainer.appendChild(WindValueParagraph);

    currentHumidityContainer.appendChild(humidityIcon);
    currentHumidityContainer.appendChild(humidityDataContainer);
    humidityDataContainer.appendChild(humidityParagraph);
    humidityDataContainer.appendChild(humidityValueParagraph);

    currentPressureContainer.appendChild(pressureIcon);
    currentPressureContainer.appendChild(pressureDataContainer);
    pressureDataContainer.appendChild(pressureParagraph);
    pressureDataContainer.appendChild(pressureValueParagraph);

    currentUvIndexContainer.appendChild(uvIndexIcon);
    currentUvIndexContainer.appendChild(uvIndexDataContainer);
    uvIndexDataContainer.appendChild(uvIndexParagraph);
    uvIndexDataContainer.appendChild(uvIndexValueParagraph);

    return currentWeatherDataContainer;
}

//Current Weather UI Element Getters
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

export function getCurrentTemperatureUnitElement() {
    return document.querySelector('#current-temperature-unit');
}

export function getCurrentFeelsLikeElement() {
    return document.querySelector('#current-feels-like');
}

export function getCurrentFeelsLikeUnitElement() {
    return document.querySelector('#current-feels-like-unit');
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



