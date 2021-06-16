import books from '../books.js';

const getAllBooksHandler = (request) => {
  const { name, reading, finished } = request.query;
  let allRequestedBooks = books;

  if (name) {
    const searchQuery = name.toLowerCase();
    allRequestedBooks = books.filter((book) => book.name.toLowerCase().includes(searchQuery));
  }

  if (reading) {
    allRequestedBooks = reading === '1'
      ? books.filter((book) => book.reading)
      : books.filter((book) => book.reading === false);
  }

  if (finished) {
    allRequestedBooks = finished === '1'
      ? books.filter((book) => book.finished)
      : books.filter((book) => book.finished === false);
  }

  return {
    status: 'success',
    data: {
      books: allRequestedBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  };
};

export default getAllBooksHandler;
