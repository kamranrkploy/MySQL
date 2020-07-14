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

    let sql = "INSERT INTO INFO_CUSTOMERS (Name , Email) VALUES ('miya' , 'miya@gmail.com')";

    con.query(sql , (err , result ) => {
             if(err) throw `${err}`;
            console.log(result);
        
    });
});
