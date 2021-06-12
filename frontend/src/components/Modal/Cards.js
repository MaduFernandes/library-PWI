import React from "react";

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

import useStyles from "./style";

const Cards = ({ open, close, text, icon, save, btn }) => {
  const classes = useStyles();

  return (
    <>
      <Dialog
        open={open}
        keepMounted
        onClose={close}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className={classes.dialog}>
          {icon}
          <DialogContentText
            id="alert-dialog-slide-description"
            className={classes.title}
          >
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button
            onClick={close}
            variant="contained"
            className={classes.btnCancel}
          >
            Não
          </Button>
          <Button
            onClick={save}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            {btn}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Cards;
