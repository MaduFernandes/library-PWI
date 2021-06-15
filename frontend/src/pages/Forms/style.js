import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      background: "var(--primary)",
    },
    input: {
      width: "50%",
      height: "55px",
      backgroundColor: "var(--white)",
      borderRadius: "8px",
      margin: "20px",
    },
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    typography: {
      alignItems: "left",
      color: "var(--color-title)",
    },
    icon: {
      marginBottom: "15px",
    },
    div: {
      display: " flex",
      direction: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    button: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
