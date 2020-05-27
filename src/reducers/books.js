import * as types from '../actions/actionsType';

let counter = 3;


export default (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_BOOK:
      counter += 1;
      return { ...state, [counter]: action.payload };
    case types.REMOVE_BOOK:
      return { ...state.filter(book => (book.id !== action.payload.id)) };
    default:
      return state;
  }
};
