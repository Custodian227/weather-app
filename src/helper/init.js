import { createContentContainer } from "../components/content/content";
import { getImperialSystemButton, getLocationSearchField, getMetricSystemButton, getSearchButton } from "../components/header/header";
import { updateWeatherForecast } from "../functions/main";
import { changeToImperialMeasurementSystem, changeToMetricMeasurementSystem, measurementSystem, setMeasurementSystem } from "../units/measurement-sistem";

export function initializeWebsite() {
    document.body.appendChild(createContentContainer());
    let initialLocation = 'Belgrade';

    //First oad (Default)
    updateWeatherForecast(initialLocation, measurementSystem);
    
    getSearchButton().addEventListener('click', () => { 
        const location = getLocationSearchField().value;
        initialLocation = location;

        updateWeatherForecast(location, measurementSystem);
    });

    const metricSystemButton = getMetricSystemButton();
    const imperialSystemButton = getImperialSystemButton();

    metricSystemButton.addEventListener('click', () => {
        if (measurementSystem === 'Metric') {
            return;
        } else if (measurementSystem === 'Imperial') {
            changeToMetricMeasurementSystem();
            updateWeatherForecast(initialLocation, measurementSystem);
        }
    });

    imperialSystemButton.addEventListener('click', () => {
        if (measurementSystem === 'Imperial') {
            return;
        } else if (measurementSystem === 'Metric') {
            changeToImperialMeasurementSystem();
            updateWeatherForecast(initialLocation, measurementSystem);
        }
    });
}
