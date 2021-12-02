
import React from 'react';
import TodoItem from './TodoItem';


export default function Todos(props) {
    return (
        <div classNam="container">
            <h3 className="my-3">Todos List</h3>
            {props.todos.length === 0 ? "Null" :
                props.todos.map((todoItem) => {
                    return <TodoItem todoItem={todoItem} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}