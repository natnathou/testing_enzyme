import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { Root } from './components/Root';
import { App } from './components/App';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
