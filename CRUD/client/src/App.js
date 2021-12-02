// import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import Axios from 'axios';

const API_Base_URL = "http://localhost:5001";
function App() {

  const [movieName, setMovieName] = useState('')
  const [review, setReview] = useState('')

  const [movieReviewList,setMovieList] = useState([]);

  useEffect(()=>{
    Axios.get(API_Base_URL+"/api/get").then((response)=>{
      console.log("movie",response.data);
      setMovieList(response.data);
    });
  },[]);

  const submitReview = () =>{
    console.log('movie_name' + movieName)
    console.log('review' + review)
    Axios.post(API_Base_URL+"/api/insert", {
      movieName:movieName,
      movieReview:review,
    }).then(()=>{
      // alert('successful insert');
      setMovieList([...movieReviewList])
    });
  };

  return (
    <div className="App">
      <h1 style={{color:'red'}}>CRUD-APP</h1>
      <div className="form">
        <label>Movie Name:</label>
        <input type="text" name="movieName" onChange={(e)=>{
          setMovieName(e.target.value)
        }}/>
        <label>Review:</label>
        <input type="text" name="review"onChange={(e)=>{
          setReview(e.target.value)
        }}/>

        <button className="button" onClick={submitReview}>Submit</button>
      </div>
      
      {movieReviewList.map((val)=>{
        return(
          <h1>
            Movie Name : {val.movieName} | Movie Review : {val.movieReview}
          </h1>
        )
      })}
    </div>
  );
}

export default App;
