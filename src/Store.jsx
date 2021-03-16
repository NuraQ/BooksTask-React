import searchReducer from './components/Reducers/searchReducer'
import {configureStore} from '@reduxjs/toolkit'
const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      searchState: searchReducer
    }
  })
  export default store