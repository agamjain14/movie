var express = require("express");
var app = express();
var request  = require("request");

app.get("/results", function(req, res){
    res.send("hello");
})

app.listen(process.env.PORT || 5000, process.env.IP, function(){
    console.log("movie app has started ");
} );