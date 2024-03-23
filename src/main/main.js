import { getForecastLocation, getWeatherForecastData, getCurentWeatherIcon, getCurrentWeatherCondition, getCurrentTemperature, getCurrentWind, getCurrentHumidity, getCurrentPressure, getCurrentUvIndex, getCurrentFeelsLikeTemperature } from "../api/weather-api";
import { getCurrentConditionElement, getCurrentFeelsLikeElement, getCurrentFeelsLikeUnitElement, getCurrentHumidityElement, getCurrentLocationElement, getCurrentPressureElement, getCurrentTemperatureElement, getCurrentTemperatureUnitElement, getCurrentUvIndexElement, getCurrentWeatherIconElement, getCurrentWindElement } from "../components/current-weather/current-weather-section";
import { getLocationSearchField, getSearchButton } from "../components/header/header";
import { humidityUnit, pressureUnits, temperatureUnits, windSpeedUnits } from "../units/units";

export function updateWeatherForecast() {
    getSearchButton().addEventListener('click', () => {
        const location = getLocationSearchField().value;

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
                    
                //Data display
                getCurrentLocationElement().textContent = `${currentLocationData.city}, ${currentLocationData.country}`;
                getCurrentWeatherIconElement().src = `${currentWeatherIconData}`;
                getCurrentConditionElement().textContent = `${currentConditionData}`;

                getCurrentTemperatureElement().textContent = `${currentTemperatureData.temperatureCelsius}`;
                getCurrentFeelsLikeElement().textContent = `Feels like: ${currentFeelsLikeTemperatureData.feelsLikeCelsius}`;
                getCurrentTemperatureUnitElement().textContent = `${temperatureUnits.celsius}`;
                getCurrentFeelsLikeUnitElement().textContent = `${temperatureUnits.celsius}`;

                getCurrentWindElement().textContent = `${currentWindData.windKph} ${windSpeedUnits.kph}`;
                getCurrentHumidityElement().textContent = `${currentHumidityData} ${humidityUnit}`;
                getCurrentPressureElement().textContent = `${currentPressureData.pressureMbar} ${pressureUnits.mbar}`;
                getCurrentUvIndexElement().textContent = `${currentUvIndexData}`;
            }).catch((error) => {
                console.log(error);
            });
    });
}