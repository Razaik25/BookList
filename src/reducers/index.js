// ./src/reducers/index.js

import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_activebook';

// will add a key books/activebook to the global state object with value BooksReducer/ActiveBook
const rootReducer = combineReducers({
  books: BooksReducer,
  activebook: ActiveBook
});

export default rootReducer;
