import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './app/state/store';
import Routes from './app/routes';

import 'antd/dist/antd.css';

class App extends Component<{}, {}> {
  render() {
    const { store, persistor } = configureStore();
    return (
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </PersistGate>
      </ReduxProvider>
    );
  }
}


export default App;
