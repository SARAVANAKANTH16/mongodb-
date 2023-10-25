const http = require('http')
const express = require('express')
const app =  express();//it act as function it gives object
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin')
const shop = require('./routes/shop')
const path = require('path')

app.use('/admin',adminRoutes);
app.use(shop);
 //app.use(bodyParser.urlencoded({extended:false}))// we use extended bec body parser is using Query string so that we can use or not by true ir false
app.use(bodyParser.urlencoded())

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'view','404.html'));
    //.send("<h1>404 page not found</h1>")
})
/*app.get('/',(req,res,next)=>{
    console.log('Always works')
    next();
})*/

app.listen(3000);
/*app.use('/second',(req,res,next)=>{
    res.send("<h1>secondpage</h1>");
})
app.use('/third',(req,res,next)=>{
    res.send("<h1>thirdpage</h1>");
})*/
/*app.get('/add-product',(req,res,next)=>{
    res.send('<h1>Add product</h1><form action="/store-product" method="POST"><input type ="text" name="title"/><input type="submit" value="submit"/></form>')
})
app.post('/store-product',(req,res,next)=>{
    
    console.log('Form data:',req.body);
    res.send('<b>Product submitted</b>')
})
app.listen(3000);
/*app.use((req,res,next)=>{
    console.log("middleware3");
    res.send('<h1>Hello from express first page</h1>')
    //res.send({"some":"hi"});
})
app.listen(3000);
//const server = http.createServer(app);
//server.listen(3000);
//express that contains middleware it will pass all request to middleware
//like all url requests handlded in this single block but code looks complex in node.js

*/
