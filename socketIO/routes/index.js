const express = require('express');
const Router = express.Router();

Router.get('/',(req,res)=>{
    console.log('렌더링중');
    res.render('index');
});

module.exports = Router;