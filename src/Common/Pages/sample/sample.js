require('normalize.css');
require('./sample.styles.sass');

import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux';

import List from '../../components/list/list.component';

import { store } from './sample.store';

const someText = <p><strong>Some JSX component</strong><br/>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

const App = () => (
  <Provider store={store} >
    <div>
      <List/>
    </div>
  </Provider>
)

export default App;
