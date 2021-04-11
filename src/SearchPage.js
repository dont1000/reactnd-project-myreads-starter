import React from 'react'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'
import ListBooks from './ListBooks'
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  state = {
    searchedBooks: [],
    msg: "",
  };
  noBookMsg = "No Book found, please try again";

  emptyMessage = () => {
    this.setState({ msg: "" });
  };

  searchBook = (query) => {
    BooksAPI.search(query).then((resultBooks) => {
      if (!resultBooks.length) {
        this.setState({ msg: this.noBookMsg });
        return;
      }
      const searchResultIds = resultBooks.map((book) => book.id);
      const searchedBooksinList = this.props.allBooks.filter((book) => {
        return searchResultIds.includes(book.id);
      });
      this.setState({
        searchedBooks: [...resultBooks, ...searchedBooksinList],
      });
    });
  };

  search=(query) =>{
    this.reset();
    this.searchBook(query);
  }

  render() {
    return <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <Searchbar handleTextInput={this.searchBook} handleChange={this.emptyMessage} />
          </div>
        </div>
        <div className="search-books-msg">{this.state.msg}</div>
        <div className="search-books-results">
          <ListBooks books={this.state.searchedBooks} updateBooks={this.props.updateBooks} />
        </div>
        <div> {this.state.errorMsg} </div>
      </div>;
  }
}

export default SearchPage

