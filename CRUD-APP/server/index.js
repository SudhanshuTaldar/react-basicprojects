const express = require("express");
const bodyparser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "Addweb@123",
        database: "CRUDDataBase"
});

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended: true}))

app.get('/api/get', (req, res) =>
{
    const sqlSelect = "SELECT * FROM movies_reviews ";
    db.query(sqlSelect, (err, result) =>
    {
        res.send(result);
    });
})


app.post("/api/insert", (req, res) =>
{
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview; 

    const sqlInsert = "INSERT INTO movies_reviews (movieName, movieReview) VALUES (?,?)";
    db.query(sqlInsert, [movieName, movieReview], (err, result) =>
    {
        console.log(result);
    });
});

app.delete('/api/delete/:movieName', (req, res) =>
{
    const name = req.params.movieName
    const sqlDelete = "DELETE FROM movies_reviews WHERE movieName = ?";
    db.query(sqlDelete, name,  (err, result) =>
    {
        if (err) console.log(err);
    });
});

app.put('/api/update', (req, res) =>
{
    const name = req.body.movieName;
    const review = req.body.movieReview;
    const sqlUpdate = "UPDATE movies_reviews SET movieReview = ? WHERE movieName = ?";
    db.query(sqlUpdate, [review, name],  (err, result) =>
    {
        if (err) console.log(err);
    });
});

app.get("/", (req, res) =>
{
    // const sqlInsert = "INSERT INTO movies_reviews (movieName, movieReview) VALUES ('inception', 'good movie');"
    // db.query(sqlInsert, (err, result) =>{
       
    // });
    res.send("hello world"); 
});
app.listen(3001, () =>{
    console.log("runnig on port 3001");
});