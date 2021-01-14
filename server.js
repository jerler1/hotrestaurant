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
app.get("/", () => {});
// ROUTE FOR TABLES
app.get("/tables", () => {});
// ROUTE FOR RESERVE
app.get("/reserve", () => {});
// API ROUTES
// GET ALL TABLE DATA

// CREATE A TABLE/RESERVATION

// LISTEN ON PORT
app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});
