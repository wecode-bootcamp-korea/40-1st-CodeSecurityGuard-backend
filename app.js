require("dotenv").config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const route = require('./api/routes')

const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.get("/ping", (req, res)=>{
    res.status(200).json({message: "pong"});
})
 
app.listen(8000,()=>{
    console.log('Listening to request on 127.0.0.1:8000')
})

