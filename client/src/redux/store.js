import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e);
  }
}

const getLocalStorage = (state) => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) 
  } catch (err) {
    console.log(err);
  }
}

const presistedState = getLocalStorage()

export const store = createStore(rootReducer, presistedState, applyMiddleware(...middlewares));

store.subscribe(() => {
  saveToLocalStorage(store.getState())
})

export default { store };