import { Request, Response } from "express";
import Book from "../Models/BooksSchema";

// GET - /books
export const getAllBooks = (request: Request, response: Response) => {
  Book.find((error: any, books: any) => {
    if (error) {
      response.send(error);
    } else {
      response.send(books);
    }
  });
};

// GET - /book/{id}
export const getBook = (request: Request, response: Response) => {
  Book.findById(request.params.id, (error: any, books: any) => {
    if (error) {
      response.send(error);
    } else {
      response.send(books);
    }
  });
};

// POST - /books
export const saveBook = (request: Request, response: Response) => {
  const newBook = new Book(request.body);

  newBook.save((error: any) => {
    if (error) {
      response.send(error);
    } else {
      response.send(newBook);
    }
  });
};

// DELETE - /book/{id}
export const deleteBook = (request: Request, response: Response) => {
  Book.deleteOne({ _id: request.params.id }, (error: any) => {
    if (error) {
      response.send(error);
    } else {
      response.send("Successfully Deleted the Book");
    }
  });
};

// PUT - /book/{id}
export const updateBook = (request: Request, response: Response) => {
  Book.findByIdAndUpdate(
    request.params.id,
    request.body,
    (error: any, book: any) => {
      if (error) {
        response.send(error);
      } else {
        response.send("Successfully Updated the Book");
      }
    }
  );
};
