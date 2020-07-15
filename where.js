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

    //try writing your name from database as lowercase and uppercase
    // let sql2 = "SELECT * FROM INFO_CUSTOMERS WHERE Name = 'a_valid_name_from_your_DB'"; //mysql will identify even if you dont keep in mind about what is lowercase or uppercase but it is not the same with every database
   
    let sql = "SELECT * FROM INFO_CUSTOMERS WHERE name LIKE '%k'";//k% means every name starting with k like kane , kevin etc.
      con.query(sql , (err , result , fields) => {
             if(err) throw `${err}`;

                 console.log(result);

               });
            });
