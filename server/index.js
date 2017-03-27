var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '../client')));

// app.get('/', function(req, res) {
//   res.sendFile(path.resolve(__dirname + '/../client/index.html'));
// });


console.log('App is listening on 4000');
app.listen(4000);
