import { AUTHORIZED, NOT_AUTHORIZED } from "actions/user";

export default function user(state = { authorized: null }, action) {
  switch (action.type) {
    case AUTHORIZED:
      return { authorized: true };
    case NOT_AUTHORIZED:
      return { authorized: false };
    default:
      return state;
  }
}
