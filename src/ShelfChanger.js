import React from 'react'

const ShelfChanger =(props) => (
      <select value={props.shelf} onChange={props.handleOnChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
);



export default ShelfChanger
