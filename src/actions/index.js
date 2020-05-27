import * as types from './actionsType';

export const createBook = book => ({
  type: types.CREATE_BOOK,
  payload: book,
});

export const removeBook = book => ({
  type: types.REMOVE_BOOK,
  payload: book,
});

export const categoryFilter = category => ({
  type: types.CHANGE_FILTER,
  payload: category,
});
