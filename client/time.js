var socket = io.connect('http://localhost:4000');
var currentTime = Math.floor(new Date().getTime());


//Initial Socket connection, after connection, sends current time off to server
socket.on('connect', function() {
  // console.log('Client has connected to the server');
  socket.emit('clientTime', currentTime);
});

//Listens for event then appends response to page
socket.on('timeDifference', function(data) {
  // console.log('Received a message from the server', data);
  $('.time').append(Math.abs(data) + ' milliseconds');
});

socket.on('disconnect', function() {
  console.log('Client has disconnected');
});
