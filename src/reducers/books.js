import * as types from '../actions/actionsType';

const initState = {
  books1: {
    id: 1,
    title: 'test1',
    content: 'test1Content',
  },
  books2: {
    id: 2,
    title: 'test2',
    content: 'test2Content',
  },
  books3: {
    id: 3,
    title: 'test3',
    content: 'test3Content',
  },
};

export default (state = initState, action) => {
  switch (action.types) {
    case types.FETCH_BOOK:
      return { state };

    default:
      return { state };
  }
};
