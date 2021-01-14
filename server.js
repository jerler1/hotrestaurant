// Require EXPRESS
const express = require("express");
// CREATE AN INSTANCE OF EXPRESS
const app = express();
// CREATE A PORT FOR THE APP TO RUN
// BUT ALSO LISTEN TO ENVIRONMENT VARIABLES SO WE CAN DEPLOY TO HEROKU
const PORT = process.env.PORT || 3000;
// ADD MIDDLEWARE
// COPY PASTE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CREATE AN ARRAY OF TABLES
const tables = [];
// CREATE AN ARRAY FOR WAITLIST
const waitlist = [];
// ARRAYS OF OBJECTS, OBJECTS SHOULD HAVE:
const arrayOfObjects = [{}];
// NAME
// PHONE
// EMAIL
// ID

// HTML ROUTES
// ROUTE FOR HOME
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});
// ROUTE FOR TABLES
app.get("/tables", (req, res) => {
  res.sendFile(path.join(__dirname, "tables.html"));
});
// ROUTE FOR RESERVE
app.get("/reserve", (req, res) => {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
// API ROUTES
app.get("/api/tables", (req, res) => {
  return res.json(tables);
});

// GET ALL TABLE DATA
app.get("/api/tables/:tables"),
  (req, res) => {
    var tableChosen = req.params.tables;

    for (let i = 0; i < tables.length; i++) {
      if (tableChosen === tables[i].routeName) {
        return res.json(tables[i]);
      }
    }
  };
app.get("/api/reserves", (req, res) => {
  return res.json(waitlist);
});
app.get("/api/reserves/:reserves"),
  (req, res) => {
    var waitChosen = req.params.waitlist;

    for (let i = 0; i < waitlist.length; i++) {
      if (waitChosen === waitlist[i].routeName) {
        return res.json(waitlist[i]);
      }
    }
  };



// CREATE A TABLE/RESERVATION

// LISTEN ON PORT
app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});
