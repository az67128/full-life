export const START_DRAG = "START_DRAG";
export const END_DRAG = "END_DRAG";

export function startDrag(id) {
  return { type: START_DRAG, id };
}

export function endDrag() {
  return { type: END_DRAG };
}
