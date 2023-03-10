const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const authRoute = require('./routes/Authentification/authRoute')
const sequelize = require('./models/sequelize');
const formationRoute = require('./routes/formations/formationRoutes');
const bookRoute = require('./routes/livres/livre');
const blogsRoute = require('./routes/blogs/blogRoutes');
const letterRoute = require('./routes/letters/letter');
const paiementRoute = require('./routes/paiement/tron/paiementRoutes')
const btnRoute = require('./routes/payment/btnRoutes')
const port = process.env.SERVER_HOST_PORT || 8080

const app = express();
app.set('view engine', 'ejs');
require('dotenv').config();

const corsOptions = {
  origin : `${process.env.SERVER_HOST}:${process.env.SERVER_HOST_PORT}` || "http://localhost:8080" 
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use('/api/v1/', authRoute)
app.use('/api/v1/', formationRoute)
app.use('/api/v1/', bookRoute)
app.use('/api/v1/', blogsRoute)
app.use('/api/v1/', blogsRoute)
app.use('/api/v1/', letterRoute)  
app.use('/api/v1/', paiementRoute)  
app.use('/api/v1/', btnRoute) 
sequelize.initDb()
app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
module.exports = app;
