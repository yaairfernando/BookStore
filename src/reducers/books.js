import * as types from '../actions/actionsType';

let newState;

export default (state = [], action) => {
  switch (action.type) {
    case types.CREATE_BOOK:
      newState = [...state];
      newState.push(action.payload);
      return newState;
    case types.REMOVE_BOOK:
      return state.filter(e => e.id !== action.payload.id);
    default:
      return state;
  }
};
