import React from 'react'

export default function TodoItem({ todoItem, onDelete }) {

    return (
        <div>
            <h2>{todoItem.name}</h2>
            <h2>{todoItem.number}</h2>
            <h2>{todoItem.email}</h2>
            <button className="btn btn-danger" key={todoItem.no} onClick={() => onDelete(todoItem)}>Delete</button>
        </div>
    )
}