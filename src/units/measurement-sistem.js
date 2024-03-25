import { getImperialSystemButton, getMetricSystemButton } from "../components/header/header";
import '../styles/styles.css';

export let measurementSystem = 'Metric';

function setMeasurementSystem(value) {
    measurementSystem = value;
}

export function changeToMetricMeasurementSystem() {
    getMetricSystemButton().style.backgroundColor = 'black';
    getImperialSystemButton().style.backgroundColor = 'var(--main-app-color)';
    setMeasurementSystem('Metric');
}

export function changeToImperialMeasurementSystem() {
    getImperialSystemButton().style.backgroundColor = 'black';
    getMetricSystemButton().style.backgroundColor = 'var(--main-app-color)';
    setMeasurementSystem('Imperial');
}
