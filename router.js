var express = require('express');
var path = require('path');
var routes = require('./routes');

var app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Request-With, Content-Type, Aceept");
    next();
})

app.use(routes);

app.listen(3000, function(){
    console.log("Listening on port 3000!");
});

module.exports = app;
