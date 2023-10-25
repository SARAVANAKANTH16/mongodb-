const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const router = express.Router();

router.get('/',(req,res,next)=>{
   // res.send('<h1>welcome page</h1>')
   //res.sendFile(path.join(__dirname,'../','view','shop.html'))
   res.sendFile(path.join(rootDir,'view','shop.html'))
})

module.exports = router;