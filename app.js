const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require('./routes/Authentification/authRoute')
const dbConexion = require('./models/index');
const port = process.env.SERVER_HOST_PORT || 


dbConexion()
const app = express();
require('dotenv').config();
const corsOptions = {
  origin : `${process.env.SERVER_HOST}:${process.env.SERVER_HOST_PORT}` || "http://localhost:3001" 
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/',authRoute)
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
module.exports = app;
