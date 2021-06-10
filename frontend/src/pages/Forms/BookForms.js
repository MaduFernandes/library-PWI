import React from "react";
import { useHistory } from "react-router-dom";

import { useStyles } from "./style";
import "../../styles/global.css";

import api from "../../services/api";

import { useFormik } from "formik";
import * as Yup from "yup";
import CurrencyInput from "react-currency-masked-input";

const BookForms = () => {
  const classes = useStyles();
  const history = useHistory();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    author: Yup.string().required("Author is required"),
    description: Yup.string().required("Description is required"),
    category: Yup.string().required("Category is required"),
    price: Yup.number().required("Price is required"),
  });

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: "",
      author: "",
      description: "",
      category: "",
      price: "",
    },
    validationSchema,
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
        />
        {errors.name && (
          <div id="feedback" className={classes.errors}>
            {errors.name}
          </div>
        )}
        <input
          className={classes.input}
          type="text"
          placeholder="Autor"
          name="author"
          defaultValue={values.author}
          onChange={handleChange}
        />
        {errors.author && (
          <div id="feedback" className={classes.errors}>
            {errors.author}
          </div>
        )}
        <input
          className={classes.input}
          type="text"
          placeholder="Descrição"
          name="description"
          defaultValue={values.description}
          onChange={handleChange}
        />
        {errors.description && (
          <div id="feedback" className={classes.errors}>
            {errors.description}
          </div>
        )}
        <input
          className={classes.input}
          type="text"
          name="category"
          placeholder="Categoria"
          defaultValue={values.category}
          onChange={handleChange}
        />
        {errors.category && (
          <div id="feedback" className={classes.errors}>
            {errors.category}
          </div>
        )}
        <CurrencyInput
          className={classes.input}
          name="price"
          placeholder="Preço"
          defaultValue={values.price}
          onChange={handleChange}
          required
        />
        {errors.price && (
          <div id="feedback" className={classes.errors}>
            {errors.price}
          </div>
        )}
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
