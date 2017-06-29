var express = require('express')
var app = express()
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/form.html'));
})

app.post('/ask', function (req, res) {
  //console.log(req.param);
  var a1 = (req.body.answer_1 === 'on');
  var a2 = (req.body.answer_2 === 'on');
  var a3 = (req.body.answer_3 === 'on');
  var a4 = (req.body.answer_4 === 'on');
  if( (a1 + a2 + a3 + a4) === 0 ) res.redirect('/invalid');
  else if( (a1 + a2 + a3 + a4) > 1 ) res.redirect('./invalid');
  else{
  	var id = '0';
	if(a1 === 1) id = '1';
        else if(a2 == 1) id = '2';
        else if(a3 == 1) id = '3';
        else id = '4';
        res.sendFile(path.join(__dirname + '/data/' + id + '.txt'));
  }
})

app.get('/invalid', function(req , res) {
   res.sendFile(path.join(__dirname + '/invalid.html'));
})

app.listen((process.env.PORT || 5000), function () {
  console.log('Listening');
})
