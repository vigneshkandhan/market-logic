import './main.css';

import store from './store';
import render from './render';
import './registerEventListeners';

const rootElement = document.getElementById('demo');

store.subscribe(state => render(rootElement, state));
render(rootElement, store.getState());
