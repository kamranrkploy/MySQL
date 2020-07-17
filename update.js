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

     //for updating the existing data we can perform the following command using nodejs
        //  let sql = "UPDATE INFO_CUSTOMERS SET name = 'amaan abbasi' WHERE id = 6"; 

        //  con.query(sql , (err , result , fields) => 
            //  {
            //    if(err) throw `${err}`;
  
            //     //    console.log(result); 
  
            //      }); 
            
            let sql2 = "SELECT * FROM INFO_CUSTOMERS";
            
            con.query(sql2 , (err , result , fields) => 
                {
                  if(err) throw `${err}`;
     
                      console.log(result); 
     
                    });  
            
           });















