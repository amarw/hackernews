import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from 'app/reducers';
import sagas from 'app/sagas';
import { Action } from 'app/@types/actions';

let store: Store; // Keep store reference
export const configureStore = (): Store => {
  const defaultStoreState = {};
  const sagaMiddleWare = createSagaMiddleware();
  store = createStore(
    combineReducers(reducers),
    defaultStoreState,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  );
  sagaMiddleWare.run(sagas);
  return store;
};

// Export store dispatch for dispatching actions
export const dispatch = (action: Action) => {
  if (store) {
    store.dispatch(action);
  }
};
