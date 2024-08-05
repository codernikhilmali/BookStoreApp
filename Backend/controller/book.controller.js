import Book from '../model/book.model.js';

// Existing function to get all books
export const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// New function to get free books
export const getFreeBooks = async (req, res) => {
  try {
    const freeBooks = await Book.find({ Category: 'Free' });
    res.json(freeBooks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
