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
  var id = req.body.option;
  res.sendFile(path.join(__dirname + '/data/' + id + '.txt'));
})

app.get('/invalid', function(req , res) {
   res.sendFile(path.join(__dirname + '/invalid.html'));
})

app.listen((process.env.PORT || 5000), function () {
  console.log('Listening');
})
