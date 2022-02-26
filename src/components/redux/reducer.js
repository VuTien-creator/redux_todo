import { combineReducers } from 'redux'
import filtersReducer from '../Filters/FiltersSlice'
import todoListReducer from '../TodoList/TodoListSlice'

// const inittialState = {
//     filters: {
//         search: '',
//         status: 'ALL',
//         priority: []
//     },
//     todoList: [
//         {
//             id: 1,
//             name: 'Learn ',
//             completed: false,
//             priority: 'Medium'
//         },
//         {
//             id: 2,
//             name: 'Learn redux',
//             completed: true,
//             priority: 'High'
//         }
//     ]
// }

// const reducer = (state = {}, action) => {

//     /**
//      * action = {
//      *  type:'todoList/addTodo',
//      *  payload:{
//             id:2,
//             name:'Learn redux',
//             completed:true,
//             priority:'High'
//         }
//      * }
//      */
//     // const filters = filtersReducer(state.filters, action)
//     // const todoList = todoListReducer(state.todoList, action)
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     }
// }

const reducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})

export default reducer