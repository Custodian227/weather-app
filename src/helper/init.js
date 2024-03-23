import { createContentContainer } from "../components/content/content";
import { updateWeatherForecast } from "../main/main";

export function initializeWebsite() {
    document.body.appendChild(createContentContainer());
    
    updateWeatherForecast();
}



