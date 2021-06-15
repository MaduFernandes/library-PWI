import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "var(--primary)",
    marginRight: " 1px",
  },
  title: {
    fontWeight: "bold",
  },
  typography: {
    display: "flex",
    justifyContent: "space-between",
    color: "var(--color-title)",
  },
  icon: {
    color: "red",
    marginTop: "10px",
    width: "100%",
    height: "100px",
  },
});

export default useStyles;
