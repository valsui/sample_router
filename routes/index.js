var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var connection = mysql.createConnection({
    host: 'nasa.atac.com',
    port:'3306',
    user:'atac',
    password:'ATAC',
    database:'nasa1'
});

connection.connect();

router.get('/test', function(req,res){

    console.log("GET:Test");

    //connection.query(varA, varB);

    connection.query("SELECT * FROM nasa1.summary WHERE ymd = 20160716",

        function(err, rows, fields){
            if(err) console.log(err);
            res.send(rows);
        }
    );


})

module.exports = router;