var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  var name = require('url').parse(req.url, true).query.name;

  if(name === undefined) name = 'world';

  if(name == 'The_Godfather') {
    var file = 'The_Godfather.jpg';
    fs.stat(file, function(err, stat) {
      if(err) {
        console.log(err);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Sorry, The Godfather isn't around right now \n");
      } else {
        var img = fs.readFileSync(file);
        res.contentType = 'image/jpg';
        res.contentLength = stat.size;
        res.end(img, 'binary');
        }
      });
    } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello ' + name + '\n');
    }
}).listen(3000);


console.log('Server running at http://127.0.01:3000;');