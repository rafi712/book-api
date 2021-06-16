import books from '../books.js';

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const book = books.filter((item) => item.id === bookId)[0];

  if (book) {
    const response = h.response({
      status: 'success',
      data: { book },
    });

    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });

  response.code(404);
  return response;
};

export default getBookByIdHandler;
