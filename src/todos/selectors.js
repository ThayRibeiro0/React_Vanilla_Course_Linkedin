import { createSelector } from "reselect";

export const getTodos = state => state.todos.data;

export const getTodosLoading = state => state.todos.isLoading;

export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);





// different setting with different results
// export const getCompleteTodos = state => {
//     const { data: todos } = state.todos;
//     return todos.filter(todo => todo.isCompleted);
// }


//With more selectores:
// export const getIncompleteTodos = createSelector (
//     getTodos,
//     getTodosLoading,
//     (todos, isLoading) => isLoading
//     ? []
//     : todos.filter(todo => !todo.isCompleted),
// );

