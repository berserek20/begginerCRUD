const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const app = express()

const port = 3000
 app.use(bodyParser.urlencoded({ extended: false}))
 app.use(bodyParser.json)
 app.listen(port,()=>{
     console.log(`your website is successfully hosting at port http://localhost:${port}`)
 })
