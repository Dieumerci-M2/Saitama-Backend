const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require('./routes/Authentification/authRoute')
const sequelize = require('./models/sequelize');
const formationRoute = require('./routes/formations/formationRoutes');
const bookRoute = require('./routes/livres/livre');
const blogsRoute = require('./routes/blogs/blogRoutes');
const letterRoute = require('./routes/letters/letter');
const port = process.env.SERVER_HOST_PORT || 8080



const app = express();
require('dotenv').config();
const corsOptions = {
  origin : `${process.env.SERVER_HOST}:${process.env.SERVER_HOST_PORT}` || "http://localhost:3001" 
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/', authRoute)
app.use('/api/v1/', formationRoute)
app.use('/api/v1/', bookRoute)
app.use('/api/v1/', blogsRoute)
app.use('/api/v1/', blogsRoute)
app.use('/api/v1/',letterRoute)
sequelize.initDb()
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
module.exports = app;
