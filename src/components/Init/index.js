import React from "react";
import { FirebaseContext } from "../Firebase";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { authorized, notAuthorized } from "actions/user";
import { loadScore } from "actions/radar";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./init.module.css";

const Init = ({ authorized, loginned, notLoggined, loadScore }) => {
  if (authorized === true) return <Redirect to="/radar" />;
  if (authorized === false) return <Redirect to="/login" />;
  return (
    <FirebaseContext.Consumer>
      {fb => {
        fb.app.auth().onAuthStateChanged(function(user) {
          if (user) {
            loadScore();
            loginned();
          } else {
            notLoggined();
          }
        });

        return (
          <div className={styles.loader}>
            <CircularProgress />
          </div>
        );
      }}
    </FirebaseContext.Consumer>
  );
};

const mapStateToProps = ({ user }) => ({
  authorized: user.authorized
});
const mapDispatchToProps = dispatch => ({
  loadScore: () => dispatch(loadScore()),
  loginned: () => dispatch(authorized()),
  notLoggined: () => dispatch(notAuthorized())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Init);
