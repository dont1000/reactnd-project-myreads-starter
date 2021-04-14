import React, { useState } from "react";

const ShelfChanger = (props) => {
 const [shelf, setShelf] = useState(props.shelf);
 const change = (shelfInput) => {
    setShelf(shelfInput);
    props.handleOnChange(shelfInput);
 };
  
  return <select value={shelf} onChange={(event) => change(event.target.value)}>
      <option value="move" disabled>
        Move to...
      </option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>;
};

export default ShelfChanger;
