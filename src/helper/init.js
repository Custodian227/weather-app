import { createContentContainer } from "../components/content/content";
import { getLocationSearchField, getSearchButton } from "../components/header/header";
import { updateWeatherForecast } from "../functions/main";


export function initializeWebsite() {
    document.body.appendChild(createContentContainer());
    //Default data loading
    updateWeatherForecast('Belgrade');
    
    getSearchButton().addEventListener('click', () => { 
        const location = getLocationSearchField().value;
        updateWeatherForecast(location);
    });
}



