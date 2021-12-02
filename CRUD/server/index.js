const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5001;
const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Addweb@123',
    database:'CRUDDatabase'
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("/api/get",(req,res)=>{
    db.query("SELECT * FROM movie_reviews",(err,result)=>{
        console.log(result);
        res.send(result);
    });
})
app.get("/",(req,res)=>{
    res.send('hello');
})
app.post("/api/insert",(req,res)=>{
    console.log(req.body)
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;
    console.log(movieName,movieReview);

    
    db.query("INSERT INTO movie_reviews (movieName,movieReview) VALUES (?,?)"
    ,[movieName,movieReview],(err,result)=>{
        console.log(err);
    });

});

app.listen(port,()=>{
    console.log(port +' running');
});