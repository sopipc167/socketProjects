const express = require('express');
const path =require('path');
const app = express();

const indexRouter = require('./routes/index');

app.set('views',path.join(__dirname,'views'));

app.set('view engine','pug');

app.use('/',indexRouter);

const server = app.listen(5001, (req) => {
    console.log('서버 작동중');
});