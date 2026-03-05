const  dotenv = require('dotenv')
dotenv.config()
const { connectToDatabase } = require('./database/dbConfig');
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')

//database connection
connectToDatabase();

//express and middleware setup
const app = express()
app.use(cors()) 
app.use(router)


const Port=process.env.PORT || 8000;


app.listen(Port, () => {

  console.log(`Server is running on port ${Port}`) 
})