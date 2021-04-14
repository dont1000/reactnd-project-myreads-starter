import React from 'react'
import ShelfChanger from './ShelfChanger'


const Book=(props)=>{
    const { book, updateBooks } = props;
    const handleOnChange = (shelf) => {
        updateBooks(book, shelf);
    };
   
return (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
        }}
      />
      <div className="book-shelf-changer">
        
        <ShelfChanger shelf={book.shelf} handleOnChange={handleOnChange} />
      </div>
    </div>
    <div className="book-title">{book.title || ""}</div>
    <div className="book-authors">
      {(book.authors && book.authors.join(", ")) || ""}
    </div>
  </div>
);
}


export default Book