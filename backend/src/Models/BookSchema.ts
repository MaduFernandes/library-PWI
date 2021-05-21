import mongoose from "../Database/Database";

export const BookSchema = new mongoose.Schema({
  bookId: {},
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("Book", BookSchema);

export default Book;
