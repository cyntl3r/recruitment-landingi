import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/App/App';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import 'regenerator-runtime';
import './styles.css';
import { configureAxios } from './utils/configureAxios';

configureAxios({
  apiUrl: 'https://jsonplaceholder.typicode.com/',
});

render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Provider>,
  document.querySelector('main')
);
