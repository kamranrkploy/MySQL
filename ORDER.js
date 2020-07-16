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

         let sql = `SELECT * FROM INFO_CUSTOMERS ORDER BY NAME`; // By default it is in ascending order. for descending order we just use 'DESC' or 'desc' in the end.

          con.query(sql,(err , result , fields) => 
          {
             if(err) throw `${err}`;

                //  console.log(result);

               });  

               //you can even select Names order by id or select id order by Names and it ll perfectly work

               //though we have initiaze the existing sql variable with new sql command but it will be good to use new variable like sql2.
               
               sql = `SELECT id FROM INFO_CUSTOMERS ORDER BY NAME`; // so here id that has a name starting with alphabet 'a' is shown first and so on. <//------//>
               con.query(sql,(err , result , fields) => 
               {
                  if(err) throw `${err}`;
     
                      console.log(result);
     
                    });  
                });















