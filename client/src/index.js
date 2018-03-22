import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import Loadable from 'react-loadable';
import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers';
import Loading from './components/Loading';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const LoadableApp = Loadable({
  loader: () => import('./components/App'),
  loading: Loading,
});

const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <LoadableApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
