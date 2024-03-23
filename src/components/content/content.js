import '../../styles/styles.css';
import { createHeader } from '../header/header';
import { createMainContent} from '../main-content/main-content';

export function createContentContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.id = 'content';

    contentContainer.appendChild(createHeader());
    contentContainer.appendChild(createMainContent());

    return contentContainer;
}

export function getContentContainer() {
    return document.querySelector('#content');
}