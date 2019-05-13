export const AUTHORIZED = "AUTHORIZED";
export const NOT_AUTHORIZED = "NOT_AUTHORIZED";

export function authorized(result) {
  return {
    type: AUTHORIZED
  };
}
export function notAuthorized(result) {
  return {
    type: NOT_AUTHORIZED
  };
}
