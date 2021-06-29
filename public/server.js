const express = require('express')
const app = express()
const server = require('http').createServer(app)
const port = 3001
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})
const path = require('path')

app.use(express.static(path.join(__dirname + '/public')))

const names = [];

io.on('connection', socket => {
    
  socket.on('login', (name) => {

    if (names.includes(name)) {
      socket.emit('login', 'rejected'); 
      return;
    }

    
    console.log(name + ' connected');
    names.push(name);
    socket.emit('login', name);
  });
    
  socket.on('chat', ({name, text}) => {
      io.emit('chat', {name: name, text: text});
  });

  socket.on('disconnect', () => {
      console.log('disconnect');
  });
})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})