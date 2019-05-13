import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link, withRouter } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

const BottomBar = ({ location: { pathname } }) => {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    if (pathname === "/radar") setValue(0);
    if (pathname === "/myway") setValue(1);
    if (pathname.indexOf("/plan") > -1) setValue(2);
  }, [pathname]);

  if (pathname === "/login" || pathname === "/") return null;
  return (
    <Paper square>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <BottomNavigationAction label="МАТРИЦА" component={Link} to="/radar" />
        <BottomNavigationAction
          label="КАК ДОШЕЛ"
          component={Link}
          to="/myway"
        />
        <BottomNavigationAction label="ПЛАН" component={Link} to="/plan" />
      </BottomNavigation>
    </Paper>
  );
};

export default withRouter(BottomBar);
