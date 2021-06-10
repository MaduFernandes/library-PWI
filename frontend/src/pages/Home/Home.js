import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Grid } from "@material-ui/core";

import useStyles from "./style";

import api from "../../services/api";
import BookCard from "../../components/Book/BookCard";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getData() {
      const _books = await api.get("/books");
      if (_books.data) {
        const data = _books.data;
        console.log(data);
        setBooks(data);
      }
    }

    getData();
  }, []);

  const handleClick = () => {
    history.push("/book");
  };

  return (
    <>
      <button className={classes.button} onClick={handleClick}>
        Novo
      </button>
      <Grid container direction="row" justify="center" alignItems="center">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
