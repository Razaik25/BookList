// ./src/reducers/index.js

import { combineReducers } from 'redux';
import { BooksReducer } from './reducer_books'

// will add a key books to the global state object with value BooksReducer
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
