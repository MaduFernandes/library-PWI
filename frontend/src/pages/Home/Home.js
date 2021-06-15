import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Typography,
  IconButton,
  TablePagination,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

import useStyles from "./style";

import api from "../../services/api";

import CardAction from "../../components/Modal/CardAction/CardAction";
import CardForm from "../../components/Modal/Form/CardForm";
import CardText from "../../components/Modal/Text/CardText";

const Home = () => {
  const classes = useStyles();
  const history = useHistory();
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [edit, setEdit] = useState(false);
  const [remove, setRemove] = useState(false);
  const [show, setShow] = useState(false);
  const [id, setId] = useState();
  const [book, setBook] = useState({});

  useEffect(() => {
    async function getData() {
      const _books = await api.get("/books");
      if (_books.data) {
        const data = _books.data;
        setBooks(data);
      }
    }

    getData();
  }, [books]);

  const handleClick = () => {
    history.push("/book");
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleEdit = (row) => {
    setEdit(true);
    setBook(row);
  };

  const handleCloseCard = () => {
    setEdit(false);
  };

  const handleDelete = async (row) => {
    setRemove(true);
    setId(row._id);
  };

  const handleDeleteClose = () => {
    setRemove(false);
  };

  const handleSave = async (event) => {
    if (event.target.textContent === "Excluir") {
      await api.delete(`/book/${id}`);
      setRemove(false);
    }
  };

  const handleShow = (row) => {
    setShow(true);
    setBook(row);
  };

  const handleShowClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className={classes.typography}>
        <Typography variant="h2" gutterBottom>
          Livros
        </Typography>

        <button className={classes.button} onClick={handleClick}>
          Novo
        </button>
      </div>

      <TableContainer component={Paper}>
        <Table aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.title}>Autor</TableCell>
              <TableCell className={classes.title} align="center">
                Nome
              </TableCell>
              <TableCell className={classes.title} align="center">
                Preço
              </TableCell>
              <TableCell className={classes.title} align="center">
                Ação
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.author}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center">
                  <IconButton color="inherit" onClick={() => handleEdit(row)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="inherit" onClick={() => handleShow(row)}>
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton color="inherit" onClick={() => handleDelete(row)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={books.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />

      {edit && <CardForm open={edit} close={handleCloseCard} book={book} />}

      {remove && (
        <CardAction
          open={remove}
          close={handleDeleteClose}
          save={handleSave}
          text={"Deseja excluir este registro ?"}
          icon={<HighlightOffIcon className={classes.icon} />}
          btn={"Excluir"}
        />
      )}

      {show && <CardText open={show} close={handleShowClose} book={book} />}
    </>
  );
};

export default Home;
