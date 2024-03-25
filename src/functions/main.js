import { getForecastLocation, getWeatherForecastData, getCurentWeatherIcon, getCurrentWeatherCondition, getCurrentTemperature, getCurrentWind, getCurrentHumidity, getCurrentPressure, getCurrentUvIndex, getCurrentFeelsLikeTemperature, getFirstDayData, getSecondDayData, getThirdDayData } from "../api/weather-api";
import { getCurrentConditionElement, getCurrentFeelsLikeElement, getCurrentFeelsLikeUnitElement, getCurrentHumidityElement, getCurrentHumidityUnitElement, getCurrentLocationElement, getCurrentPressureElement, getCurrentPressureUnitElement, getCurrentTemperatureElement, getCurrentTemperatureUnitElement, getCurrentUvIndexElement, getCurrentWeatherIconElement, getCurrentWindElement, getCurrentWindUnitElement } from "../components/current-weather/current-weather-section";
import { getFirstDayForecastElement, getSecondDayForecastElement, getThirdDayForecastElement } from "../components/forecast/forecast-section";
import { getDayName } from "../helper/date";
import { humidityUnit, pressureUnits, temperatureUnits, windSpeedUnits } from "../units/units";

export function updateWeatherForecast(location, measurementSystem) {
    getWeatherForecastData(location)
        .then((data) => {
            //Current weather data
            const currentLocationData = getForecastLocation(data);
            const currentWeatherIconData = getCurentWeatherIcon(data);
            const currentConditionData = getCurrentWeatherCondition(data);
            const currentTemperatureData = getCurrentTemperature(data);
            const currentWindData = getCurrentWind(data);
            const currentHumidityData = getCurrentHumidity(data);
            const currentPressureData = getCurrentPressure(data);
            const currentUvIndexData = getCurrentUvIndex(data);
            const currentFeelsLikeTemperatureData = getCurrentFeelsLikeTemperature(data);

            //Current weather data values display
            getCurrentLocationElement().textContent = `${currentLocationData.city}, ${currentLocationData.country}`;
            getCurrentWeatherIconElement().src = `${currentWeatherIconData}`;
            getCurrentConditionElement().textContent = `${currentConditionData}`;

            getCurrentHumidityElement().textContent = `${currentHumidityData}`;
            getCurrentUvIndexElement().textContent = `${currentUvIndexData}`;

            //Forecast data display
            const firstDayData = getFirstDayData(data);
            const secondDayData = getSecondDayData(data);
            const thirdDayData = getThirdDayData(data);

            const firstDayContainer = getFirstDayForecastElement();
            const secondDayContainer = getSecondDayForecastElement();
            const thirdDayContainer = getThirdDayForecastElement();

            const firstDay = getDayName(firstDayData.date);
            const secondDay = getDayName(secondDayData.date);
            const thirdDay = getDayName(thirdDayData.date);

            firstDayContainer.children[0].textContent = firstDay;
            firstDayContainer.children[1].src = firstDayData.weatherIconURL;
            firstDayContainer.children[2].textContent = firstDayData.condition;

            secondDayContainer.children[0].textContent = secondDay;
            secondDayContainer.children[1].src = secondDayData.weatherIconURL;
            secondDayContainer.children[2].textContent = secondDayData.condition;

            thirdDayContainer.children[0].textContent = thirdDay;
            thirdDayContainer.children[1].src = thirdDayData.weatherIconURL;
            thirdDayContainer.children[2].textContent = thirdDayData.condition;


            if (measurementSystem === 'Metric') {
                getCurrentTemperatureElement().textContent = `${currentTemperatureData.temperatureCelsius}`;
                getCurrentFeelsLikeElement().textContent = `Feels like: ${currentFeelsLikeTemperatureData.feelsLikeCelsius}`;

                getCurrentWindElement().textContent = `${currentWindData.windKph}`;
                getCurrentPressureElement().textContent = `${currentPressureData.pressureMbar}`;

                firstDayContainer.children[3].children[0].textContent = firstDayData.averageTemperatureCelsius;
                firstDayContainer.children[3].children[1].textContent = temperatureUnits.celsius;

                secondDayContainer.children[3].children[0].textContent = secondDayData.averageTemperatureCelsius;
                secondDayContainer.children[3].children[1].textContent = temperatureUnits.celsius;

                thirdDayContainer.children[3].children[0].textContent = thirdDayData.averageTemperatureCelsius;
                thirdDayContainer.children[3].children[1].textContent = temperatureUnits.celsius;

                displayMetricSystemUnits();
            } else if (measurementSystem === 'Imperial') {
                getCurrentTemperatureElement().textContent = `${currentTemperatureData.temperatureFahrenheit}`;
                getCurrentFeelsLikeElement().textContent = `Feels like: ${currentFeelsLikeTemperatureData.feelsLikeFahrenheit}`;

                getCurrentWindElement().textContent = `${currentWindData.windMph}`;
                getCurrentPressureElement().textContent = `${currentPressureData.pressureIn}`;

                firstDayContainer.children[3].children[0].textContent = firstDayData.averageTemperatureFahrenheit;
                firstDayContainer.children[3].children[1].textContent = temperatureUnits.fahrenheit;

                secondDayContainer.children[3].children[0].textContent = secondDayData.averageTemperatureFahrenheit;
                secondDayContainer.children[3].children[1].textContent = temperatureUnits.fahrenheit;

                thirdDayContainer.children[3].children[0].textContent = thirdDayData.averageTemperatureFahrenheit;
                thirdDayContainer.children[3].children[1].textContent = temperatureUnits.fahrenheit;

                displayImperialSystemUnits();
            }
        }).catch((error) => {
            console.log(error);
        });
}

function displayMetricSystemUnits() {
    getCurrentTemperatureUnitElement().textContent = `${temperatureUnits.celsius}`;
    getCurrentFeelsLikeUnitElement().textContent = `${temperatureUnits.celsius}`;
    getCurrentWindUnitElement().textContent = windSpeedUnits.kph;
    getCurrentHumidityUnitElement().textContent = humidityUnit;
    getCurrentPressureUnitElement().textContent = pressureUnits.mbar;
}

function displayImperialSystemUnits() {
    getCurrentTemperatureUnitElement().textContent = `${temperatureUnits.fahrenheit}`;
    getCurrentFeelsLikeUnitElement().textContent = `${temperatureUnits.fahrenheit}`;
    getCurrentWindUnitElement().textContent = windSpeedUnits.mph;
    getCurrentHumidityUnitElement().textContent = humidityUnit;
    getCurrentPressureUnitElement().textContent = pressureUnits.inches;
}
