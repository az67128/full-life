import { START_DRAG, END_DRAG } from "actions/drag";

export default function drag(state = { activeSector: null }, action) {
  switch (action.type) {
    case START_DRAG:
      return { activeSector: action.id };
    case END_DRAG:
      return { activeSector: null };
    default:
      return state;
  }
}
