const express = require('express');
const app = express();
const path = require('path');
const nunjucks = require('nunjucks');

const indexRouter =require('./routes/index');
const socket = require('./socket');
const exp = require('constants');

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});

app.set('port', process.env.PORT || 8006);

app.use('/',indexRouter);

const server = app.listen(app.get('port'), () =>{
    console.log(app.get('port'), '번 포트에서 대기중');
});
socket(server);
module.exports = app;