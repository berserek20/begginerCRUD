const express = require('express')
const path = require('path')
const mysql= require('mysql')

const router = express.Router()

var mysqlConnection= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'your_current_password',
    database:'employeedb'
});
router.get('/employee/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employeedb WHERE EmpID = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
})

router.delete('/employee/delete/:id',(req,res)=>{
    console.log(req.body)
    res.send('i am a good boy')
    const emp = req.body;
    mysqlConnection.query('DELETE FROM employeedb WHERE EmpID = ?',[req.params.id],(err,rows,fields)=>{
        if(!err){
            console.log(rows);
            res.send(DELETED);
        }
        else{
            console.log(err);
        }
    })
})


router.post('/employee',(req,res)=>{
    console.log(req.body)
    res.send('i am a good boy')

    const emp = req.body;
    var sql = `INSERT INTO employeedb(EmpID,Name,EmpCode,Salary) VALUES(?,?,?,?) `;


        mysqlConnection.query(sql,[emp.EmpID,emp.Name,emp.EmpCode,emp.Salary],(err,rows,fields)=>{
            if(!err){
                console.log(rows);
                res.send(rows);
            }
            else{
            console.log(err);
            }
        })
    
})

router.put('/employee',(req,res)=>{
    console.log('hello')
    res.send('i am a good boy')

    const emp = req.body;
    var sql = `UPDATE employeedb SET Name=?,EmpCode=?,Salary=? WHERE EmpID=? `;


        mysqlConnection.query(sql,[emp.Name,emp.EmpCode,emp.Salary,emp.EmpID],(err,rows,fields)=>{
            if(!err){
                console.log(updated);
                res.send(rows);
            }
            else{
            console.log(err);
            }
        })
    
})
    
    


module.exports = router