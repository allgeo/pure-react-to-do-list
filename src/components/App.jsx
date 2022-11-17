import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function addToDoItems(event) {
        if (inputText.trim().length === 0) {
            alert("Please add a to-do task");
        } else {
            setItems((prevItems) => {
                return [...prevItems, inputText];
            });
            setInputText("");
        }
    }
    function handleInput(event) {
        const { name, value } = event.target;
        setInputText(value);
    }

    function deleteItem(id) {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleInput} type="text" value={inputText} />
                <button onClick={addToDoItems}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem
                            key={uuidv4()}
                            id={index}
                            text={todoItem}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
