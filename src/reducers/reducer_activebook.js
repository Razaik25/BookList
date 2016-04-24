
// state is not application state but only the state this reducer is responsible for
// reducer is called whenever action is dispatched by the app
// state = null if state is undefined

export default function (state = null , action) {
  switch (action.type) {
    case 'SELECT_BOOK':
    return action.payload;
  }

  return state
}
