const express = require('express');
const router = express.Router();
console.log('렌더링 함수에 접근');
router.get('/',(req,res) => {
    console.log("렌더링중");
    res.render('index.pug');
});

module.exports = router;