import { API_KEY, BASE_URL, THREE_DAY_FORECAST_ENDPOINT } from "./data-api";

//Retrieves the weather forecast for 3 days, starting from the current day
//Retrieves the current weather data
//Retrieves data about the location
export async function getWeatherForecastData(location) {
    const response = await fetch(`${BASE_URL}/${THREE_DAY_FORECAST_ENDPOINT}.json?key=${API_KEY}&q=${location}&days=3`, { mode: 'cors' });
    const weatherForecastData = await response.json();

    return weatherForecastData;
}

//Derivative functions for current weather conditions =>
export function getForecastLocation(data) {
    return {
        city: data.location.name,
        country: data.location.country
    };
}

export function getCurentWeatherIcon(data) {
    return `https://${data.current.condition.icon}`;
}

export function getCurrentWeatherCondition(data) {
    return data.current.condition.text;
}

export function getCurrentTemperature(data) {
    return {
        temperatureCelsius: data.current.temp_c,
        temperatureFahrenheit: data.current.temp_f
    }
}

export function getCurrentFeelsLikeTemperature(data) {
    return {
        feelsLikeCelsius: data.current.feelslike_c,
        feelsLikeFahrenheit: data.current.feelslike_f
    }
}

export function getCurrentWind(data) {
    return {
        windKph: data.current.wind_kph,
        windMph: data.current.wind_mph
    }
}

export function getCurrentHumidity(data) {
    return data.current.humidity;
}

export function getCurrentPressure(data) {
    return {
        pressureMbar: data.current.pressure_mb,
        pressureIn: data.current.pressure_in
    }
}

export function getCurrentUvIndex(data) {
    return data.current.uv;
}


