// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Set up body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up static files
app.use(express.static('public'));

// Set up view engine
app.set('view engine', 'ejs');

// Set up port
app.listen(3000);

// Set up routes
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/comments', function(req, res) {
  var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
  res.json(comments);
});

app.post('/comments', function(req, res) {
  var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));
  comments.push(req.body);
  fs.writeFileSync('comments.json', JSON.stringify(comments));
  res.json(comments);
});// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// If the file is not found, send a 404 status code and a message to the client.
// Use the createServer method from the http module to create the server.
// Use the fs module to read the file.
// Use the res object to send the file to the client.
// Use the listen method to listen on port 3000.
// If the file is not found, send a 404 status code and a message to the client.


