import React from "react";
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";

class BookrackPage extends React.Component {

  render() {
    const { shelfs, allBooks, updateBooks } = this.props;
     
    return (
        <div>
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
            </div>
            <div className="list-books-content">
            {shelfs.map((shelf, index) => {
                const books = allBooks.filter((book) => book.shelf === shelf.shelf);
                return <Bookshelf key={index} shelf={shelf} books={books} updateBooks={updateBooks} />;
            })}
            </div>

            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
  }
}

export default BookrackPage;
