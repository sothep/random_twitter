var express = require('express');
var path = require('path');
var adjectives = require('../data/adjectives.json');
var nouns = require('../data/nouns.json');

var app = express();
app.use(express.static(path.join(__dirname, './public')));

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, './public/views/index.html'));
});

app.get('/adjectives', function(request, response){
  response.send(adjectives);
});

app.get('/nouns', function(request, response){
  response.send(nouns);
});

var server = app.listen(3000, function(){
  var port = server.address().port;
  console.log('listening on port:', port);
});
