const mysql = require('mysql');
const { clear } = require('console');

//create connection
const con = mysql.createConnection({
    host:"localhost",
    user:"newuser",
    password:"india321",
    database:"db1"
});

let x = 'hello';
//connect to MySQL
con.connect(function(err){
    if (err){
        console.log(`error:${err}`);
    }
    console.log(x);
    let sql = "INSERT INTO INFO_CUSTOMERS (Name , Email) VALUES ?";
    let values = [
        ['aman','aman@gmail.com'],
        ['amaan','amaan@gmail.com'],
];
    con.query(sql , [values] , (err , result) => {
        if(err){
            console.log(`${err}`);
        }else{
            console.log('inserted records' + result.affectedRows);
        }
    });

});
