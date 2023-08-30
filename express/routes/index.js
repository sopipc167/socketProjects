const express = require('express');
const router = express.Router();

router.get('/', (req,res, next) => {
    console.log('안녕하세요');
    res.render('index');
});

module.exports = router;