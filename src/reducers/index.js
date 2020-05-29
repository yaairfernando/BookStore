import { combineReducers } from 'redux';
import FecthBooks from './books';
import FilterBook from './filter';

export default combineReducers({
  books: FecthBooks,
  filter: FilterBook,
});
