const { text } = require('express');
const socketIO = require('socket.io');

module.exports = (server) => {
    const io = socketIO(server,{path:'/socket.io'});
    io.on('connection',(socket)=>{
        console.log('환경설정중...');
        var req= socket.request;
        const ip = req.headers['x-forewarded-for'] || req.connection.remoteAddress;
        console.log('새로운 클라이언트 접속',ip, socket.id, req.id);
        socket.on('disconnect', () => {
            console.log('클라이언트 접속 해제',ip, socket.id);
        });
        socket.on('error',(error) => {
            console.error(error);
        });
        socket.on('reply', (data)=> {
            console.log(data);
        });
        /*
        socket.interval = setInterval(()=>{
            socket.emit('news','Hello');
        },3000);
        */
        socket.on('msg',(text)=>{
            console.log('이벤트 수신성공',text);
            io.emit('msg', text);
        });
    });
}