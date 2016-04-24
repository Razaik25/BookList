// to render a list of books
// using react-redux library to connect react with redux state
// react-redux forms the bridge between react and redux
// Promote this Component to a container so that it will have a knowledge of redux state


// curly braces  pulls off a single property
import React, { Component } from 'react';
// connect function from react-redux
import { connect } from 'react-redux';

class BookList extends Component {

  // helper function
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}></li>
      );
    });
  }

  render(){
   return (
     <ul className="list-group col-sm-4">
       {this.renderList()}
     </ul>
   )
  }

}
// connect from react-redux provides mapStateToProps function
// if state changes then container will automatically re-render
function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList
  return (
    books: state.books
  );
}

// whenever we create a container, we don't export the Component
// but export connect which takes a function and a Component which produces a container

export default connect(mapStateToProps)(BookList);
