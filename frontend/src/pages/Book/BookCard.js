import React, { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

import useStyles from "./style";

const BookCard = ({ book }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card className={classes.root} key={book.id}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {book.author}
          </Typography>
          <Typography variant="h5" component="h2">
            {book.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {book.category}
          </Typography>
          <Typography variant="body2" component="p">
            {book.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            Saber Mais
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{book.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {book.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Voltar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BookCard;
