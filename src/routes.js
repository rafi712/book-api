import addBookHandler from './handlers/addBookHandler.js';
import getAllBooksHandler from './handlers/getAllBooksHandler.js';
import getBookByIdHandler from './handlers/getBookByIdHandler.js';
import editBookByIdHandler from './handlers/editBookByIdHandler.js';
import deleteBookByIdHandler from './handlers/deleteBookByIdHandler.js';

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

export default routes;
