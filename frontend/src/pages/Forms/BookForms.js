import React from "react";
import { useHistory } from "react-router-dom";

import { useStyles } from "./style";

import api from "../../services/api";

import { useFormik } from "formik";

import CurrencyInput from "react-currency-masked-input";

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
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type="text"
          placeholder="Nome do Livro"
          name="name"
          defaultValue={values.name}
          onChange={handleChange}
          required
        />
        <input
          className={classes.input}
          type="text"
          placeholder="Autor"
          name="author"
          defaultValue={values.author}
          onChange={handleChange}
          required
        />
        <input
          className={classes.input}
          type="text"
          placeholder="Descrição"
          name="description"
          defaultValue={values.description}
          onChange={handleChange}
          required
        />
        <input
          className={classes.input}
          type="text"
          name="category"
          placeholder="Categoria"
          defaultValue={values.category}
          onChange={handleChange}
          required
        />
        <CurrencyInput
          className={classes.input}
          name="price"
          placeholder="Preço"
          defaultValue={values.price}
          onChange={handleChange}
          required
        />
        <div>
          <button className={classes.btnCancel} onClick={handleCancel}>
            Voltar
          </button>
          <button className={classes.btn} type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </>
  );
};

export default BookForms;
