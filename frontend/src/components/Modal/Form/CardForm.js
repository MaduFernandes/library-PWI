import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@material-ui/core";

import Button from "../../Button/Button";

import CurrencyTextField from "@unicef/material-ui-currency-textfield";

import useStyles from "./style";

import api from "../../../services/api";

const CardForm = ({ open, close, book }) => {
  const classes = useStyles();
  const [books, setBooks] = useState({ book });

  const handleSubmit = async () => {
    await api.put(`book/${book._id}`, books);
  };

  const handleChange = (event) => {
    event.preventDefault();

    setBooks((book) => ({
      ...book,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <form>
        <Dialog
          open={open}
          keepMounted
          onClose={close}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">Livro</DialogTitle>
          <DialogContent>
            <div className={classes.form}>
              <TextField
                id="outlined-basic"
                label="Nome do Livro"
                variant="outlined"
                className={classes.input}
                type="text"
                name="name"
                defaultValue={book.name}
                onChange={handleChange}
                required
              />
              <TextField
                id="outlined-basic"
                label="Autor"
                variant="outlined"
                className={classes.input}
                type="text"
                name="author"
                defaultValue={book.author}
                onChange={handleChange}
                required
              />
              <TextField
                id="outlined-basic"
                label="Descrição"
                variant="outlined"
                className={classes.input}
                type="text"
                name="description"
                defaultValue={book.description}
                onChange={handleChange}
                required
              />
              <TextField
                id="outlined-basic"
                label="Categoria"
                variant="outlined"
                className={classes.input}
                type="text"
                name="category"
                defaultValue={book.category}
                onChange={handleChange}
                required
              />
              <CurrencyTextField
                label="Preço"
                variant="outlined"
                name="price"
                defaultValue={book.price}
                className={classes.input}
                currencySymbol="$"
                outputFormat="number"
                decimalCharacter="."
                digitGroupSeparator=","
                onChange={handleChange}
                required
              />
            </div>
          </DialogContent>
          <DialogActions className={classes.div}>
            <Button
              titlePrimary={"Salvar"}
              close={close}
              titleSecondary={"Cancelar"}
              save={handleSubmit}
            />
          </DialogActions>
        </Dialog>
      </form>
    </>
  );
};

export default CardForm;
