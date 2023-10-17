import React from 'react';
import MainNavigation from './navigations';
import {Provider} from 'react-redux';
import {persistor, store} from './Store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
