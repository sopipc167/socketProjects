const express = require('express');
const path = require('path');
const nunjucks = require('nunjucks');

app=express();

const indexRouter = require('./routes/index');
const socket =  require('./socket');

app.set('port', process.env.PORT || 8080);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});

app.use('/',indexRouter);

const server = app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
});
socket(server)