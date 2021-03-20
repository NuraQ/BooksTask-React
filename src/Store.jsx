import {configureStore} from '@reduxjs/toolkit';
import searchReducer from './components/Reducers/searchReducer'
import AuthReducer from './components/Reducers/AuthReducer'

const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      searchState: searchReducer,
      AuthReducer: AuthReducer
    }
  })
  export default store