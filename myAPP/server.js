var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
  sampleconfig="configmap value";
  samplesecret="secret value";
    data= " I am configmap value :" + sampleconfig +" I M  secret value:" + samplesecret +" , Secret value name " + process.env.sridhar + " , Secret value lname " + process.env.kidambi+ " , secret password is:"+ process.env.SECRET_PWD;
   res.send(data);
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//    });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})