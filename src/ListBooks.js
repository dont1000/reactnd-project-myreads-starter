import React from 'react'
import Book from'./Book'

const ListBooks =(props) =>{
const {books, updateBooks} = props
 return  <ol className="books-grid">
       {books.map((book) => {
         return <li key={book.title}>
             <Book book={book} updateBooks= {updateBooks}/>
           </li>;
       })}
     </ol>;
}

export default ListBooks 