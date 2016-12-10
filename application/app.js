var http = require("http");

var app = require("express")();

app.use("/",function(req,res){
  res.send("it works!");
});


// server config
var server = new http.createServer(app)
server.listen(8900, '0.0.0.0')
