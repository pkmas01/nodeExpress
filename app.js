var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    req.send('hello world');
});

app.listen(port, ()=>{
    console.log("running");
});
