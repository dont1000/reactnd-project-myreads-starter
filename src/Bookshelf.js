import React from 'react'
import ListBooks from './ListBooks'


const Bookshelf=(props)=>{

    const {shelf, books} = props
    return <div className="bookshelf">
        <h2 className="bookshelf-title">{shelf.head}</h2>
        <div className="bookshelf-books">
          <ListBooks books = {books} />
        </div>
      </div>;
  

}


export default Bookshelf;

