var socket = io.connect('http://localhost:4000');
var currentTime = Math.floor(new Date().getTime());


// socket.connect();

socket.on('connect', function() {
  console.log('Client has connected to the server');
  socket.emit('clientTime', currentTime);
});

socket.on('timeDifference', function(data) {
  console.log('Received a message from the server', data);
  $('.time').append(data + ' milliseconds');
});


socket.on('disconnect', function() {
  console.log('client has disconnected');
});

//Current time in milliseconds via Unix timestamp


// var currentTime = Date.now()
console.log(currentTime);