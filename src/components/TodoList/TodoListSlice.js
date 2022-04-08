// import * as constants from '../redux/constants'

// const inittialState = [
//     {
//         id: 1,
//         name: 'Learn ',
//         completed: false,
//         priority: 'Medium'
//     },
//     {
//         id: 2,
//         name: 'Learn redux',
//         completed: true,
//         priority: 'High'
//     }
// ]

// const todoListReducer = (state = inittialState, action) => {

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
//     switch (action.type) {
//         case constants.ADD_TO_DO:
//             return [...state, action.payload]
//         case constants.TOGGLE_COMPLETE:
//             return state.map(todo => {
//                 return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
//             })
//         default:
//             return state
//     }
// }

// export default todoListReducer

import { createSlice } from "@reduxjs/toolkit";
import * as constants from "../redux/constants";
const todoListSlice = createSlice({
    name: "todoList",
    initialState: [],
    reducers: {
        [constants.ADD_TO_DO]: (state, action) => {
            state.push(action.payload);
        },
        [constants.TOGGLE_COMPLETE]: (state, action) => {
            const currentTodo = state.find((todo) => todo.id === action.payload);
            if (currentTodo) {
                currentTodo.completed = !currentTodo.completed;
            }
        },
    },
});

export default todoListSlice;
