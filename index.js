const { json } = require('express/lib/response');
const mysql= require('mysql')
const express = require('express')
const bodyParser = require('body-parser')
const port = 3000
const app = express()
var mysqlConnection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'your_current_password',
    database:'employeedb'
});
mysqlConnection.connect((err)=>{
    if(!err){
        console.log('DB connection succeded');
    }
    else{
        console.log('DB connection failed \n error:'+JSON.stringify(err,undefined,2));
    }
})
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
 
 app.use('/',require('./routes/router'))


 app.listen(port,()=>{
     console.log(`your website is successfully hosting at port http://localhost:${port}`)
 })

