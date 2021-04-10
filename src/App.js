import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import BookrackPage from './BookrackPage'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelfs: [
      { shelf: "read", head: "Read" },
      { shelf: "wantToRead", head: "Want to Read" },
      { shelf: "currentlyReading", head: "Currently reading" },
    ],
  };
  componentDidMount() {
    BooksAPI.getAll().then((allBooks) => {
      this.setState(() => {
        return { books: allBooks };
      });
    });
  }
  updateBooks = (inBook, inShelf) => {

    BooksAPI.update(inBook, inShelf).then(() => {
      this.setState((prevState) =>({
        books: prevState.books.map((book)=>{
         return book.id === inBook.id ? {...book, shelf:inShelf} : book
         })
        })) 
      }
    )};


  render() {
    return (
      <div className="app">
        <Route path="/search" exact render={() => <SearchPage />} />
        <Route
          path="/"
          exact
          render={() => (
            <BookrackPage
              updateBooks={this.updateBooks}
              shelfs={this.state.shelfs}
              allBooks={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp
