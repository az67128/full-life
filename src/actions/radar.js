export const SET_SCORE = "SET_SCORE";
export const SET_INITITAL_SCORE = "SET_INITITAL_SCORE";
export const LOAD_SCORE = "LOAD_SCORE";

export function setScore(id, score) {
  return {
    type: SET_SCORE,
    id,
    score
  };
}

export function setInitialScore(score) {
  return {
    type: SET_INITITAL_SCORE,
    score
  };
}
export function loadScore() {
  return {
    type: LOAD_SCORE
  };
}
