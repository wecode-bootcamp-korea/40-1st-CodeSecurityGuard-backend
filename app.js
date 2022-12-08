require("dotenv").config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./api/routes')

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());
app.use(routes)

app.get("/ping", (req, res)=>{
    res.status(200).json({message: "pong"});
})

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('Listening to request on 127.0.0.1:3000')
})

