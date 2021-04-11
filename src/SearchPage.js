import React from 'react'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'
import ListBooks from './ListBooks'
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  state = {
    searchedBooks: []
  };

  searchBook = (query) => {
 
      BooksAPI.search(query).then((res) => {
        if(!res.length){ return}
        const searchResultIds = res.map((book) => book.id);
        const searchResultBooks = this.props.allBooks.filter(
            (book) => {
              return searchResultIds.includes(book.id);
            }
          );
          this.setState({ searchedBooks: searchResultBooks });
       
      });
  };

  render() {
    return <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <Searchbar handleTextInput={this.searchBook} />
          </div>
        </div>

        <div className="search-books-results">
          <ListBooks books={this.state.searchedBooks} updateBooks={this.props.updateBooks} />
        </div>
        <div> {this.state.errorMsg} </div>
      </div>;
  }
}

export default SearchPage

