
// defining an action creator selectBook
export function selectBook(book) {
  // selectBook is an ActionCreator returning an action
  
  return {
    type: SELECT_BOOK,
    payload: book
  };
}
