var main = require('http');
var Url = require('url');
var outp = require('fs');
app.set('port', (process.env.PORT || 5000));
	
main.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = Url.parse(req.url, true);
    if(q.pathname=='/tentuoi'){
    res.write(q.query.name);
    res.write('<br>');
    res.write(q.query.age);
    res.write('<br>');
    var ans = q.query.name + ' ' + q.query.age;
    outp.writeFile('information.txt', ans, function (err) {
    if (err) throw err;
    console.log('Saved!');
    });
    }
    else{
    res.write('<form action ="/tentuoi">');
    res.write('Name:<br> <input type = "text" name = "name"> <br>');
    res.write('Age:<br> <input type = "text" name = "age"> <br>');
    res.write('<input type = "submit" value = "sub">');
    res.write('</form>');
    }
    res.end();

}).listen(app.get('port'));
