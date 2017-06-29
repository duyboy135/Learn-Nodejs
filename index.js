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
  var _req = req.body.question;
  if(_req == "1") res.send('Dang Quang Vinh'); 
  else res.send('Bac Ho Vi Dai');
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
