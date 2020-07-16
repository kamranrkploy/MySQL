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

     //try the belo code without the WHERE id = 2 AND id = 5 and see what happens...? oh , don't even think of doing that as it ll delete the entire table from your database.
         let sql = "DELETE FROM INFO_CUSTOMERS WHERE id = 2 OR id = 5"; 
          con.query(sql,(err , result , fields) => 
           {
             if(err) throw `${err}`;

                 console.log(result); //can you guess what will consoling the result here give us now....?

               });  

               let sql2 = "SELECT * FROM INFO_CUSTOMERS";

               con.query(sql2 ,(err , result , fields) => 
                {
                  if(err) throw `${err}`;
     
                      console.log(result); 
     
                    });  
            
           });















