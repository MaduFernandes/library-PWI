import React from "react";
import { useHistory } from "react-router-dom";

import { useStyles } from "./style";

import api from "../../services/api";

const BookForms = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleSave = async (values) => {
    const response = await api.post("/books", values);
    console.log(response);
  };

  const handleCancel = () => {
    history.push("/");
  };
  return (
    <>
      <form onSubmit={handleSave} className={classes.form}>
        <input
          className={classes.input}
          type="text"
          placeholder="Nome do Livro"
          name="name"
        />
        <input
          className={classes.input}
          type="text"
          placeholder="Autor"
          name="author"
        />

        <input
          className={classes.input}
          type="text"
          placeholder="Descrição"
          name="description"
        />
        <input
          className={classes.input}
          type="text"
          name="category"
          placeholder="Categoria"
        />

        <input
          className={classes.input}
          name="price"
          type="text"
          placeholder="Preço"
        />
      </form>
      <button className={classes.btnCancel} onClick={handleCancel}>
        Cancelar
      </button>
      <button className={classes.btn}>Salvar</button>
    </>
  );
};

export default BookForms;
