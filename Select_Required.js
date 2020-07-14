const mysql = require('mysql');

//create connection
const con = mysql.createConnection({
    host:"localhost",
    user:"newuser",
    password:"india321",
    database:"db1"
});

let x = 'connected';
let i;
//connect to MySQL
con.connect( (err) => {
    if (err) throw `${err}`;
    console.log(x);

     //so for a huge data where you have million of rows. it is not a good idea to select all but rather properties that are required
    let sql = "SELECT id , Name FROM INFO_CUSTOMERS";// properties will be shown in sequence for example in our case first id and then Name.

      con.query(sql , (err , result , fields) => {
             if(err) throw `${err}`;
            // console.log(result); // this will return an array of objects 

           //so you can easily loop through the data using different loops. for now we have used for loop.
           for(i=0 ; i<result.length ; i++)
                    {  
                     console.log(result[i]);
                    }
               });
            });
