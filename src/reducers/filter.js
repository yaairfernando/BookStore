import * as types from '../actions/actionsType';

export default (state = 'ALL', action) => {
  switch (action.type) {
    case types.CHANGE_FILTER:

      return ...state;
    default:
      return state;
  }
};
