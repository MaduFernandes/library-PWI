import React, { useState, useEffect } from "react";

import { Grid, Paper, Button } from "@material-ui/core";
import useStyles from "./style";

import api from "../../services/api";
import BookCard from "../../pages/Book/BookCard";
import BookForms from "../Forms/BookForms";

const Home = () => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      const _books = await api.get("http://localhost:3000/books");
      if (_books.data) {
        const data = _books.data;
        console.log(data);
        setBooks(data);
      }
    }

    getData();
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <Paper elevation={3} className={classes.paper}>
        <Grid container direction="row" justify="flex-end" alignItems="center">
          <Button className={classes.button} onClick={handleClick}>
            Novo
          </Button>
        </Grid>
        <Grid container direction="row" justify="center" alignItems="center">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </Grid>
      </Paper>
      TODO: Criar um formulário, utilizar o REACT ROUTER para redirecionar para
      outra página
      {open ? <BookForms /> : null}
    </>
  );
};

export default Home;
