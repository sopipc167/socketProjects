const socket = require('socket.io');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    });
}).listen(8006,()=>{
    console.log('this is running at port 8006');
});
var io = socket(server);

io.on('connection', (socket) => {
    console.log('접속중...');
    socket.on('msg',(data)=>{
        console.log('메세지 수신');
        io.sockets.emit('msg',data);
    });
});