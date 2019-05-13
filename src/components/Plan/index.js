import React from "react";
import PlanCard from "./PlanCard";
import styles from "./plan.module.css";
import { radarTranslation } from "utils/constants";

const Plan = () => {
  return (
    <div className={styles.plan}>
      {Object.keys(radarTranslation).map(key => (
        <PlanCard key={key} name={radarTranslation[key]} id={key} />
      ))}
    </div>
  );
};
export default Plan;
