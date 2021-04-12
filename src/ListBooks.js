import React from 'react'
import Book from'./Book'

const ListBooks =(props) =>{
const {books, updateBooks} = props
 return  <ol className="books-grid">
       {books ? books.map((book) => {
         return <li key={book.id}>
             <Book book={book} updateBooks= {updateBooks}/>
           </li>;
       }):''}
     </ol>;
}

export default ListBooks 