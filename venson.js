var express = require('express');
var venson =express();


venson.get('/', function(req,res){
     res.send('hello world!');	
});

var server = venson.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('This is My Express test at http://%s:%s', host, port);
});
