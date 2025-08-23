// Simple WebRTC signaling server using Node.js and Socket.IO
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname));

io.on('connection', socket => {
  socket.on('join', room => {
    socket.join(room);
    socket.to(room).emit('peer-joined');
  });

  socket.on('signal', ({ room, data }) => {
    socket.to(room).emit('signal', data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Signaling server running on port ${PORT}`);
});
