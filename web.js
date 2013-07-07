var express = require('express');
var fs = require('fs')

var app = express.createServer(express.logger());
var buffer = new Buffer(256);
buffer = fs.readFileSync('index.html');
//console.log(free);
//buffer.write(free,'');
var outp = buffer.toString('utf-8',0,100)
console.log(outp)
app.get('/', function(request, response) {
  response.send(outp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
