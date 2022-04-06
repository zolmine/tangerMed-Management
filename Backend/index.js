const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/index')
const cookieParser = require('cookie-parser')

const cors = require('cors')
const log=require("morgan")
 require('dotenv').config();
// console.log(process.env);
app.use(cookieParser())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())
app.use(log("dev"))
mongoose.connect("mongodb://127.0.0.1:27017", { useNewUrlParser: true, useUnifiedTopology: true ,  useUnifiedTopology: true  }, (d,err) => {
    // console.log(err);
    console.log('Database Connected') 
})
app.get('/',(req,res)=>{
    return 
})
app.use('/', router)

app.listen(process.env.PORT, () => {
    console.log(`The server is running at http://localhost:${process.env.PORT}`)
})