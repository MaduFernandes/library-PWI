import React from "react";

import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  DialogTitle,
  Typography,
} from "@material-ui/core";

import useStyles from "./style";

const CardText = ({ open, close, book }) => {
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
        <DialogTitle id="form-dialog-title">{book.name}</DialogTitle>
        <DialogContent className={classes.dialog}>
          <div className={classes.tag}>
            <Typography className={classes.category} color="textSecondary">
              {book.category}
            </Typography>
          </div>
          <div className={classes.div}>
            <Typography className={classes.pos} color="textSecondary">
              {book.author}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {`$ ${book.price}`}
            </Typography>
          </div>
          <DialogContentText
            id="alert-dialog-slide-description"
            className={classes.title}
          >
            {book.description}
            {book.category}
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={close} className={classes.btn}>
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CardText;
