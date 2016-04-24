### Redux
---
### What is it?
Redux allows us to contain all the application data in one place.React then only contains the views rendered in an application. Redux centralizes all of app's data inside one JS object which we refer as the application state.

---
### Real world example
Tinder

#### Data contained in Tinder application
* User( images and chat logs)
* list of users to be reviewed
* currently viewed users for image swiping
* list of current users with a conversation
* currently viewed conversation

#### Views contained in the Tinder application( react )
* Image Card
* conversation list
* text list ( list of chat messages)
* like/dislike buttons
* text item( individual message )

---
### Terminologies used in Redux
---
#### Reducer
It is a function that returns a piece of the application state. Since an application state can have many pieces so we can have many different reducers.

#### Creating a Reducer
It is a two step process
* Create a Reducer
* Wire it into the application - To connect a react component with redux state a separate library called react-redux is needed.

#### react-redux library
It forms a bridge between react and redux libraries. Normally the Components which don't have a knowledge of redux state are referred as dumb components and components which have knowledge of redux state are referred as smart components. To make a component a smart component we make use of container class in react-redux.

#### How to decide what is a container and what is a react component ? ####
In general, the most **parent component** that cares about a piece of state to be a container. In this case, BookList cares about when the list of books changes so it can be a container. Also BookDetail cares about when the active book changes so it can be a component. The App component on the other hand does not care about the list of books and the currently selected books. It only renders BookList and BookDetail on the page. So App will be a dumb component while BookList/BookDetail will be smart components.
---
#### Actions and Action Creator
* When user triggers an event such as a user click, it calls an action creator.
* Action is an object that flows through all of the different reducers.
* Action Creator- It is a function that returns an action. This action is automatically sent to all the reducers inside of the application. If the reducer returns something then that corresponding property in the global state is set to that value. Once all the reducers have processed the action the newly assembled state gets sent to all the different containers. Containers then re-render with new state/props.

#### How to wire action creator to all the redux?
