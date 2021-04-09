import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

class BookrackPage extends React.Component {
  render() {
    return(
    <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content" />
          <Bookshelf shelfName="read" />
          <Bookshelf shelfName="read 2" />
          <Bookshelf shelfName="read 3" />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BookrackPage;
