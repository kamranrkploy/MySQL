const mysql = require('mysql');

//create connection
const con = mysql.createConnection({
    host:"localhost",
    user:"newuser",
    password:"india321",
    database:"db1"
});

let x = 'hello';
//connect to MySQL
con.connect( (err) => {
    if (err) throw `${err}`;
    console.log(x);

    let sql = "INSERT INTO INFO_CUSTOMERS (Name , Email) VALUES ?"; //here in place of '?' values are taken from array values
     let values = [
                     ['aman','aman@gmail.com'],
                     ['amaan','amaan@gmail.com'],
                  ];

    con.query(sql , [values] , (err , result ) => {
             if(err) throw `${err}`;
            console.log('inserted records ' + result.affectedRows);
        
    });
});
