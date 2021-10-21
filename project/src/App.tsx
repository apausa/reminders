import React from 'react';
import { Provider } from 'react-redux';
import List from './components/list/List';
import configureStore from './redux/store';

function App() {
  return (
    <Provider store={configureStore()}>
      <List />
    </Provider>
  );
}

export default App;
