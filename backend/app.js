const express = require('express');
const app=express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser({extended:true}));
app.use(cors());

app.listen(5000,()=>{
    console.log("Server started at port 5000");
})

