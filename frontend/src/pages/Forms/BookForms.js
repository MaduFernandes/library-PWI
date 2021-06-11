import React from "react";
import { useHistory } from "react-router-dom";

import { TextField, Typography, Paper, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { useStyles } from "./style";

import api from "../../services/api";

import { useFormik } from "formik";

import CurrencyTextField from "@unicef/material-ui-currency-textfield";

const BookForms = () => {
  const classes = useStyles();
  const history = useHistory();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      author: "",
      description: "",
      category: "",
      price: "",
    },
    onSubmit(values) {
      handleSave(values);
    },
  });

  const handleSave = async (values) => {
    const response = await api.post("/books", values);

    if (response.status === 200) {
      history.push("/");
    }
  };

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.div}>
          <IconButton onClick={handleCancel} className={classes.icon}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography variant="h2" gutterBottom className={classes.typography}>
            Livros
          </Typography>
        </div>
        <div className={classes.divButton}>
          <button className={classes.btn} type="submit">
            Cadastrar
          </button>
        </div>
      </div>
      <Paper>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="outlined-basic"
            label="Nome do Livro"
            variant="outlined"
            className={classes.input}
            type="text"
            name="name"
            defaultValue={values.name}
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
            defaultValue={values.author}
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
            defaultValue={values.description}
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
            defaultValue={values.category}
            onChange={handleChange}
            required
          />
          <CurrencyTextField
            label="Preço"
            variant="outlined"
            name="price"
            defaultValue={values.price}
            className={classes.input}
            currencySymbol="$"
            outputFormat="number"
            decimalCharacter="."
            digitGroupSeparator=","
            onChange={handleChange}
            required
          />
        </form>
      </Paper>
    </>
  );
};

export default BookForms;
