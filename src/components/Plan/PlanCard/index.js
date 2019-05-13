import React from "react";
import { Link } from "react-router-dom";
import styles from "./planCard.module.css";
import { connect } from "react-redux";

const PlanCard = ({ name, id, todos }) => {
  // const total = Math.floor(Math.random() * 30) + 2;
  // const completed = Math.floor(Math.random() * (total - 1)) + 2;
  const completed = todos.reduce(
    (res, item) => (item.complete ? res + 1 : res),
    0
  );
  const total = todos.length;
  const progress = Math.round((completed / total) * 100);
  return (
    <div className={styles.planCard}>
      <Link to={`/plan/${id}`} className={styles.container}>
        <div className={styles.progressBackground} />
        <div
          className={[styles.progress, styles[id]].join(" ")}
          style={{ width: `${progress}%` }}
        />

        <div className={styles.titleText}>{name}</div>
        <div className={styles.statusText}>
          {completed} / {total} выполнено
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = ({ plan }, { id }) => ({
  todos: plan.filter(item => item.type === id)
});
export default connect(mapStateToProps)(PlanCard);
