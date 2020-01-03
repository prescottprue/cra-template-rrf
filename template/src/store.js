import { createStore, compose } from 'redux'
import rootReducer from './reducer'

export default function configureStore(initialState, history) {
  
  const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;  

  const createStoreWithMiddleware = composeEnhancers()(createStore)

  const store = createStoreWithMiddleware(rootReducer)

  return store
}
