// to render a list of books
// using react-redux library to connect react with redux state
// react-redux forms the bridge between react and redux
// so we promote this Component to a container so that it will have a knowledge of redux state


// if we use curly braces we pull off a sigle property
import React, { Component } from 'react';
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
function mapStateToProps(state) {
  // whatever is returned will show up as props
  // inside of BookList
  return (


  );


}
