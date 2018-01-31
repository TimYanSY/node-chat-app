const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

<<<<<<< HEAD
io.on('connection', (socket) => {
  console.log('New user connected');
  socket.on('disconnect', (reason) => {
    console.log('user disconnect');
  });
})

server.listen(port, () => {
=======
app.listen(port, () => {
>>>>>>> 7a75d8e15979f136b32a5ecb7b9af11f2b0a2b2e
  console.log(`You are listen to ${port}`)
});
