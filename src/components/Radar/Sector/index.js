import React from "react";
import styles from "./sector.module.css";
import { connect } from "react-redux";
import { setScore } from "actions/radar";
import { startDrag, endDrag } from "actions/drag";
import { pointyHexCorner } from "utils";

const Sector = props => {
  const {
    direction,
    size,
    id,
    score,
    isFilled,
    startDrag,
    endDrag,
    setScore
  } = props;
  const firstPoint = pointyHexCorner({ x: 0, y: 0 }, size, direction);
  const secondPoint = pointyHexCorner({ x: 0, y: 0 }, size, direction + 1);
  const startChangeScore = () => {
    setScore(id, score);
    startDrag(id);
  };
  return (
    <g
      className={[styles.sector, styles[id], isFilled && styles.filled].join(
        " "
      )}
      onMouseDown={startChangeScore}
      onTouchStart={startChangeScore}
      onMouseUp={endDrag}
      onTouchEnd={endDrag}
    >
      <polygon
        score={score}
        scoreid={id}
        points={`${firstPoint}, ${secondPoint}, 0, 0`}
        strokeLinejoin="miter-clip"
      />
    </g>
  );
};

const mapDispatchToProps = dispatch => ({
  setScore: (id, score) => dispatch(setScore(id, score)),
  startDrag: id => dispatch(startDrag(id)),
  endDrag: () => dispatch(endDrag())
});

export default connect(
  null,
  mapDispatchToProps
)(Sector);
