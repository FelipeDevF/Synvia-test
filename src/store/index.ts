import { applyMiddleware, legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { IPokemonList } from './modules/pokemon/types'
import rootSaga from './modules/rootSaga'
import rootReducers from './modules/rootReducers'

export interface IState {
  pokemon: IPokemonList
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store
