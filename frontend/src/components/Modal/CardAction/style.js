import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15px",
  },
  dialog: {
    width: "500px",
    height: "230px",
  },
  btnCancel: {
    width: "25%",
    height: "40px",
    fontWeight: "bold",
    textTransform: "none",
  },
  button: {
    width: "25%",
    height: "40px",
    fontWeight: "var(--font)",
    backgroundColor: "var(--primary)",
    textTransform: "none",
  },
  dialogActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
  },
}));

export default useStyles;
