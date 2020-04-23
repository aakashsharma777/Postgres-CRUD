require('dotenv').config()
var express=require('express');
var app=express();
const pg_conctn = require('./pg_connection');
//const db=require('./db')
var route=require('./api/router/index')

const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use('/api',route);
app.get('/',(req,res)=>{
    res.send("api running")
})

const port=process.env.PORT || 5000
app.listen(port,()=>{
console.log("Server Started on Port:" +port)
})
