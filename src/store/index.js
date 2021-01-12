import { createStore } from 'redux';
import rootReducer from './reducers';
import { saveState, loadState } from '../helpres/localStorage';

// save userData to local storage
const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
);

store.subscribe(() => saveState(store.getState()));

export default store;
