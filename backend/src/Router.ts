import express from "express";
import * as BookController from "@Controllers/BookController";

const router = express.Router();

router.get("/books", BookController.findAll);
router.get("/book/:id", BookController.findOne);
router.post("/books", BookController.saveBook);
router.delete("/book/:id", BookController.deleteBook);
router.put("/book/:id", BookController.updateBook);

export default router;
