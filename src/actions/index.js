import * as types from './actionsType';

export const fecthBooks = () => ({
  type: types.FETCH_BOOK,
});

export const createBook = book => {
  console.log("ACTION CREATOR: ", book);
  return {
    type: 'CREATE_BOOK',
    payload: book
  }
};

export const removeBook = id => ({
  type: types.REMOVE_BOOK,
  payload: id,
});
