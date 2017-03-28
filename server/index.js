var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '../client')));


app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});


//Once connection is established, will listen for clientTime event and then emit the result of timeDifference function call
io.on('connection', function(socket) {
  socket.on('clientTime', function(clientTime) {
    socket.emit('timeDifference', timeDifference(clientTime));
  });
});

//Simple difference calculator
var timeDifference = function(clientTime) {
  let serverTime = Math.floor((new Date()).getTime());
  let difference = clientTime - serverTime;
  return difference;
}

var port = process.env.PORT || 4000
console.log('App is listening on', port);
server.listen(port);
