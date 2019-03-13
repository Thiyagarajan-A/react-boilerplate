/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose, Store, ReducersMapObject} from 'redux';
// import { fromJS } from 'immutable';
import Immutable from 'seamless-immutable';
import { routerMiddleware } from 'connected-react-router/seamless-immutable';
import createSagaMiddleware, { Task } from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export interface IStore<T> extends Store<T> {
  runSaga?: (saga: Function | Function[]) => Task; // TODO: cleanup
  injectedReducers?: ReducersMapObject;
  injectedSagas?: any;
}

declare interface IWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (IReduxDevToolsConfig) => any;
}
declare const window: IWindow;

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store: IStore<any> = createStore(
    createReducer(),
    Immutable(initialState),
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
