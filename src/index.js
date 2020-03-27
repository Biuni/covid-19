import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <meta charset="utf-8" />
      <title>COVID-19 | Dashboard and Resources</title>
      <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
    </Helmet>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
