const SocketIO = require('socket.io');

module.exports = (server) => {
    const io = SocketIO(server, { path: '/socket.io' });

    console.log('접속 완료');
    io.on('connection', (socket)=>{
        console.log('환경설정중');
        const req = socket.request;
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
        socket.interval = setInterval(()=>{
            socket.emit('news','Hello');
        },3000);
    });
};
