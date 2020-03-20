import React from 'react';
import 'normalize.css';
import './style/css/style.css';
import { Provider } from 'react-redux';
import store from './store';
import Editor from './components/Editor';

const App = () => {
  return (
    <Provider store={store}>
      <div className="background">
        <Editor />
      </div>
    </Provider>
  );
};

export default App;
