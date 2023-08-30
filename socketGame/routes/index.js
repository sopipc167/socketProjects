const express = require('express');
const Router = express.Router();

Router.get('/',(req,res)=>{
    console.log('렌더링중');
    res.render('index');
});
Router.post('/',(req,res)=>{
    console.log('submit 이벤트 발생');
    req.app.get('io').emit('chat',chat);
});

module.exports = Router;