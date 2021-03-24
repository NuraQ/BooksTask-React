import searchReducer from './components/Reducers/searchReducer';
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducer'
// const composedEnhancer = composeWithDevTools(
//   // Add whatever middleware you actually want to use here
//   // applyMiddleware()
//   // other store enhancers if any
// )

const store = createStore(rootReducer)
export default store