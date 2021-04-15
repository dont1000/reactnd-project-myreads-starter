import React from 'react'
import {Link} from 'react-router-dom'
import Searchbar from './Searchbar'
import ListBooks from './ListBooks'
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  state = {
    searchedBooks: [],
    msg: "",
    isLoading: false,
  };
  noBookMsg = "No books found, please try again";

  emptyMessage = () => {
    this.setState({ msg: "" });
  };

  reset = () => {
    this.setState({ searchedBooks: [], msg:'' });
  };

  

  searchBook = (query) => {
    this.setState({isLoading: true });
    BooksAPI.search(query).then((resultBooks) => {
      if (resultBooks.error) {
        this.setState({
          msg: this.noBookMsg,
          isLoading: false,
          searchedBooks: [],
        });
        return;
      }
      const allBookIds = this.props.allBooks.map((book) => book.id);
      resultBooks.forEach((book) => {
        if (allBookIds.includes(book.id)) {
          const indexAllbooks = allBookIds.indexOf(book.id);
          book.shelf = this.props.allBooks[indexAllbooks].shelf;
        } else {
          book.shelf = "none";
        }
      });

      this.setState({
        searchedBooks: resultBooks,
        isLoading: false,
        msg: "",
      });
    });
  };

  search = (query) => {
    console.log("handleText", query)

    //this.reset();
    query===''?this.reset() : this.searchBook(query);
  
  };

  render() {
    return <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <Searchbar handleInputQuery={this.search} handleChange={this.emptyMessage} />
          </div>
        </div>
        <div className="search-books-msg">{this.state.msg}</div>
        {this.state.isLoading && <div className="load5">
            <div className="loader">Loading...</div>
          </div>}
        <div className="search-books-results">
          <ListBooks books={this.state.searchedBooks} updateBooks={this.props.updateBooks} />
        </div>
        <div> {this.state.errorMsg} </div>
      </div>;
  }
}

export default SearchPage

