import React, { useState } from "react";
import {Link} from "react-router-dom";

function AppOne() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <>
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todoItem) => (
              <>
                <li>{todoItem}</li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <button className="Homepage">
       <Link to ="/">
        <span>Home</span>
       </Link>
      </button>
    </>
  );
}

export default AppOne;
