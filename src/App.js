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
      { shelf: "currentlyReading", head: "Currently reading" },
      { shelf: "wantToRead", head: "Want to Read" },
      { shelf: "read", head: "Read" },
    ],
  };
  componentDidMount() {
    this.loadAllBooks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(prevState.books) !== JSON.stringify(this.state.books)) {
      this.loadAllBooks();
    }
  }

  handleBookChanges = (inBook, inShelf) => {
    if (this.state.books.some((book) => book.id === inBook.id)) {
      this.updateBooks(inBook, inShelf);
    } else {
      this.addBook(inBook, inShelf);
    }
  };

  addBook = (inBook, inShelf) => {
    BooksAPI.update(inBook, inShelf).then(() => {
      this.setState((currentState) => ({
        books: [...currentState.books, inBook],
      }));
    });
  };

  updateBooks = (inBook, inShelf) => {
    BooksAPI.update(inBook, inShelf).then(() => {
      this.setState((prevState) => ({
        books: prevState.books.map((book) => {
          return book.id === inBook.id ? { ...book, shelf: inShelf } : book;
        }),
      }));
    });
  };

  loadAllBooks = () => {
    BooksAPI.getAll().then((allBooks) => {
      this.setState(() => {
        return { books: allBooks };
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          exact
          render={() => (
            <SearchPage
              allBooks={this.state.books}
              updateBooks={this.handleBookChanges}
            />
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <BookrackPage
              updateBooks={this.handleBookChanges}
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
