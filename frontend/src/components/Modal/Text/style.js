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
  btn: {
    width: "25%",
    height: "40px",
    fontWeight: "bold",
    textTransform: "none",
    border: "2px solid gray",
  },
  dialogActions: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "15px",
    marginRight: "15px",
  },
  pos: {
    marginBottom: 12,
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
  },
  category: {
    marginLeft: "10px",
    color: "#fff",
    fontSize: "14px",
  },
  tag: {
    backgroundColor: "red",
    width: "83px",
    borderRadius: "10px",
    marginBottom: "15px",
  },
}));

export default useStyles;
