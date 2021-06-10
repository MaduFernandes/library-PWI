import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      background: "#673ab7",
    },
    btnCancel: {
      background: "#616161",
    },

    input: {
      width: "50%",
      height: "55px",
      color: "#333",
      border: "1px solid #dcdce6",
      borderRadius: "8px",
      padding: "0 24px",
      margin: "20px",
    },
    errors: {
      color: "red",
      marginRight: "38%",
    },
  })
);
