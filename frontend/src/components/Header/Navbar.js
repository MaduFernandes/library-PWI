import React from "react";

import { CssBaseline, AppBar, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6">Dream Books</Typography>
            <Typography>Home</Typography>
            <Typography>Meus Livros</Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </React.Fragment>
    </>
  );
};

export default Navbar;
