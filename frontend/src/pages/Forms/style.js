import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      background: "#8259cb",
    },
    btnCancel: {
      background: "#616161",
    },
    input: {
      width: "50%",
      height: "55px",
      backgroundColor: "#fff",
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
      color: "#696969",
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
    divButton: {
      minWidth: "85%",
      display: "flex",
      direction: "row",
      justifyContent: "flex-end",
    },
  })
);
