import { ADD_TODO, COMPLETE_TODO } from "actions/plan";

export default function plan(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case COMPLETE_TODO:
      return state.map(item => todo(item, action));
    default:
      return state;
  }
}

function todo(state, action) {
  switch (action.type) {
    case COMPLETE_TODO:
      return state.id === action.id
        ? { ...state, complete: !state.complete }
        : state;
    default:
      return state;
  }
}
