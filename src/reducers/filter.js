import * as types from '../actions/actionsType';

export default (state = '', action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
