import React from 'react'
import Book from'./Book'

const ListBooks =(props) =>{
const {books} = props
 return  <ol className="books-grid">
       {books.map((book) => {
         return <li key={book.title}>
             <Book data={book} />
           </li>;
       })}
     </ol>;
}

export default ListBooks 