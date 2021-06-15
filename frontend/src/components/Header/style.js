import { makeStyles, createStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

export const useStyles = makeStyles((theme) =>
  createStyles({
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    root: {
      background: "var(--primary)",
      height: "55px",
    },
    menu: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      marginRight: "30%",
    },
    title: {
      color: "var(--white)",
    },
    menuButton: {
      color: "var(--white)",
    },
  })
);
