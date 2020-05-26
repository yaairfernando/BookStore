import * as types from '../actions/actionsType';

let counter = 3;

const initState = {
  1: {
    id: Math.random(),
    title: 'test1',
    category: 'Action',
  },
  2: {
    id: Math.random(),
    title: 'test2',
    category: 'Learning',
  },
  3: {
    id: Math.random(),
    title: 'test3',
    category: 'Biography',
  },
};

export default (state = initState, action) => {
  switch (action.type) {
    case types.CREATE_BOOK:
      counter += 1;
      return { ...state, [counter]: action.payload };
    case types.REMOVE_BOOK:
      return { ...state.filter(book => (book.id !== action.payload)) };
    default:
      return state;
  }
};
