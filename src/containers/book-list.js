// to render a list of books
// using react-redux library to connect react with redux state
// react-redux forms the bridge between react and redux
// so we promote this Component to a container so that it will have a knowledge of redux state 

import React, { Component } from 'react';

export default class BookList extends Component {

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
