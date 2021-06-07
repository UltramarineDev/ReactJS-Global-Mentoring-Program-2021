import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers'

let store;

const initStore = (initialState) =>
  createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)))

export const initializeStore = (preloadedState) => {
  let _store = store || initStore(preloadedState)
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    
    store = undefined
  }

  if (typeof window === 'undefined') {
      return _store
  } 

  if (!store) {
      store = _store 
      return _store
  } 
 
}

export const useStore = (initialState) => {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export default store
