import React, { useState } from "react";

export default function AddTodo({ addTodo, todo }) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const submit = (e) => {
        e.preventDefault();

        let emailArray = todo.map((todo) => {
            return todo.email;
        })
        const checkEmail = emailArray.find(element => element === email);

        let numberArray = todo.map((todo) => {
            return todo.number;
        })
        const checkNumber = numberArray.find(element => element === number);

        if ((checkEmail !== undefined) && (checkNumber !== undefined)) {
            alert(`${checkNumber} & ${checkEmail} already exist!`)
        } else if (checkNumber !== undefined) {
            alert(`${checkNumber} already exist!`)
        } else if (checkEmail !== undefined) {
            alert(`${checkEmail} already exist!`)
        } else if (!name || !number || !email) {
            alert("name,number and email can not be null");
        } else {
            addTodo(name, number, email);
            setName("");
            setNumber("");
            setEmail("");
        }
    }
    return (
        <div className="container">
            <h3>Add ToDo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label className="form-label">Enter Name</label>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} className="form-control" value={name} id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Your Mobile Number</label>
                    <input type="text" onChange={(e) => { setNumber(e.target.value) }} className="form-control" id="des" value={number} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Enter Your Email Id</label>
                    <input type="text" onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="des" value={email} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}