import * as types from '../actions/actionsType';

export default (state='', action) => {
  console.log("STATE:", state);
  switch (action.type) {
    case 'CHANGE_FILTER':
      let new_state = action.apyload
      return new_state;
    default:
      return state;
  }
};
