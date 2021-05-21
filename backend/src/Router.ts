import express from "express";
import * as BookController from "./Controllers/BookController";

const router = express.Router();

router.get("/books", BookController.getAllBooks);
router.get("/book/:id", BookController.getBook);
router.post("/books", BookController.saveBook);
router.delete("/book/:id", BookController.deleteBook);
router.put("/book/:id", BookController.updateBook);

export default router;
