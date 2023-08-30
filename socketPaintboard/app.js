const socketio = require('socket.io');
const express = require('express');
const http = require('http');
const ejs = require('ejs');
const fs = require('fs');

const app = express();
//app.use(app.router);
app.use(express.static('public'));

var server = http.createServer(app);

var roomlist = [];
server.listen(8005,()=>{
    console.log('server running...');
})

var io = socketio(server);
//io.set('log level',2);

app.get('/',(req,res)=>{
    fs.readFile('lobby.html', function(error,data){
        res.send(data.toString());
    });
});

app.get('/canvas/:room', (req,res)=>{
    fs.readFile('canvas.html','utf-8', (err,data)=>{
        res.send(ejs.render(data,{
            room: req.param('room')
        }));
    });
});

app.get('/room',(req,res)=>{
    res.send(JSON.stringify(roomlist));
    console.log(JSON.stringify(roomlist));
});

io.on('connection',(socket)=>{
    
    socket.on('join',(data) => {
        socket.join(data);
        socket.room = data;
    });
    socket.on('draw', function (data) {
        io.sockets.in(socket.room).emit('line', data);
    });
    socket.on('create_room',(data)=>{
        io.sockets.emit('create_room',data.toString());
        roomlist.push(data.toString());
        console.log("방목록은:"+roomlist);
    })
});

