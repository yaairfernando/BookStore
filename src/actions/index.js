import * as types from './actionsType';

export const createBook = book => ({
  type: types.CREATE_BOOK,
  payload: book,
});

export const removeBook = id => ({
  type: types.REMOVE_BOOK,
  payload: id,
});
