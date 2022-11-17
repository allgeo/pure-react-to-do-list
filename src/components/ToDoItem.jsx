import React from "react";

function ToDoItem(props) {
    return (
        <>
            <li
                onClick={() => {
                    props.onChecked(props.id);
                }}
                style={{ listStyle: "square" }}
            >
                {props.text}
            </li>
        </>
    );
}

export default ToDoItem;
