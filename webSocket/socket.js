const WebSocket = require('ws');

module.exports = (server) => {
    const wss = new WebSocket.Server({server});
    console.log('소켓 연결 성공');

    wss.on('connection', (ws, req)=>{
        console.log("일단 출력");
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        console.log('새로운 클라이언트 접속', ip);
        wss.on('message', (message) => {
            console.log(message);
        });
        wss.on('error', (error)=>{
            console.error(error);
        });
        wss.on('close',()=>{
            console.log('클라이언트 접속 해제', ip);
            clearInterval(ws.interval);
        });
        const interval = setInterval(()=>{
            if (ws.readyState === ws.OPEN){
                ws.send('서버에서 클라이언트로 메세지 전송');
            }
        }, 3000);
        ws.interval = interval;
    });
};