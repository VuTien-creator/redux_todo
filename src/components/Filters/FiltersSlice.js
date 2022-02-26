// import * as constants from '../redux/constants'

// const inittialState = {
//     search: '',
//     status: 'All',
//     priority: []
// }

// const filtersReducer = (state = inittialState, action) => {

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
//         case constants.SEARCH_INPUT_TEXT:
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case constants.STATUS_FILTER:
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case constants.PRIORITY_FILTER:
//             return {
//                 ...state,
//                 priority: action.payload
//             }
//         default:
//             return state
//     }
// }

// export default filtersReducer

import { createSlice } from '@reduxjs/toolkit'
import * as constants from '../redux/constants'

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priority: []
    },
    reducers: {
        [constants.SEARCH_INPUT_TEXT]: (state, action) => {
            //mutation
            state.search = action.payload
        },
        [constants.STATUS_FILTER]: (state, action) => {
            //mutation
            state.status = action.payload
        },
        [constants.PRIORITY_FILTER]: (state, action) => {
            //mutation
            state.priority = action.payload
        },
        
    }
})

export default filtersSlice