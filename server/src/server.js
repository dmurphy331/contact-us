const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const app = express();

//STATIC FOLDER
app.use(express.static(path.join(__dirname, "../client/build")));

// Body Parser Middleware
app.use(bodyParser.json());

// Deal with CORS
app.use(cors());

//CREATE CONNECTION
// @see documentenation at https://github.com/mysqljs/mysql
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

//CONNECT
db.connect((err) => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

// Start Express listening
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Test

// Test to make sure the API can talk to React
app.get("/", (req, res) => {
  return res.json({
    status: res.statusCode,
    data: {
      message: "API Active",
    },
  });
});

// An echo, to help with debugging
app.post("/", (req, res) => {
  return res.json({
    status: res.statusCode,
    data: {
      message: "ECHO!",
      posted: req.body,
    },
  });
});

// An API endpoint to store form post data
app.post("/create", (req, res) => {
  let payload = {
    name: req.body.name,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    county: req.body.county,
    postcode: req.body.postcode,
    telephone_number: req.body.telephone_number,
    email: req.body.email,
    message: req.body.message,
  };

  db.query("INSERT INTO submissions SET ?", payload, function (error) {
    if (error) throw error;
    return res.json({
      status: res.statusCode,
      data: {
        message: "Success",
      },
    });
  });
});

// An API endpoint to get submission data
app.get("/submissions", (req, res) => {
  db.query("SELECT * FROM submissions", function (error, results) {
    if (error) throw error;
    return res.json({
      status: res.statusCode,
      data: {
        submissions: results,
      },
    });
  });
});
