import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'


import rootReducer from './reducer'
// const composedEnhancer = composeWithDevTools(
//   // Add whatever middleware you actually want to use here
//   // applyMiddleware()
//   // other store enhancers if any
// )
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducer, composedEnhancer)
export default store