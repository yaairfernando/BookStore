import * as types from '../actions/actionsType';

let counter = 3;
let newState;

export default (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_BOOK:
      counter += 1;
      return { ...state, [counter]: action.payload };
    case types.REMOVE_BOOK:
      newState = {};
      Object.keys(state).forEach(e => {
        if (state[e].id.toString() !== action.payload.id.toString()) {
          newState[e] = state[e];
        }
      });
      return { ...newState };
    default:
      return state;
  }
};
