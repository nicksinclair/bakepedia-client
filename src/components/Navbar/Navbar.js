// Absolute imports
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import decode from "jwt-decode";

// Relative imports
import Emoji from "../Emoji/Emoji";
import useStyles from "./styles";
// import icon from './images/icon.png';

const Navbar = () => {
  // Styles
  const classes = useStyles();

  // State
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();

  // Routing
  const history = useHistory();
  const location = useLocation();

  const handleLogout = () => {
    try {
      dispatch({ type: "LOGOUT" });

      // Redirect to home page
      history.push("/");
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const token = user?.token;

    /* Check if JWT has expired */
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Emoji className="emoji" symbol="👩‍🍳" label="chef" />

      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          component={Link}
          to="/"
          variant="h2"
          align="center"
        >
          bakepedia
        </Typography>
      </div>

      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>

      {/* <img className={classes.image} src={icon} alt="bakepedia" height="60"/> */}
    </AppBar>
  );
};

export default Navbar;
