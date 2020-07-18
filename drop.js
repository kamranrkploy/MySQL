const mysql = require('mysql');

//create connection
const con = mysql.createConnection({
    host:"localhost",
    user:"newuser",
    password:"india321",
    database:"db1"
});

let x = 'connected';

//connect to MySQL
 con.connect( (err) => {
     if (err) throw `${err}`;
     console.log(x);

     //now this command will delet the entire table permanently and you won't get it back ever again.
                
     let sql = "DROP TABLE IF EXISTS INFO_CUSTOMERS"; // you can use the used command without 'IF EXISTS' but that ll giv you an error if the table you want to drop does not exists.

            con.query(sql , (err , result , fields) => {
                 if(err) throw `${err}`;
                 console.log(result);
                });
           });















