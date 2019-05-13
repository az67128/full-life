import uuid from "uuid/v4";
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: { ...todo, id: uuid(), complete: false }
  };
}
export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    id
  };
}
export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}
