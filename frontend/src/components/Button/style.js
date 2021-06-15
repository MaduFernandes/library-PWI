import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    btnConfirm: {
      backgroundColor: "var(--primary)",
      width: "25%",
    },
    btnCancel: {
      backgroundColor: "var(--secondary)",
      width: "25%",
    },
  })
);

export default useStyles;
