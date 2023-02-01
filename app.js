const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const port = process.env.SERVER_HOST_PORT || 3001


const app = express();
require('dotenv').config();

const corsOptions = {
  origin : `${process.env.SERVER_HOST}:${process.env.SERVER_HOST_PORT}` || "http://localhost:3001" 
}


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Saitama application." });
  });

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})


module.exports = app;
