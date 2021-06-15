import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    btnConfirm: {
      backgroundColor: "var(--primary)",
    },
    btnCancel: {
      backgroundColor: "var(--secondary)",
    },
  })
);

export default useStyles;
