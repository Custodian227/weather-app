import '../../styles/styles.css';

export function createForecastSection() {
    const forecastContainer = document.createElement('div');

    const firstDayContainer = document.createElement('div');
    const firstDayParagraph = document.createElement('p');
    const firstDayWeatherIcon = new Image();
    const firstDayCondition = document.createElement('p');
    const firstDayAverageTemperatureContainer = document.createElement('div');
    const firstDayAverageTemperature = document.createElement('span');
    const firstDayAverageTemperatureUnit = document.createElement('span');

    const secondDayContainer = document.createElement('div');
    const secondDayParagraph = document.createElement('p');
    const secondDayWeatherIcon = new Image();
    const secondDayCondition = document.createElement('p');
    const secondDayAverageTemperatureContainer = document.createElement('div');
    const secondDayAverageTemperature = document.createElement('span');
    const secondDayAverageTemperatureUnit = document.createElement('span');

    const thirdDayContainer = document.createElement('div');
    const thirdDayParagraph = document.createElement('p');
    const thirdDayWeatherIcon = new Image();
    const thirdDayCondition = document.createElement('p');
    const thirdDayAverageTemperatureContainer = document.createElement('div');
    const thirdDayAverageTemperature = document.createElement('span');
    const thirdDayAverageTemperatureUnit = document.createElement('span');

    //Assigning id selectors to forecast section elements
    forecastContainer.id = 'three-day-forecast';
    firstDayContainer.id = 'first-day';
    firstDayAverageTemperatureContainer.id = 'first-day-temperature-container';
    secondDayContainer.id= 'second-day';
    secondDayAverageTemperatureContainer.id = 'second-day-temperature-container';
    thirdDayContainer.id = 'third-day';
    thirdDayAverageTemperatureContainer.id = 'third-day-temperature-container';

    //Assigning class selectors to forecast section elements
    firstDayContainer.classList.add('daily-forecast');
    firstDayParagraph.classList.add('daily-day');
    firstDayWeatherIcon.classList.add('daily-weather-icon');
    firstDayCondition.classList.add('daily-condition');
    firstDayAverageTemperature.classList.add('daily-average-temperature');
    firstDayAverageTemperatureUnit.classList.add('daily-average-temperature-unit');

    secondDayContainer.classList.add('daily-forecast');
    secondDayParagraph.classList.add('daily-day');
    secondDayWeatherIcon.classList.add('daily-weather-icon');
    secondDayCondition.classList.add('daily-condition');
    secondDayAverageTemperature.classList.add('daily-average-temperature');
    secondDayAverageTemperatureUnit.classList.add('daily-average-temperature-unit');
    
    thirdDayContainer.classList.add('daily-forecast');
    thirdDayParagraph.classList.add('daily-day');
    thirdDayWeatherIcon.classList.add('daily-weather-icon');
    thirdDayCondition.classList.add('daily-condition');
    thirdDayAverageTemperature.classList.add('daily-average-temperature');
    thirdDayAverageTemperatureUnit.classList.add('daily-average-temperature-unit');

    forecastContainer.appendChild(firstDayContainer);
    forecastContainer.appendChild(secondDayContainer);
    forecastContainer.appendChild(thirdDayContainer);

    firstDayContainer.appendChild(firstDayParagraph);
    firstDayContainer.appendChild(firstDayWeatherIcon);
    firstDayContainer.appendChild(firstDayCondition);
    firstDayContainer.appendChild(firstDayAverageTemperatureContainer);
    firstDayAverageTemperatureContainer.appendChild(firstDayAverageTemperature);
    firstDayAverageTemperatureContainer.appendChild(firstDayAverageTemperatureUnit);

    secondDayContainer.appendChild(secondDayParagraph);
    secondDayContainer.appendChild(secondDayWeatherIcon);
    secondDayContainer.appendChild(secondDayCondition);
    secondDayContainer.appendChild(secondDayAverageTemperatureContainer);
    secondDayAverageTemperatureContainer.appendChild(secondDayAverageTemperature);
    secondDayAverageTemperatureContainer.appendChild(secondDayAverageTemperatureUnit);

    thirdDayContainer.appendChild(thirdDayParagraph);
    thirdDayContainer.appendChild(thirdDayWeatherIcon);
    thirdDayContainer.appendChild(thirdDayCondition);
    thirdDayContainer.appendChild(thirdDayAverageTemperatureContainer);
    thirdDayAverageTemperatureContainer.appendChild(thirdDayAverageTemperature);
    thirdDayAverageTemperatureContainer.appendChild(thirdDayAverageTemperatureUnit);
    
    return forecastContainer;
}

export function getFirstDayForecastElement() {
    return document.querySelector('#first-day');
}

export function getSecondDayForecastElement() {
    return document.querySelector('#second-day');
}

export function getThirdDayForecastElement() {
    return document.querySelector('#third-day');
}