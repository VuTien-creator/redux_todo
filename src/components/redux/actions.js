import * as constants from './constants'

// import { STATUS_FILTER, ADD_TO_DO, SEARCH_INPUT_TEXT } from './constants'

const addTodo = (data) => {
    return {
        type: constants.ADD_TO_DO,
        payload: data
    }
}

const toggleComplete = (id) => {
    return {
        type: constants.TOGGLE_COMPLETE,
        payload: id
    }
}

const searchTodoText = (text) => {
    return {
        type: constants.SEARCH_INPUT_TEXT,
        payload: text
    }
}

const statusFilter = (status) => {
    return {
        type: constants.STATUS_FILTER,
        payload: status
    }
}


const priorityFilter = (priorities) => {
    return {
        type: constants.PRIORITY_FILTER,
        payload: priorities,
    }
}

export { addTodo, searchTodoText, statusFilter, priorityFilter, toggleComplete }