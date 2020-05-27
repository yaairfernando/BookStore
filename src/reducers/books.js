import * as types from '../actions/actionsType';

let counter = 3;


export default (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_BOOK:
      counter += 1;
      return { ...state, [counter]: action.payload };
    case types.REMOVE_BOOK:
      
      // CURRENT WORKIGN SOLUTION
      // let newState = convertBackToObj(Object.values(state).filter(book => (book.id !== action.payload.id)))
      // return { ...newState }


      //// FIRST CODE VERSION
      return { ...state };
    default:
      return state;
  }
};

const convertBackToObj = (arr) => {
  let newState = {};
  for (let i = 0; i < arr.length; i++) {
    newState[arr[i].id] = arr[i];
  }
  console.log("NEW STATE: ", newState);
  return newState
}
