import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';

// actions.js
export const activateMarker = marker => ({
  type: 'ACTIVATE_MARKER',
  marker,
});

export const closeMarker = () => ({
  type: 'CLOSE_MARKER',
});

// reducers.js
export const marker = (state = {}, action) => {
  switch (action.type) {
    case 'ACTIVATE_MARKER':
      return action.marker;
    case 'CLOSE_MARKER':
      return {};
    default:
      return state;
  }
};

export const reducers = combineReducers({
  marker,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();
