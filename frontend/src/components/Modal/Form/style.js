import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      width: "95%",
      height: "55px",
      backgroundColor: "var( --white)",
      borderRadius: "8px",
      margin: "20px",
    },
    div: {
      display: "flex",
      justifyContent: "flex-end",
    },
  })
);

export default useStyles;
