import React, { useState } from "react";

import {
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import BookIcon from "@material-ui/icons/Book";

import { useStyles } from "./style";
import { useTheme } from "@material-ui/core/styles";

import clsx from "clsx";

const Navbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpenSidebar = () => {
    setOpen(true);
  };

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.menu}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            onClick={handleOpenSidebar}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Livros
          </Typography>
        </div>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          onClose={handleCloseSidebar}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleCloseSidebar}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary="Livro" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;
