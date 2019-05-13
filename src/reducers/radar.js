import { SET_SCORE, SET_INITITAL_SCORE } from "actions/radar";

const initialState = {
  hobby: { score: 0 },
  friendship: { score: 0 },
  health: { score: 0 },
  job: { score: 0 },
  love: { score: 0 },
  welfare: { score: 0 }
};

function radar(state = initialState, action) {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, [action.id]: sector(state[action.id], action) };
    case SET_INITITAL_SCORE:
      return { ...state, ...action.score };
    default:
      return state;
  }
}

function sector(state = {}, action) {
  switch (action.type) {
    case SET_SCORE:
      return { ...state, score: action.score };
    default:
      return state;
  }
}

export default radar;
