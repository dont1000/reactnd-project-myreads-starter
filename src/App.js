import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import BookrackPage from './BookrackPage'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books:[],
    shelfs:[ 
        {read:"Read"},
        {wantToRead:"Want to Read"},
        {currentlyReading:"Currently reading" }
      ]
  };
  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      this.setState(() => {
        return { books: allBooks };
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" exact render={() => <SearchPage />} />
        <Route path="/" exact render={() => <BookrackPage shelfs={this.shelfs} allBooks={this.books}/>} />
      </div>
    );
  }
}

export default BooksApp
