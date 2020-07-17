//you can skip this file as i have done this stuff just for fun
//if you like to go through this file , you are most welcome

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

 let sql = "SELECT * FROM INFO_CUSTOMERS LIMIT 2"; //return first two records
 let sql2 = "SELECT * FROM INFO_CUSTOMERS ORDER BY id DESC LIMIT 2"; //return first two records in descending order w.r.t id's

            con.query(sql , (err , result , fields) => {
                 if(err) throw `${err}`;
                 console.log(result);
                });

                con.query(sql2 , (err , result , fields) => {
                    if(err) throw `${err}`;
                    console.log(result);
                   });
            
           });















