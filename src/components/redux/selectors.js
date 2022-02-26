import { createSelector } from '@reduxjs/toolkit'

// export const todoListSelector = (state) => {

//     const todoRemaining = state.todoList.filter(todo => {
//         return todo.name.includes(state.filters.search)
//     })
//     return todoRemaining
// }

const todoListSelector = (state) => state.todoList

const searchTextSelector = (state) => state.filters.search

const searchStatusSelector = (state) => state.filters.status

const searchPrioritySelector = (state) => state.filters.priority


const todoRemainingSelector = createSelector(
    todoListSelector,
    searchStatusSelector,
    searchTextSelector,
    searchPrioritySelector,
    (todoList, status, searchText, priorities) => {


        if (status === 'All') {
            return todoList.filter(todo => {
                return priorities.length > 0 ?
                    (todo.name.includes(searchText) && priorities.includes(todo.priority)) :
                    todo.name.includes(searchText)
            })
        }

        if (priorities.length > 0) {
            return todoList.filter(todo => {
                return (
                    todo.name.includes(searchText) &&
                    (status === 'Completed' ? todo.completed : !todo.completed) &&
                    (priorities.includes(todo.priority))
                )
            })
        }

        return todoList.filter(todo => {
            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed)
            )
        })

    }

)

export { todoRemainingSelector }