import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import 'antd/dist/antd.css';
import store from './store';
import Navigator from './Navigator';

function App() {
  return (
      <Provider store={store}>
            <Navigator />
      </Provider>
  );
}

export default App;