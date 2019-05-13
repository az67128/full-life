import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import BackIcon from "@material-ui/icons/ArrowBack";
import styles from "./topBar.module.css";

const title = {
  "/": "МАТРИЦА Ж",
  "/myway": "КАК ДОШЕЛ",
  "/plan": "ПЛАН",
  "/plan/hobby": "ХОББИ",
  "/plan/friendship": "ДРУЖБА",
  "/plan/health": "ЗДОРОВЬЕ",
  "/plan/job": "РАБОТА",
  "/plan/love": "ЛЮБОВЬ",
  "/plan/welfare": "БЛАГОСОСТОЯНИЕ",
  "/radar": "МАТРИЦА Ж"
};
const TopBar = ({ location: { pathname } }) => {
  if (pathname === "/login" || pathname === "/") return null;
  return (
    <AppBar
      position="static"
      color="primary"
      className={[
        styles.topBar,
        pathname.indexOf("/plan/") > -1 ? styles.withBackButton : ""
      ].join(" ")}
    >
      <Toolbar>
        {pathname.indexOf("/plan/") > -1 && (
          <IconButton component={Link} to="/plan">
            <BackIcon style={{ color: "white" }} />
          </IconButton>
        )}
        <Typography variant="h6" color="inherit">
          {title[pathname]}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(TopBar);
