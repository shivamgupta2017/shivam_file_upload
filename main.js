var express = require('express');
var app = express();
var multer  = require('multer');
var formidable = require('formidable');
var path = require('path');



app.post('/file_upload' ,function(req, res)
{

//	res.header("Access-Control-Allow-Origin", "*");
//	var id = req.query;
//	res.send(id.name);
	var form = new formidable.IncomingForm();
	form.uploadDir= path.join(__dirname, '/uploads');
	form.parse(req, function (err, fields, files) 
	{
		console.log(files);
      res.write('File uploaded');
      res.end();
    });	



	








});
var server = app.listen(8081, function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('hot :'+host);
	console.log('port :'+port);
	

});


