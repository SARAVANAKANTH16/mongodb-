const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path')


router.use(bodyParser.urlencoded())

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'view','add-product.html'));

})
router.post('/add-product',(req,res,next)=>{
    
    console.log('Form data:',req.body);
    res.send('<b>Product submitted</b>')
})


//for style problem we use (it must place at bottom)
//app.use(express.static(path.join(__dirname,'public')))
module.exports = router;
