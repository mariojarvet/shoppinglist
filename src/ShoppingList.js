import React, { useState } from 'react';

function ShoppingList() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  const handleRemove = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Shopping List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add an item"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
