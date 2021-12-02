const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
// const bodyparser = require("body-parser");

const app = express();


const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Addweb@123",
        database: "LoginSystemk"
});

app.use(cors());
app.use(express.json());
// app.use(bodyparser.urlencoded({extended: true}))


app.post("/register", (req, res) =>
{
    const username = req.body.username;
    const password = req.body.password; 

    const sqlInsert = "INSERT INTO users (username, password) VALUES (?,?)";
    db.query(sqlInsert, [username, password], (err, result) =>
    {
        console.log(result);
    });
});

// app.delete('/api/delete/:movieName', (req, res) =>
// {
//     const name = req.params.movieName
//     const sqlDelete = "DELETE FROM movies_reviews WHERE movieName = ?";
//     db.query(sqlDelete, name,  (err, result) =>
//     {
//         if (err) console.log(err);
//     });
// });

// app.put('/api/update', (req, res) =>
// {
//     const name = req.body.movieName;
//     const review = req.body.movieReview;
//     const sqlUpdate = "UPDATE movies_reviews SET movieReview = ? WHERE movieName = ?";
//     db.query(sqlUpdate, [review, name],  (err, result) =>
//     {
//         if (err) console.log(err);
//     });
// });

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