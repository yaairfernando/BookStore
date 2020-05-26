import * as types from './actionsType';

export const fecthBooks = () => ({
  type: types.FETCH_BOOK,
});

export const addBook = book => ({
  type: types.ADD_BOOK,
  book,
});

export const removeBook = book => ({
  type: types.REMOVE_BOOK,
  id: book.id,
});
