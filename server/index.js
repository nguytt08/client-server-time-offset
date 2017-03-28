var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var moment = require('moment');
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '../client')));


var serverTime = function () {
  var currentTime = Math.floor((new Date()).getTime());
  console.log(currentTime);
}
app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

serverTime();

// var now = moment.;
// console.log('moment time is:', now);

io.on('connection', function(socket) {
  console.log('socket workinggggg');
  socket.on('clientTime', function(clientTime) {
    // console.log('client time is', clientTime);
    socket.emit('timeDifference', timeDifference(clientTime));

  })
});

// .then(socket.emit('timeDifference', timeDifference(clientTime));

var timeDifference = function(clientTime) {
  var serverTime = Math.floor((new Date()).getTime());
  let difference = clientTime - serverTime;
  console.log(difference);

  return difference;
}



console.log('App is listening on 4000');
server.listen(4000);
