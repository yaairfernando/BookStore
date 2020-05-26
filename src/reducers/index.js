import { combineReducers } from 'redux';
import FecthBooks from './books';

export default combineReducers({
  books: FecthBooks,
});
