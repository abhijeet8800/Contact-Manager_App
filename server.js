const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectionDb = require("./config/dbconnection");

const dotenv = require("dotenv").config();

connectionDb();

const app = express();

const port = process.env.PORT || 5000;


app.use(express.json()); // body parser i.e. if we want to get body from request we need this middleware to parse the body else the content of the body from the request will be undefined

app.use("/api/contacts", require("./routes/contactroute"));

app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler); //whenever we want to use a midddleware we use app.use function

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});