var express = require('express');
var app =express();

app.get("/getContent",function(req,res){
    res.status(200).send("hi");
});
var server = app.listen(port =8081,function(){
    var host = 'localhost';
    console.log("Example app listning at http//%s:%s",host,port);
});