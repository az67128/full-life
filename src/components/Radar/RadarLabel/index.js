import React from "react";
import { pointyHexCorner } from "utils";
import { radarTranslation } from "utils/constants";
import styles from "./radarLabel.module.css";

const RadarLabel = ({ direction, score, id }) => {
  const firstPoint = pointyHexCorner({ x: 0, y: 0 }, 105, direction);

  return (
    <g
      className={styles.radarLabel}
      transform={`translate(${firstPoint}) rotate(${direction * 60 + 90})`}
    >
      <text x="55" textAnchor="middle">
        {score} {radarTranslation[id]}
      </text>
    </g>
  );
};

export default RadarLabel;
