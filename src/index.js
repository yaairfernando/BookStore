import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import App from './components/App';
import reducers from './reducers';
import './styles/styles.scss'

const initState = {
  books: [
    {
      id: Math.random().toString(),
      title: 'test1',
      category: 'Action',
    },
    {
      id: Math.random().toString(),
      title: 'test2',
      category: 'Learning',
    },
    {
      id: Math.random().toString(),
      title: 'test3',
      category: 'Biography',
    },
  ],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
