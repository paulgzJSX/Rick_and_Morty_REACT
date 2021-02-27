import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { charactersReducer } from './store/reducers/charactersReducer'
import { pageReducer } from './store/reducers/pageReducer'
import { errorReducer } from './store/reducers/errorReducer'
import { backdropReducer } from './store/reducers/backdropReducer'
import { loaderReducer } from './store/reducers/loaderReducer'
import createSagaMiddleware from 'redux-saga'
import { fetchCharactersWatcher } from './store/sagas/saga'
import './index.css'

const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
  charactersReducer,
  pageReducer,
  errorReducer,
  backdropReducer,
  loaderReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(fetchCharactersWatcher)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

