import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

function App() {
const [movieName, setMovieName] = useState("");
const [review, setReview] = useState("");
const [movieReviewList, setMovieList] = useState([])


const [newReview, setNewReview] = useState(
  "");

useEffect(() =>
{
  axios.get('http://localhost:3001/api/get').then((response) =>{
    setMovieList(response.data);
  })
}, [])

const submitReview = () =>{
  axios.post('http://localhost:3001/api/insert', {movieName: movieName, movieReview: review})

    setMovieList([...movieReviewList, {movieName: movieName, movieReview: review}
    ,]);
    //alert("successful insert");
  
};

  const deleteReview = (movie) =>
  {
    axios.delete(`http://localhost:3001/api/delete/${movie}`)
  }

  const updateReview = (movie) =>
  {
    axios.put(`http://localhost:3001/api/update`,{
    movieName: movie, movieReview: newReview,
  });
  setNewReview("");
  }


  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name:</label>
        <input type="text" name="movieName"  onChange={(e) => {
          setMovieName(e.target.value)
        }}/>
        <label>Review:</label>
        <input type="text" name="movieReview" onChange={(e) => {
          setReview(e.target.value)
        }} />

        <button onClick={submitReview}>Submit</button>

        {movieReviewList.map((val) =>{
          return(
            <div className="card">
            <h1>{val.movieName}</h1> 
            <p>{val.movieReview} </p>

            <button onClick={ () => {deleteReview(val.movieName)}}>Delete</button>
            <input type="text" id="updateInput" onChange={(e) =>{
              setNewReview(e.target.value)
            }}/>
            <button onClick={() => {updateReview(val.movieName)}}>Update</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;