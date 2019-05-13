import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Radar from "../Radar";
import MyWay from "../MyWay";
import Plan from "../Plan";
import BottomBar from "../BottomBar";
import TopBar from "../TopBar";
import Login from "../Login";
import Init from "../Init";
import styles from "./app.module.css";
import PlanList from "../PlanList";

const App = ({ authorized }) => {
  return (
    <div className={styles.app}>
      <TopBar />
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" component={Init} />
          <Route path="/radar" component={authorized ? Radar : Init} />
          <Route path="/myway" component={authorized ? MyWay : Init} />
          <Route exact path="/plan" component={authorized ? Plan : Init} />
          <Route path="/plan/:id" component={authorized ? PlanList : Init} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
      <BottomBar />
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  authorized: user.authorized
});
export default connect(mapStateToProps)(App);
