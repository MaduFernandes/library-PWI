import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    btn: {
      width: "23%",
      height: "60px",
      background: "#673ab7",
      border: "0",
      borderRadius: "8px",
      color: "#fff",
      fontWeight: "700",
      marginTop: "16px",
      display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "18px",
      lineHeight: "60px",
      transition: "filter 0.2s",
      margin: "20px",
    },
    btnCancel: {
      width: "23%",
      height: "60px",
      background: "#616161",
      border: "0",
      borderRadius: "8px",
      color: "#fff",
      fontWeight: "700",
      marginTop: "16px",
      display: "inline-block",
      textAlign: "center",
      textDecoration: "none",
      fontSize: "18px",
      lineHeight: "60px",
      transition: "filter 0.2s",
      margin: "20px",
    },

    input: {
      width: "50%",
      height: "60px",
      color: "#333",
      border: "1px solid #dcdce6",
      borderRadius: "8px",
      padding: "0 24px",
      margin: "20px",
    },
  })
);
