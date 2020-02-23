import React from 'react';
import 'normalize.css';
import './style/css/style.css';
import Editor from './components/Editor';

const App = () => {
  return (
    <div className="background">
      <Editor />
    </div>
  );
};

export default App;
