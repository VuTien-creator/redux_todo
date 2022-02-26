// import { createStore } from 'redux'
// import reducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancers = composeWithDevTools()

// const store = createStore(reducer,composeEnhancers)

// export default store

import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from '../Filters/FiltersSlice'
import todoListSlice from '../TodoList/TodoListSlice'

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todoListSlice.reducer
    }
})

export default store
