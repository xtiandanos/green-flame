import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import * as reducers from './ducks';
import { sagas, createLogger } from './middlewares';

export default function configureStore(): any {
  const rootReducer = combineReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: [],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store: any = createStore(
    persistedReducer,
    compose(
      //@ts-ignore
      applyMiddleware(sagaMiddleware, createLogger(true)),
      process.env.REACT_APP_ENV !== 'production'
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : ''
    )
  );

  let persistor = persistStore(store);
  sagaMiddleware.run(sagas);
  return { store, persistor };
}
