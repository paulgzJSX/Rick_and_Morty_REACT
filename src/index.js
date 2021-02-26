import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { charactersReducer } from './store/reducers/characterReducer'
import { pageReducer } from './store/reducers/pageReducer'
import { errorReducer } from './store/reducers/errorReducer'
import { backdropReducer } from './store/reducers/backdropReducer'
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga'
import { fetchCharactersWatcher } from './store/sagas/saga';

const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
  charactersReducer,
  pageReducer,
  errorReducer,
  backdropReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(fetchCharactersWatcher)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

