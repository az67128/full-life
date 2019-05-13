import React from "react";
import Sector from "./Sector";
import { connect } from "react-redux";
import { setScore } from "actions/radar";
import RadarLabel from "./RadarLabel";
import styles from "./radar.module.css";

const scores = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const Radar = ({ radar, setScore, activeId }) => {
  const handleMove = e => {
    const touch = e.touches ? e.touches[0] : e;
    const element = document.elementFromPoint(touch.pageX, touch.pageY);
    const score = element.getAttribute("score");
    const id = element.getAttribute("scoreid");
    if (!id || id !== activeId || !score) return;
    setScore(id, score);
  };

  return (
    <div className={styles.container}>
      <svg
        viewBox="-100 -105 202 207"
        fill="none"
        className={styles.matrix}
        onTouchMove={handleMove}
        onMouseMove={handleMove}
      >
        <g>
          {scores.map(score => {
            return Object.keys(radar).map((id, i) => (
              <Sector
                key={`${id}${score}`}
                size={score * 10}
                direction={i}
                id={id}
                isFilled={radar[id].score >= score}
                score={score}
              />
            ));
          })}
        </g>
        <g>
          {Object.keys(radar).map((id, i) => (
            <RadarLabel
              key={id}
              direction={i}
              id={id}
              score={radar[id].score}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

const mapStateToProps = ({ radar, drag }) => ({
  radar,
  activeId: drag.activeSector
});
const mapDispatchToProps = dispatch => ({
  setScore: (id, score) => dispatch(setScore(id, score))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radar);
