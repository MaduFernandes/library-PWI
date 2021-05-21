import express from "express";
import * as BookController from "./Controllers/BookController";
import * as bodyParser from "body-parser";

const app = express();

app.set("port", 3000);

app.use(bodyParser.json());

app.get("/books", BookController.getAllBooks);
app.get("/book/:id", BookController.getBook);
app.post("/books", BookController.saveBook);
app.delete("/book/:id", BookController.deleteBook);
app.put("/book/:id", BookController.updateBook);

app.listen(app.get("port"), () => {
  console.log("Servidor rodando na porta", app.get("port"));
});
