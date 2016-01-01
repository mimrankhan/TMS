/// <reference path='../typings/tsd.d.ts' />
import express = require('express');
import path = require('path');

import bodyParser = require('body-parser');
import mongoose = require('mongoose');

var app : express.Express = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/../public')));
//
// var schema = new mongoose.Schema({
//     name:String
// });
// mongoose.connect('mongodb://localhost/todos');
// var todoModel = mongoose.model('tasks', schema);

// var tosave = todoModel({name:"taha"});
// tosave.save((err, data)=>{
//     if(err){
//         console.log('nothig to save');
//     }
    
// });

var x=0;
app.get('/', (req, res)=>{
    // res.render('index');
    x++;
    res.send('hello'+x);
});

var port: number = process.env.PORT || 3000;
var server = app.listen(port, () => {
	var listeningPort: number = server.address().port;
	console.log('The server is listening on port: ' + listeningPort);
});