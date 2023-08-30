const socketio = require('socket.io');
const express = require('express');
const http = require('http');
const ejs = require('ejs');
const fs = require('fs');

const app = express();
app.use(app.router);
app.use(express.static('public'));

var server = http.createServer(app);
server.listen(8005,()=>{
    console.log('server running...');
})

var io = socketio.listen(server);
io.set('log level',2);

app.get('/',(req,res)=>{
    fs.readFile('lobby.html', function(error,data){
        express.response.send(data.toString());
    });
});

app.get('/canvas/:room', (req,res)=>{
    fs.readFile('canvas.html','utf-8', (err,data)=>{
        express.response.send(ejs.render(data,{
            room: req.param('room')
        }));
    });
});

app.get('/room',(req,res)=>{
    express.response.send(io.sockets.manager.rooms);
});

io.sockets.on('connection',(socket)=>{
    socket.on('join',(data) => {
        socket.join(data);
        socket.set('room',data);
    });
});
socket.on('create_room',(data)=>{
    io.sockets.emit('create_room',data.toString());
})