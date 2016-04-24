import React from 'react';
import { Component } from 'react';
import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    console.log('in app')
    return (
      <div>
        <BookList />
      </div>
    );
  }

}
