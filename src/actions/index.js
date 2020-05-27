import * as types from './actionsType';

export const createBook = book => ({
  type: types.CREATE_BOOK,
  payload: book,
});

export const removeBook = book => ({
  type: types.REMOVE_BOOK,
  payload: book,
});

export const categoryFilter = category => {
  console.log("ACTION CREATOR: ", category);
  return {
    type: 'CHANGE_FILTER',
    payload: category
  }
};
