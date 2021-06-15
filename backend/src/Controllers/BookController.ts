import { Request, Response } from "express";
import Book from "../Models/BooksSchema";

// GET - /books
export const findAll = (request: Request, response: Response) => {
  const data = Book.find((error: any, books: any) => {
    if (!data) {
      return response.status(401).json({ error: "Not found" });
    }
    response.send(books);
  });
};

// GET - /book/{id}
export const findOne = (request: Request, response: Response) => {
  Book.findById(request.params.id, (error: any, books: any) => {
    if (error) {
      response.send(error);
    }
    response.send(books);
  });
};

// POST - /books
export const saveBook = (request: Request, response: Response) => {
  const newBook = new Book(request.body);

  newBook.save((error: any) => {
    if (error) {
      response.send(error);
    }
    response.send(newBook);
  });
};

// DELETE - /book/{id}
export const deleteBook = async (request: Request, response: Response) => {
  const bookId = request.params.id;

  await Book.findByIdAndRemove(bookId);

  response.send();
};

// PUT - /book/{id}
export const updateBook = (request: Request, response: Response) => {
  Book.findByIdAndUpdate(
    request.params.id,
    request.body,
    (error: any, book: any) => {
      if (error) {
        response.send(error);
      }
      response.send("Successfully Updated the Book");
    }
  );
};
