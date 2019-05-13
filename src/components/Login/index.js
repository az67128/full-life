import React from "react";
import { FirebaseContext } from "../Firebase";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authorized } from "actions/user";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = ({ authorized, loginned }) => {
  const [isLogging, setIsLogging] = React.useState(false);

  if (authorized === true) return <Redirect to="/matrix" />;

  return (
    <FirebaseContext.Consumer>
      {fb => {
        const signRedirect = () => fb.auth().signInWithRedirect(fb.googleAuth);
        const authResultAction = result => {
          if (result.user) {
            loginned();
          } else {
            setIsLogging(false);
          }
        };
        const signPopup = () => {
          setIsLogging(true);
          fb.app
            .auth()
            .signInWithPopup(fb.googleAuth)
            .then(function(result) {
              authResultAction(result);
            })
            .catch(function(error) {
              authResultAction(error);
            });
        };

        if (process.env.NODE_ENV === "production") {
          fb.app
            .auth()
            .getRedirectResult()
            .then(function(result) {
              authResultAction(result);
            })
            .catch(function(error) {
              authResultAction(error);
            });
        }

        const auth =
          process.env.NODE_ENV === "production" ? signRedirect : signPopup;
        return (
          <div>
            {isLogging ? (
              <CircularProgress />
            ) : (
              <button onClick={auth}>auth</button>
            )}
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
  loginned: () => dispatch(authorized())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
